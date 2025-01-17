"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", formData);
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-normal text-cyan-400">
              Blue Line Inventory
            </h2>
            <h3 className="text-2xl font-normal text-cyan-400">
              Management Suite
            </h3>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="mt-1"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500"
              >
                SIGN IN
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => console.log("Sign up clicked")}
              >
                SIGN UP
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © Glassoff LLC
        </div>
      </div>

      {/* Right side - Decorative Image */}
      <div
        className="hidden lg:block flex-1 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DPnCNCyn6jRDS6XzSscvLYaLKvVCmc.png')`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
