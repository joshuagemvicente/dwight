"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-4 py-8">
      <div className="text-xl font-semibold">
        <Link href="/">MyLogo</Link>
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-400">404</h1>
        <p className="text-5xl font-bold text-gray-600">Is it friday today?</p>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-500 mt-2">
            We're sorry, this wasn't supposed to happen.
          </span>
          <span className="text-lg font-bold text-gray-500">
            Try going{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => history.back()}
            >
              back
            </span>{" "}
            or going{" "}
            <Link href="/">
              <span className="underline">home</span>
            </Link>
            .
          </span>
        </div>
      </div>

      <div className="text-sm text-gray-400">
        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}. All
        rights reserved.
      </div>
    </div>
  );
}
