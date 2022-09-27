//Url of the API
var product_api_url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

//Using Fetch API to get product json -asynchronous web api used with vanilla JS
async function getProducts(){
    var returningResponse = await fetch(product_api_url);
    var dataResponse = await returningResponse.json();
    var table = "<table>";
    var thead = "<th>" + "Id" + "<th>" + "Name" + "<th>" + "Price" + "<th>" + "Image" + "<th>" + "Colors" + "<th>" + "Rating"
    var hexValues=[];
    
    table+=thead
    
    //Iterating through each json object (nested objects with their arrays weren't mentioned)
    for (let index = 0; index < dataResponse.length; index++) {
        dataResponse[index].product_colors.forEach(element => {
            hexValues.push(element.hex_value)
        });
        
        if (dataResponse[index].rating===null) {
            dataResponse[index].rating = ""
        }
        if(dataResponse[index].rating>3){
            table+="<tr><td>" + dataResponse[index].id + "</td><td>" + dataResponse[index].name + "</td><td>" + dataResponse[index].price + "</td><td>" + '<img src="'+dataResponse[index].image_link+'">' + "</td><td>" + hexValues + "</td><td>" + dataResponse[index].rating
        }

        hexValues = [];
        
    }
    document.getElementById("product-table").innerHTML=table;
    
    //showing json data in the console
    console.log(dataResponse);
}

//Calling the function
getProducts();  


 




