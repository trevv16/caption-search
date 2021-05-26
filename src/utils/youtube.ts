import api from './api';
import { LAMBDA_URL } from '../Config';
// const ytch = require('yt-channel-info');
const queryString = require('query-string');

const isPlaylist = (url: string): boolean => {
  return url.includes('/playlist');
};

const getChannelInfo = (channelId: string) => {
  // const data: any = await api.fetch(`${LAMBDA_URL}/channelInfo?channelId=${channelId}`);
  // return data;
  // ytch
  //   .getChannelInfo(channelId)
  //   .then((response: any) => {
  //     return response;
  //   })
  //   .catch((err: any) => {
  //     console.log(err);
  //   });
};

const getPlaylistData = async (playlistId: string) => {
  const data: any = await api.fetch(`${LAMBDA_URL}/playlistVideos?playlistId=${playlistId}`);

  return data;
};

const stripUrlParam = (searchUrl: string, query: string): string => {
  const parsed = queryString.parse(searchUrl);

  return parsed[query];
};

export { isPlaylist, stripUrlParam, getPlaylistData, getChannelInfo };
