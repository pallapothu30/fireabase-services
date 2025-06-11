import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase";

const SignUpPage = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("✅ Account created successfully!"))
      .catch((error) => {
        alert(`❌ (${error.code}): ${error.message}`);
      });
  };

  const SignUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => alert("✅ Signed in with Google!"))
      .catch((error) => {
        alert(`❌ (${error.code}): ${error.message}`);
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={CreateUser}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
      >
        Sign Up
      </button>
      <div className="mt-4 text-center">
        <button
          onClick={SignUpWithGoogle}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;