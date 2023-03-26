import api from './api';
import { LAMBDA_URL } from '../Config';
const queryString = require('query-string');

const isPlaylist = (url: string): boolean => {
  return url.includes('/playlist');
};

const getPlaylistData = async (playlistId: string) => {
  try {
    const data: any = await api.fetch(`${LAMBDA_URL}/playlistVideos?playlistId=${playlistId}`);

    return data;
  } catch (err) {
    console.error(err);
  }
};

const getvideoCaptions = async (videoId: string) => {
  try {
    const data: any = await api.fetch(`${LAMBDA_URL}/captions-v2?video_id=${videoId}`);

    return data;
  } catch (err) {
    console.error(err);
  }
};

const stripUrlParam = (searchUrl: string, query: string): string => {
  const parsed = queryString.parse(searchUrl);

  return parsed[query];
};

export { isPlaylist, stripUrlParam, getPlaylistData, getvideoCaptions };
