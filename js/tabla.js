"use stict"

function iniciarPagina() {
    const tablita = document.getElementById('tablita'); // tabla de cero.
    const agregar = document.getElementById('agregar');

    let cargaEjemplo = [{
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
    ];


    function crearTablas(arr) {
        let tHeader = document.createElement("thead");
        let tr = document.createElement("tr");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let th4 = document.createElement("th");
        let tbody = document.createElement("tbody");

        th1.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-izquierda", "border-arriba", "text-center");
        th2.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-arriba", "text-center");
        th3.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-arriba", "text-center");
        th4.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-arriba", "text-center");
        th1.innerText = "Nombre";
        th2.innerText = "Apellido";
        th3.innerText = "Email";
        th4.innerText = "Tema";

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tHeader.appendChild(tr);
        document.getElementById("tablita").appendChild(tHeader); // aca voy poniendo la tabla en la id "tablita" del html


        /*      tbody.innerHTML = ""; */
        for (let i = 0; i < arr.length; i++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");


            td1.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-izquierda", "border-arriba", "text-center");
            td2.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-arriba", "text-center");
            td3.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-arriba", "text-center");
            td4.classList.add("bg-dark", "text-light", "p-2", "border-derecha", "border-arriba", "text-center");

            ;
            td1.innerText = arr[i].Nombre;
            td2.innerText = arr[i].Apellido;
            td3.innerText = arr[i].Email;
            td4.innerText = arr[i].Tema;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);

        }

        document.getElementById("tablita").appendChild(tbody);
    }

    crearTablas(cargaEjemplo);

    /* funciones agregar borrar y editar */

    agregar.addEventListener('click', agregarComentario);

    function agregarComentario() {



    }




} //iniciar pagina

document.addEventListener("DOMContentLoaded", iniciarPagina);