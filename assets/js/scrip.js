/* let nome = window.document.getElementById("nome")

case senssitive = reconhece maiusculas e minusculas
por tag: getElementbyTagName()
por id: getElementById()
por nome: getElementByName()
por classe: getElementByClassName()
por seletor: queryselector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto =document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
if (nome.value.length < 3 ){
    txtNome.innerHTML = 'Nome Invalido'
    txtNome.style.color ='yellow'
} else {
txtNome.innerHTML = 'Nome Valido'
txtNome.style.color = " #b5f702 "
nomeOk = true

}
}
    function validaEmail(){
     let txtEmail = document.querySelector("#txtEmail")
     if(email.value.indexOf('@')==-1|| email.value.indexOf('.')==-1){
        txtEmail.innerHTML = 'E-mail Invalido'
        txtEmail.style.color ='yellow'
     }else{
        txtEmail.innerHTML = 'E-mail Valido'
        txtEmail.style.color ='#b5f702'
        emailOk = true

     }

    }
    function validaAssunto(){
        let txtAssunto = document.querySelector("#txtAssunto")
        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Texto é muito grande, digite no maximo 100 caracteres'
            txtAssunto.style.color ='yellow'
            txtAssunto.style.display = "block"
        }else{
            txtAssunto.style.display = "none"
            assuntoOk = true
        }

    }
    function enviar(){
        if( nomeOk == true && emailOk == true && assuntoOk == true){
            alert ("Formulario enviado com sucesso!")
        }else{
            alert("Preencha o formulario corretamente antes de enviar...")
        }

    }
    function mapaZoom(){
        mapa.style.width = "800px"
        mapa.style.height = "600px"

    }
    function mapaNormal(){
        mapa.style.width = "400px"
        mapa.style.height = "250px"

}
