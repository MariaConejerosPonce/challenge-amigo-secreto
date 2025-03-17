let listaAmigos = []

//Encapsulación de agregar amigos a la lista y mostrar lista en el front
function agregarAmigosMostrarHtml() {
    agregarAmigoALista()
    mostrarAmigosEnHTML()
}

//Toma el elemento ul del front, lo vacía si tiene elementos y lo rellena con la lista de amigos
function mostrarAmigosEnHTML() {
    const lista = document.getElementById("listaAmigos")  
    lista.innerHTML = ""
    console.log(listaAmigos)
    for(let i=0; i < listaAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item)
    }
}

//Agrega un amigo a la lista de amigos y muestra una alerta si el valor es un string vacío
function agregarAmigoALista() {
    const valorInput = document.getElementById("amigo").value
    if (valorInput === "") {
       alert("Por favor, inserte un nombre.")
    }
    else {
        listaAmigos.push(valorInput)
        console.log(valorInput, listaAmigos)
    }
}

function sortearlistaAmigos(){
    if(listaAmigos.length < 2){
        alert("Ingresa más amigos para realizar el sorteo");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length)
    const sorteo = listaAmigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${sorteo}`;

    const limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
 }

 //Limpia los campos y variables modificadas
function limpiarCampos() {
    listaAmigos = []; // Vaciar el array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en la pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
    document.getElementById("amigo").value = ""; // Limpiar el input
}
