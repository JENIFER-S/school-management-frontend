import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface LoginProps {
  onLoginSuccess?: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState("Admin");
  const [email, setEmail] = useState("admin@school.com");
  const [password, setPassword] = useState("password123");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f4f9] flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* Left Side: Student Image with Text Overlay */}
        <div className="md:w-1/2 relative min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#154660]">
          <img
            src="/student-login.png"
            alt="Students Record Management System"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25"></div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md">
              Students Record Management System
            </h1>
            <p className="text-blue-100 text-sm md:text-base italic mt-3 drop-shadow">
              It's never too late to study
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 rounded-full bg-blue-50 text-[#253275] flex items-center justify-center mb-2 shadow-sm">
              <svg
                className="w-8 h-8 text-[#2a3c82]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-xs text-gray-500 mt-1">Login to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto w-full">
            {/* Select User Dropdown */}
            <div>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="w-full px-4 py-2.5 text-xs border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-800 text-gray-700 shadow-sm"
              >
                <option value="Admin">Admin</option>
                <option value="Faculty">Faculty</option>
                <option value="Student">Student</option>
              </select>
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 text-xs border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-800 text-gray-700 shadow-sm"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 text-xs border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-800 text-gray-700 shadow-sm pr-9"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Show Password */}
            <div className="flex items-center text-[12px] text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="rounded border-gray-300 text-blue-900 focus:ring-blue-900 w-3.5 h-3.5"
                />
                Show password
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-[#253275] text-white rounded-md font-medium text-xs hover:bg-[#1c265a] transition-all shadow-md cursor-pointer mt-2"
            >
              Login
            </button>

            <p className="text-[11px] text-gray-400 text-center mt-3">
              by logging in, you agree to our privacy statements.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}