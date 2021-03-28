module.exports = {
    mascotas: [
        {tipo:'Perro', nombre:'Taison0', dueno:'Laura'},
        {tipo:'Perro', nombre:'Taison1', dueno:'Laura'},
        {tipo:'Perro', nombre:'Taison2', dueno:'Laura'},
        {tipo:'Perro', nombre:'Taison3', dueno:'Laura'},
        {tipo:'Perro', nombre:'Taison4', dueno:'Laura'}
    ],
    veterinarias: [
        {nombre:'Armando', apellido:'Mendoza', documento:'123456749 '},
        {nombre:'laurencia', apellido:'Arciniega', documento:'123456779'},
        {nombre:'laura', apellido:'Roque', documento:'123456789'},
        {nombre:'Marcela', apellido:'Lopez', documento:'123456799'}
    ],
    duenos: [
        {nombre:'Alejandra', apellido:'Ramirez', documento:'123456749 '},
        {nombre:'laura', apellido:'Arciniega', documento:'123456779'},
        {nombre:'Sergio', apellido:'Arciniega', documento:'123456789'},
        {nombre:'Ahlai', apellido:'Rubio', documento:'123456799'}
    ],
    consultas: [
        {
            mascota: 0, 
            veterinaria: 0, 
            fechaCreacion: new Date(), 
            fechaEdicion: new Date(), 
            historia:'', 
            diagnostico:'',
        },
    ],
}