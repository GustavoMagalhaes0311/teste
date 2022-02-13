function borda(){
    document.querySelector('#login').classList.add('borda');
}
function remove(){
    document.querySelector('#login').classList.remove('borda');
}
function botaocontinuar(){
    document.querySelector('#continuar').classList.add('borda');
}
function tirar(){
    document.querySelector('#continuar').classList.remove('borda');
}
function digitou(e){
    if (e.keyCode == 13){
        let texto = document.getElementById("login").value;
        console.log(texto);
    }
}