//constantes iniciales
const main = document.getElementById ('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById ('main-btn');

//constantes para almacenar contenido

const contenido2 = document.getElementById('contenido-2');
const contenidoNotas =document.getElementById('cont-notas');

//crear una variable global para almacenar elementos
let mainForm;
//variables globales
let titulo;
let nota;
let fecha;

main.addEventListener('click', (e) => {
  //para confirmar el btn principal  
    if(e.target === mainBtn){
        contenidoInicial.remove();

        contenido2.append(agregarNota);
     //asignar a mainForm el elemento de forma
        mainForm= document.getElementById('main-form');
    }
    
   //para confirmar si el boton es de borrar
   if(e.target.id === 'borrar-nota'){
    let checkClick = confirm("Seguro que quieres borrar?");
    if(checkClick == true){
        contenidoNotas.remove();

         contenidoInicial.append(contenido-1); 
    }
  
   } 

   
   //para encontrar el elemento submit de la forma
   if(e.target.id ==='agregar-nota'){
      
      //evento para escuchar evento para  boton agregar 
      mainForm.addEventListener('submit', (event) =>{

        
        //evitar que la accion por defecto pase
        event.preventDefault();
        
        //crear constantes de los inputs para obtener informacion de la forma
        const titulo = document.getElementById('titulo');
        const nota = document.getElementById('nota');
        const Fecha = document.getElementById('fecha');
        //crear objeto para guardar la informacion
        const formulario = {
            titulo1: titulo.value,
            notaText: nota.value,
            fecha1: Fecha.value,

            
        }
        //descontruir el objeto
        const {titulo1, notaText,fecha1}= formulario;
        //creo constante con informacion 
        const notaHtmlConInfo=agregarNotaDinamico(titulo1, notaText,fecha1);
        //insertar html nuevo
        contenidoNotas.append(notaHtmlConInfo);
         //reiniciar los valores der la form
         titulo.value = '';
         nota.value = '';
         Fecha.value = '';

      });
   }

});

//elemento html

const agregarNota =document.createElement('div');
agregarNota.innerHTML = `
<form id="main-form" class="form-m">
<input type="text" name="titulo" id="titulo" placeholder="Ingresa un titulo"class="titulo">
<input type="text" name="nota" id="nota" placeholder="Escribe aqui" class="nota">
<input type="text" name="fecha" id="fecha" placeholder="Ingresar fecha" class="fecha">
<div class="btn-2">
<button type="button" id="borrar-nota" class="btn-borrar"><img src="./assets/img/icons8-basura-llena-100.png" class="icon-borrar"></> Borrar Nota</button>
<button type="submit" id="agregar-nota" class="btn-agregar" >Agregar Nota</button>
</div>
</form>
 `;

 
 //crear una constatante para el boton de borrar
 
 const btnDeBorrar = document.getElementById('borrar-nota');


//funcion para agregar htmnl dinamico en base a los resultados de la forma
function agregarNotaDinamico(titulo,nota,fecha){
    const notaHtml = document.createElement('div')
    notaHtml.innerHTML =`
    <div class="conten3">
    <h2>${titulo}</h2>
    <p>${nota}</p>
    <p>${fecha}</p>
    </div> `;  

    return notaHtml;
}



