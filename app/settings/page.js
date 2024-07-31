"use client";
import React from "react";
import SignInPrompt from "../_components/SignInPrompt";
import { useUser } from "@clerk/nextjs";

function page() {
  const { user } = useUser();
  return <div>{user ? <div>Settings Page</div> : <SignInPrompt />}</div>;
}

export default page;
