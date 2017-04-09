var darkB = document.querySelector('.darkbrown');
var white = document.querySelector('.white');
var gray = document.querySelector('.gray');
var Blue = document.querySelector('.blue');
var Green = document.querySelector('.green');
var black = document.querySelector('.black');
var template = document.querySelector('.template')
var shoeDetails_flats = document.querySelector('.shoeDetails_flats')


var Ladies = [{
    color: 'Dark Brown',
    size: 4,
    price: 500,
    in_stock: 5
  }, {
    color: 'Dark Brown',
    size: 5,
    price: 500,
    in_stock: 2
  }, {
    color: 'Dark Brown',
    size: 6,
    price: 500,
    in_stock: 10
  }, {
    color: 'Dark Brown',
    size: 7,
    price: 500,
    in_stock: 9
  }, {
    color: 'Dark Brown',
    size: 8,
    price: 500,
    in_stock: 3
  }, {
    color: 'White',
    size: 4,
    price: 258,
    in_stock: 5
  }, {
    color: 'White',
    size: 5,
    price: 258,
    in_stock: 2
  }, {
    color: 'White',
    size: 6,
    price: 258,
    in_stock: 10
  }, {
    color: 'White',
    size: 7,
    price: 258,
    in_stock: 9
  }, {
    color: 'White',
    size: 8,
    price: 258,
    in_stock: 3
  }, {
    color: 'Green',
    size: 4,
    price: 458,
    in_stock: 5
  }, {
    color: 'Green',
    size: 5,
    price: 458,
    in_stock: 2
  }, {
    color: 'Green',
    size: 6,
    price: 458,
    in_stock: 10
  }, {
    color: 'Green',
    size: 7,
    price: 458,
    in_stock: 9
  }, {
    color: 'Green',
    size: 8,
    price: 458,
    in_stock: 3
  }, {
    color: 'Gray',
    size: 4,
    price: 358,
    in_stock: 5
  }, {
    color: 'Gray',
    size: 5,
    price: 358,
    in_stock: 2
  }, {
    color: 'Gray',
    size: 6,
    price: 358,
    in_stock: 10
  }, {
    color: 'Gray',
    size: 7,
    price: 358,
    in_stock: 9
  }, {
    color: 'Gray',
    size: 8,
    price: 358,
    in_stock: 3
  }, {
    color: 'Blue',
    size: 4,
    price: 150,
    in_stock: 5
  }, {
    color: 'Blue',
    size: 5,
    price: 150,
    in_stock: 2
  }, {
    color: 'Blue',
    size: 6,
    price: 150,
    in_stock: 10
  }, {
    color: 'Blue',
    size: 7,
    price: 150,
    in_stock: 9
  }, {
    color: 'Blue',
    size: 8,
    price: 150,
    in_stock: 3
  }, {
    color: 'Black',
    size: 4,
    price: 500,
    in_stock: 5
  }, {
    color: 'Black',
    size: 5,
    price: 500,
    in_stock: 2
  }, {
    color: 'Black',
    size: 6,
    price: 500,
    in_stock: 10
  }, {
    color: 'Black',
    size: 7,
    price: 500,
    in_stock: 9
  }, {
    color: 'Black',
    size: 8,
    price: 500,
    in_stock: 3
  }

];
var myTemplate = Handlebars.compile(template.innerHTML);
var imgValue = function(evt) {
  var mmm = evt.target.value;
  var shoeList = [];
  for (var i = 0; i < Ladies.length; i++) {
    var imgSelected = Ladies[i];
    if (Ladies[i].color.startsWith(mmm)) {
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
gray.addEventListener('click', imgValue);
Blue.addEventListener('click', imgValue);
Green.addEventListener('click', imgValue);
black.addEventListener('click', imgValue);
