import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/postsRedux.js';

import styles from './PostEdit.module.scss';
import { AddPostForm } from '../../features/AddPostForm/AddPostForm.js';

const getPostId = (props) => {
  let id = '';
  if(!props.location) {
    const pathArr = window.location.pathname.split('/');
    id = parseInt(pathArr[2]);
    console.log(pathArr);
  }
  else {
    id = props.location.aboutProps.id;
  }
  return id;
};

const Component = ({className, children, post, user}) => {
  return(
    <div className={clsx(className, styles.root)}>
      <h2>PostEdit</h2>
      {user.isLogged ? <AddPostForm  {...post}/> : 'Please log in first'}
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  location: PropTypes.any,
  post: PropTypes.object,
  user: PropTypes.any,
};

const mapStateToProps = (state, props) => ({
  post: getById(state, getPostId(props)),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
