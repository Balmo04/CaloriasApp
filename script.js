const allBtn=document.getElementsByClassName("all-btn")
const txtCalPoints=document.getElementById("calorias-app")

let canDarkMode=false;
let total=0;

for(let i=0; i<allBtn.length; i++)
{
    allBtn[i].addEventListener("click", function(){
        assignValue(obj[i]);
    });
}

function assignValue(objeto)
{
    objeto.isPoint=!objeto.isPoint;
    suma(objeto.isPoint, objeto.points);
    styleBtn(objeto.isPoint);
}

function suma(isSelected, value)
{
    if(isSelected)
    {
        total+=value;
    }
    else
    {
        total-=value;
    }
    txtCalPoints.innerText=total;
}

function styleBtn(isSelected, canDarkMode){
    canDarkMode=!canDarkMode;
    if(isSelected && canDarkMode)
    {
        //Seleccionado y modo oscuro
    }
    else
    {
        //seleccionado 
    }
}