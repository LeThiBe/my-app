// @flow

import axios, { AxiosRequestConfig } from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 30000,
  params: {},
};

export default class AxiosRequest {
  config: any;

  constructor() {
    this.config = Object.assign({}, DEFAULT_API_CONFIG);
  }

  executeRequest(url: any, config: any) {
    const finalConfig = Object.assign({}, this.config, { url, ...config });
    return axios.request(finalConfig)
      .then(successfulRes => Promise.resolve(successfulRes))
      .catch(errorRes => Promise.reject(errorRes));
  }

  get(url) {
    return this.executeRequest(url, {
      method: 'GET',
    })
  }
}