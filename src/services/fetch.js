import axios from "axios";

const API_KEY = "19920975-a527e386fa9eb188d46acf2f9";

const BASE_URL = "https://pixabay.com/api/";

axios.defaults.baseURL = BASE_URL;

const fetchImages = (query, page) => {
  const perPage = 12;
  const url = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${API_KEY}`;
  return axios.get(url).then(({ data }) => {
    console.log(data);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    console.log(data.hits);
    return data.hits;
  });
};

export default fetchImages;
