import React, { Component } from 'react';
import fetchPictures from './pictureApi';
import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import { Audio } from 'react-loader-spinner';
// <Audio
//   height="80"
//   width="80"
//   radius="9"
//   color="green"
//   ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
// />;

export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: null,
    searchQuery: '',
  };

  componentDidMount() {
    try {
      const pictures = fetchPictures(this.state.searchQuery);
      console.log(pictures);
      pictures.then(res => this.setState({ pictures: res }));
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
      console.log('dfegdh');
    }
  }

  componentDidUpdate() {}

  formSubmitHandler = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery>
          {this.state.pictures.map(el => (
            <ImageGalleryItem src={el.previewURL} alt={el.title} />
          ))}
        </ImageGallery>
      </div>
    );
  }
}
