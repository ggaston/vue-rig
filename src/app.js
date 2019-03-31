// Import Vue for unit test. Jest requires 
import Vue from './vue.js';

Vue.component('headline', {
    props: ['title'],
    template: '#headline-template'
})

Vue.component('device-selector', {
    props: ['count'],
    template: '#device-selector'
})

Vue.component('price-box', {
    props: ['price'],
    template: '#price-box'
})

var vm = window.vm = new Vue({
    /**
     * Data should be only state.
     * {} 
     */
    template: `
                <div class="app">
                    <headline v-for="headline in headlines" v-bind:title="headline.title"></headline>
                    <div class="price-box-container">
                        <device-selector v-on:increment="incrementDevices" v-on:decrement="decrementDevices" v-bind:count="count"></device-selector>
                        <price-box v-bind:price="product.price"></price-box>
                    </div>
                </div>
              `,
    data: function() {
        return {
            count: 1,
            priceList: {},
            headlines: [
                {title: 'Headline 1'}, 
                {title: 'Headline 2'}
            ]
        }        
    },
    created() {
        // TODO: Use ref attr for pricelist element
        this.priceList = document.getElementById('pricelist-pre');
        this.product = JSON.parse(this.priceList.innerHTML)['pre'];
    },
    computed: {
        product: {
            get: function() {
                return JSON.parse(this.priceList.innerHTML)['pre-' + this.count];
            },
            set: function() {
                return JSON.parse(this.priceList.innerHTML)['pre-' + this.count];
            }
        }
    },
    methods: {
        updateProduct: function(productId){
            this.product = JSON.parse(this.priceList.innerHTML)[productId + '-' + this.count];
        },
        incrementMaintenance: function() {

        },
        decrementMaintenance: function() {

        },
        incrementDevices: function() {
            this.count = this.count + 1;
        },
        decrementDevices: function() {
            this.count = this.count - 1;
        },
        setMaintenance: function(maintennace) {

        },
        setDevices: function(devices) {
        
        }
    }
});


vm.$mount('#app3');
