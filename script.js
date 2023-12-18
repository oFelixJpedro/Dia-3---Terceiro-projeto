function enviar() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let altura= document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;    
    
    return document.getElementById("result").innerHTML += `<ul> <li> Nome: ${nome} </li> <li> Sobrenome: ${sobrenome} </li> <li> Peso: ${peso} </li> <li> Altura: ${altura} </li> </ul> <br>`;
};