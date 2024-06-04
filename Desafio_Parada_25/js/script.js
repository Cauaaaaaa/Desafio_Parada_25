let convidados = [];

    let ul = document.getElementById("convite");

function colocarNome(){
    let p = document.getElementById("nomes").value;
    convidados.push(p)
                
    document.getElementById("nomes").value = "";
    colocar_nomes();
}

function colocar_nomes(){
    ul.innerHTML = "";
    for(let x=0; x < convidados.length; x++){
        ul.innerHTML += `<li> ${convidados[x]} </li>`;
    }
}

function tirarNome(){
    convidados.pop();
    colocar_nomes();
}