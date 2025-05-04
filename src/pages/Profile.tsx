
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import { Loader2 } from "lucide-react";

const Profile: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
              <p className="text-base">{user.email}</p>
            </div>
            
            {user.user_metadata?.username && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Username</h3>
                <p className="text-base">{user.user_metadata.username}</p>
              </div>
            )}
            
            {user.user_metadata?.full_name && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h3>
                <p className="text-base">{user.user_metadata.full_name}</p>
              </div>
            )}
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Created</h3>
              <p className="text-base">{new Date(user.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
