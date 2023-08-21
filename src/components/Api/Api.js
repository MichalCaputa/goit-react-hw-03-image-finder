import axios from 'axios';

export const fetchImagesWithQuery = async (searchQuery, pageNr) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${pageNr}&key=32265971-d67ec7699f5bfc85107bf3eda&image_type=photo&orientation=horizontal&per_page=12`
  );

  const images = response.data.hits.map(image => ({
    id: image.id,
    webformatURL: image.webformatURL,
    largeImageURL: image.largeImageURL,
  }));
  const totalHits = response.data.totalHits;
  return { images, totalHits };
};
