
import React, { useState } from "react";
import Layout from "@/components/Layout";
import TrendSourceSelector, { TrendSource } from "@/components/TrendSourceSelector";
import TrendList, { TrendItem } from "@/components/TrendList";
import CategoryFilter, { CategoryOption } from "@/components/CategoryFilter";

// Mock data for now - will be replaced with API calls
const mockCategories: CategoryOption[] = [
  { id: "tech", label: "Technology" },
  { id: "business", label: "Business" },
  { id: "health", label: "Health" },
  { id: "entertainment", label: "Entertainment" },
  { id: "sports", label: "Sports" },
  { id: "science", label: "Science" },
];

const mockTrends: Record<TrendSource, TrendItem[]> = {
  google: [
    { id: "g1", title: "Artificial Intelligence breakthroughs", value: "1.5M+ searches", category: "tech" },
    { id: "g2", title: "Olympic Games 2024", value: "950K+ searches", category: "sports" },
    { id: "g3", title: "New COVID variant", value: "750K+ searches", category: "health" },
    { id: "g4", title: "Stock market analysis", value: "600K+ searches", category: "business" },
    { id: "g5", title: "Blockbuster movie release", value: "500K+ searches", category: "entertainment" },
  ],
  news: [
    { id: "n1", title: "Global tech companies announce major layoffs", category: "business" },
    { id: "n2", title: "New breakthrough in renewable energy", category: "science" },
    { id: "n3", title: "Health officials warn of new pandemic risks", category: "health" },
    { id: "n4", title: "Major sports team wins championship", category: "sports" },
    { id: "n5", title: "Tech giant launches revolutionary product", category: "tech" },
  ],
  reddit: [
    { id: "r1", title: "Developer shares amazing AI tool", value: "15.2k upvotes", category: "tech" },
    { id: "r2", title: "Discussion: Future of remote work", value: "8.7k upvotes", category: "business" },
    { id: "r3", title: "New scientific discovery explained", value: "12.1k upvotes", category: "science" },
    { id: "r4", title: "Movie franchise announces new sequel", value: "9.9k upvotes", category: "entertainment" },
    { id: "r5", title: "Health tip goes viral on social media", value: "7.5k upvotes", category: "health" },
  ],
};

const Index: React.FC = () => {
  const [activeSource, setActiveSource] = useState<TrendSource>("google");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Filter trends based on selected categories
  const filteredTrends = selectedCategories.length > 0
    ? mockTrends[activeSource].filter(trend => 
        trend.category && selectedCategories.includes(trend.category)
      )
    : mockTrends[activeSource];

  // Simulate loading when changing sources
  const handleSourceChange = (source: TrendSource) => {
    setIsLoading(true);
    setActiveSource(source);
    
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <TrendSourceSelector
          activeSource={activeSource}
          onSourceChange={handleSourceChange}
        />
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {activeSource === "google" && "Top Google Search Trends"}
            {activeSource === "news" && "Latest News Headlines"}
            {activeSource === "reddit" && "Popular Reddit Discussions"}
          </h2>
          
          <CategoryFilter
            categories={mockCategories}
            selectedCategories={selectedCategories}
            onSelectCategory={handleCategorySelect}
          />
          
          <TrendList 
            items={filteredTrends}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
