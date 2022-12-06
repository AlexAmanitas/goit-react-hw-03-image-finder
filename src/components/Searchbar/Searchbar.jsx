import React, { Component } from 'react';
import '../Searchbar/Searchbar.css';
// import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = { data: '' };

  handleSubmit = evt => {
    evt.preventDefault();
    // console.log(evt);
    // console.log(this.props);
    // this.setState({ data: evt.currentTarget.value });
    this.props.onSubmit(evt.target[0].value);
    input.value = '';
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit" className="search-btn">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
