$(document).ready(() => {

Vue.component('window', {
  props: ['constraint'],
  data: function () {
    return {
      mouseDown: false,
      open: true,

      styleObj: {
        left: "",
        top: ""
      }
    }
  },
  
  methods: {
    click: function(e) {
      this.mouseDown = true;
    },
    
    unclick: function(e) {
      this.mouseDown = false;
    },

    drag: function(e, lastX, lastY) {
      if (this.mouseDown) {
        let x = this.$el.offsetLeft + (e.pageX - lastX);
        let y = this.$el.offsetTop + (e.pageY - lastY);
        
        // Constraint booleans        
        let xmin = x >= $(this.constraint).offset().left;
        let xmax = x + $(this.$el).width() <= $(this.constraint).offset().left + $(this.constraint).width();
        let ymin = y >= $(this.constraint).offset().top;
        let ymax = y + $(this.$el).height() <= $(this.constraint).offset().top + $(this.constraint).height();

        if (xmin && xmax) {
          this.styleObj.left = x + "px";
        }
        if (ymin && ymax) {
          this.styleObj.top = y + "px";
        }
      }
    },

    close: function() {
      this.open = false;
    }
  },
  
  template: '#window-template'
});

});