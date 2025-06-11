import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="flex flex-col items-center mb-6">
          {/* <img src={logo} alt="Logo" className="w-16 h-16 mb-2" /> */}
          <h1 className="text-2xl font-bold text-blue-700">BookStore</h1>
        </div>
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
          {showSignIn ? <SignInPage /> : <SignUpPage />}
          <div className="mt-6 text-center">
            {showSignIn ? (
              <p>
                Don&apos;t have an account?{" "}
                <button
                  className="text-blue-600 underline font-semibold"
                  onClick={() => setShowSignIn(false)}
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  className="text-blue-600 underline font-semibold"
                  onClick={() => setShowSignIn(true)}
                >
                  Sign In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="flex flex-col items-center mb-6">
        {/* <img src={logo} alt="Logo" className="w-16 h-16 mb-2" /> */}
        <h1 className="text-2xl font-bold text-blue-700">BookStore</h1>
      </div>
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome, <span className="text-blue-600">{user.email || user.displayName}</span>!
        </h2>
        <button
          onClick={() => signOut(auth)}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition font-semibold"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default App;