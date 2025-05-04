
import React from "react";
import { Check, X } from "lucide-react";

export interface CategoryOption {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  categories: CategoryOption[];
  selectedCategories: string[];
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category.id);
        
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`
              inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors
              ${isSelected 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}
            `}
          >
            {isSelected ? (
              <Check className="mr-1 h-3 w-3" />
            ) : null}
            {category.label}
            {isSelected ? (
              <X className="ml-1 h-3 w-3" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
