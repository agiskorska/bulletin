import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import AppBar from '../../features/AppBar/AppBar';
import Container from '@material-ui/core/Container';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/userRedux.js';


import styles from './MainLayout.module.scss';

const Component = ({className, user, children}) => {
  return(
    <div className={clsx(className, styles.root)}>
      <Header><AppBar isLogged={user.isLogged} /></Header>
      <Container maxWidth="sm" >
        {children}
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.any,
};

const mapStateToProps = state => ({
  user: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   // someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps,)(Component);

export {
  // Component as MainLayout,
  ComponentContainer as MainLayout,
  Component as MainLayoutComponent,
};
