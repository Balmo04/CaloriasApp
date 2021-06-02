/*Para el dark mode*/
const header=document.getElementById("header");
const headerTitles=document.getElementById("header-titles");
const main=document.getElementById("main");
const sectionFood=document.getElementById("section-food-text");
const sectionTotal=document.getElementById("section-total-texto");
/*Funcionalidad*/
const allBtn=document.getElementsByClassName("all-btn");
const txtCalPoints=document.getElementById("calorie-accumulator");
const btnDarkMode=document.getElementById("btn-dark-mode");

let total=0;
let isDarkMode=false;

for(let i=0; i<allBtn.length; i++)
{
    allBtn[i].addEventListener("click", function(){
        assignValue(obj[i], i);
    });
}

function assignValue(object, position)
{
    object.isValue=!object.isValue;
    suma(object.isValue, object.points); 
    assignStyle(object.isValue, position);
}

function suma(isSelected, value)
{
    if(isSelected){
        
        total+=value;
    }
    else {
        total-=value;
    }
    txtCalPoints.innerText=total;
}

function assignStyle(isSelected, position){
    if(isSelected)
    {
        if(isDarkMode){
            allBtn[position].classList.add("btn-section-style-dark-mode"); 
        }
        else{
            allBtn[position].classList.add("btn-section-style-day-mode");
        }
        
    }
    else
    {
        allBtn[position].classList.remove("btn-section-style-dark-mode");
        allBtn[position].classList.remove("btn-section-style-day-mode"); 
    }
}


btnDarkMode.addEventListener("click", function(){   
    isDarkMode=!isDarkMode;//Lo niega en todo 
    changeStylePage();
});

function changeStylePage(){
    if(isDarkMode)
    {
        header.classList.add("bg-blue");
        headerTitles.classList.add("txt-white");
        main.classList.add("bg-gray");
        sectionFood.classList.add("txt-white");
        sectionTotal.classList.add("txt-white");
    }
    else{
        header.classList.remove("bg-blue");
        headerTitles.classList.remove("txt-white");
        main.classList.remove("bg-gray");
        sectionFood.classList.remove("txt-white");
        sectionTotal.classList.remove("txt-white");        
    }
}