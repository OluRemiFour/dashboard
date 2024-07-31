import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="flex justify-center my-35 items-center ">
      <SignIn routing="hash" />
    </div>
  );
}

export default page;
