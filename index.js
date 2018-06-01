import Vue from 'vue';
import App from './App.vue';
import intersect from './intersect';

Vue.directive('intersect', intersect);

new Vue({
    el: '#app',
    render: h => h(App)
});
