import axios from 'axios';
// import Notiflix from 'notiflix';

// Notiflix.Notify.init({
//   position: 'left-top',
//   cssAnimationStyle: 'zoom',
//   fontSize: '20px',
// });

const API_KEY = '30451625-24b88a788a5d1862c6d5c9df8';

// export default class PictureApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.pageNumber = 1;
//     this.totalPage = 1;
//   }

let pageNumber = 1;

async function fetchPictures(searchQuery) {
  const base_url = 'https://pixabay.com/api/?';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 12,
  });
  const data = await axios.get(`${base_url}${searchParams}`);
  console.log(data.data.hits, pageNumber);
  return data.data.hits;
}

export default fetchPictures;

//     try {
//       const data = await axios.get(`${base_url}${searchParams}`);
//       // this.totalPage = Math.ceil(data.data.totalHits / 12);
//       // if (!data.data.hits.length) {
//       //   Notiflix.Notify.failure(
//       //     'Sorry, there are no images matching your search query. Please try again.'
//       //   );
//       //   return;
//       // }
//       // if (this.totalPage <= this.pageNumber) {
//       //   Notiflix.Notify.warning(
//       //     "We're sorry, but you've reached the end of search results."
//       //   );
//       // }
//       // if (this.pageNumber === 1) {
//       //   Notiflix.Notify.info(`Hooray! We found ${data.data.totalHits} images.`);
//       // }
//       this.pageNumber += 1;
//       return data.data.hits;
//     } catch {
//       error => console.log(error);
//     }
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   resetPageNumber() {
//     this.pageNumber = 1;
//   }
//   get page() {
//     return this.pageNumber;
//   }
// }

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
