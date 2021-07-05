import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from 'Themes/DefaultTheme';
import { GlobalStyles } from 'GlobalStyles';
import { Switch, Route } from 'react-router-dom';

// components
import PostsPage from 'pages/PostsPage/PostsPage';
import PageLayout from 'components/UI/PageLayout';
import PostDetailPage from 'pages/PostDetailPage/PostDetailPage';
import UserDetailPage from 'pages/UserDetailPage/UserDetailPage';

function App(): React.ReactElement {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <PageLayout>
          <Switch>
            <Route exact path='/' render={() => <PostsPage />} />
            <Route exact path='/post/:id' render={() => <PostDetailPage />} />
            <Route exact path='/user/:id' render={() => <UserDetailPage />} />
          </Switch>
        </PageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
