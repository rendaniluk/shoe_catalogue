//The dom
var colors = document.querySelector('.options');
var size = document.querySelector('.sizes');
var searchBtn = document.querySelector('.search');
var template = document.querySelector('.template')
var shoeDetails = document.querySelector('.shoeDetails')
//*****************DOM END***************************
//List of objects
var Ladies = [{
        color: 'Dark Brown',
        size: 4,
        price: 500,
        in_stock: 5
    },
    {
        color: 'Dark Brown',
        size: 5,
        price: 500,
        in_stock: 2
    },
    {
        color: 'Dark Brown',
        size: 6,
        price: 500,
        in_stock: 10
    },
    {
        color: 'Dark Brown',
        size: 7,
        price: 500,
        in_stock: 9
    },
    {
        color: 'Dark Brown',
        size: 8,
        price: 500,
        in_stock: 3
    },
    {
        color: 'White',
        size: 4,
        price: 258,
        in_stock: 5
    },
    {
        color: 'White',
        size: 5,
        price: 258,
        in_stock: 2
    },
    {
        color: 'White',
        size: 6,
        price: 258,
        in_stock: 10
    },
    {
        color: 'White',
        size: 7,
        price: 258,
        in_stock: 9
    },
    {
        color: 'White',
        size: 8,
        price: 258,
        in_stock: 3
    },
    {
        color: 'Green',
        size: 4,
        price: 458,
        in_stock: 5
    },
    {
        color: 'Green',
        size: 5,
        price: 458,
        in_stock: 2
    },
    {
        color: 'Green',
        size: 6,
        price: 458,
        in_stock: 10
    },
    {
        color: 'Green',
        size: 7,
        price: 458,
        in_stock: 9
    },
    {
        color: 'Green',
        size: 8,
        price: 458,
        in_stock: 3
    }
];


var myTemplate = Handlebars.compile(template.innerHTML);
searchBtn.addEventListener('click', function() {
    var sizeSelected = size.value;
    var colorSelected = colors.value;
    var shoeList = [];
    for (var i = 0; i < Ladies.length; i++) {
        if (colorSelected === Ladies[i].color && sizeSelected == Ladies[i].size) {
            var selectedList =Ladies[i];
            shoeList.push(selectedList);
        }
    }
    var shoeInfo = myTemplate({shoeDetails: shoeList});
    shoeDetails.innerHTML = shoeInfo;
    size.value = "select size";
    colors.value ="select color";
});
