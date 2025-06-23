'use client'
import LoadingIcon from "@/components/icons/LoadingIcon";
import { FilterProvider } from "@/context/searchContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingIcon/>}>
        <FilterProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </FilterProvider>
      </Suspense>
    </ThemeProvider>
  );
}
