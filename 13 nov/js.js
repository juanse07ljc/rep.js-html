/*const array =[1,2,3,4,5];

for (let i =0; i < array.length; i++) {
    console.log(array[1]);
}*/

const mi_parrafo=document.getElementById("mi_parrafo");


const boton_cambiar_texto=document.querySelector("#boton_cambiar_texto"); //selector ID,clase,
const boton_agregar_texto=document.getElementById


("boton_agregar_texto");
const contenedor=document.getElementById("contenedor");
boton_cambiar_texto.addEventListener("click",()=>{
    mi_parrafo.textContent="hola amigo"
});


boton_agregar_texto.addEventListener("click",()=>{
    const nuevo_parrafo=document.createElement("p");
    nuevo_parrafo.textContent="este parrafo no existia";
    contenedor.appendChild(nuevo_parrafo);
});

boton_cambiar_color.addEventListener("click",()=>{
    mi_parrafo.style.color="red"

    if (boton_cambiar_color.addEventListener("click")=2){
        mi_parrafo.style.color="yellow"
    
    }
    
});
