import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from 'styles/Global';
import { Theme } from 'styles/Theme';
import Layout from 'src/components/Layout';
import '../../styles/pageNation.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
