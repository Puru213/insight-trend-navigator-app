
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import UserMenu from "@/components/UserMenu";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center sm:items-start">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Insight Trend Navigator
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover trending topics across multiple platforms
            </p>
          </Link>
          <UserMenu />
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
