/* JS alterações
Por:- Flavio Fernando Borato */
var nome = document.getElementById('nome_id');
var telefone = document.getElementById('telef_id');
var email = document.getElementById('email_id');
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

/**
 * Use this file to override Materialize files so you can update
 * the core Materialize files in the future
 *
 * Made By MaterializeCSS.com
 */

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space




