import axios from 'axios';
class NetworkUtils {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  get(endpoint, token = null) {
    console.log(this.baseUrl + '' + endpoint);
    return this.requestHttp('GET', this.baseUrl + endpoint, null, token);
  }

  async requestHttp(method, url, params) {
    return new Promise((resolve, reject) => {
      var options = {
        method,
        url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      };
      if (params) {
        options.data = params;
      }

      axios(options)
        .then((response) => {
          resolve({ statusCode: response.status, body: response.data });
        })
        .catch((error) => {
          console.log('Api_error: ' + JSON.stringify(error));
          if (error.response != undefined) {
            resolve({
              statusCode: error.response.status,
              body: error.response.data,
            });
          } else {
            reject(__.t('Can not connect to server'));
          }
        });
    });
  }
}

export default NetworkUtils;
