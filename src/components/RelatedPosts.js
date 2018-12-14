import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {getRelatedPosts} from '../actions/relatedPostsAction'

class RelatedPosts extends Component {
  componentDidMount() {
    this.props.getRelatedPosts(this.props.postID);
  }
  render() {
    let posts;
    if (Object.keys(this.props.relatedPosts).length !== 0){
      posts = this.props.relatedPosts.posts.slice(0, 4).map(postArr => {
        const link = "/" + postArr.slug;
        return (
          <div key={postArr.id} className="col-3">
            <img className="img-fluid" src={postArr.featured_image.source} alt={postArr.title} />
            <NavLink to={link}>{postArr.title}</NavLink>
          </div>
        )
      })
    } else {
      posts = <div className="col-12">Loading...</div>
    }
    return (
      <div>
        <div>
          RECOMMENDED READS
        </div>
        <br />
        <div className="row">
          {posts}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  relatedPosts: state.relatedPosts.relatedPosts
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRelatedPosts: getRelatedPosts
    },
    dispatch,
  );
}

RelatedPosts.propTypes = {
  relatedPosts: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedPosts)
