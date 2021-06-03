/*Para el dark mode*/
const header=document.getElementById("header");
const headerTitles=document.getElementById("footer-titles");
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

function assignValue(object, i)
{
    object.isValue=!object.isValue;
    suma(object.isValue, object.points); 
    assignStyle(object.isValue, i)
}

function suma(isSelected, points){
    if(isSelected){
        total+=points;
    }
    else{
        total-=points;
    }
    txtCalPoints.innerText=total;
}

function assignStyle(isSelected, position){
    if(isSelected){
        if(isDarkMode){
            allBtn[position].classList.add("btn-section-style-dark-mode");
        }
        else{
            allBtn[position].classList.add("btn-section-style-day-mode");
        }       
    }
    else{
        allBtn[position].classList.remove("btn-section-style-day-mode"); 
        allBtn[position].classList.remove("btn-section-style-dark-mode");    
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
        for(i=0; i<allBtn.length; i++){
            allBtn[i].classList.replace("btn-section-style-day-mode","btn-section-style-dark-mode")
        }
    }
    else{
        header.classList.remove("bg-blue");
        headerTitles.classList.remove("txt-white");
        main.classList.remove("bg-gray");
        sectionFood.classList.remove("txt-white");
        sectionTotal.classList.remove("txt-white");  
        for(i=0; i<allBtn.length; i++){
            allBtn[i].classList.replace("btn-section-style-dark-mode","btn-section-style-day-mode")
        }    
    }
}
