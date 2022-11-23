


(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var id_nome = document.getElementById('nome_id');

$('#bt1').click(function(){
  alert('Cliente Cadastrado com sucesso!!!');
  id_nome.value = "sdsd "
  id_nome.focus()
});

function cadastar(){

  id_nome.value = "sdsd "
  id_nome.focus()
};
