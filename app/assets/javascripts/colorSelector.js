$(document).ready(() => {

Vue.component('color-selector', {
  template: '#color-selector-template',
  
  data: function() {
    return {
      primarySelected: true,
      secondarySelected: false,
      primaryColor: "rgb(44,146,185)",
      secondaryColor: "rgb(255, 255, 255)"
    }
  },

  mounted: function() {
  },

  methods: {
    clickPrimary: function(e) {
      if (!this.primarySelected) {
        this.primarySelected = true;
        this.secondarySelected = false;
      }
    },

    clickSecondary: function(e) {
      if (!this.secondarySelected) {
        this.secondarySelected = true;
        this.primarySelected = false;
      }
    },

    // Sets the color of the selected color slot
    set: function(colorStr) {
      if (this.primarySelected) {
        this.primaryColor = colorStr;
      }
      else if (this.secondarySelected) {
        this.secondaryColor = colorStr;
      }
      else {
        throw "We've got a problem";
      }
    },

    get: function() {
      if (this.primarySelected) {
        this.primaryColor = colorStr;
      }
      else if (this.secondarySelected) {
        this.secondaryColor = colorStr;
      }
      else { 
        throw "We've got a problem";
      }
    }
  }
});

});