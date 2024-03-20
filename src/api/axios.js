import axios from 'axios';

export default axios.create({

  baseURL: 'https://motorhubbackend.up.railway.app',
  REGISTER_URL: 'https://motorhubbackend.up.railway.app/users',
  LOGIN_URL: 'https://motorhubbackend.up.railway.app/users/sign_in',
});
