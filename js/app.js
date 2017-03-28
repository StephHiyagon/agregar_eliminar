var newAdd=document.getElementById("input");
var resources=[];
var adicionar=document.getElementById("crear");
//var array;


function close(event){
  document.getElementById('ocultar').style.display = 'none';
}

function muestra(event){
  document.getElementById('ocultar').style.display="inline-block";
}

function cargaDoc(event){
  var cerrar=document.getElementById('cerrar');
  var mostrar=document.getElementById('spoiler1');
  cerrar.addEventListener('click', close);
  mostrar.addEventListener('click',muestra);
}

window.addEventListener('load', cargaDoc);



//función que convierte en un arreglo lo ingresado en el input
function addResource (){
  for (var prop in resources) {
    var text= resources[prop]._nombre;
    console.log(text);
    cuentaSpan(text);
    refrescar(newAdd);
  }
}

//función que refresca el input
function refrescar(newAdd){
  newAdd.value="";
}

//función que verifica que se haya agregado un input con contenido y que el contenido no se repita
function cuentaSpan(text){
  if(text != "" ){
    var spanAnt= document.getElementById("div1").getElementsByTagName('span');
//  console.log(spanAnt);
    for(var i=0; i<spanAnt.length;i++){
      if(spanAnt[i].id==text)
      return false;
    }

    crearSpan(text);
  }
  return false;
}

//función crea cada span
function crearSpan(text1){
  var element=document.getElementById('div1');
  var span=document.createElement("span");
  span.innerHTML= text1 + "<a onclick='eliminar(this)'>X</a>";
  span.setAttribute("id",text1);
  span.setAttribute("class", "recurso");
  element.appendChild(span);
}

//función elimina elemento
function eliminar(elemento){
    console.log(elemento);
    var id=elemento.parentNode.getAttribute("id");
    console.log(id);
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
    removeItemFromArr(id);
}

function removeItemFromArr(item) {
    for (var prop  in resources) {
      if(resources[prop]._nombre==item){
       delete resources[prop];
      }
    }
}

//función constructora
function Recurso (nombre){
  this._nombre=nombre;
}

//función para agregar objetos al arreglo
function agregar(event){
  var resourcesSeparar=newAdd.value.split(",");
  for(var i=0; i<resourcesSeparar.length;i++){
    var nuevoRecurso = new Recurso(resourcesSeparar[i]);
    resources.push(nuevoRecurso);
  }
  addResource();
}


adicionar.addEventListener('click', agregar);
