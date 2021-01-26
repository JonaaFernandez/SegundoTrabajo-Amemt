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

    /* Declaro variables de ambito global */
    let tbody = document.createElement("tbody");
    let tHeader = document.createElement("thead");
    let btnConfirmarBorrar = document.getElementById("confirmarBorrar");
    let btnConfirmarEditar = document.getElementById("confirmarEditar");

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

            /* estilos para el cuerpo de la tabla */
            nombre.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-izquierda", "border-abajo", "text-center");
            apellido.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            email.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            tema.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            btnEdit.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");
            btnBorrar.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");


            /* aplico los inner text del arreglo de ejemplo para aplicarlos en la lista */
            nombre.innerText = arr[i].Nombre;
            apellido.innerText = arr[i].Apellido;
            email.innerText = arr[i].Email;
            tema.innerText = arr[i].Tema;

            btnBorrar.innerText = "Eliminar";
            btnEdit.innerText = "Editar";

            /* seteo atributos para vincularlos con los modals */
            btnEdit.setAttribute('data-toggle', 'modal');
            btnEdit.setAttribute('data-target', '#modalEditar');

            btnBorrar.setAttribute('data-toggle', 'modal');
            btnBorrar.setAttribute('data-target', '#modalBorrar');

            // doy id a cada fila
            fila.id = i;

            /* Listeners de botones para las funciones */

            btnBorrar.addEventListener("click", e => {
                btnConfirmarBorrar.setAttribute('data-target', fila.id);
            });

            btnEdit.addEventListener("click", e => {
                btnConfirmarEditar.setAttribute('data-target', fila.id);
                console.log("ESTOY ACA EN LA FILA : " + fila.id);
                cargaEditar(fila.id);
            });

            /*armado de cada fila de la tabla */
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

    /* LISTENER boton confirmar modal */
    btnConfirmarEditar.removeEventListener("click", (e) => confirmarEditar(parseInt(e.target.dataset.target)));
    btnConfirmarEditar.addEventListener("click", (e) => confirmarEditar(parseInt(e.target.dataset.target)))
    btnConfirmarBorrar.addEventListener("click", (e) => eliminar(btnConfirmarBorrar.dataset.target));

    /* CARGO LA TABLA */
    crearTablas(cargaEjemplo);

    /* FUNCIONES */

    document.getElementById("agregar-Modal").addEventListener("click", agregar);

    function agregar() {
        let nombre = document.getElementById("nombreModal");
        let apellido = document.getElementById("apellidoModal");
        let email = document.getElementById("emailModal");
        let tema = document.getElementById("temaModal");
        console.log(nombre.value);
        let ingreso = {
            "Nombre": nombre.value,
            "Apellido": apellido.value,
            "Email": email.value,
            "Tema": tema.value
        }

        document.getElementById("nombreModal").value = "";
        document.getElementById("apellidoModal").value = "";
        document.getElementById("emailModal").value = "";
        document.getElementById("temaModal").value = "";

        cargaEjemplo.push(ingreso);
        limpiartabla();
        crearTablas(cargaEjemplo);

        /*   btnEdit.removeEventListener("click", (e) => cargaEditar(parseInt(e.target.dataset.target)));
          btnEdit.addEventListener("click", (e) => cargaEditar(parseInt(e.target.dataset.target))); */

    }

    function cargaEditar(pos) {
        console.log("ENTRE A CARGAR EDITAR ! ! ");
        let nombre = document.getElementById("nombreModalEditar");
        let apellido = document.getElementById("apellidoModalEditar");
        let email = document.getElementById("emailModalEditar");
        let tema = document.getElementById("temaModalEditar");

        nombre.value = cargaEjemplo[pos].Nombre;
        apellido.value = cargaEjemplo[pos].Apellido;
        email.value = cargaEjemplo[pos].Email;
        tema.value = cargaEjemplo[pos].Tema;
        limpiartabla();
        crearTablas(cargaEjemplo);
    }

    function confirmarEditar(pos) {
        console.log("ENTRO EN CONFIRMAR EDITAR!!");
        let nombre = document.getElementById("nombreModalEditar");
        let apellido = document.getElementById("apellidoModalEditar");
        let email = document.getElementById("emailModalEditar");
        let tema = document.getElementById("temaModalEditar");


        cargaEjemplo[pos].Nombre = nombre.value;
        cargaEjemplo[pos].Apellido = apellido.value;
        cargaEjemplo[pos].Email = email.value;
        cargaEjemplo[pos].Tema = tema.value;

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

    let barritaProgress = document.getElementById("modalBarrita");
    barritaProgress


    /* function cargarBarrita() {
        let progressBar = document.getElementById("barritaModal");
        progressBar.setAttribute("aria-valuenow", 0);
        progressBar.style.width = `0%`;
        console.log("PUTO");
    }
    cargarBarrita(); */
} //iniciar pagina

document.addEventListener("DOMContentLoaded", iniciarPagina);

// e.target.dataset.id accedo a la propiedad del html