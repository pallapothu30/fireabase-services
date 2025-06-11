import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const SignInPage = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Sign In Success!"))
      .catch((error) => {
        alert(`Error (${error.code}): ${error.message}`);
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">Sign In</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={SignInUser}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInPage;