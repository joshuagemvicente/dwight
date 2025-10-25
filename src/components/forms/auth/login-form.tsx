"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth.client";
import Image from "next/image";
import React from "react";

type OAuthProvider = "google" | "github" | "facebook" | "apple";
interface OAuthProviderProps {
  provider: OAuthProvider;
  icon: React.ReactNode;
  label: string;
}

const oAuthProviders: Array<OAuthProviderProps> = [
  {
    provider: "google",
    icon: <Image src="/google.svg" alt="Google" width={24} height={24} />,
    label: "Google",
  },
  {
    provider: "github",
    icon: <Image src="/github.svg" alt="GitHub" width={24} height={24} />,
    label: "GitHub",
  },
  {
    provider: "facebook",
    icon: <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />,
    label: "Facebook",
  },
  {
    provider: "apple",
    icon: <Image src="/apple.svg" alt="Apple" width={24} height={24} />,
    label: "Apple",
  },
];

export function LoginForm() {
  const [loadingProvider, setLoadingProvider] =
    React.useState<OAuthProvider | null>(null);

  const handleOAuthSignIn = async (provider: OAuthProvider) => {
    setLoadingProvider(provider);
    try {
      await authClient.signIn.social({ provider });
    } catch (error) {
      console.error(`${provider} login error:`, error);
      setLoadingProvider(null);
    }
  };

  const renderOAuthButton = (item: (typeof oAuthProviders)[0]) => {
    const isLoading = loadingProvider === item.provider;

    return (
      <Button
        key={item.provider}
        variant="outline"
        size="icon"
        className="rounded-full h-12 w-12"
        onClick={() => handleOAuthSignIn(item.provider)}
        disabled={loadingProvider !== null}
        aria-label={`Sign in with ${item.label}`}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
        ) : (
          item.icon
        )}
      </Button>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">
            Sign in to your account
          </h1>
          <p className="text-gray-600">
            Choose your preferred method to continue
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="flex justify-center gap-4">
          {oAuthProviders.map(renderOAuthButton)}
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500">
          <p>We only use this to verify your identity</p>
        </div>
      </div>
    </div>
  );
}
