

function aumentarQuantidade(){
    let input = document.querySelector("#quantidade") 
    input.stepUp();                                               //Botão +
}

function diminuirQuantidade(){
    let input = document.querySelector("#quantidade")        //Botão -
    input.stepDown();
}       

function trocarImagem1(novoSrc){
    
    document.getElementById("img1").src = "../Assets/img/imgP1.jpg"
    document.getElementById("imgPrincipal").src="../Assets/img/camiseta1.jpg"

    if (("imgPrincipal").src != "../Assets/img/camiseta1.jpg"){
        ("img1").src = "../Assets/img/camiseta1.jpg"
    }
}

function trocarImagem2(novoSrc){
    document.getElementById("img2").src = "../Assets/img/imgP1.jpg"
    document.getElementById("imgPrincipal").src="../Assets/img/imgP1.jpg"

}

function trocarImagem3(novoSrc){
    document.getElementById("img3").src = "../Assets/img/imgP1.jpg"
    document.getElementById("imgPrincipal").src="../Assets/img/camiseta1.jpg"

}