import React, { Component } from 'react';
import Notiflix from 'notiflix';
import fetchPictures from './pictureApi';
import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

Notiflix.Notify.init({
  position: 'left-top',
  cssAnimationStyle: 'zoom',
  fontSize: '20px',
});

export class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    showModal: false,
    error: null,
    searchQuery: '',
    pageNumber: 1,
    modalURL: '',
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const pictures = await fetchPictures(
        this.state.searchQuery,
        this.state.pageNumber
      );
      this.setState({ pictures });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
      // console.log('dfegdh');
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.pageNumber !== prevState.pageNumber
    ) {
      this.setState({ isLoading: true });
      try {
        const pictures = await fetchPictures(
          this.state.searchQuery,
          this.state.pageNumber
        );
        if (pictures.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.setState({ pictures: [...this.state.pictures, ...pictures] });
      } catch (error) {
        this.setState({ error });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  formSubmitHandler = query => {
    this.setState({ searchQuery: query, pageNumber: 1, pictures: [] });
    // localStorage.setItem('pictures', JSON.stringify(this.state.pictures));
  };

  imageClickHandler = url => {
    this.setState({ modalURL: url });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  loadMoreHandler = pageNumber => {
    this.setState({ pageNumber });
  };

  render() {
    const { isLoading, pictures, showModal, modalURL } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.formSubmitHandler} />
        <ImageGallery>
          {pictures.map(picture => (
            <ImageGalleryItem
              key={picture.id}
              picture={picture}
              onClick={this.imageClickHandler}
            ></ImageGalleryItem>
          ))}
        </ImageGallery>
        <Button onClick={this.loadMoreHandler}></Button>
        {isLoading && <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalURL} alt={pictures.tags} />
          </Modal>
        )}
      </div>
    );
  }
}
