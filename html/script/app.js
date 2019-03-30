(function (Vue) {
    'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

    // Import Vue for unit test. Jest requires 

    Vue.component('component-x', {
        template: '#component-x'
    });

    var vm = window.vm = new Vue({
        /**
         * Mount element instead of hooking with el prop.
         */
        /**
         * Data should be only state.
         * {} 
         */
        template: '#x-template',
        data: function() {
            return {
                product: {},
                priceList: {},
                headline: "Headline"
            }        
        },
        created() {
            // TODO: Use ref attr for pricelist element
            this.priceList = document.getElementById('pricelist-pre');
            this.products = JSON.parse(this.priceList.innerHTML)['pre-1'];
        },
        methods: {
            updateProduct: function(productId){
                this.product = JSON.parse(this.priceList.innerHTML)[productId];
            },
            incrementMaintenance: function() {

            },
            decrementMaintenance: function() {

            },
            incrementDevices: function() {

            },
            decrementDevices: function() {
                
            },
            setMaintenance: function(maintennace) {

            },
            setDevices: function(devices) {
            
            }
        }
    });


    vm.$mount('#app3', true);

}(Vue));
