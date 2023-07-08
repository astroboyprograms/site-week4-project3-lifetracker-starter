import axios from 'axios';
import { API_BASE_URL } from '../../lifetracker-api/constants';
// import { setItem, getItem } from '../..//utils/localstorage';

import { setItem, getItem } from '../../lifetracker-api/utils/LocalStorage';


class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
    setItem('jwt', token);
  }


  async request({ endpoint, method, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    // Retrieve the token from localStorage if not available in this.token
    const token = this.token ? this.token : getItem('jwt');

    const headers = {
      "Content-Type": "application/json",
      ...(token && { "authorization": `Bearer ${token}` }),
    };

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });
      return { data: null, error: error.response.data.error };
    }
  }


  async login(credentials) {
    return this.request({ endpoint: "auth/login", method: "POST", data: credentials });
  }

  async signup(credentials) {
    return this.request({ endpoint: "auth/register", method: "POST", data: credentials });
  }

  async fetchUserFromToken() {
    return this.request({ endpoint: "auth/me", method: "GET" });
  }

  
  // async createPost(post) {
  //   return this.request({ endpoint: "create", method: "POST", data: post });
  // }

  async createPost(post) {
    return this.request({ endpoint: "nutrition", method: "POST", data: post });
  }

    
}

export default new ApiClient(API_BASE_URL);


// [ x] Create a `services` directory at the root of the project.
// - [x ] Inside the `services` directory, create an `apiClient.js` file
// - [x ] In the `apiClient.js` file, import the `axios` package and the `API_BASE_URL` constant from the `constants.js` file.
// - [ x] Define a new class in that file called `ApiClient`.
//   - [ x] Give it a constructor function that accepts a single parameter - `remoteHostUrl`. The constructor should attach the `remoteHostUrl` parameter to a new instance with `this.remoteHostUrl = remoteHostUrl`. It should also set `this.token = null`.
//   - [ x] Export default a new instance of the `ApiClient` class.
//   - [x ] Add an additional method called `setToken` that accepts a single parameter - `token` and attaches it to the instance.
//   - [x ] Create a utility method called `request` that uses `axios` to issue HTTP requests
//   - [x ] Add a `login` method that uses the `request` method to send an HTTP request to the `auth/login` endpoint
//   - [ x] Add a `signup` method that uses the `request` method to send an HTTP request to the `auth/register` endpoint
//   - [ x] Add a `fetchUserFromToken` method that uses the `request` method to send an HTTP request to the `auth/me` endpoint
//   - [ ] **Add as many other methods as needed when making API requests.**
