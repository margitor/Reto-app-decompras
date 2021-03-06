/* referencia pantallas */
let displayVacio = document.getElementById('displayVacio')
let displayFormulario = document.getElementById('displayFormulario')
let displayListado = document.getElementById('displayListado')
let displayDetalle = document.getElementById('displayDetalle')
/* referencia botones */
let agregarProducto = document.getElementById('agregarProducto')
let agregarProductoListado = document.getElementById('agregarProductoListado')
let addButton = document.getElementById('addButton')
let btnCerrar = document.getElementById('btnCerrar')
let btnCerrarFormulario = document.getElementById('btnCerrarFormulario')
let btnEliminar = document.getElementById('btnEliminar')

/* referencia formularios*/
let formTitulo = document.getElementById('formTitulo')
let formCategoria = document.getElementById('formCategoria')
let formDescripcion = document.getElementById('formDescripcion')

/* referencia Listado */
let listado = document.getElementById('listado')
/* referencia displayDetalle */
let detalleImg = document.getElementById('detalleImg')
let detalleTitulo = document.getElementById('detalleTitulo')
let detalleDescripcion = document.getElementById('detalleDescripcion')

// Local Storage
let listadoStorage = []

/* funciones */
let agregame = ()=> {
    displayVacio.style.display = 'none'
    displayListado.style.display = 'none'
    displayFormulario.style.display = 'block'
}
agregarProducto.addEventListener('click', agregame)
agregarProductoListado.addEventListener('click', agregame )


let mostrarListado = ()=> {
    displayFormulario.style.display = 'none'
    displayListado.style.display = 'block'
}
let mostrarDetalle = (titulo, categoria, descripcion)=> {
    displayListado.style.display = 'none'
    detalleTitulo.innerHTML = titulo
    detalleDescripcion.innerHTML = descripcion
    detalleImg.setAttribute('src', `images/${categoria}`)
    displayDetalle.style.display = 'block'
}

addButton.addEventListener('click', () => {
    let categoria = formCategoria.value
    let titulo = formTitulo.value
    let descripcion = formDescripcion.value
    console.log(categoria, titulo, descripcion, 'lo que tiene cuando apreto')
    let modelo = `<li class="list-group-item"><img src="/images/${categoria}" alt="">
    <p>${titulo}</p><button onclick= "mostrarDetalle('${titulo}', '${categoria}', '${descripcion}')" >
        <img src="images/arrow-right.png" alt="flecha ver detalle">
    </button></li>` 

    if (categoria != 'Categoria' && titulo != '' && descripcion != ''){
        listado.innerHTML += modelo
    formTitulo.value = ''
    formCategoria.value = ''
    formDescripcion.value = ''
    mostrarListado()
    }else{
        alert('Completa los datos campos requeridos')
    }
    listadoStorage.push(modelo)
    localStorage.setItem('listaCompras', listadoStorage.join(' '))
    //join elimina el bug de la coma en array de listado
})

btnCerrar.addEventListener('click', ()=> {
    displayDetalle.style.display = 'none'
    displayListado.style.display = 'block'
})

btnCerrarFormulario.addEventListener('click', ()=> {
        displayFormulario.style.display ='none'
        displayListado.style.display ='block'
        displayVacio.style.display ='none'
})

//Local Storage
let desdeStorage = localStorage.getItem('listaCompras')
 if(desdeStorage){
    displayVacio.style.display = 'none'
    displayListado.style.display = 'block'
    listado.innerHTML += desdeStorage
 }
btnEliminar.addEventListener('click', ()=> {
   if(desdeStorage) {
    localStorage.removeItem('listaCompras')
    displayVacio.style.display = 'block'
    displayListado.style.display = 'none'
   }
}
)