const form = document.querySelector("#formulario") //DOM DO FORMULARIO // 


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const emailInput = document.querySelector("#email") // INPUT DE EMAIL //
    const nomeInput = document.querySelector("#nome");  // INPUT DE NOME //
    const telInput = document.querySelector("#numTel");  // INPUT DE TELEFONE // 
    
    sessionStorage.setItem("email", emailInput.value);
    sessionStorage.setItem("nome", nomeInput.value);          // ENVIANDO DADOS DO FORM PARA SESSION STORAGE//
    sessionStorage.setItem("telefone", telInput.value);

})

function produto(){
    window.open("file:///C:/wamp64/www/PROJETO%20CURSO/Vieus/produto.html")
}
   
   

