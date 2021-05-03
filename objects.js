/*Esta es mi clase para desarrollar objetos*/
class pointList {
    /*Necesita de un constructor donde se pasan parametros*/
    constructor(food, points, isPoint){
        this.food=food; /*this.=food es mi objeto=foot es el parametro*/
        this.points=points;
        this.isPoint=isPoint;
        this.info=`Es el boton ${this.food}, con ${this.points} de cal y es ${this.isPoint}`;
    } 
    /*Esta funcion dentro de la clase, por lo que se llama metodo*/
    verInfo(){
        console.log(this.info);
    }
        
};/*Esta es mi clase para hacer objetos*/
/* */
let burger = new pointList("hamburgesa",100, false);
let iceCream = new pointList("helado", 200, false);
let soda = new pointList("soda",300, false);
let pizza = new pointList("pizza",400, false);
