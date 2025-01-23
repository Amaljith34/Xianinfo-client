import api from './config';

export const fetchVideos = async () => {
  const response = await api.get('/vedio');
  return response.data;
};

export const createVideo = async (videoData) => {
  const response = await api.post('/vedio', videoData);
  return response.data;
};

export const addToWishlist = async (videoId) => {
  const response = await api.post(`/wishlist`, { videoId });
  return response.data;
};
