
import React from "react";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto py-8 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
            Insight Trend Navigator
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Discover trending topics across multiple platforms
          </p>
        </header>
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
