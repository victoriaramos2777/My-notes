//constantes 
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
        contenido2.remove();
    }
  
   } 
   //para encontrar el elemento submit de la forma
   if(e.target.id ==='agregar-nota'){
      
      //evento para escuchar evento para  boton 
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
<form id="main-form">
<input type="text" name="titulo" id="titulo" placeholder="Agregar titulo">
<input type="text" name="fecha" id="nota" placeholder="Agregar tu nota">
<input type="text" name="fecha" id="fecha" placeholder="Agregar fecha">
<button type=" button" id="borrar-nota"> Borrar Nota</button>

<button type=" submit" id="agregar-nota">Agregar nota</button>
</form>
 `;

 
 //crear una constatante para el boton de borrar
 
 const btnDeBorrar = document.getElementById('borrar-nota');
//funcion para agregar htmnl dinamico en base a los resultados de la forma
function agregarNotaDinamico(titulo,nota,fecha){
    const notaHtml = document.createElement('div')
    notaHtml.innerHTML =`
    <h2>${titulo}</h2>
    <p>${nota}</p>
    <p>${fecha}</p> `  

    return notaHtml;
}



