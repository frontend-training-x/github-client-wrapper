const httpService = (url, ...rest) => fetch(`${process.env.REACT_APP_GITHUB_API_BASE_URL}${url}`, {
  headers: {
    Authorization: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  },
  ...rest,
});

export default httpService;
