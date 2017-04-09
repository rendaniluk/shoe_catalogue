//The dom
var colors = document.querySelector('.options');
var size = document.querySelector('.sizes');
var searchBtn = document.querySelector('.search');
var template = document.querySelector('.template')
var shoeDetails = document.querySelector('.shoeDetails')
//*****************DOM END***************************
var Men = [{
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
    for (var i = 0; i < Men.length; i++) {
        var selectedList = Men[i];

        if (colorSelected === Men[i].color && sizeSelected == Men[i].size) {
            shoeList.push(selectedList);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        } else if (colorSelected === Men[i].color && sizeSelected == "select size") {
            shoeList.push(selectedList);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        } else if (colorSelected === "select color" && sizeSelected == Men[i].size) {
            shoeList.push(selectedList);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        } else if (colorSelected === "select color" && sizeSelected == "select size") {
            var massage = "You must select size or color!"
            shoeDetails.innerHTML = massage;
        }else if (colorSelected === "all" || sizeSelected == "all") {
            shoeList.push(Men[i]);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        }
    }
    size.value = "select size";
    colors.value = "select color";
});
