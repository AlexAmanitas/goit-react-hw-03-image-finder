import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = { data: '' };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt.target[1].value);
    console.log(this.props);
    // this.setState({ data: evt.currentTarget.value });
    this.props.onSubmit(evt.target[1].value);
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
