import { SignInButton } from "@clerk/nextjs";

const SignInPrompt = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <div className="max-w-md w-full text-center bg-white rounded-lg shadow-lg p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Welcome to DashStack!</h1>
        <p className="text-lg mb-6">
          Please sign in to access your dashboard and manage your account.
        </p>
        <SignInButton mode="modal">
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg transition-colors">
            Sign In
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignInPrompt;
