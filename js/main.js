
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById('cep').value;    
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);
    $.ajax ({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response); 
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);  
            $("#cidade").html(response.localidade);  
            $("#uf").html(response.uf);
            $("#titulo").html("CEP: " + response.cep);
            $(".cep").show();           
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
