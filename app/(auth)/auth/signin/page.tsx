"use client";

import { FormInput } from "@/components/form/form-input";
import { AppText } from "@/components/shared/app-text";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginFormValues } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useLogin } from "./_hooks/use-login";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const { login, isLoggingIn } = useLogin({ callbackUrl, onSuccess: () => reset() });

  return (
    <Reveal onLoad>
      <AppText type="h2">Welcome back</AppText>
      <AppText type="subtitle" className="mt-1.5 text-sm">
        Sign in to the Elevra admin dashboard.
      </AppText>

      <form onSubmit={handleSubmit(data => login(data))} className="mt-8 space-y-5">
        <FormInput<LoginFormValues> control={control} name="email" errors={errors} label="Email" type="email" icon={Mail} placeholder="you@example.com" autoComplete="email" />
        <FormInput<LoginFormValues> control={control} name="password" errors={errors} label="Password" type="password" icon={Lock} placeholder="Your password" autoComplete="current-password" />

        <Button type="submit" className="h-11 w-full" disabled={isLoggingIn}>
          {isLoggingIn && <Loader2 className="animate-spin" />}
          Sign in
        </Button>
      </form>

      <p className="mt-8 text-sm text-foreground-muted">
        Looking for the app?{" "}
        <Link href="/#download" className="font-medium text-brand hover:underline">
          Elevra is on your phone
        </Link>
      </p>
    </Reveal>
  );
}
