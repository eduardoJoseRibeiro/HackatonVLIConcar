function equipamentos(){
    let equipamento = document.getElementById('equipamento');
    let index = document.getElementById('index');

    equipamento.style.display = 'block';
    index.style.display = 'none';
}

function pane(){
    let pane = document.getElementById("pane");

}

let temperatura = document.getElementById('temperatura');
let vibracao = document.getElementById('vibracao');
let horasUso = document.getElementById('horasUso');

let ocilacao = [
                {'temp':'82ºC', 'vibr':'179mm/s'},
                {'temp':'82.4ºC', 'vibr':'181mm/s'},
                {'temp':'82.5ºC', 'vibr':'180mm/s'},
                {'temp':'82.3ºC', 'vibr':'182mm/s'},
                {'temp':'82.4ºC', 'vibr':'179mm/s'},
                {'temp':'82.2ºC', 'vibr':'178mm/s'}
                
            ];
let i = 0;
window.setInterval(function(){
    temperatura.innerHTML = ocilacao[i]['temp'];
    vibracao.innerHTML = ocilacao[i]['vibr'];
    if(i==5){
        i = 0;
    }
    i++;
}, 2000);            

let produtos = [{'tipo':'Motor', 'equipamento':'ELE-103A', 'local':'TIUB'},
    {'tipo':'Redutor', 'equipamento':'RDL-101', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'ELE-002', 'local':'TIGU'},
    {'tipo':'Correia', 'equipamento':'TRC-131', 'local':'TIA'},
    {'tipo':'Motor', 'equipamento':'ELE-101', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'ELE-102', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'TRC-106A', 'local':'TIPI'},
    {'tipo':'Motor', 'equipamento':'TRC-107A', 'local':'TIPI'},
    {'tipo':'Redutor', 'equipamento':'RDL-102', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'ELE-005', 'local':'TIGU'},
    {'tipo':'Correia', 'equipamento':'TRC-131', 'local':'TIA'},
    {'tipo':'Motor', 'equipamento':'ELE-103', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'ELE-108', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'TRC-107A', 'local':'TIPI'},
    {'tipo':'Motor', 'equipamento':'TRC-109A', 'local':'TIPI'}
];

let a = 0;

function listaProdutos(){
    let index = document.getElementById('index');
    let equipamemto = document.getElementById('equipamento');
    let colocaAqui = document.getElementById('colocaAqui');
    let esconde = document.getElementById('esconde');
    let search = document.getElementById('search');

    index.style.display = 'none';
    equipamemto.style.display = 'none';
    let conteudo = "<div class='container'><table class='highlight'><thead><tr><td>Tipo</td><td>Equipamento</td><td>Local</td></tr></thead><tbody>";

    while(a < 14){
        conteudo += "<tr><td>"+produtos[a]['tipo']+"</td><td>"+produtos[a]['equipamento']+"</td><td>"+produtos[a]['local']+"</td></tr>";
        a++;
    }
    conteudo += "</tbody></table></div>";
    colocaAqui.innerHTML = conteudo;

    esconde.style.display = "inline-block";
    esconde.style.width = "100%";

    search.autofocus = true;
    let pesquisa = "";
    $(document).ready(function(){
        $("#search").keypress(function(){
            pesquisa = $("#search").val();
            alert(pesquisa);
        });
    }); 
}
