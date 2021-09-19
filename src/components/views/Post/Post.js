import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../../features/PostCard/PostCard';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

const displayPosts = (posts, postNumber=posts.length) => posts.reverse().map((post, id) => {
  if(id<postNumber) {
    return(
      <PostCard {...post} key={id}/>
    );
  }
  return null;
});

const Component = ({className, postNumber, posts }) => {
  return(
    <div className={clsx(className, styles.root)}>
      {displayPosts(posts, postNumber)}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  postNumber: PropTypes.number,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Post,
  Component as PostComponent,
};
