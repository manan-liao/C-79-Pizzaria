menu_list_array = ["Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie pizza", "Veg Extravaganza Pizza"];

function getmenu(){
    var htmldata;
    htmldata="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<1i>' + menu_list_array[i] + '</1i>'
    }
    htmldata=htmldata+"</o1>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function addedmenu(){
    var htmldata;
    var item=document.getElementById("add_item").nodeValue;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}