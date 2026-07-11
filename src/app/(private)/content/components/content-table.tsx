"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/widgets/data-table"
import { StatBadge } from "@/components/widgets/stat-badge"
import { mockContent } from "@/data"
import { ArticleFormSheet } from "./article-form-sheet"
import { RecipeFormSheet } from "./recipe-form-sheet"

type Article = typeof mockContent.articles[0]
type Recipe = typeof mockContent.recipes[0]

interface ContentTableProps {
  type: "articles" | "recipes"
}

export function ContentTable({ type }: ContentTableProps) {
  const isArticle = type === "articles"
  
  const articleColumns: ColumnDef<Article>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "views",
      header: "Views",
      cell: ({ row }) => <div className="font-sans">{(row.getValue("views") as number).toLocaleString()}</div>,
    },
    {
      accessorKey: "date",
      header: "Published Date",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <StatBadge 
            label={status} 
            color={status === "published" ? "success" : "warning"} 
          />
        )
      },
    },
  ]

  const recipeColumns: ColumnDef<Recipe>[] = [
    {
      accessorKey: "title",
      header: "Recipe Title",
      cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "prepTime",
      header: "Prep Time",
    },
    {
      accessorKey: "calories",
      header: "Calories",
      cell: ({ row }) => <div className="font-sans">{row.getValue("calories")} kcal</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <StatBadge 
            label={status} 
            color={status === "published" ? "success" : "warning"} 
          />
        )
      },
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{isArticle ? "Articles & Lessons" : "Recipes"}</h3>
        {isArticle ? (
          <ArticleFormSheet>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Article
            </Button>
          </ArticleFormSheet>
        ) : (
          <RecipeFormSheet>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Recipe
            </Button>
          </RecipeFormSheet>
        )}
      </div>
      <DataTable 
        columns={(isArticle ? articleColumns : recipeColumns) as any} 
        data={(isArticle ? mockContent.articles : mockContent.recipes) as any[]} 
        searchKey="title" 
        searchPlaceholder={`Search ${type}...`}
      />
    </div>
  )
}
