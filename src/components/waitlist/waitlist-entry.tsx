"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/ui/custom-button";
import { joinWaitlist, type WaitlistResult } from "@/lib/actions/waitlist";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  joinWaitlistSchema,
  type JoinWaitlistDTO,
} from "@/utils/validations/waitlist";
import { toast } from "sonner";
import { Socials } from "../shared/socials";

export function WaitlistEntry() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    getValues,
  } = useForm<JoinWaitlistDTO>({
    resolver: zodResolver(joinWaitlistSchema),
  });

  const handleJoinWaitlist = async (data: JoinWaitlistDTO) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);

      const result = await joinWaitlist(formData);
      if (result.success && result.position) {
        toast.success(result.message || "Successfully joined the waitlist!");
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top-left logo */}
      <div className="absolute top-6 left-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center">
            <span className="text-white text-sm font-bold">✦</span>
          </div>
          <span className="text-lg font-bold text-black">Logo</span>
        </div>
      </div>

      {/* Split layout */}
      <div className="flex min-h-screen">
        {/* Left side - Form content */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="w-full max-w-md">
            {/* Launch date */}
            <div className="mb-4">
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                LAUNCHING NOV 24TH, 2025
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Unlock the next big idea.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Explore vaults, earn credits, and uncover the next big idea by top
              founders.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit(handleJoinWaitlist)}
              className="space-y-4"
            >
              <div className="flex gap-3">
                <Input
                  {...register("email")}
                  placeholder="name@domain.com"
                  className="flex-1 h-12 text-base border-gray-300 focus:border-black"
                  aria-label="Email address"
                />
                <CustomButton
                  type="submit"
                  variant="white"
                  loading={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join now"}
                </CustomButton>
              </div>
              {errors.email && (
                <p className=" block text-red-400 text-sm">
                  {errors.email.message}
                </p>
              )}
            </form>

            {/* Social proof */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                  >
                    <div className="h-4 w-4 rounded-full bg-gray-400"></div>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                1,643+ data analysts have already joined
              </span>
            </div>

            {/* Footer */}
            <div className="mt-12 text-xs text-gray-400">
              <p>
                @ {new Date().getFullYear()} - Papertrail | All rights reserved.
              </p>
            </div>
            <Socials />
          </div>
        </div>

        {/* Right side - Vector illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-50">
          <div className="w-full h-full flex items-center justify-center p-8">
            {/* Vector illustration placeholder - you can replace this with an actual SVG */}
            <div className="w-full max-w-md">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Person figure */}
                <circle cx="200" cy="150" r="30" fill="black" />
                <rect x="185" y="180" width="30" height="60" fill="black" />
                <rect x="170" y="200" width="20" height="40" fill="black" />
                <rect x="210" y="200" width="20" height="40" fill="black" />

                {/* Laptop */}
                <rect
                  x="160"
                  y="240"
                  width="80"
                  height="40"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <rect x="170" y="250" width="60" height="20" fill="black" />

                {/* Data visualization screens */}
                <rect
                  x="80"
                  y="80"
                  width="60"
                  height="40"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <rect x="90" y="90" width="40" height="20" fill="black" />

                <rect
                  x="280"
                  y="100"
                  width="50"
                  height="50"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <circle cx="305" cy="125" r="15" fill="black" />

                <rect
                  x="70"
                  y="200"
                  width="50"
                  height="30"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <rect x="80" y="210" width="30" height="10" fill="black" />

                <rect
                  x="300"
                  y="200"
                  width="60"
                  height="30"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M310 210 L320 220 L330 215 L340 225 L350 220"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Plant */}
                <circle
                  cx="120"
                  cy="280"
                  r="15"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M120 265 Q110 250 100 240 Q90 230 80 220"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
