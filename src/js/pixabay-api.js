export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41301109-917c16284d4a4222a28db4673';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
