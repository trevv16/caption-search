const queryString = require('query-string');

const isPlaylist = (url: string): boolean => {
  return url.includes('/playlist');
};

const stripUrlParam = (searchUrl: string, query: string): string => {
  const parsed = queryString.parse(searchUrl);

  return parsed[query];
};

export { isPlaylist, stripUrlParam };
