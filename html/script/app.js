(function (Vue, Vuex) {
    'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
    Vuex = Vuex && Vuex.hasOwnProperty('default') ? Vuex['default'] : Vuex;

    // Import Vue for unit test. Jest requires 


    var store = new Vuex.Store({
        state: {
            products: []
        },
        mutations: {
            selectProduct(state, id) {
                return this.state.id;
            }
        }
    });

    Vue.component('component-x', {
        data: function () {
            return {
              msg: 'Hello'
            }
          },
          template: '#[data-x]'
    });

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

}(Vue, Vuex));
