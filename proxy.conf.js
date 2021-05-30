// https://medium.com/@gigioSouza/resolvendo-o-problema-do-cors-com-angular-2-e-o-angular-cli-7f7cb7aab3c2
const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    //pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
