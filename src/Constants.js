const prod = {
  url: {
    API_URL: 'https://flask-saas-client.herokuapp.com',
    API_URL_USERS: 'hhttps://flask-saas-client.herokuapp.com/flask/hello'}
  };
  const dev = {
  url: {
    API_URL: 'http://localhost:5000'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;