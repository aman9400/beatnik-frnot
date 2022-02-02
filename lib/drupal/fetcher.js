const D9_URL = process.env.API_BASE_URL;

const getArticle = async data => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(
    `${D9_URL}api/articles-test?page=0`,
    requestOptions,
  );
  const regResponse = await response.json();
  console.log('fetcher', D9_URL);
  return regResponse;
};

// get health article details
const getArticleDetails = async data => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(
    `${D9_URL}api/get-article/${data.nid}`,
    requestOptions,
  );
  const regResponse = await response.json();
  return regResponse;
};

// get help center
const getHelpCenter = async data => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${D9_URL}api/faqs/${data.tid}`, requestOptions);
  const regResponse = await response.json();
  // console.log('fetcher', D9_URL);
  return regResponse;
};

// get faqs category
// get help center
const getFaqsCategory = async data => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${D9_URL}api/faqs-type`, requestOptions);
  const regResponse = await response.json();
  // console.log('fetcher', D9_URL);
  return regResponse;
};

export { getArticle, getArticleDetails, getHelpCenter, getFaqsCategory };
