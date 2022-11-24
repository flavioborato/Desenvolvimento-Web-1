
var nome = document.getElementById('nome_id');
var telefone = document.getElementById('telef_id');
var email = document.getElementById('email_id');

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



$('#bt1').click(function(){
  alert('Cliente Cadastrado com sucesso!!!');
});

function cadastar(){
  nome.value = ""
  nome.focus()
  telefone.value = ""
  telefone.focus()
  email.value = ""
  email.focus()
};
