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
    
  }
}


function RecupererDonnee(){
    let donneeFormulaire={};
    let inputs = document.querySelectorAll('input');
    if(!inputs[0].value){
      ValidationNom(inputs[0]);
    }else if(!inputs[1].value){
      ValidationPrenom(inputs[1]);
    }else if(!inputs[2].value){
      ValidationEmail(inputs[2])
    }else if(!inputs[4].value){
      ValidationPoste(inputs[4])
    }else if(!inputs[5].value){
      ValidationNumero(inputs[5])
    }else if(!inputs[6].value){
      ValidationStatut(inputs[6])
    }else if(!inputs[7].value){
      ValidationPays(inputs[7]);
    }else{
    donneeFormulaire["nom"]= inputs[0].value;
    donneeFormulaire["prenom"]= inputs[1].value;
    donneeFormulaire["email"]= inputs[2].value;
    donneeFormulaire["age"]= inputs[3].value;
    donneeFormulaire["poste"]= inputs[4].value;
    donneeFormulaire["numero"]= inputs[5].value;
    donneeFormulaire["statut"]= inputs[6].value;
    donneeFormulaire["pays"]= inputs[7].value;
    nettoyerInputs();
    viderErreur();
  }
    return donneeFormulaire;
}


function ValidationNom(nom){
  if(!nom.value){
    let erreur ="veuillez renseigner un nom"; 
    let p = document.createElement('p');
    p.setAttribute("class","ui negative message")
    p.innerHTML = erreur;
    let msgError = document.querySelector('#nom');
    msgError.appendChild(p);
  }
}


function ValidationPrenom(prenom){
  if(!prenom.value){
    let erreur ="veuillez renseigner un prenom"; 
    let p = document.createElement('p');
    p.setAttribute("class","ui negative message")
    p.innerHTML = erreur;
    let msgError = document.querySelector('#prenom');
    msgError.appendChild(p);
  }
}

function ValidationEmail(email){
  if(!email.value){
    let erreur ="veuillez renseigner un email"; 
    let p = document.createElement('p');
    p.setAttribute("class","ui negative message")
    p.innerHTML = erreur;
    let msgError = document.querySelector('#email');
    msgError.appendChild(p);
  }
}

function ValidationPoste(poste){
  if(!poste.value){
    let erreur ="veuillez renseigner un poste"; 
    let p = document.createElement('p');
    p.setAttribute("class","ui negative message")
    p.innerHTML = erreur;
    let msgError = document.querySelector('#poste');
    msgError.appendChild(p);
  }
}

function ValidationNumero(numero){
  if(!numero.value){
    let erreur ="veuillez renseigner un Numéro de téléphone"; 
    let p = document.createElement('p');
    p.setAttribute("class","ui negative message")
    p.innerHTML = erreur;
    let msgError = document.querySelector('#numero');
    msgError.appendChild(p);
  }
}
function ValidationStatut(statut){
  if(!statut.value){
    let erreur ="veuillez renseigner un Statut marital"; 
    let p = document.createElement('p');
    p.setAttribute("class","ui negative message")
    p.innerHTML = erreur;
    let msgError = document.querySelector('#statut');
    msgError.appendChild(p);
  }
}

function ValidationPays(pays){
  if(!pays.value){
    let erreur ="veuillez renseigner un pays d'origine"; 
    let p = document.createElement('p');
    p.setAttribute("class","ui negative message")
    p.innerHTML = erreur;
    let msgError = document.querySelector('#pays');
    msgError.appendChild(p);
  }
}

function nettoyerInputs(){
  let inputs = document.querySelectorAll('input');
  for(input of inputs){
    input.value = "";
  }
}


function viderErreur(){
  let ps = document.querySelectorAll('p');
  for( p of ps){
    p.setAttribute("class","");
    p.innerHTML="";
  }
}