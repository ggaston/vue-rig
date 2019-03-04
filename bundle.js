(function (Vue) {
    'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

    var vm = new Vue({
        el: '#app',
        data: {
            price: '123'
        }
    });

}(Vue));
