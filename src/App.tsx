import React from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from 'Themes/DefaultTheme';
import { GlobalStyles } from 'GlobalStyles';

// components
import PostsPage from 'pages/PostsPage/PostsPage';
import PageLayout from 'components/UI/PageLayout';

function App() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    )
  );

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <PageLayout>
          <PostsPage posts={data} />
        </PageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
