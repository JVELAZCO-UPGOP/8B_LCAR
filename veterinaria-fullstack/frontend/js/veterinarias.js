const nombre = document.getElementById('nombre');
const documento = document.getElementById('documento');
const apellido = document.getElementById('apellido');
const indice = document.getElementById('indice');
const form = document.getElementById("form");
const btnGuardar = document.getElementById('btn-guardar');
const listaVeterinarias = document.getElementById('lista-veterinarias');
const url = "https://veterinaria-backend-nine.vercel.app/veterinarias";

let veterinarias = [];
async function listarVeterinarias () {
	try {
		const respuesta = await fetch(url);
		const veterinariasDelServidor = await respuesta.json();
		if (Array.isArray(veterinariasDelServidor)) {
			veterinarias = veterinariasDelServidor;
		}
		if (veterinarias.length > 0) {
			const htmlVeterinarias = veterinarias.map((veterinaria,index)=>
				`<tr>
					<td>${index}</td>
					<td>${veterinaria.documento}</td>
					<td>${veterinaria.nombre}</td>
					<td>${veterinaria.apellido}</td>
					<td>
						<div class="btn-group" role="group" aria-label="Basic example">
							<button type="button" class="btn btn-primary editar"><i class="fas fa-edit"></i></button>
							<button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
						</div>
					</td>
				</tr>`).join("");
			listaVeterinarias.innerHTML = htmlVeterinarias;
			Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
			Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));
			return;
		}
		listaVeterinarias.innerHTML = `<tr>
			<td colspan="5">No hay veterinarias</td>
		</tr>`;
	} catch (error) {
		console.log(error);
		$('.alert').show();
	}
}

async function enviarDatos(evento) {
	evento.preventDefault();
	try {
		const datos = {
			nombre: nombre.value,
			apellido: apellido.value,
			documento: documento.value
		};
		const accion = btnGuardar.innerHTML;
		let metodo = 'POST';
		let urlEnvio = url;
		if(accion == 'Editar')	{
			metodo = 'PUT';
			// veterinarias[indice.value] = datos;
			urlEnvio += `/${indice.value}`;
		}
		const respuesta = await fetch(urlEnvio, {method:metodo,
			headers:{'Content-Type': 'application/json',},
			body: JSON.stringify(datos),
		});
		if (respuesta.ok) {
			listarVeterinarias();
			resetModal();
		}
	} catch (error) {
		$('.alert').show();
		console.log({error});
	}
}

function editar(index) {
	return function cuandoCliqueo() {
		btnGuardar.innerHTML = 'Editar';
		$('#staticBackdrop').modal('toggle');
		const veterinaria = veterinarias[index];
		indice.value = index;
		nombre.value = veterinaria.nombre;
		apellido.value = veterinaria.apellido;
		documento.value = veterinaria.documento;
	}
}

function resetModal(){
	indice.value = '';
	nombre.value = '';
	apellido.value = '';
	documento.value = '';
	btnGuardar.innerHTML = 'Crear';
}

function eliminar(index){
	const urlEnvio  = `${url}/${index}`;
	return async function clickEliminar() {
		try {
			const respuesta = await fetch(urlEnvio, {method: "DELETE"});
			if (respuesta.ok) {
				listarVeterinarias();
			}	
		} catch (error) {
			$('.alert').show();
			console.log({error});
		}
	}
}

listarVeterinarias();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;