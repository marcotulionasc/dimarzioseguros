import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Toast helper functions for form feedback
export const showToast = {
  success: (toast: any, title: string, description?: string) => {
    toast({
      variant: "success",
      title,
      description,
      duration: 4000,
    })
  },
  error: (toast: any, title: string, description?: string) => {
    toast({
      variant: "destructive", 
      title,
      description,
      duration: 5000,
    })
  },
  info: (toast: any, title: string, description?: string) => {
    toast({
      variant: "info",
      title,
      description,
      duration: 4000,
    })
  },
  warning: (toast: any, title: string, description?: string) => {
    toast({
      variant: "warning",
      title,
      description,
      duration: 4000,
    })
  }
}
