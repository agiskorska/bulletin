import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
// import { Post } from '../../views/Post/Post';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/userRedux.js';
import AppBar from '../../features/AppBar/AppBar';


import styles from './MainLayout.module.scss';

const Component = ({className, user, children}) => {
  return(
    <div className={clsx(className, styles.root)}>
      <Header><AppBar isLogged={user.isLogged} /></Header>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.object,
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
  Container as MainLayout,
  Component as MainLayoutComponent,
};
