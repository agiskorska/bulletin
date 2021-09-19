import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadPost } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';


class Component extends React.Component {
  constructor(props) {
    super(props);
    const postContent = this.props;
    this.state = postContent.shortDescription ?
      {
        shortDescription: postContent.shortDescription,
        phoneNumber: postContent.phoneNumber,
        price: postContent.price,
        image: postContent.imageUrl,
        description: postContent.description,
        date: postContent.date,
      } :
      {
        shortDescription: '',
        phoneNumber: '',
        price: '',
        image: '',
        description: '',
        date: new Date().toString(),
      };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.uploadPost(this.state);
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Short description:
          <input name='shortDescription' type="text" value={this.state.shortDescription} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          telephone number:
          <input name='phoneNumber' type="text" value={this.state.phoneNumber} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          price:
          <input name='price' type="text" value={this.state.price} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Image
          <input name='image' type="file" onChange={this.handleChange} />
        </label>
        <br/>
        <label>
          Description:
          <textarea name='description' rows="5" cols="33" onChange={this.handleChange} value={this.state.description} ></textarea>
        </label>
        <br/>
        <Link to='/'><input type="submit" value="Submit" /></Link>
      </form>
    );
  }
}

Component.propTypes = {
  uploadPost: PropTypes.func,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
  phoneNumber: PropTypes.number,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  date: PropTypes.string,
};

// const mapStateToProps = state => ({
//   posts: getAll(state),
// });

const mapDispatchToProps = dispatch => ({
  uploadPost: arg => dispatch(uploadPost(arg)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as AddPostForm,
  Component as AddPostFormComponent,
};
