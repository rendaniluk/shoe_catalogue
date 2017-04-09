var darkB = document.querySelector('.darkbrown');
var white = document.querySelector('.white');
var gray = document.querySelector('.gray');
var Blue = document.querySelector('.blue');
var Green = document.querySelector('.green');
var black = document.querySelector('.black');
var template = document.querySelector('.template')
var shoeDetails_flats = document.querySelector('.shoeDetails_flats')


var Men = [{
  color: 'Dark Brown',
  size: 6,
  price: 980,
  in_stock: 5
}, {
  color: 'Dark Brown',
  size: 7,
  price: 980,
  in_stock: 2
}, {
  color: 'Dark Brown',
  size: 8,
  price: 980,
  in_stock: 10
}, {
  color: 'Dark Brown',
  size: 9,
  price: 980,
  in_stock: 9
}, {
  color: 'Dark Brown',
  size: 10,
  price: 980,
  in_stock: 3
}, {
  color: 'Blue',
  size: 6,
  price: 699,
  in_stock: 5
}, {
  color: 'Blue',
  size: 7,
  price: 699,
  in_stock: 2
}, {
  color: 'Blue',
  size: 8,
  price: 699,
  in_stock: 10
}, {
  color: 'Blue',
  size: 9,
  price: 699,
  in_stock: 9
}, {
  color: 'Blue',
  size: 10,
  price: 699,
  in_stock: 3
}, {
  color: 'White',
  size: 6,
  price: 869,
  in_stock: 5
}, {
  color: 'White',
  size: 7,
  price: 869,
  in_stock: 2
}, {
  color: 'White',
  size: 8,
  price: 869,
  in_stock: 10
}, {
  color: 'White',
  size: 9,
  price: 869,
  in_stock: 9
}, {
  color: 'White',
  size: 10,
  price: 869,
  in_stock: 3
}]

var myTemplate = Handlebars.compile(template.innerHTML);
var imgValue = function(evt) {
  var mmm = evt.target.value;
  var shoeList = [];
  for (var i = 0; i < Men.length; i++) {
    var imgSelected = Men[i];
    if (Men[i].color.startsWith(mmm)) {
      shoeList.push(imgSelected);
      var shoeInfo = myTemplate({
        shoeDetails_flats: shoeList
      });
      shoeDetails_flats.innerHTML = shoeInfo;
    } // else if (Ladies[i].color.startsWith(mmm) == null) {
    //   var massage = "No Stock Avalailable"
    //   shoeDetails.innerHTML = massage;
    // }
  }
}
white.addEventListener('click', imgValue);
darkB.addEventListener('click', imgValue);
// gray.addEventListener('click', imgValue);
Blue.addEventListener('click', imgValue);
// Green.addEventListener('click', imgValue);
// black.addEventListener('click', imgValue);
