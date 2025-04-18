import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

import DefaultLayout from "@/layouts/default.tsx";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";

import { Logo } from "@/components/Icons.tsx";

export default function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [auth.isAuthenticated, navigate]);

  // Simulated phone and password login
  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Simulated login with:", { phone, password });
  };

  // Simulated QR code URL
  const qrCodeUrl =
    "https://api.qr-code-generator.com/v1/create?data=https%3A%2F%2Fexample.com%2Fauth%2Fqr-login%2Fsession-12345&size=150x150";

  if (auth.isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (auth.error) {
    return (
      <div className="text-center text-red-500">
        Error: {auth.error.message}
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return null; // useEffect will handle redirect
  }

  return (
    <DefaultLayout>
      <section className="h-full flex flex-col items-center justify-center p-4 gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Spactrum
          </h1>
        </div>
        <Card className="w-full max-w-md rounded-lg">
          <CardHeader className="flex flex-col items-center pt-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
              Welcome back
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Login with your phone or Google account
            </p>
          </CardHeader>
          <CardBody className="px-6 py-4">
            {!showQR ? (
              <>
                {/* Phone and Password Form */}
                <form onSubmit={handlePhoneLogin} className="space-y-4">
                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    isRequired
                    className="w-full border-gray-300 dark:border-gray-600"
                  />
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isRequired
                    className="w-full border-gray-300 dark:border-gray-600"
                  />
                  <Button
                    className="w-full"
                    type="submit"
                    color="primary"
                    isDisabled={!phone || !password}
                  >
                    Login
                  </Button>
                </form>
                <div className="text-center mt-4">
                  <button
                    onClick={() => setShowQR(true)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Login with QR code instead
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* QR Code Login */}
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Scan the QR code to login
                  </p>
                  <img src={qrCodeUrl} alt="QR Code" className="mx-auto" />
                  <button
                    onClick={() => setShowQR(false)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-4"
                  >
                    Back to phone login
                  </button>
                </div>
              </>
            )}

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>

            {/* Google Login */}
            <Button variant="bordered" onPress={() => auth.signinPopup()}>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.564,9.505-11.622H12.545z"
                />
              </svg>
              Login with Google
            </Button>
          </CardBody>
          <CardFooter className="px-6 pb-6">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 w-full">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </section>
    </DefaultLayout>
  );
}
