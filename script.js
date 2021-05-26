const btnDarkMode=document.getElementById("dark-mode");
const btnBurger=document.getElementById("burger");
const btnSoda=document.getElementById("soda");
const btnPizza=document.getElementById("pizza");
const btnIceCream=document.getElementById("ice-cream");
const caloriasApp=document.getElementById("calorias-app")

let cantDarkMode=false;
let cantSelect=false;
let points=[5,10,15,20];
let a=0,b=0,c=0,d=0;

burger.verInfo();
iceCream.verInfo();
soda.verInfo();
pizza.verInfo();

btnBurger.addEventListener("click", function(){
   assignBurgerPoints(points,cantSelect);
});
btnSoda.addEventListener("click", function(){
    assignSodaPoints(points,cantSelect);
});
btnPizza.addEventListener("click", function(){
    assignPizzaPoints(points,cantSelect);
});
btnIceCream.addEventListener("click", function(){
    assignIceCreamPoints(points,cantSelect);
});

function assignBurgerPoints(points0, isntSelect){
    let calBurger=0;
    isntSelect=!isntSelect;
    if(isntSelect)
    {
        calBurger=points0[0];
    }
    else
    {   
        calBurger=0;
    }
    console.log(calBurger);
}

function assignIceCreamPoints(points1, isntSelect){
    let calIceCream=0;
    isntSelect=!isntSelect;
    if(isntSelect)
    {
        calIceCream=points1[1];  
    }
    else
    {
        calIceCream=0; 
    }
}

function assignPizzaPoints(points2, isntSelect){
    let calPizza=0;
    isntSelect=!isntSelect;
    if(isntSelect)
    {
        calPizza=points2[2]; 
    }
    else
    {
        calPizza=0;    
    }
}

function assignSodaPoints(points3, isntSelect){
    let calSoda=0;
    isntSelect=!isntSelect;
    if(isntSelect)
    {
        calSoda=points3[3]; 
    }
    else
    {
        calSoda=0;   
    }
}

function totalPuntos(calPizza,calBurger,CalSoda,calIceCream){
    let totalCal=calPizza+calBurger+CalSoda+calIceCream;
    caloriasApp.innerText=totalCal;
}