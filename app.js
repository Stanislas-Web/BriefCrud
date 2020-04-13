function onFormSubmit(){
  let datas = [];
  datas.push(RecupererDonnee());
  console.log(datas);
  var tableUsers = document.querySelector('table').querySelector('tbody');
  for (let user of datas) {
    let tr = document.createElement("tr");
    for (const userProperties in user) {
        let td = document.createElement("td");
        td.innerText = user[userProperties];
        tr.appendChild(td);
    }
    tableUsers.appendChild(tr);
    nettoyerInputs();
  }
}


function RecupererDonnee(){
    let donneeFormulaire={};
    let inputs = document.querySelectorAll('input');
    donneeFormulaire["nom"]= inputs[0].value;
    donneeFormulaire["prenom"]= inputs[1].value;
    donneeFormulaire["email"]= inputs[2].value;
    donneeFormulaire["age"]= inputs[3].value;
    donneeFormulaire["poste"]= inputs[4].value;
    donneeFormulaire["numero"]= inputs[5].value;
    donneeFormulaire["statut"]= inputs[6].value;
    donneeFormulaire["pays"]= inputs[7].value;
    return donneeFormulaire;
}


function nettoyerInputs(){
  let inputs = document.querySelectorAll('input');
  for(input of inputs){
    input.value = "";
  }
}

