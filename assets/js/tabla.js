"use stict"
let btnBorrar;
const tablita = document.getElementById('tablita'); // tabla de cero.

function iniciarPagina() { // carga pagina por completo
    /* const agregar = document.getElementById('agregar'); // boton agregar . . .  */

    let cargaEjemplo = [];
    /* { // cargo el arreglo con ejemplos
                "Nombre": "Carlos",
                "Apellido": "Medina",
                "Email": "carlitos@blalba.com",
                "Tema": "Rather Be"
            },
            {
                "Nombre": "Coco",
                "Apellido": "Fernandez",
                "Email": "coquito@blablba.com",
                "Tema": "Miss you"
            },
            {
                "Nombre": "Melisa",
                "Apellido": "Val",
                "Email": "meli@blalba.com",
                "Tema": "Real love"
            }
     */




    let tbody = document.createElement("tbody");
    let tHeader = document.createElement("thead");

    function crearTablas(arr) {
        limpiartabla();
        let fila = document.createElement("tr"); // creo las filas
        let casilleroNombre = document.createElement("th");
        let casilleroApellido = document.createElement("th");
        let casilleroEmail = document.createElement("th");
        let casilleroTema = document.createElement("th");
        let casilleroAcciones = document.createElement("th");


        casilleroNombre.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-izquierda", "border-arriba", "border-abajo", "text-center");
        casilleroApellido.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroEmail.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroTema.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroAcciones.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");


        casilleroNombre.innerText = "Nombre";
        casilleroApellido.innerText = "Apellido";
        casilleroEmail.innerText = "Email";
        casilleroTema.innerText = "Tema";
        casilleroAcciones.innerText = "Acciones";

        fila.appendChild(casilleroNombre);
        fila.appendChild(casilleroApellido);
        fila.appendChild(casilleroEmail);
        fila.appendChild(casilleroTema);
        fila.appendChild(casilleroAcciones);


        tHeader.appendChild(fila);
        document.getElementById("tablita").appendChild(tHeader); // aca voy poniendo la tabla en la id "tablita" del html


        /*      tbody.innerHTML = ""; */
        for (let i = 0; i < arr.length; i++) {
            let fila = document.createElement("tr");
            let nombre = document.createElement("td");
            let apellido = document.createElement("td");
            let email = document.createElement("td");
            let tema = document.createElement("td");
            let btnEdit = document.createElement("button");
            let btnBorrar = document.createElement("button");
            btnEdit.innerText = "Editar";
            btnBorrar.innerText = "Eliminar";

            // darle id a cada fila
            fila.id = i;

            btnBorrar.addEventListener("click", e => eliminar(fila.id));
            btnEdit.addEventListener("click", e => editar(fila.id));





            nombre.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-izquierda", "border-abajo", "text-center");
            apellido.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            email.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            tema.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            btnEdit.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");
            btnBorrar.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");

            nombre.innerText = arr[i].Nombre;
            apellido.innerText = arr[i].Apellido;
            email.innerText = arr[i].Email;
            tema.innerText = arr[i].Tema;

            fila.appendChild(nombre);
            fila.appendChild(apellido);
            fila.appendChild(email);
            fila.appendChild(tema);
            fila.appendChild(btnBorrar);
            fila.appendChild(btnEdit);
            tbody.appendChild(fila);
            document.getElementById("tablita").appendChild(tbody);
            /*  btnBorrar.addEventListener("click", eliminar); */

        }

    }


    crearTablas(cargaEjemplo); //CARGO LA TABLA

    /* funciones agregar borrar y editar */

    /*  agregar.addEventListener('click', agregarComentario);

     function agregarComentario() {
      
     } */
    function limpiartabla() {
        tbody.innerHTML = "";
        tHeader.innerHTML = "";

    }

    function eliminar(pos) {
        console.log(pos);
        if (cargaEjemplo.length == 1) {
            cargaEjemplo.pop();
        } else {
            cargaEjemplo.splice(pos, 1);

        }
        crearTablas(cargaEjemplo);
    }

    function agregar() {
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        let tema = document.getElementById("tema");

        let ingreso = {
            "Nombre": nombre.value,
            "Apellido": apellido.value,
            "Email": email.value,
            "Tema": tema.value
        }
        cargaEjemplo.push(ingreso);
        crearTablas(cargaEjemplo);
    }
    document.getElementById("agregar").addEventListener("click", agregar);

    function editar(pos) {
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        let tema = document.getElementById("tema");
        nombre.value = cargaEjemplo[pos].Nombre;
        apellido.value = cargaEjemplo[pos].Apellido;
        email.value = cargaEjemplo[pos].Email;
        tema.value = cargaEjemplo[pos].Tema;

        cargaEjemplo[pos].Nombre = "cambio desde js";
        crearTablas(cargaEjemplo);

    }











} //iniciar pagina

document.addEventListener("DOMContentLoaded", iniciarPagina);

// e.target.dataset.id accedo a la propiedad del html