import axios from 'axios';

// Твій персональний ключ Pixabay
const API_KEY = '55210973-f163c09f944895a3800208151';
const BASE_URL = 'https://pixabay.com/api/';

//axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const respons = await axios.get(`${BASE_URL}?${searchParams}`);

  return respons.data;
}
