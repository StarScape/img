$(document).ready(() => {
  
  Vue.config.productionTip = false;

  window.vm = new Vue({
    el: "#vue-app",
    data: {
      lastMouseX: 0,
      lastMouseY: 0
    },

    methods: {
      dragWindows(e) {
        this.$children.forEach((c) => {
          if (c.drag != null) {
            c.drag(e, this.lastMouseX, this.lastMouseY);
          }
        });

        this.lastMouseX = e.pageX;
        this.lastMouseY = e.pageY;
      },

      unclickWindows(e) {
        this.$children.forEach(function(c) {
          if (c.unclick != null) {
            c.unclick(e);
          }
        });
      }
    }
  });

});