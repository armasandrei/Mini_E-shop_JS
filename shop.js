//Object of product


//  Array of product 
let products = [

    //HW1: upgrade the product structure adding image url
{
    name: "Pacman III Ultraq",
rate: 4.5,
price: 
{
    amount: 50.00,
    unit: "USD"
} 
}, //0
{
    name: "The Witcher",
rate: 5.0,
price: 
{
    amount: 200.00,
    unit: "USD"
} 
}, //1
{
    name: "Snake, The Beginings",
rate: 3.5,
price: 
{
    amount: 10.00,
    unit: "USD"
} 
},  //2
{
    name: "Daqrk souls III",
rate: 1.5,
price: 
{
    amount: 15.00,
    unit: "USD"
} 
},  //3
{
    name: "World of Taqnks VIII",
rate: 0.5,
price: 
{
    amount: 30.00,
    unit: "USD"
} 
}  //4


]

let cart = []

function addToCart( i ){
    let message = `The product "${products[i].name}" was added to the cart`
    alert(message)
    cart.push( products [i])
}

function showProducts( list ) {
 
    catalog.innerHTML += ``
    
    for( let i=0; i<list.length; i++){
       
        catalog.innerHTML += `
        <div class="product">
             <h2>${list[i].name}</h2>
             <div>${list[i].rate}</div>
             <div>${list[i].price.amount}${list[i].price.unit}</div>
             <button onclick="addToCart(${i})"> ADD to Card</button>
             </div>
        
        `
        
    }
}

showProducts(products)