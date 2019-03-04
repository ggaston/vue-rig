import Vue from "vue";
import App from '../script/app.js'

describe('app', () => {
    let cmp, vm;

    beforeEach(() => {
      cmp = Vue.extend(App); // Create a copy of the original component
      vm = new cmp({
        data: {
          // Replace data value with this fake data
          message: "Cat",
          price: 234
        }
      }).$mount(); // Instances and mounts the component
    });
  
    it('equals message to "Cat"', () => {
      expect(vm.message).toEqual('Cat');
    });

    it('equals price to 234', () => {
        expect(vm.price).toEqual(234);
    });
});