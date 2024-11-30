"use client";
import React from "react";
import style from "../(styles)/loginWithGoogleBtn.module.scss";
import { signIn } from "next-auth/react";
function SignInWithGoogle() {
  const handleClick = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <button className={style.googleLoginButton} onClick={handleClick}>
      Sign in with Google
    </button>
  );
}

export default SignInWithGoogle;
