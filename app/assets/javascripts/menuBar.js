$(document).ready(() => {

Vue.component('menu-bar', { 
 template: '#menu-bar-template',
  
  data: function() {
    return {
      visibility: 'auto'
    }
  },

  mounted: function() {
    this.dropdowns = this.$el.querySelectorAll(".dropdown");
  },

  methods: {
    // Collapses all menus
    hideAll: function(id) {
      this.$children.forEach(function(c) {
        c.visible = false;
      })
    }
  }
});

});