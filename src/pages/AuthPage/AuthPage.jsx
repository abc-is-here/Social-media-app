import React from 'react';

const AuthPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center px-4">
      <div className="w-full max-w-md flex flex-col md:flex-row shadow-lg">
        <div className="hidden md:block w-1/2 bg-gray-200">
          <img src='./auth.jpg' alt='Authentication' className="object-cover h-full w-full"/>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-4 text-center">Synapse</h1>
          <p className="text-center mb-8">Welcome to Synapse, Use your email or another service to continue with Synapse</p>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100">
              <img src="https://img.icons8.com/color/30/google-logo.png" alt="Google Logo" className="mr-2"/>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100">
              <img src="https://img.icons8.com/ios-filled/30/apple-logo.png" alt="Apple Logo" className="mr-2"/>
              Continue with Apple
            </button>
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100">
              <img src="https://img.icons8.com/color/30/discord-logo.png" alt="Discord Logo" className="mr-2"/>
              Continue with Discord
            </button>
          </div>
          <p className="text-xs text-center text-gray-500 mt-8">
            By continuing, you agree to Canva's <a href="#" className="underline">Terms of Use</a>. Read our <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
