'use client'
import React, { PropsWithChildren } from "react";
import {Provider} from 'jotai';
import {DevTools} from 'jotai-devtools';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import store from "@/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60
    }
  }
})

const Wrapper: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DevTools />
        {children}
      </QueryClientProvider>
    </Provider>
  )
}

export default Wrapper;