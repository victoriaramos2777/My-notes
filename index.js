//constantes 
const main = document.getElementById ('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById ('main-btn');

//constantes para almacenar contenido

const contenido2 = document.getElementById('contenido-2');

main.addEventListener('click', (e) => {
    
    if(e.target === mainBtn){
        contenidoInicial.remove();
        contenido2.append(agregarNota);
    }
    //console.log(e.target)

   //para confirmar el btn principal
   if(e.target.id === 'borrar-nota'){
    let checkClick = confirm("Seguro que quieres borrar?");
    if(checkClick == true){
        contenido2.remove();
    }
  
   } 
   //para encontrar el elemento submit de la forma
   if(e.target ==='agregar-nota'){
    const agregarNota = e.target.id;
      //evento para escuchar eventgo para  boton 
      agregarNota.addEventListener('click', (event) =>{
        console.log(event);
        //crear constantes de los inputs para obtener informacion de la forma
        const titulo = document.getElementById('titulo');
        const nota = document.getElementById('nota');
        const Fecha = document.getElementById('fecha');
        //crear objeto para guardar la informacion
        const formulario = {
            titulo1:titulo.value,
            notaText:nota.value,
            fecha1:Fecha.value,
        }
         
      })
   }

});

//elemento html

const agregarNota =document.createElement('div');
agregarNota.innerHTML = `
<form id="main-form">
<input type="text" name="titulo" id=" titulo" placeholder="Agregar titulo">
<input type="text" name="fecha" id="fecha" placeholder="Agregar tu nota">
<button type=" button" id="borrar-nota"> Borrar Nota</button>

<button type=" button" id="agregar-nota"> Agregar Fecha</button>
</form>
 `;

 //crear una constatante para el boton de borrar
 
 const btnDeBorrar = document.getElementById('borrar-nota');




