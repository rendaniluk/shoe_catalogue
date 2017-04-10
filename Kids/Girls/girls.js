var darkB = document.querySelector('.darkbrown');
var white = document.querySelector('.white');
var gray = document.querySelector('.gray');
var Blue = document.querySelector('.blue');
var Green = document.querySelector('.green');
var black = document.querySelector('.black');
var template = document.querySelector('.template')
var shoeDetails_flats = document.querySelector('.shoeDetails_flats')


var kids = [{
  color: 'Blue',
  brand: 'Basic',
  size: 1,
  price: 350,
  in_stock: 5
}, {
  color: 'Blue',
  brand: 'Converse',
  size: 2,
  price: 350,
  in_stock: 2
}, {
  color: 'Blue',
  brand: 'Fila',
  size: 3,
  price: 350,
  in_stock: 10
}, {
  color: 'Blue',
  brand: 'Jordan',
  size: 4,
  price: 350,
  in_stock: 9
}, {
  color: 'Blue',
  brand: 'Cavella',
  size: 5,
  price: 350,
  in_stock: 3
}, {
  color: 'Green',
  brand: 'Lacoste',
  size: 1,
  price: 400,
  in_stock: 5
}, {
  color: 'Green',
  brand: 'Omega',
  size: 2,
  price: 400,
  in_stock: 2
}, {
  color: 'Green',
  brand: 'DH',
  size: 3,
  price: 400,
  in_stock: 10
}, {
  color: 'Green',
  brand: 'CAT',
  size: 4,
  price: 400,
  in_stock: 9
}, {
  color: 'Green',
  brand: 'Bronx',
  size: 5,
  price: 400,
  in_stock: 3
}, {
  color: 'Black',
  brand: 'Bata',
  size: 1,
  price: 250,
  in_stock: 5
}, {
  color: 'Black',
  brand: 'Reebok',
  size: 2,
  price: 300,
  in_stock: 20
}, {
  color: 'Black',
  brand: 'Addidas',
  size: 3,
  price: 500,
  in_stock: 10
}, {
  color: 'Black',
  brand: 'Puma',
  size: 4,
  price: 600,
  in_stock: 9
}, {
  color: 'Black',
  brand: 'Nike',
  size: 5,
  price: 700,
  in_stock: 6
}, {
  color: 'Dark Brown',
  brand: 'Bata',
  size: 1,
  price: 250,
  in_stock: 5
}, {
  color: 'Dark Brown',
  brand: 'Reebok',
  size: 2,
  price: 300,
  in_stock: 20
}, {
  color: 'Dark Brown',
  brand: 'Addidas',
  size: 3,
  price: 500,
  in_stock: 10
}, {
  color: 'Dark Brown',
  brand: 'Puma',
  size: 4,
  price: 600,
  in_stock: 9
}, {
  color: 'Dark Brown',
  brand: 'Nike',
  size: 5,
  price: 700,
  in_stock: 6
}, {
  color: 'Gray',
  brand: 'Bata',
  size: 1,
  price: 250,
  in_stock: 5
}, {
  color: 'Gray',
  brand: 'Reebok',
  size: 2,
  price: 300,
  in_stock: 20
}, {
  color: 'Gray',
  brand: 'Addidas',
  size: 3,
  price: 500,
  in_stock: 10
}, {
  color: 'Gray',
  brand: 'Puma',
  size: 4,
  price: 600,
  in_stock: 9
}, {
  color: 'Gray',
  brand: 'Nike',
  size: 5,
  price: 700,
  in_stock: 6
}]

var myTemplate = Handlebars.compile(template.innerHTML);
var imgValue = function(evt) {
  var mmm = evt.target.value;
  var shoeList = [];
  for (var i = 0; i < kids.length; i++) {
    var imgSelected = kids[i];
    if (kids[i].color.startsWith(mmm)) {
      shoeList.push(imgSelected);
      var shoeInfo = myTemplate({
        shoeDetails_flats: shoeList
      });
      shoeDetails_flats.innerHTML = shoeInfo;
    } // else if (kids[i].color.startsWith(mmm) == null) {
    //   var massage = "No Stock Avalailable"
    //   shoeDetails.innerHTML = massage;
    // }
  }
}
// white.addEventListener('click', imgValue);
darkB.addEventListener('click', imgValue);
gray.addEventListener('click', imgValue);
Blue.addEventListener('click', imgValue);
Green.addEventListener('click', imgValue);
black.addEventListener('click', imgValue);
