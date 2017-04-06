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
    }]

var myTemplate = Handlebars.compile(template.innerHTML);
searchBtn.addEventListener('click', function() {
    var sizeSelected = size.value;
    var colorSelected = colors.value;
    var shoeList = [];
    for (var i = 0; i < kids.length; i++) {
        var selectedList = kids[i];

        if (colorSelected === kids[i].color && sizeSelected == kids[i].size) {
            shoeList.push(selectedList);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        } else if (colorSelected === kids[i].color && sizeSelected == "select size") {
            shoeList.push(selectedList);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        } else if (colorSelected === "select color" && sizeSelected == kids[i].size) {
            shoeList.push(selectedList);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        } else if (colorSelected === "select color" && sizeSelected == "select size") {
            var massage = "You must select size or color!"
            shoeDetails.innerHTML = massage;
        }else if (colorSelected === "all" || sizeSelected == "all") {
            shoeList.push(kids[i]);
            var shoeInfo = myTemplate({
                shoeDetails: shoeList
            });
            shoeDetails.innerHTML = shoeInfo;
        }
    }
    size.value = "select size";
    colors.value = "select color";
});
