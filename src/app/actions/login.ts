"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AUTH_COOKIE,
  authCookieOptions,
  createAuthToken,
  isPasswordConfigured,
  verifyPassword,
} from "@/lib/auth";

export type LoginState = {
  error?: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");

  if (!isPasswordConfigured()) {
    return {
      error:
        "認証設定が未完了です。管理者にお問い合わせください。",
    };
  }

  if (!verifyPassword(password)) {
    return {
      error: "パスワードが違います。もう一度ご確認ください。",
    };
  }

  const token = createAuthToken();
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, token, authCookieOptions());
  redirect("/");
}
