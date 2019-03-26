// Import Vue for unit test. Jest requires 
import Vue from './vue.js';
import Vuex from 'vuex';


var store = new Vuex.Store({
    state: {
        products: []
    }
})

Vue.component('component-x', {
    data: function () {
        return {
          msg: 'Hello'
        }
      },
      template: '#[data-x]'
})

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
