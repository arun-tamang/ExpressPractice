import React, { Component } from 'react';

import {SHOWS} from '../../constants/localApiUrls';

import axiosInstance from '../../utils/clientAxiosInstance';

import Calendar from './Calendar';

export default class Shows extends Component {
  constructor(props) {
    super(props);
    let shows = [];
    this.state = {
      shows,
      loading: shows ? false : true,
    }
    this.fetchShows = this.fetchShows.bind(this);
  }

  fetchShows() {
    axiosInstance.get(SHOWS).then((response) => {
      if(response && response.data) {
        this.setState(() => ({
          shows: response.data,
          loading: false
        }));
      };
    });
  }

  componentDidMount() {
    if(!this.props.shows) {
      this.fetchShows();
    }
  }

  render() {

    return (
      <div>
        <h2>This is shows page.</h2>
        <Calendar shows={this.state.shows} />
      </div>
    );
  }
}
