
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Newspaper, Search, BarChart } from "lucide-react";

export type TrendSource = "google" | "news" | "reddit";

interface TrendSourceSelectorProps {
  activeSource: TrendSource;
  onSourceChange: (source: TrendSource) => void;
  children?: React.ReactNode;
}

const TrendSourceSelector: React.FC<TrendSourceSelectorProps> = ({
  activeSource,
  onSourceChange,
  children,
}) => {
  return (
    <Tabs
      value={activeSource}
      onValueChange={(value) => onSourceChange(value as TrendSource)}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="google" className="flex items-center gap-2">
          <Search size={18} />
          <span className="hidden sm:inline">Google Trends</span>
          <span className="sm:hidden">Google</span>
        </TabsTrigger>
        <TabsTrigger value="news" className="flex items-center gap-2">
          <Newspaper size={18} />
          <span className="hidden sm:inline">News Headlines</span>
          <span className="sm:hidden">News</span>
        </TabsTrigger>
        <TabsTrigger value="reddit" className="flex items-center gap-2">
          <BarChart size={18} />
          <span className="hidden sm:inline">Reddit Trends</span>
          <span className="sm:hidden">Reddit</span>
        </TabsTrigger>
      </TabsList>
      
      {children && (
        <>
          <TabsContent value="google">{activeSource === "google" && children}</TabsContent>
          <TabsContent value="news">{activeSource === "news" && children}</TabsContent>
          <TabsContent value="reddit">{activeSource === "reddit" && children}</TabsContent>
        </>
      )}
    </Tabs>
  );
};

export default TrendSourceSelector;
