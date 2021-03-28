const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById("form");
const indice = document.getElementById('indice');
const btnGuardar = document.getElementById('btn-guardar');
const btn = document.getElementById("form");
const url = "https://veterinaria-backend-nine.vercel.app/mascotas";

let mascotas = [];
async function listarMascotas () {
	try{
		const respuesta = await fetch(url);
		const mascotasDelServidor = await respuesta.json();
		if (Array.isArray(mascotasDelServidor)) {
			mascotas = mascotasDelServidor;
		}
		if (mascotas.length > 0) {
			const htmlMascotas = mascotas.map((mascota,index)=>
			`<tr>
				<td>${index}</td>
				<td>${mascota.tipo}</td>
				<td>${mascota.nombre}</td>
				<td>${mascota.dueno}</td>
				<td>
					<div class="btn-group" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-primary editar"><i class="fas fa-edit"></i></button>
						<button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash-alt"></i></button>
					</div>
				</td>
			</tr>`).join("");
			listaMascotas.innerHTML = htmlMascotas;
			Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
			Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));
			return;
		}
		listaMascotas.innerHTML = `<tr>
			<td colspan="5">No hay mascotas</td>
		</tr>`;
	}catch(Error){
		$('.alert').show();
		console.log({error});
	}
}

async function enviarDatos(evento) {
	evento.preventDefault();
	try {
		const datos = {
			tipo: tipo.value,
			nombre: nombre.value,
			dueno: dueno.value,
		};
		let metodo = 'POST';
		let urlEnvio = url;
		const accion = btnGuardar.innerHTML;
		if(accion == 'Editar')	{
			metodo = 'PUT';
			mascotas[indice.value] = datos;
			urlEnvio += `/${indice.value}`;
		}
		const respuesta = await fetch(urlEnvio, {method:metodo,
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(datos),
		});
		if (respuesta.ok) {
			listarMascotas();
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
		const mascota = mascotas[index];
		nombre.value = mascota.nombre;
		dueno.value = mascota.dueno;
		tipo.value = mascota.tipo;
		indice.value = index;
	}
}

function resetModal(){
	nombre.value = '';
	dueno.value = '';
	tipo.value = '';
	indice.value = '';
	btnGuardar.innerHTML = 'Crear';
}

function eliminar(index){
	const urlEnvio  = `${url}/${index}`;
	return async function clickEliminar() {
		try {
			const respuesta = await fetch(urlEnvio, {method:"DELETE"});
			if (respuesta.ok) {
				listarMascotas();
			}	
		} catch (error) {
			$('.alert').show();
			console.log({error});
		}
	}
}

listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;