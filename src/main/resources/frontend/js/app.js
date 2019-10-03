window._ = require('lodash');



try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}


window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL="http://localhost:8080/api/";



window.Vue = require('vue');
import App from '../components/app'
import  router from './routes'

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router

});
