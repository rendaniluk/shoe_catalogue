//The dom
var colors = document.querySelector('.options');
var size = document.querySelector('.sizes');
var searchBtn = document.querySelector('.search');
var template = document.querySelector('.template')
var shoeDetails = document.querySelector('.shoeDetails')
//*****************DOM END***************************
var kids = [{
        color: 'Blue',
        size: 1,
        price: 350,
        in_stock: 5
    }, {
        color: 'Blue',
        size: 2,
        price: 350,
        in_stock: 2
    }, {
        color: 'Blue',
        size: 3,
        price: 350,
        in_stock: 10
    }, {
        color: 'Blue',
        size: 4,
        price: 350,
        in_stock: 9
    }, {
        color: 'Blue',
        size: 5,
        price: 350,
        in_stock: 3
    }, {
        color: 'White',
        size: 1,
        price: 400,
        in_stock: 5
    }, {
        color: 'White',
        size: 2,
        price: 400,
        in_stock: 2
    }, {
        color: 'White',
        size: 3,
        price: 400,
        in_stock: 10
    }, {
        color: 'White',
        size: 4,
        price: 400,
        in_stock: 9
    }, {
        color: 'White',
        size: 5,
        price: 400,
        in_stock: 3
    }, {
        color: 'Black',
        size: 1,
        price: 600,
        in_stock: 5
    }, {
        color: 'Black',
        size: 2,
        price: 600,
        in_stock: 2
    }, {
        color: 'Black',
        size: 3,
        price: 600,
        in_stock: 10
    }, {
        color: 'Black',
        size: 4,
        price: 600,
        in_stock: 9
    }, {
        color: 'Black',
        size: 5,
        price: 600,
        in_stock: 3
    }, {
        color: 'Dark Brown',
        size: 6,
        price: 980,
        in_stock: 5
    },
    {
        color: 'Dark Brown',
        size: 7,
        price: 980,
        in_stock: 2
    },
    {
        color: 'Dark Brown',
        size: 8,
        price: 980,
        in_stock: 10
    },
    {
        color: 'Dark Brown',
        size: 9,
        price: 980,
        in_stock: 9
    },
    {
        color: 'Dark Brown',
        size: 10,
        price: 980,
        in_stock: 3
    },
    {
        color: 'Blue',
        size: 6,
        price: 699,
        in_stock: 5
    },
    {
        color: 'Blue',
        size: 7,
        price: 699,
        in_stock: 2
    },
    {
        color: 'Blue',
        size: 8,
        price: 699,
        in_stock: 10
    },
    {
        color: 'Blue',
        size: 9,
        price: 699,
        in_stock: 9
    },
    {
        color: 'Blue',
        size: 10,
        price: 699,
        in_stock: 3
    },
    {
        color: 'Gray',
        size: 6,
        price: 869,
        in_stock: 5
    },
    {
        color: 'Gray',
        size: 7,
        price: 869,
        in_stock: 2
    },
    {
        color: 'Gray',
        size: 8,
        price: 869,
        in_stock: 10
    },
    {
        color: 'Gray',
        size: 9,
        price: 869,
        in_stock: 9
    },
    {
        color: 'Gray',
        size: 10,
        price: 869,
        in_stock: 3
    }
]

var myTemplate = Handlebars.compile(template.innerHTML);
searchBtn.addEventListener('click', function() {
    var sizeSelected = size.value;
    var colorSelected = colors.value;
    var shoeList = [];
    for (var i = 0; i < kids.length; i++) {
        if (colorSelected === kids[i].color && sizeSelected == kids[i].size) {
            var selectedList = ["Color:" + " " + kids[i].color, "Size:" + kids[
                    i].size, "Price:" + "R" + kids[i].price, "Stock:" +
                kids[i].in_stock
            ];
            shoeList.push(selectedList);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        }
    }
});
