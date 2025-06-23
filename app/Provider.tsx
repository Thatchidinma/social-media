'use client'
import { FilterProvider } from "@/context/searchContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "./loading";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <Suspense fallback={<Loading/>}>
        <FilterProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </FilterProvider>
      </Suspense>
    </ThemeProvider>
  );
}
