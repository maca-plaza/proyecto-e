const email = document.getElementById("exampleFormControlInput1")
const texto = document.getElementById("exampleFormControlTextarea1")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
warnings.style.color = "orange";



form.addEventListener ("submit", e=>{
    
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(texto.value.length > 6){
        warnings += `El texto es muy corto <br>`
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "Enviado"
    }
    document.getElementById("form").reset();
})


