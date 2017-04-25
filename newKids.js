(function() {
  'use strict';

  function initTemplate(templateSelector) {
    var templateText = document.querySelector(templateSelector).innerHTML;
    return Handlebars.compile(templateText);
  }

  var filterTemplate = initTemplate('.dropDownsTemplates');
  var filters = document.querySelector('.filters');

  var kidsTemplate = initTemplate('.kidsTemplate');
  var kidsElement = document.querySelector('.shoeDetails_flats');

  var addButton = document.querySelector('.addButton');

var hideShow = document.querySelector('.add')
var hideshowBtn = document.querySelector('.newStock')

  var addBrand = document.querySelector('.productBrand');
  var addColor = document.querySelector('.productColor');
  var addSize = document.querySelector('.productSize');
  var addPrice = document.querySelector('.productPrice');
  var addStock = document.querySelector('.productStock');

//show the add stock inputs function.
  function hide_Show_Div() {
      var hideShow = document.querySelector('.add');
      if (hideShow.style.display === 'none') {
          hideShow.style.display = 'block';
      } else {
          hideShow.style.display = 'none';
      }
  }
  //Event to addStock button
hideshowBtn.addEventListener('click',hide_Show_Div);
  var kids = [{
    color: 'Blue',
    brand: 'Basic',
    size: 3,
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
    color: 'White',
    brand: 'Basic',
    size: 1,
    price: 400,
    in_stock: 5
  }, {
    color: 'White',
    brand: 'Converse',
    size: 1,
    price: 400,
    in_stock: 2
  }, {
    color: 'White',
    brand: 'Fila',
    size: 3,
    price: 400,
    in_stock: 10
  }, {
    color: 'White',
    brand: 'Jordan',
    size: 4,
    price: 400,
    in_stock: 9
  }, {
    color: 'White',
    brand: 'Cavella',
    size: 4,
    price: 400,
    in_stock: 3
  }, {
    color: 'Black',
    brand: 'Basic',
    size: 5,
    price: 250,
    in_stock: 5
  }, {
    color: 'Black',
    brand: 'Converse',
    size: 2,
    price: 300,
    in_stock: 20
  }, {
    color: 'Black',
    brand: 'Fila',
    size: 3,
    price: 500,
    in_stock: 10
  }, {
    color: 'Black',
    brand: 'Jordan',
    size: 4,
    price: 600,
    in_stock: 9
  }, {
    color: 'Black',
    brand: 'Cavella',
    size: 5,
    price: 700,
    in_stock: 6
  }];
//avoiding same value repeating on dropdown
  function uniqueColorList(dataList) {
    var colors = [];
    var colorMap = {};
    for (var i = 0; i < dataList.length; i++) {
      var kidsData = dataList[i];
      if (colorMap[kidsData.color] === undefined) {
        colorMap[kidsData.color] = kidsData.color;
        colors.push(kidsData.color);
      }
    }
    return colors;
  }

//avoiding same value repeating on dropdown
  function uniqueSizesList(dataList) {
    var sizes = [];
    var sizeMap = {};
    for (var i = 0; i < dataList.length; i++) {
      var kidsData = dataList[i];
      if (sizeMap[kidsData.size] === undefined) {
        sizeMap[kidsData.size] = kidsData.size;
        sizes.push(kidsData.size);
      }
    }
    return sizes;
  }
//avoiding same value repeating on dropdown
  function uniqueBrandList(dataList) {
    var brands = [];
    var brandMap = {};
    for (var i = 0; i < dataList.length; i++) {
      var kidsData = dataList[i];
      if (brandMap[kidsData.brand] === undefined) {
        brandMap[kidsData.brand] = kidsData.brand;
        brands.push(kidsData.brand);
      }
    }
    return brands;
  }

  function showData(data, kidsList) {
    if (!kidsList) {
      kidsList = data;
    }
    var colors = uniqueColorList(data);
    var sizes = uniqueSizesList(data);
    var brands = uniqueBrandList(data);

    // for (var i = 0; i < kids.length; i++) {
    //     var dropDownData = kids[i];
    //     colors.push(dropDownData.color);
    //     sizes.push(dropDownData.size);
    //     brands.push(dropDownData.brand);
    // }

    filters.innerHTML = filterTemplate({
      colors: colors.sort(),
      brands: brands.sort(),
      sizes: sizes.sort(function(a, b) {
        return a - b;
      })
    });
    //displaying drop down
    kidsElement.innerHTML = kidsTemplate({
      kids: kidsList
    });
  }

  filters.addEventListener('click', function(evt) {
    if (evt.target.name === 'filterButton') {
      // get the references in the Event Listener as these elements are added dynamically
      var colorFilter = document.querySelector('.colorFilter');
      var sizeFilter = document.querySelector('.sizeFilter');
      var brandFilter = document.querySelector('.brandFilter');
      //getting the value of selected in drop down list
      var colorSelected = colorFilter.value;
      var sizeSelected = sizeFilter.value;
      var brandSelected = brandFilter.value;
      //empty array to keep filtered values
      var kidFiltered = [];
      //display all data
      if ((colorSelected || sizeSelected || brandSelected) ===
        '') {
        showData(kids);
        return;
      }
      //looping through kids to check for selected color,sizes or brand
      for (var i = 0; i < kids.length; i++) {
        var kid = kids[i];
        //filters color and size at the same time
        if ((colorSelected === kid.color && sizeSelected == kid.size) && brandSelected ==="") {
          kidFiltered.push(kid);
        }
        //filters color and brand at the same time
        else if ((colorSelected === kid.color && brandSelected ===
          kid.brand) && sizeSelected ==="") {
            kidFiltered.push(kid);
        }
        //filters brand and size at the same time
        else if (colorSelected === "" && (brandSelected ===
          kid.brand && sizeSelected == kid.size)) {
            kidFiltered.push(kid);
        }
        //filters brand, color and size at the same time
        else if (colorSelected === kid.color && brandSelected ===
          kid.brand && sizeSelected == kid.size) {
            kidFiltered.push(kid);
        }
        //filters color only
        else if (colorSelected === kid.color && (sizeSelected ==
          "" && brandSelected ==="")) {
            kidFiltered.push(kid);
        }
        //filters sizes only
        else if ((colorSelected === "" && brandSelected === "") && sizeSelected == kid.size){
          kidFiltered.push(kid);
        }
        //filters brand only
        else if (brandSelected === kid.brand && (colorSelected === "" && sizeSelected === "")){
          kidFiltered.push(kid);
        }
      }
      showData(kids, kidFiltered);
    }

  });
  //adding stock button
  addButton.addEventListener('click', function() {
    //getting the value of input text
    var brandValue = addBrand.value;
    var colorValue = addColor.value;
    var sizeValue  = addSize.value;
    var priceValue = addPrice.value;
    var stockValue = addStock.value;
    //avoiding adding blanks to only add when input text value is define
      if (brandValue !== ''
          && colorValue !== ''
          && sizeValue !== ''
          && priceValue !== ''
          && stockValue !== '') {
          kids.push({
                    brand:brandValue,
                    color:colorValue,
                    size:sizeValue,
                    price:priceValue,
                    in_stock:stockValue
              });
      }
      //clearing input text.
      addBrand.value = "";
      addColor.value = "";
      addSize.value = "";
      addPrice.value = "";
      addStock.value = "";
      showData(kids);
  });
  showData(kids);

})();
