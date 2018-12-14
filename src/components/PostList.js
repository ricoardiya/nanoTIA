import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import Moment from 'react-moment'
import 'moment-timezone'
import Avatar from './Avatar'

import '../styles/postlist.css'

class PostList extends Component {
  render() {
    const postList = this.props.posts.map(postArr => {
      const link = "/" + postArr.slug;
      return (
        <div key={postArr.id} className="row post-list">
          <div className="col-3">
            <img alt="" src={postArr.seo.image} className="img-fluid"/>
          </div>
          <div className="col-9">
            <NavLink to={link}><h4>{postArr.title}</h4></NavLink>
            <p>{postArr.seo.description}</p>
            <span>
              <Avatar src={postArr.author.avatar_url} alt={postArr.author.display_name} />&nbsp;
              <a href={postArr.author.author_url}>{postArr.author.display_name}</a>&nbsp;&middot;&nbsp;
              <Moment fromNow>{postArr.date_gmt + `Z`}</Moment>&nbsp;&middot;&nbsp;
              {postArr.read_time}&nbsp;min read
            </span>
          </div>
        </div>
      )
    })
    return (
      <div>
        {postList}
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList
