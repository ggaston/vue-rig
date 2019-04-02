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
    template: '#actionBox',
    data: function() {
        return {
            index: 0,
            seatsRange: [],
            maintenance: [],
            priceList: {},
        }        
    },
    created() {
        // TODO: Use ref attr for pricelist element
        const priceList = JSON.parse(document.getElementById('priceList').innerHTML);
        this.priceList = Object.keys(priceList).map(key => priceList[key]);
        // populate seats
        Object.keys(priceList).forEach(key => {
            let found = this.seatsRange.find(item => {
                return priceList[key].seats === item
            });
            if (!found) {
                this.seatsRange.push(priceList[key].seats);
            }
        });
    },
    computed: {
        products: function() {
            return this.priceList.filter(product => (product.seats === this.seatsRange[this.index]) ? true : false);
        },
        seats: function() {
            return this.seatsRange[this.index]
        }
    },
    methods: {
        incrementSeats: function() {
            (this.index === this.seatsRange.length - 1) ? this.index = 0 :  this.index++;
        },
        decrementSeats: function() {
            (this.index === 0) ? this.index = this.seatsRange.length - 1 : this.index--;            
        }
    }
});

vm.$mount('#app');

