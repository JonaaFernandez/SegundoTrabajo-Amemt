"use stict"

const tablita = document.getElementById('tablita');

function iniciarPagina() { // carga pagina por completo



    /*tabla fija de ejemplo */
    let cargaEjemplo = [{
            "Nombre": "Carlos",
            "Apellido": "Medina",
            "Email": "carlitos@blalba.com",
            "Tema": "Rather Be",
            "Año": "2014"

        },
        {
            "Nombre": "Juana",
            "Apellido": "Alberdi",
            "Email": "coquito@blablba.com",
            "Tema": "Miss you",
            "Año": "2000"

        },
        {
            "Nombre": "Melani",
            "Apellido": "Cardenas",
            "Email": "Mela@blalba.com",
            "Tema": "Real love",
            "Año": "2000"

        },
        {
            "Nombre": "Joaquin",
            "Apellido": "Marredo",
            "Email": "roaM@blalba.com",
            "Tema": "Miss You",
            "Año": "2000"

        },
        {
            "Nombre": "Nicolas",
            "Apellido": "Benavi",
            "Email": "nico@blalba.com",
            "Tema": "Rather be",
            "Año": "2014"

        },
        {
            "Nombre": "Rita",
            "Apellido": "Celeste",
            "Email": "riti@blalba.com",
            "Tema": "Symphony",
            "Año": "2000"

        },
        {
            "Nombre": "Federica",
            "Apellido": "Miguel",
            "Email": "fede@blalba.com",
            "Tema": "Real love",
            "Año": "2001"

        },
        {
            "Nombre": "Mirtha",
            "Apellido": "Mabel",
            "Email": "mirthi@blalba.com",
            "Tema": "Mama",
            "Año": "2012"

        }, {
            "Nombre": "Clara",
            "Apellido": "Oscura",
            "Email": "oscucla@blalba.com",
            "Tema": "Rather Be",
            "Año": "2014"

        }, {
            "Nombre": "Miguel",
            "Apellido": "Del Campo",
            "Email": "miguel@blalba.com",
            "Tema": "Rather be",
            "Año": "2014"
        }, {
            "Nombre": "Oscar",
            "Apellido": "Clima",
            "Email": "osqui@blalba.com",
            "Tema": "Mama",
            "Año": "2012"

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
        let casilleroAnio = document.createElement("th");
        let casilleroAcciones = document.createElement("th");

        /* estilo a la tabla */
        casilleroNombre.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-izquierda", "border-arriba", "border-abajo", "text-center");
        casilleroApellido.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroEmail.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroTema.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroAnio.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");
        casilleroAcciones.classList.add("bg-light", "text-dark", "p-2", "border-derecha", "border-arriba", "border-abajo", "text-center");

        /* texto interno del header */
        casilleroNombre.innerText = "Nombre";
        casilleroApellido.innerText = "Apellido";
        casilleroEmail.innerText = "Email";
        casilleroTema.innerText = "Tema";
        casilleroAnio.innerText = "Año";
        casilleroAcciones.innerText = "Acciones";

        /* armado uno dentro de otro */
        fila.appendChild(casilleroNombre);
        fila.appendChild(casilleroApellido);
        fila.appendChild(casilleroEmail);
        fila.appendChild(casilleroTema);
        fila.appendChild(casilleroAnio);
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
            let anio = document.createElement("td");

            /* botones EDITAR Y ELIMINAR en cada fila,  */
            let btnBorrar = document.createElement("button");
            let btnEdit = document.createElement("button");

            /* estilos para el cuerpo de la tabla */
            nombre.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-izquierda", "border-abajo", "text-center");
            apellido.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            email.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            tema.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            anio.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-abajo", "text-center");
            btnEdit.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");
            btnBorrar.classList.add("bg-dark", "text-primary", "p-2", "border-derecha", "border-abajo", "text-center");


            /* aplico los inner text del arreglo de ejemplo para aplicarlos en la lista */
            nombre.innerText = arr[i].Nombre;
            apellido.innerText = arr[i].Apellido;
            email.innerText = arr[i].Email;
            tema.innerText = arr[i].Tema;
            anio.innerText = arr[i].Año;

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
            fila.appendChild(anio);
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
        let anio = document.getElementById("anioModal");
        console.log(nombre.value);
        let ingreso = {
            "Nombre": nombre.value,
            "Apellido": apellido.value,
            "Email": email.value,
            "Tema": tema.value,
            "Año": anio.value
        }

        document.getElementById("nombreModal").value = "";
        document.getElementById("apellidoModal").value = "";
        document.getElementById("emailModal").value = "";
        document.getElementById("temaModal").value = "";
        document.getElementById("anioModal").value = "";

        progressBar();
        cargaEjemplo.push(ingreso);
        limpiartabla();

        /*   btnEdit.removeEventListener("click", (e) => cargaEditar(parseInt(e.target.dataset.target)));
          btnEdit.addEventListener("click", (e) => cargaEditar(parseInt(e.target.dataset.target))); */

    }

    function cargaEditar(pos) {
        console.log("ENTRE A CARGAR EDITAR ! ! ");
        let nombre = document.getElementById("nombreModalEditar");
        let apellido = document.getElementById("apellidoModalEditar");
        let email = document.getElementById("emailModalEditar");
        let tema = document.getElementById("temaModalEditar");
        let anio = document.getElementById("anioModalEditar");

        nombre.value = cargaEjemplo[pos].Nombre;
        apellido.value = cargaEjemplo[pos].Apellido;
        email.value = cargaEjemplo[pos].Email;
        tema.value = cargaEjemplo[pos].Tema;
        anio.value = cargaEjemplo[pos].Año;
        limpiartabla();
        crearTablas(cargaEjemplo);

    }

    function confirmarEditar(pos) {
        console.log("ENTRO EN CONFIRMAR EDITAR!!");
        let nombre = document.getElementById("nombreModalEditar");
        let apellido = document.getElementById("apellidoModalEditar");
        let email = document.getElementById("emailModalEditar");
        let tema = document.getElementById("temaModalEditar");
        let anio = document.getElementById("anioModalEditar");


        cargaEjemplo[pos].Nombre = nombre.value;
        cargaEjemplo[pos].Apellido = apellido.value;
        cargaEjemplo[pos].Email = email.value;
        cargaEjemplo[pos].Tema = tema.value;
        cargaEjemplo[pos].Año = anio.value;

        progressBar();
        limpiartabla();


    }

    function eliminar(pos) {
        console.log("se borro el comentario de la posicion: ", pos);
        if (cargaEjemplo.length == 1) {
            cargaEjemplo.pop();
        } else {
            cargaEjemplo.splice(pos, 1);
        }
        progressBar();
        limpiartabla();
    }

    function limpiartabla() {
        tbody.innerHTML = "";
        tHeader.innerHTML = "";

    }

    function esconderBarrita() {
        let barrita = document.getElementById("progressBar");
        barrita.classList.add("d-none");
    }

    function esconderModal() {
        let modalAgregar = document.getElementById("exampleModal");
        modalAgregar.classList.add("d-none");

    }

    function progressBar() {
        let width = 0;
        let contenedorBarrita = document.getElementById("barritaContainer");
        let barrita = document.getElementById("progressBar");
        let contadorParaCarga = setInterval(cargadorBarrita, 0);

        function cargadorBarrita() {
            barrita.classList.remove("d-none");
            if (width >= 100) {
                clearInterval(contadorParaCarga);

                setTimeout(function() {
                    contenedorBarrita.style.width = 0 + "%";
                    esconderBarrita();
                    esconderModal();
                    crearTablas(cargaEjemplo);
                }, 1000);
                console.log("ENTRO ACA EN EL IF");
            } else {
                console.log("ENTRO ACA");
                width++;
                contenedorBarrita.style.width = width + "%";
            }

        }
    }


    /* Sacado de internet, utilizado con query */
    $(`#ejemplito`).on(`keyup`, function() {
        let value = $(this).val()
        console.log("Busqueda avanzada: ", value)
        let data = buscarPorNombre(value, cargaEjemplo)
        crearTablas(data);
    })

    crearTablas(cargaEjemplo)

    function buscarPorNombre(value, data) {
        let dataFiltrada = [];

        for (let i = 0; i < data.length; i++) {
            value = value.toLowerCase()
            let Nombre = data[i].Nombre.toLowerCase();

            if (Nombre.includes(value)) {
                dataFiltrada.push(data[i])
            }
            /* 
                       ESTO NO FUNCIONABA DEL TODO BIEN, poreso lo deje comentado
                       else {
                           let resultadoBusqueda = document.getElementById("resultadoBusqueda");
                           resultadoBusqueda.innerText = "No se encontraron resultados con ese Nombre"
                       } */

        }
        return dataFiltrada
    }

    let inputBusquedaAvanzada = document.getElementById("filtroBusqueda"); //input busqueda avanzada
    let botonBusquedaAvanzada = document.getElementById("botonBusqueda"); // BOTON busqueda avanzada
    botonBusquedaAvanzada.addEventListener('click', filtrarPorFecha); // listener

    function filtrarPorFecha() {
        const filtro = cargaEjemplo.filter(e => e.Año == inputBusquedaAvanzada.value)
            /* console.log(inputBusquedaAvanzada.value); */
            /* console.log(filtro); */
        crearTablas(filtro);
    }

    let resetBoton = document.getElementById("botonReset");
    resetBoton.addEventListener("click", resetearBusqueda);

    function resetearBusqueda() {
        crearTablas(cargaEjemplo);
        inputBusquedaAvanzada.value = '';
    }

    let divBusquedaAvanzada = document.getElementById("divBusquedaAvanzada");
    let btnAbrirBusquedaAvanzada = document.getElementById("btnBusquedaAvanzada");
    btnAbrirBusquedaAvanzada.addEventListener("click", function() {
        divBusquedaAvanzada.classList.remove("d-none");
    })

    //iniciar pagina

}
document.addEventListener("DOMContentLoaded", iniciarPagina);