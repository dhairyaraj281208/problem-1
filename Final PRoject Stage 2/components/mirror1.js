AFRAME.registerComponent('mirror', {

  init: function () {
    // Do something when component first attached.
    var position = {x: -1.5, y: 0, z: -4}
    this.createMirror(position)    


  },

  createMirror: function(position){
    var scene = document.querySelector("scene")
    var plane1 = document.createElement("a-entity")
    plane1.setAttribute("geometry", { primitive: 'plane', width: '2', height: "2"})
    plane1.setAttribute('position', {position});
    plane1.setAttribute("rotation", {
      x: '-90',
      y: '0',
      z: '0'
    });
    plane1.setAttribute("color", "#7BC8A4")
    plane1.setAttribute("shadow")

    scene.appendChild(plane1)

  }
});
