import axios from 'axios';

const KEY = 'AIzaSyC7qoT44uOakc7f08oFYSOlEd2jwO3wW30';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});