'use client'
import { FilterProvider } from "@/context/searchContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <FilterProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}
