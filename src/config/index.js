const URL_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8082'
  : 'https://fifaflix.herokuapp.com';

export default {
  URL_TOP,
};
