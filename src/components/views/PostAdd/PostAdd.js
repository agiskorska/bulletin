import React from 'react';
import PropTypes from 'prop-types';
import {AddPostForm} from '../../features/AddPostForm/AddPostForm';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const formContent = {
  shortDescription: '',
  phoneNumber: '',
  price: '',
  image: '',
  description: '',
};

const Component = ({className, children, user}) => {
  console.log(user);
  return(
    <div className={clsx(className, styles.root)}>
      <h2>Add a new post</h2>
      <AddPostForm form={formContent} />
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
