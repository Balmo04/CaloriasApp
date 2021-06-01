/*Esta es mi clase para desarrollar objetos*/
class pointList {
    /*Necesita de un constructor donde se pasan parametros*/
    constructor(food, points, isValue){
        this.food=food; /*this.food: es el atributo so puedo poder this.comida o otra cosa. Y =food es el parametro, tiene que ser el mismo*/
        this.points=points;
        this.isValue=isValue;
    } 
    /*Cualquier funcion dentro de la clase, por lo que se llama metodo*/
   
}/*Esta es mi clase para hacer objetos*/

const burger = new pointList("hamburgesa",100);
const soda = new pointList("soda",300);
const iceCream = new pointList("helado", 200);
const pizza = new pointList("pizza",400);
const obj=[burger,soda, iceCream, pizza];