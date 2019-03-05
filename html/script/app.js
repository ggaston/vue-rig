(function (Vue) {
    'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

    // Import Vue for unit test. Jest requires 

    var vm = window.vm = new Vue({
        el: '#app',
        data: function() {
            return {
                product: {},
                priceList: {}
            }        
        },
        created() {
            this.priceList = document.getElementById('pricelist-pre');
            this.product = JSON.parse(this.priceList.innerHTML)['pre-1'];
        },
        methods: {
            updateProduct: function(productId){
                this.product = JSON.parse(this.priceList.innerHTML)[productId];
            }
        }
    });

}(Vue));
