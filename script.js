let captar = "";

// function chamar() {
//     captar = document.getElementById('valor').value;
//     document.getElementById('digito').innerHTML = captar;
// }

function chamar() {
    let inverter = document.getElementsByName("valor");
    valor = inverter.item(0).value.toString().split("");
    normal = valor.reverse().join("");
    document.body.innerHTML += normal + "<br />";
}