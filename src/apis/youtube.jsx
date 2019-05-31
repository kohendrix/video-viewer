import axios from 'axios';

const KEY = 'AIzaSyCViYa9m4iO2JwkcmWHRg5Qharoqlo7mOI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', maxResults: 5, key: KEY },
});
