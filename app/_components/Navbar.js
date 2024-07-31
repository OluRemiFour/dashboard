"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center p-6 bg-gray-800 shadow-md z-40">
      <div className="flex items-center"></div>
      <div className="flex gap-20 ">
        {!user ? (
          <SignInButton className="py-2 px-3 bg-blue-600 text-white rounded-md" />
        ) : (
          <div className="flex gap-20">
            <p className="text-white">
              Welcome, - {user.primaryEmailAddress.emailAddress}
            </p>
            <SignOutButton className="py-1 px-3 bg-blue-600 text-white rounded-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
