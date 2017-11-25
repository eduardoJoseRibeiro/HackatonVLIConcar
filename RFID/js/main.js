$(document).ready(function(){
    usuarios = document.getElementById('usuarios');

    if(usuarios.classList.contains("active")){
        $.ajax({
            type: "POST",
            url: "listarUsuarios.php",
            success: function( data )
            {
                var usuarios = JSON.parse(data);
                var dadosUsuarios = document.getElementById('dadosUsuarios');
                saida = "";

                for(usuario in usuarios){
                    saida += "<tr><td>" + usuarios[usuario].nome + "</td><td>"+ usuarios[usuario].codigo +"</td></tr>";
                }

                dadosUsuarios.innerHTML= saida;
            }
        });
    }

    var ultimaEntrada = document.getElementById('ultimaEntrada');

    window.setInterval(function(){
        $.ajax({
            type: "POST",
            url: "ultimaEntrada.php",
            success: function( data )
            {
                var usuario = JSON.parse(data);
                var nome = usuario[0].nome;
                var imagem = usuario[0].img;
                var imagemDinamica = document.getElementById('imagemDinamica');
                var ultimaEntradaNome = document.getElementById('ultimaEntradaNome');
                ultimaEntradaNome.innerHTML = nome;

                if(imagem != 'img/default.png'){
                    imagemDinamica.innerHTML = "<img src='"+imagem+"' alt ='imagem usuario' class='col s6' style='border-radius: 50%; height: 400px; width: 400px;'/>";

                }

            }
        });
    }, 500);

    window.setInterval(function () {
        $.ajax({
            type: "POST",
            url: "dadosRecentes.php",
            success: function( data )
            {
                var usuarios = JSON.parse(data);
                var dadosRecentes = document.getElementById('dadosRecentes');
                saida = "";

                for(usuario in usuarios){
                    saida += "<tr><td>" + usuarios[usuario].nome[0].nome + "</td><td>"+ usuarios[usuario].horario_entrada +"</td></tr>";
                }

                dadosRecentes.innerHTML= saida;
            }
        });
    }, 500);
});

