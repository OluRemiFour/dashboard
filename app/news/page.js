"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import SignInPrompt from "../_components/SignInPrompt";

function Page() {
  const { user } = useUser();
  return <div>{user ? <div>News Page</div> : <SignInPrompt />}</div>;
}

export default Page;
