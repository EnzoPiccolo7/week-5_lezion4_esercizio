let listaVuota = [];

function dati(nome,cognome,eta,citta, email, password,codiceFiscale){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.citta = citta;
    this.email = email;
    this.password = password;
    this.codiceFiscale = codiceFiscale;
}
let bottone = document.querySelector('div button')

bottone.onclick = function(){
    const regexemail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const regexcf = /[A-Z]{6}[0-9LMNPQRSTUV]{2}[A-Z]{1}[0-7LMNPQRST]{1}[0-9LMNPQRSTUV]{1}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}/;
    const regexpass = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;
    const regexText = /^[a-zA-Z]*$/;
    const regexNum = /^[0-9]*$/;
    let nome = document.querySelector('input[name="nome"]').value;
    let cognome = document.querySelector('input[name="cognome"]').value;
    let eta = document.querySelector('input[name="eta"]').value;
    let citta = document.querySelector('input[name="citta"]').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector(' input[name="password"]').value;
    let codiceFiscale = document.querySelector('input[name="cf"]').value;
    

    let obj = new dati(nome,cognome,eta,citta,email,password,codiceFiscale);
    listaVuota.push(obj);
    console.log(regexText.test(nome));
    console.log(regexText.test(cognome));
    console.log(regexNum.test(eta));
    console.log(regexText.test(citta));
    console.log(regexemail.test(email));
    console.log(regexpass.test(password));
    console.log(regexcf.test(codiceFiscale));
    
    
    if(nome.trim() !== '' || nome.trim().lenght > 0){
        
    } else {
        alert('non hai inserito il nome')
    }

    if(cognome.trim() !== '' || cognome.trim().lenght > 0){
        
    } else {
        alert('hai sbagliato il cognome')
    }

    if(eta.trim() !== '' || eta.trim().lenght > 0){
        
    } else {
        alert('hai sbagliato il eta')
    }

    if(citta.trim() !== '' || citta.trim().lenght > 0){
        
    } else {
        alert('hai sbagliato città')
    }

    if(email.trim() !== '' ||email.trim().lenght > 0){
        
    } else {
        alert('hai sbagliato email')
    }

    if(password.trim() !== '' || password.trim().lenght > 0){
        
    } else {
        alert('hai sbagliato il password')
    }

    if(codiceFiscale.trim() !== '' || codiceFiscale.trim().lenght > 0){
        
    } else {
        alert('hai sbagliato Codice Fiscale')
    }
    stampa()
}

function stampa() {
    let listaStampata = document.querySelector('#lista ol');
    listaStampata.innerHTML = '';
    listaVuota.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML = 'nome: '+ element.nome + ' '+ 'cognome: '+ element.cognome + ' ' + 'età: '+ element.eta + ' '
        + 'Città: '+ element.citta + ' '+ 'email: '+ element.email + ' '+ 'password: '+ element.password + ' '+ 'Codice fiscale: '+ element.codiceFiscale;
        listaStampata.appendChild(li);
        
    });

} 