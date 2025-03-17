let amigoSecreto = []

function agregarAmigo() {
    if (document.getElementById("amigo").value=="") {
       alert("Por favor, inserte un nombre.")
    }
    else {
        amigoSecreto.push(document.getElementById("amigo").value)
        limpiarCampo()
    }
    console.log(amigoSecreto);
    return;
}

function limpiarCampo() {
   document.getElementById("amigo").value = "";
}
function agregarNombreALista() {
    let lista=document.getElementById("listaAmigos")  
    lista.innerHTML = ""
    
}
