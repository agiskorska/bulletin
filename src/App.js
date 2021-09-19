import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Post } from './components/views/Post/Post';
import { PostEdit } from './components/views/PostEdit/PostEdit';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { NotFound } from './components/views/NotFound/NotFound';

import { connect } from 'react-redux';
import { getAll } from './redux/userRedux';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const Component = (user) => {
  console.log(user);
  return(
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/'><Homepage user={user}/></Route>
              <Route exact path='/post/add'><PostAdd user={user}/></Route>
              <Route exact path='/post/:id'><Post user={user}/></Route>
              <Route exact path='/post/:id/edit'><PostEdit user={user}/></Route>
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  user: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   // someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps,)(Component);

export {
  // Component as MainLayout,
  Container as App,
  Component as AppComponent,
};
