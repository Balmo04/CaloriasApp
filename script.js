/*Para el dark mode*/
const header=document.getElementById("header");
const headerTitles=document.getElementById("header-titles");
const main=document.getElementById("main");
const sectionFood=document.getElementById("section-food-text");
const sectionTotal=document.getElementById("section-total-text");
const transparency=document.getElementsByClassName("transparency");
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
    assignStyle(object.isValue, i);
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
            allBtn[position].classList.add("btn-dark-mode");
        }
        else{
            allBtn[position].classList.add("btn-light-mode");
        }       
    }
    else{
        allBtn[position].classList.remove("btn-light-mode"); 
        allBtn[position].classList.remove("btn-dark-mode");    
    }
}


btnDarkMode.addEventListener("click", function(){   
    isDarkMode=!isDarkMode;//Lo niega en todo 
    changeStylePage();
});

function changeStylePage(){
    if(isDarkMode)
    {
        btnDarkMode.classList.replace("bg-red", "bg-blue");
        header.classList.replace("bg-red", "bg-blue");
        headerTitles.classList.add("txt-white");
        main.classList.replace("bg-white","bg-gray");
        sectionFood.classList.add("txt-white");
        sectionTotal.classList.add("txt-white");
        for(i=0; i<allBtn.length; i++){
            allBtn[i].classList.replace("btn-light-mode","btn-dark-mode");       
        }
    }
    else{
        btnDarkMode.classList.replace("bg-blue", "bg-red");
        header.classList.replace("bg-blue", "bg-red");
        headerTitles.classList.remove("txt-white");
        main.classList.replace("bg-gray","bg-white");
        sectionFood.classList.remove("txt-white");
        sectionTotal.classList.remove("txt-white"); 
        for(i=0; i<allBtn.length; i++){
            allBtn[i].classList.replace("btn-dark-mode","btn-light-mode")
        }    
    }
}
