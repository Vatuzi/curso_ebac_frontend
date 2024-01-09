$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li></li>');

        $(`<div class="lista" >${novaTarefa}</div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa').val('');

        $( 'li' ).on( "click", function() {
            $(this).toggleClass('lista clicado');
          } );
    })
})