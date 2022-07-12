
function image(){
    document.getElementById('#display-image').style.backgroundImage = localStorage.imagem;
}
function change() {
    localStorage.removeItem("imagem");
    localStorage.imagem = document.getElementById('#display-image').style.backgroundImage;
    console.log("gang");
    document.location.reload(true);
}