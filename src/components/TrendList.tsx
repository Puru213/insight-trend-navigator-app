
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";

export interface TrendItem {
  id: string;
  title: string;
  value?: number | string;
  category?: string;
}

interface TrendListProps {
  items: TrendItem[];
  isLoading: boolean;
}

const TrendList: React.FC<TrendListProps> = ({ items, isLoading }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copied to clipboard",
          description: `"${text}" has been copied to your clipboard.`,
          duration: 3000,
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
        toast({
          variant: "destructive",
          title: "Error copying to clipboard",
          description: "Failed to copy text to clipboard.",
          duration: 3000,
        });
      }
    );
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
        <p className="text-lg text-gray-600 dark:text-gray-400">No trends available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h3>
            {item.category && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mt-1">
                {item.category}
              </span>
            )}
            {item.value && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Score: {item.value}
              </p>
            )}
          </div>
          <Button 
            size="icon" 
            variant="outline" 
            onClick={() => copyToClipboard(item.title)}
            title="Copy to clipboard"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TrendList;
