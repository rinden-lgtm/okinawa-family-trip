import { createHmac, timingSafeEqual } from "crypto";

export const AUTH_COOKIE = "trip_site_session";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getPassword(): string | undefined {
  const value = process.env.TRIP_SITE_PASSWORD;
  return value && value.length > 0 ? value : undefined;
}

export function isPasswordConfigured(): boolean {
  return Boolean(getPassword());
}

export function verifyPassword(input: string): boolean {
  const expected = getPassword();
  if (!expected || !input) return false;

  const a = Buffer.from(input, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) {
    timingSafeEqual(a, a);
    return false;
  }
  return timingSafeEqual(a, b);
}

export function createAuthToken(): string {
  const secret = getPassword();
  if (!secret) {
    throw new Error("TRIP_SITE_PASSWORD is not configured");
  }
  const expires = Date.now() + COOKIE_MAX_AGE * 1000;
  const payload = `v1.${expires}`;
  const sig = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyAuthToken(token: string | undefined): boolean {
  try {
    const secret = getPassword();
    if (!secret || !token) return false;

    const parts = token.split(".");
    if (parts.length !== 3) return false;

    const [version, expStr, sig] = parts;
    if (version !== "v1") return false;

    const payload = `${version}.${expStr}`;
    const expected = createHmac("sha256", secret)
      .update(payload)
      .digest("base64url");

    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

    const expires = Number(expStr);
    if (!Number.isFinite(expires) || Date.now() > expires) return false;

    return true;
  } catch {
    return false;
  }
}

export function authCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  };
}
