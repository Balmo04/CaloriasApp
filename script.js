const btnDarkMode=document.getElementById("dark-mode");
const btnBurger=document.getElementById("burger");
const btnSoda=document.getElementById("soda");
const btnPizza=document.getElementById("pizza");
const btnIceCream=document.getElementById("ice-cream");

let cantDarkMode=false;
let cantSelect=false;
let points=[5,10,15,20]
let a=0,b=0,c=0,d=0;

burger.verInfo();
iceCream.verInfo();
soda.verInfo();
pizza.verInfo();

btnBurger.addEventListener("click", function(){
    a=  assignBurgerPoints(points,cantSelect);
    totalPuntos(a,b,c,d);
});
btnSoda.addEventListener("click", function(){
    b=  assignSodaPoints(points,cantSelect);
    totalPuntos(a,b,c,d);
});
btnPizza.addEventListener("click", function(){
    c=  assignPizzaPoints(points,cantSelect);
    totalPuntos(a,b,c,d);
});
btnIceCream.addEventListener("click", function(){
    d=  assignIceCreamPoints(points,cantSelect);
    totalPuntos(a,b,c,d);
});

function assignBurgerPoints(points1, isntSelect){
    let calBurger=0;
    if(isntSelect)
    {
        calBurger=0;
    }
    else
    {
        calBurger=points1[0];
    }
    isntSelect=!isntSelect;
    return calBurger;
}
function assignIceCreamPoints(points2, isntSelect){
    let calIceCream=0;
    if(isntSelect)
    {
        calIceCream=0;
    }
    else
    {
        calIceCream=points2[1];
    }
    isntSelect=!isntSelect;
    return calIceCream;
}
function assignPizzaPoints(points3, isntSelect){
    let calPizza=0;
    if(isntSelect)
    {
        calPizza=0; 
    }
    else
    {
        calPizza=points3[2];
    }
    isntSelect=!isntSelect;
    return calPizza;
}
function assignSodaPoints(points4, isntSelect){
    let calSoda=0;
    if(isntSelect)
    {
        calSoda=points4[3];
    }
    else
    {
        calSoda=0;
    }
    isntSelect=!isntSelect;
    return calSoda;
}

function totalPuntos(calPizza,calBurger,CalSoda,calIceCream){
 let totalCal=calPizza+calBurger+CalSoda+calIceCream;
 console.log(totalCal);
}