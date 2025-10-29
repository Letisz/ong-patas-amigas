const formVoluntario = document.getElementById("form-voluntario");
if(formVoluntario) {
    formVoluntario.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Obrigado por se inscrever como voluntário! Entraremos em contato.");
        formVoluntario.reset();
    });
}
const formDoacao = document.getElementById("form-doacao");
if(formDoacao){
    formDoacao.addEventListener("submit", function(e){
        e.preventDefault();
        const valor = document.getElementById("valor").value;
        alert(`Obrigado pela doação de R$ ${valor}!`);
        formDoacao.reset();
    });
}
const formContato = document.getElementById("form-contato");
if(formContato){
    formContato.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Mensagem enviada! Entraremos em contato em breve.");
        formContato.reset();
    });
}
