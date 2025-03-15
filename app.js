let amigoSecreto = []
function agregarAmigo() {
    if (document.getElementById("amigo").value==""){
    alert("Por favor, inserte un nombre.")}
    else 
    {amigoSecreto.push(document.getElementById("amigo").value)}
console.log(amigoSecreto);
return;
}
