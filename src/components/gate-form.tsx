"use client";

import { useActionState } from "react";
import { Lock } from "lucide-react";
import { loginAction, type LoginState } from "@/app/actions/login";
import { Button } from "@/components/ui/button";

const initialState: LoginState = {};

export function GateForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <label className="block text-left">
        <span className="mb-2 block text-xs font-extrabold tracking-wide text-hilton-deep">
          パスワード
        </span>
        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            className="h-12 w-full rounded-full border-2 border-hilton/20 bg-white pl-11 pr-4 text-sm font-medium text-foreground outline-none transition focus:border-hilton focus:ring-2 focus:ring-hilton/20"
            placeholder="共有されたパスワード"
          />
        </div>
      </label>

      {state?.error ? (
        <p className="rounded-2xl bg-gold-muted px-4 py-3 text-sm font-bold text-gold" role="alert">
          {state.error}
        </p>
      ) : null}

      <Button type="submit" variant="gold" className="h-12 w-full" disabled={pending}>
        {pending ? "確認中..." : "しおりを見る"}
      </Button>
    </form>
  );
}
