import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../../features/PostCard/PostCard';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

const displayPosts = (posts, user) => posts.reverse().map((post, id) => {
  if(!user.isLogged || user.rights === 'admin' || (user.rights === 'user' && posts.userId === user.id)) {
    return(
      <PostCard {...post} key={id} edit={user.isLogged}/>
    );
  }
  return null;
});

const Component = ({user, className, posts}) => {
  return(
    <div className={clsx(className, styles.root)}>
      {displayPosts(posts, user)}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  postNumber: PropTypes.number,
  user: PropTypes.object,
  // id: PropTypes.string,
  // rights: PropTypes.string,
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
