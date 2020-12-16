"use stict"

const tablita = document.getElementById('tablita');

function iniciarPagina() { // carga pagina por completo

    /*tabla fija de ejemplo */
    let cargaEjemplo = [{
            "Nombre": "Carlos",
            "Apellido": "Medina",
            "Email": "carlitos@blalba.com",
            "Tema": "Rather Be"
        },
        {
            "Nombre": "Juana",
            "Apellido": "Alberdi",
            "Email": "coquito@blablba.com",
            "Tema": "Miss you",
        },
        {
            "Nombre": "Ernesto",
            "Apellido": "Melastengue",
            "Email": "ernest@blalba.com",
            "Tema": "Real love",
        },
        {
            "Nombre": "Federica",
            "Apellido": "Miguel",
            "Email": "fede@blalba.com",
            "Tema": "Real love",
        },
        {
            "Nombre": "Mirtha",
            "Apellido": "Mabel",
            "Email": "mirthi@blalba.com",
            "Tema": "Mama"
        }
    ]





    let tbody = document.createElement("tbody");
    let tHeader = document.createElement("thead");

    function crearTablas(arr) {
        limpiartabla();
        /* creo el header de la tala */
        let fila = document.createElement("tr");
        let casilleroNombre = document.createElement("th");
        let casilleroApellido = document.createElement("th");
        let casilleroEmail = document.createElement("th");
        let casilleroTema = document.createElement("th");
        let casilleroAcciones = document.createElement("th");

        /* estilo a la tabla */
        casilleroNombre.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-izquierda", "border-arriba", "border-abajo", "text-center");
        casilleroApellido.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroEmail.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroTema.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroAcciones.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");

        /* texto interno del header */
        casilleroNombre.innerText = "Nombre";
        casilleroApellido.innerText = "Apellido";
        casilleroEmail.innerText = "Email";
        casilleroTema.innerText = "Tema";
        casilleroAcciones.innerText = "Acciones";

        /* armado uno dentro de otro */
        fila.appendChild(casilleroNombre);
        fila.appendChild(casilleroApellido);
        fila.appendChild(casilleroEmail);
        fila.appendChild(casilleroTema);
        fila.appendChild(casilleroAcciones);
        tHeader.appendChild(fila);
        /* voy poniendo la tabla en la id "tablita" del html */
        document.getElementById("tablita").appendChild(tHeader);

        /* recorro la tabla y creo el cuerpo de la misma */
        for (let i = 0; i < arr.length; i++) {
            let fila = document.createElement("tr");
            let nombre = document.createElement("td");
            let apellido = document.createElement("td");
            let email = document.createElement("td");
            let tema = document.createElement("td");
            /* botones EDITAR Y ELIMINAR en cada fila,  */
            let btnBorrar = document.createElement("button");
            let btnEdit = document.createElement("button");
            let borrarmodal = document.getElementById("borrarModal");
            btnBorrar.innerText = "Eliminar";
            btnEdit.innerText = "Editar";

            // darle id a cada fila
            fila.id = i;

            /* listeners de botones para las funciones */
            document.getElementById("agregar-Modal").addEventListener("click", agregar);
            btnBorrar.addEventListener("click", e => eliminar(fila.id));
            borrarmodal.addEventListener("click", e => eliminar(cargaEjemplo));
            btnEdit.addEventListener("click", e => editar(fila.id));
            btnEdit.addEventListener("click", editar)

            /* estilos para el cuerpo de la tabla */
            nombre.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-izquierda", "border-abajo", "text-center");
            apellido.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            email.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            tema.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            btnEdit.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");
            btnBorrar.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");

            /*     btnBorrar.setAttribute(data - target, "#exampleModal2"); */

            /* aplico los inner text del arreglo de ejemplo para aplicarlos en la lista */
            nombre.innerText = arr[i].Nombre;
            apellido.innerText = arr[i].Apellido;
            email.innerText = arr[i].Email;
            tema.innerText = arr[i].Tema;

            /* meto adentro de cada fila  */
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

    function agregar() {
        let nombre = document.getElementById("nombreModal");
        let apellido = document.getElementById("apellidoModal");
        let email = document.getElementById("emailModal");
        let tema = document.getElementById("temaModal");
        console.log(nombre);
        let ingreso = {
            "Nombre": nombre.value,
            "Apellido": apellido.value,
            "Email": email.value,
            "Tema": tema.value
        }
        cargaEjemplo.push(ingreso);
        limpiartabla();
        crearTablas(cargaEjemplo);
    }

    function editar(pos) {
        let nombre = document.getElementById("nombreModal");
        let apellido = document.getElementById("apellidoModal");
        let email = document.getElementById("emailModal");
        let tema = document.getElementById("temaModal");
        /*         console.log(nombre.value[pos]); */
        nombre.value = cargaEjemplo[pos].Nombre;
        apellido.value = cargaEjemplo[pos].Apellido;
        email.value = cargaEjemplo[pos].Email;
        tema.value = cargaEjemplo[pos].Tema;

        limpiartabla();
        crearTablas(cargaEjemplo);

    }

    function eliminar(pos) {
        console.log("se borro el comentario de la posicion: ", pos);
        if (cargaEjemplo.length == 1) {
            cargaEjemplo.pop();
        } else {
            cargaEjemplo.splice(pos, 1);

        }
        limpiartabla();
        crearTablas(cargaEjemplo);
    }

    function limpiartabla() {
        tbody.innerHTML = "";
        tHeader.innerHTML = "";

    }









} //iniciar pagina

document.addEventListener("DOMContentLoaded", iniciarPagina);

// e.target.dataset.id accedo a la propiedad del html