import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPostDetail} from '../actions/postDetailAction'
import Moment from 'react-moment'
import 'moment-timezone'
import Avatar from './Avatar'
import RelatedPosts from './RelatedPosts'

class PostItem extends Component {
  componentDidMount() {
    this.props.getPostDetail(this.props.match.params.post);
    let page_count = localStorage.getItem('page-count');
    let last_access = localStorage.getItem('last-access');
    let expired_month = localStorage.getItem('expired-month');
    let expired_year = localStorage.getItem('expired-year');
    if (page_count === null) {
      page_count = 0
    } else {
      if (page_count < 5) {
        page_count = parseInt(page_count,10) + 1
      }
    }

    last_access = new Date();

    if (expired_month === null && expired_year === null) {
      const expired = new Date();
      expired_month = expired.getMonth();
      expired_year = expired.getFullYear();
    } else {
      if (last_access.getFullYear() > expired_year) {
        // RESET page count
        const expired = new Date();
        expired_month = expired.getMonth();
        expired_year = expired.getFullYear();
        page_count = 0;
      } else if (last_access.getFullYear() <= expired_year) {
        if (last_access.getMonth() > expired_month) {
          // RESET page count
          const expired = new Date();
          expired_month = expired.getMonth();
          expired_year = expired.getFullYear();
          page_count = 0;
        }
      }
    }

    localStorage.setItem('page-count', page_count);
    localStorage.setItem('last-access', last_access);
    localStorage.setItem('expired-month', expired_month);
    localStorage.setItem('expired-year', expired_year);
  }

  render() {
    if (this.props.postDetail.length === 0) {
      return (
        <div>Loading...</div>
      )
    } else {
      if (this.props.match.params.post !== this.props.postDetail[0].slug) {
        return (
          <div>Loading...</div>
        )
      } else {
        let paywalled, paywalledClass;
        // SET BROWSER TITLE
        document.title = this.props.postDetail[0].title;

        const category = this.props.postDetail[0].categories.map((catArr) => {
          return (
            <span key={catArr.id}>
              {catArr.name.toUpperCase()}&nbsp;
            </span>
          )
        })
        if (localStorage.getItem('page-count') === '5') {
          paywalled =
            <div className="subscription">
              Support independent journalism. <br/>
              You've reached your 5 free content limit for the month. Consuming good content is clearly your thing. Subscribe at just $0.27 per day to get unlimited access.
              <br/><br/>
              <button type="button" className="btn btn-primary">LEARN MORE</button>
            </div>
          paywalledClass = 'paywalled';
        } else {
          paywalled = null;
          paywalledClass = 'not-paywalled';
        }
        return (
          <div>
            <div>
              {category}
            </div>
            <div>
              <Avatar src={this.props.postDetail[0].author.avatar_url} alt={this.props.postDetail[0].author.display_name} />&nbsp;
              <a href={this.props.postDetail[0].author.author_url}>{this.props.postDetail[0].author.display_name}</a>&nbsp;&middot;&nbsp;
              <Moment fromNow>{this.props.postDetail[0].date_gmt + `Z`}</Moment>&nbsp;&middot;&nbsp;
              {this.props.postDetail[0].read_time}&nbsp;min read
            </div>
            <h1>{this.props.postDetail[0].title}</h1>
            <div>
              <img className="img-fluid" src={this.props.postDetail[0].featured_image.source} alt={this.props.postDetail[0].title}/>
            </div>
            <div className={paywalledClass} dangerouslySetInnerHTML={{ __html: this.props.postDetail[0].content }}/>
            {paywalled}
            <RelatedPosts postID={this.props.postDetail[0].id} />
          </div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => ({
  postDetail: state.postDetail.postDetail
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPostDetail: getPostDetail
    },
    dispatch,
  );
}

PostItem.propTypes = {
  postDetail: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
