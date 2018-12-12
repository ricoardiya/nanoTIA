import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPosts} from '../actions/postsAction'
import PostList from './PostList';

export class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (this.props.post === undefined) {
      return (
        <div>Loading...</div>
      )
    } else {
      document.title = "nanoTIA"
      return (
        <div>
          <PostList posts={this.props.post.posts} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  post: state.post.post
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPosts: getPosts
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
