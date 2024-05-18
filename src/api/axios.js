import axios from 'axios';

export default axios.create({

  baseURL: 'https://motorhubapi.up.railway.app',
  REGISTER_URL: 'https://motorhubapi.up.railway.app/users',
  LOGIN_URL: 'https://motorhubapi.up.railway.app/users/sign_in',
});
