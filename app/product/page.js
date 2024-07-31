"use client";
import React from "react";
import SignInPrompt from "../_components/SignInPrompt";
import { useUser } from "@clerk/nextjs";

function Page() {
  const { user } = useUser();
  return <div>{user ? <div>Product Page</div> : <SignInPrompt />}</div>;
}

export default Page;
