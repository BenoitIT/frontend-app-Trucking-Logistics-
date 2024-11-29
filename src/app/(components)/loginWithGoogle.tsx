"use client";
import React from "react";
import style from "../(styles)/loginWithGoogleBtn.module.scss";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
function SignInWithGoogle() {
  const router = useRouter();
  const handleClick = async () => {
    const response = await signIn("google", { callbackUrl: "/dashboard" });
    if (response && !response.error) {
      router.push("/dashboard");
    }
  };
  return (
    <button className={style.googleLoginButton} onClick={handleClick}>
      Sign in with Google
    </button>
  );
}

export default SignInWithGoogle;
