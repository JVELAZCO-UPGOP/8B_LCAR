const listaConsultas = document.getElementById('lista-consultas');
const url = "https://veterinaria-backend-nine.vercel.app";
const formulario = document.getElementById('formulario');
const mascota = document.getElementById('mascota');
const veterinaria = document.getElementById('veterinaria');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const historia = document.getElementById('historia');
const diagnostico = document.getElementById('diagnostico');
let consultas = [];


async function listarConsultas () {
	try {
        const entidad = "consultas";
		const respuesta = await fetch(`${url}/${entidad}`);
		const consultasDelServidor = await respuesta.json();
		if (Array.isArray(consultasDelServidor)) {
			consultas = consultasDelServidor;
		}
		if (respuesta.ok) {
			const htmlconsultas = consultas.map((consulta,index)=>
            `<tr>
                <td scope="row">${index}</td>
                <td>${consulta.mascota.nombre}</td>
                <td>${consulta.veterinaria.nombre} ${consulta.veterinaria.apellido}</td>
                <td>${consulta.historia}</td>
                <td>${consulta.diagnostico}</td>
                <td>${consulta.fechaCreacion}</td>
                <td>@${consulta.fechaEdicion}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary editar"><i class="fas fa-edit"></i></button>
                    </div>
                </td>
            </tr>`).join("");
			listaConsultas.innerHTML = htmlconsultas;
			Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
			return;
		}
		listaConsultas.innerHTML = `<tr>
			<td colspan="5">No hay consultas</td>
		</tr>`;
	} catch (error) {
		console.log(error);
		$('.alert-danger').show();
	}
}

listarConsultas();

async function listarMascotas () {
	try {
        const entidad = "mascotas";
		const respuesta = await fetch(`${url}/${entidad}`);
		const mascotasDelServidor = await respuesta.json();
		if (Array.isArray(mascotasDelServidor)) {
			mascotas = mascotasDelServidor;
		}
		if (respuesta.ok) {
			const htmlmascotas = mascotas.map((mascota,index)=>
            `<option value="${index}">${mascota.nombre}</option>`).join("");
			mascota.innerHTML += htmlmascotas;
			return;
		}
	} catch (error) {
		console.log(error);
		$('.alert-danger').show();
	}
}

listarMascotas();

async function listarVeterinarias () {
	try {
        const entidad = "veterinarias";
		const respuesta = await fetch(`${url}/${entidad}`);
		const veterinariasDelServidor = await respuesta.json();
		if (Array.isArray(veterinariasDelServidor)) {
			veterinarias = veterinariasDelServidor;
		}
		if (respuesta.ok) {
			const htmlveterinarias = veterinarias.map((veterinaria,index)=>
            `<option value="${index}">${veterinaria.nombre}</option>`).join("");
			veterinaria.innerHTML += htmlveterinarias;
			return;
		}
	} catch (error) {
		console.log(error);
		$('.alert-danger').show();
	}
}

listarVeterinarias();

function editar(index) {
	return function cuandoCliqueo() {
		btnGuardar.innerHTML = 'Editar';
		$('#staticBackdrop').modal('toggle');
		const consulta = consultas[index];
		indice.value = index;
		mascota.value = consulta.mascota.id;
		veterinaria.value = consulta.veterinaria.id;
		historia.value = consulta.historia;
		diagnostico.value = consulta.diagnostico;
	}
}

async function enviarDatos(evento) {
	evento.preventDefault();
	try {
		const entidad = "consultas";
		const datos = {
			mascota: mascota.value,
			veterinaria: veterinaria.value,
			historia: historia.value,
			diagnostico: diagnostico.value
		};
		if(validar(datos) === true){
			const accion = btnGuardar.innerHTML;
			let metodo = 'POST';
			let urlEnvio = `${url}/${entidad}`;
			if(accion == 'Editar')	{
				// veterinarias[indice.value] = datos;
				urlEnvio += `/${indice.value}`;
				metodo = 'PUT';
			}
			const respuesta = await fetch(urlEnvio, {method:metodo,
				headers:{'Content-Type': 'application/json',},
				body: JSON.stringify(datos),
			});
			if (respuesta.ok) {
				listarConsultas();
			}
			formulario.classList.add('was-validated');
			return;
		}
		$('.alert-warning').show();
	} catch (error) {
		$('.alert-danger').show();
		console.log({error});
	}
}

function resetModal(){
	btnGuardar.innerHTML = 'Crear';
	[indice, mascota, veterinaria,historia,diagnostico].forEach(
		(inputActual) => {
			inputActual.value = "";
			inputActual.classList.remove('is-invalid');
			inputActual.classList.remove('is-valid');
		}
	);
	$('#staticBackdrop').modal('toggle');
}

function validar(datos){
	if (typeof datos !== 'object') return false;
	let response = true;
	for (let llave in datos) {
		if (datos[llave].length === 0) {
			document.getElementById(llave).classList.add('is-invalid');
			response = false;
		} else {
			document.getElementById(llave).classList.remove('is-invalid');
			document.getElementById(llave).classList.add('is-valid');
		}
	}
	if (response === true) $('.alert-warning').hide();
	return response;
}

btnGuardar.onclick = enviarDatos;