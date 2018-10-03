$(document).ready(() => {

Vue.component('color-wheel', {
  template: '#wheel-template',
  props: ['width', 'height'],
  data: function() {
    return {
      mouseDown: false,
      cursorX: 0,
      cursorY: 0
    }
  },
  mounted: function() {
    this.img = this.$el.querySelector('img');
    this.canvas = this.$el.querySelector('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.width;
    this.ctx = this.canvas.getContext('2d');
    this.cursorX = this.canvas.width/2;
    this.cursorY = this.canvas.height/2;

    this.draw();
  },

  methods: {
    click: function(e) {
      this.mouseDown = true;
      if (this._insideWheel(e)) {
        this.updateCursor(e);
      }
    },

    unclick: function() {
      this.mouseDown = false;
    },

    drag: function(e) {
      if (this.mouseDown) {
        this.updateCursor(e);
      }
    },

    // Returns true if click is inside the color wheel
    _insideWheel: function(e) {
      var mx = e.pageX - this.$el.offsetLeft;
      var my = e.pageY - this.$el.offsetTop;

      var centerX = this.canvas.width/2;
      var centerY = this.canvas.height/2;
      var dist = Math.sqrt(Math.pow(mx - centerX, 2) + Math.pow(my - centerY, 2));

      return dist < (this.width/2);
    },

    updateCursor: function(e) {
      var mx = e.pageX - this.$el.offsetLeft;
      var my = e.pageY - this.$el.offsetTop;

      if (this._insideWheel(e)) {
        this.cursorX = mx;
        this.cursorY = my;
      }
      else {
        let mouse = new Vector(mx, my);
        let center = new Vector(this.canvas.width/2, this.canvas.height/2);
        let norm = Vector.subtract(mouse, center).normalize();
        let pos = Vector.multiply(norm, this.canvas.width/2).add(center);

        this.cursorX = pos.x;
        this.cursorY = pos.y;
      }

      this.draw();
    },

    draw: function() {
      this.ctx.clearRect(0, 0, this.width, this.height);1
      this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
      this.ctx.strokeStyle = 'black';
      this.ctx.lineWidth = 1.5;

      // Draw cursor
      this.ctx.beginPath();
      this.ctx.arc(this.cursorX, this.cursorY, 5, 0, 2*Math.PI);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
});

});