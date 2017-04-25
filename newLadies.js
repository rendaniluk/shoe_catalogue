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
var Ladies = [{
    color: 'Dark Brown',
    brand: 'Converse',
    size: 4,
    price: 500,
    in_stock: 5
  }, {
    color: 'Dark Brown',
    brand: 'Converse',
    size: 5,
    price: 500,
    in_stock: 2
  }, {
    color: 'Dark Brown',
    brand: 'Converse',
    size: 6,
    price: 500,
    in_stock: 10
  }, {
    color: 'Dark Brown',
    brand: 'Converse',
    size: 7,
    price: 500,
    in_stock: 9
  }, {
    color: 'Dark Brown',
    brand: 'Converse',
    size: 8,
    price: 500,
    in_stock: 3
  }, {
    color: 'White',
    brand: 'Converse',
    size: 4,
    price: 258,
    in_stock: 5
  }, {
    color: 'White',
    brand: 'Converse',
    size: 5,
    price: 258,
    in_stock: 2
  }, {
    color: 'White',
    brand: 'Converse',
    size: 6,
    price: 258,
    in_stock: 10
  }, {
    color: 'White',
    brand: 'Converse',
    size: 7,
    price: 258,
    in_stock: 9
  }, {
    color: 'White',
    brand: 'Converse',
    size: 8,
    price: 258,
    in_stock: 3
  }, {
    color: 'Green',
    brand: 'Converse',
    size: 4,
    price: 458,
    in_stock: 5
  }, {
    color: 'Green',
    brand: 'Converse',
    size: 5,
    price: 458,
    in_stock: 2
  }, {
    color: 'Green',
    brand: 'Converse',
    size: 6,
    price: 458,
    in_stock: 10
  }, {
    color: 'Green',
    brand: 'Converse',
    size: 7,
    price: 458,
    in_stock: 9
  }, {
    color: 'Green',
    brand: 'Converse',
    size: 8,
    price: 458,
    in_stock: 3
  }, {
    color: 'Gray',
    brand: 'Converse',
    size: 4,
    price: 358,
    in_stock: 5
  }, {
    color: 'Gray',
    brand: 'Converse',
    size: 5,
    price: 358,
    in_stock: 2
  }, {
    color: 'Gray',
    brand: 'Converse',
    size: 6,
    price: 358,
    in_stock: 10
  }, {
    color: 'Gray',
    brand: 'Converse',
    size: 7,
    price: 358,
    in_stock: 9
  }, {
    color: 'Gray',
    brand: 'Converse',
    size: 8,
    price: 358,
    in_stock: 3
  }, {
    color: 'Blue',
    brand: 'Converse',
    size: 4,
    price: 150,
    in_stock: 5
  }, {
    color: 'Blue',
    brand: 'Converse',
    size: 5,
    price: 150,
    in_stock: 2
  }, {
    color: 'Blue',
    brand: 'Converse',
    size: 6,
    price: 150,
    in_stock: 10
  }, {
    color: 'Blue',
    brand: 'Converse',
    size: 7,
    price: 150,
    in_stock: 9
  }, {
    color: 'Blue',
    brand: 'Converse',
    size: 8,
    price: 150,
    in_stock: 3
  }, {
    color: 'Black',
    brand: 'Converse',
    size: 4,
    price: 500,
    in_stock: 5
  }, {
    color: 'Black',
    brand: 'Converse',
    size: 5,
    price: 500,
    in_stock: 2
  }, {
    color: 'Black',
    brand: 'Converse',
    size: 6,
    price: 500,
    in_stock: 10
  }, {
    color: 'Black',
    brand: 'Converse',
    size: 7,
    price: 500,
    in_stock: 9
  }, {
    color: 'Black',
    brand: 'Converse',
    size: 8,
    price: 500,
    in_stock: 3
  }

];
//avoiding same value repeating on dropdown
  function uniqueColorList(dataList) {
    var colors = [];
    var colorMap = {};
    for (var i = 0; i < dataList.length; i++) {
      var LadiesData = dataList[i];
      if (colorMap[LadiesData.color] === undefined) {
        colorMap[LadiesData.color] = LadiesData.color;
        colors.push(LadiesData.color);
      }
    }
    return colors;
  }

//avoiding same value repeating on dropdown
  function uniqueSizesList(dataList) {
    var sizes = [];
    var sizeMap = {};
    for (var i = 0; i < dataList.length; i++) {
      var LadiesData = dataList[i];
      if (sizeMap[LadiesData.size] === undefined) {
        sizeMap[LadiesData.size] = LadiesData.size;
        sizes.push(LadiesData.size);
      }
    }
    return sizes;
  }
//avoiding same value repeating on dropdown
  function uniqueBrandList(dataList) {
    var brands = [];
    var brandMap = {};
    for (var i = 0; i < dataList.length; i++) {
      var LadiesData = dataList[i];
      if (brandMap[LadiesData.brand] === undefined) {
        brandMap[LadiesData.brand] = LadiesData.brand;
        brands.push(LadiesData.brand);
      }
    }
    return brands;
  }

  function showData(data, LadiesList) {
    if (!LadiesList) {
      LadiesList = data;
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
      kids: LadiesList
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
      var ladyFiltered = [];
      //display all data
      if ((colorSelected || sizeSelected || brandSelected) ===
        '') {
        showData(Ladies);
        return;
      }
      //looping through kids to check for selected color,sizes or brand
      for (var i = 0; i < Ladies.length; i++) {
        var lady = Ladies[i];
        //filters color and size at the same time
        if ((colorSelected === lady.color && sizeSelected == lady.size) && brandSelected ==="") {
          ladyFiltered.push(lady);
        }
        //filters color and brand at the same time
        else if ((colorSelected === lady.color && brandSelected ===
          lady.brand) && sizeSelected ==="") {
            ladyFiltered.push(lady);
        }
        //filters brand and size at the same time
        else if (colorSelected === "" && (brandSelected ===
          lady.brand && sizeSelected == lady.size)) {
            ladyFiltered.push(lady);
        }
        //filters brand, color and size at the same time
        else if (colorSelected === lady.color && brandSelected ===
          lady.brand && sizeSelected == lady.size) {
            ladyFiltered.push(lady);
        }
        //filters color only
        else if (colorSelected === lady.color && (sizeSelected ==
          "" && brandSelected ==="")) {
            ladyFiltered.push(lady);
        }
        //filters sizes only
        else if ((colorSelected === "" && brandSelected === "") && sizeSelected == lady.size){
          ladyFiltered.push(lady);
        }
        //filters brand only
        else if (brandSelected === lady.brand && (colorSelected === "" && sizeSelected === "")){
          ladyFiltered.push(lady);
        }
      }
      showData(Ladies, ladyFiltered);
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
          Ladies.push({
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
      showData(Ladies);
  });
  showData(Ladies);

})();
