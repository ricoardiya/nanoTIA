import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPosts, getNextPosts} from '../actions/postsAction'
import PostList from './PostList';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    this.props.getPosts();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.props.getPosts();
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const bottom = e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop === e.target.scrollingElement.clientHeight;
    if (bottom) {
      this.props.getNextPosts(this.state.page + 1);

      this.setState({
        page: this.state.page + 1
      });
    }
  }

  render() {
    if (this.props.post.length === 0) {
      return (
        <div>Loading...</div>
      )
    } else {
      document.title = "nanoTIA"
      return (
        <div onScroll={this.handleScroll.bind(this)} className="test">
          <PostList posts={this.props.post} />
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
      getPosts: getPosts,
      getNextPosts: getNextPosts
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
