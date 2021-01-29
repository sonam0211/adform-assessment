import axios from 'axios';
import {
  fetchUserlistRequest,
  fetchUserlistRequestSuccess,
  fetchUserlistRequestFailure
} from './action';

export const fetchUsersList = () => (dispatch) => {
  dispatch(fetchUserlistRequest());
  return axios.get('https://jsonplaceholder.typicode.com/users').then(
    (response) => dispatch(fetchUserlistRequestSuccess(response.data)),
    (err) => dispatch(fetchUserlistRequestFailure(err))
  );
};
