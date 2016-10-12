var canvas = new fabric.Canvas('c');
var imgElement = document.getElementById('blank-image');
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100
});
canvas.add(imgInstance);
