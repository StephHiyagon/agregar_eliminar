var newAdd=document.getElementById("input");
var resources=[];
var adicionar=document.getElementById("crear");
var array;


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
  for(var i=0; i<resources.length;i++){
    var array=(resources[i]._nombre).split(",");
      console.log(array);
    for(var j=0; j< array.length;j++){
      var text= array[j];
      console.log(text);
      cuentaSpan(text);
      refrescar(newAdd);
    }
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
    var id=elemento.parentNode.getAttribute("id");
    console.log(id);
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
    removeItemFromArr(array,id);
}

function removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );

    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
}

//función constructora
function Recurso (nombre){
  this._nombre=nombre;
}

//función para agregar objetos al arreglo
function agregar(event){
  var nuevoRecurso = new Recurso(newAdd.value);
  resources.push(nuevoRecurso);
  addResource();
}


adicionar.addEventListener('click', agregar);
