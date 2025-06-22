'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ProgressProvider
        style="style"
        options={{ showSpinner: false }}
        shallowRouting
      > */}
       {children}
      {/* </ProgressProvider> */}
      {/* <ReactQueryDevtools
        initialIsOpen={false}
        position="left"
        buttonPosition="top-left"
      /> */}
      {/* <Toaster richColors /> */}
    </QueryClientProvider>
  );
}
