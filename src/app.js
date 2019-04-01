// Import Vue for unit test. Jest requires 
import Vue from './vue.js';

// Component seats-selector

Vue.component('counter', {
    props: ['count'],
    template: '#counter'
})

Vue.component('price-box', {
    props: ['price', 'maintenance'],
    template: '#priceBox'
})

let vm = new Vue({

    template: `
                <div class="price-box-container">
                    <counter 
                        v-on:increment="incrementSeats" 
                        v-on:decrement="decrementSeats" 
                        v-bind:count="seats"></counter>
                    <price-box 
                        v-for="product in products" 
                        :key="product.maintenance" 
                        v-bind:price="product.price" 
                        v-bind:maintenance="product.maintenance"></price-box>
                </div>
              `,
    data: function() {
        return {
            seats: 1,
            priceList: {},
        }        
    },
    created() {
        // TODO: Use ref attr for pricelist element
        const priceList = JSON.parse(document.getElementById('priceList').innerHTML);
        this.priceList = Object.keys(priceList).map(key => priceList[key]);
    },
    computed: {
        products: function() {
            return this.priceList.filter(product => (product.seats === this.seats) ? true : false);
        }
    },
    methods: {
        incrementSeats: function() {
            this.seats = this.seats + 1;
        },
        decrementSeats: function() {
            this.seats = this.seats - 1;
        }
    }
});

vm.$mount('#app');

