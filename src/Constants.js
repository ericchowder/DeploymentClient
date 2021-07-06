
const prod = {
  url: {
    API_URL: 'https://flask-saas-api.herokuapp.com',
    API_URL_USERS: 'hhttps://flask-saas-client.herokuapp.com/flask/hello'}
  };
  const dev = {
  url: {
    API_URL: 'http://localhost:5000'
  }
};

console.log("before export MY_ENV: ", process.env.MY_ENV)

export const config = process.env.MY_ENV === 'development' ? dev : prod;

console.log("after export MY_ENV: ", process.env.MY_ENV)