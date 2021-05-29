const allBtn=document.getElementsByClassName("all-btn");
const txtCalPoints=document.getElementById("calorias-app");
const btnDarkMode=document.getElementById("btn-dark-mode");

for(let i=0; i<allBtn.length; i++)
{
    allBtn[i].addEventListener("click", function(){
        assignValue(obj[i], i);
    });
}

function assignValue(object, position)
{
    object.isPoint=!object.isPoint;
    suma(object.isPoint, object.points); 
    assignStyle(object.isPoint, position);
}
let total=0;
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
        allBtn[position].classList.add("focus");
    }
    else
    {
        allBtn[position].classList.remove("focus");
    }
}

let isDarkMode=false;
btnDarkMode.addEventListener("click", function(){   
    isDarkMode=!isDarkMode;//Lo niega en todo 
    changeStylePage();
});

function changeStylePage(){
    if(isDarkMode)
    {
        console.log(isDarkMode);
    }
    else{
        console.log(isDarkMode); 
    }
    //putDarkModeValue(isDarkMode);
}

function putDarkModeValue(stage){
    for(let i=0; i<allBtn.length; i++)
    {
        allBtn[i].value=stage;
        console.log(allBtn[i].value);
    }
}