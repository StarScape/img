$(document).ready(() => {

Vue.component('item', { 
  template: '#item-template',
  props: ['text'],
  
  data: function() {
    return {
      visible: false
    }
  },

  mounted: function() {
  },

  methods: {
    toggle: function(id) {
      let visibility = !this.visible;
      this.$parent.hideAll();
      this.visible = visibility;
    }
  }
});

});