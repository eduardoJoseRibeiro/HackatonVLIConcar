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
let ruido = document.getElementById('ruido');
let horasUso = document.getElementById('horasUso');

let ocilacao = [
                {'temp':'82ºC', 'vibr':'179mm/s', 'rui' : '95Hz'},
                {'temp':'82.4ºC', 'vibr':'181mm/s', 'rui' : '101Hz'},
                {'temp':'82.5ºC', 'vibr':'180mm/s', 'rui' : '97Hz'},
                {'temp':'82.3ºC', 'vibr':'182mm/s', 'rui' : '92Hz'},
                {'temp':'82.4ºC', 'vibr':'179mm/s', 'rui' : '86Hz'},
                {'temp':'82.2ºC', 'vibr':'178mm/s', 'rui' : '91Hz'}
                
            ];
let i = 0;
window.setInterval(function(){
    temperatura.innerHTML = ocilacao[i]['temp'];
    vibracao.innerHTML = ocilacao[i]['vibr'];
    ruido.innerHTML = ocilacao[i]['rui'];
    if(i==5){
        i = 0;
    }
    i++;
}, 2000);            

let produtos = [{'tipo':'Motor', 'equipamento':'ELE-103A', 'local':'TIUB'},
    {'tipo':'Redutor', 'equipamento':'RDL-101', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'ELE-002', 'local':'TIGU'},
    {'tipo':'Correia', 'equipamento':'TRC-131', 'local':'<b style="color: green;">TIA</b>'},
    {'tipo':'Motor', 'equipamento':'ELE-101', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'ELE-102', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'TRC-106A', 'local':'TIPI'},
    {'tipo':'Motor', 'equipamento':'TRC-107A', 'local':'TIPI'},
    {'tipo':'Redutor', 'equipamento':'RDL-102', 'local':'TIUB'},
    {'tipo':'Motor', 'equipamento':'ELE-005', 'local':'TIGU'},
    {'tipo':'Correia', 'equipamento':'TRC-131', 'local':'<b style="color: green;">TIA</b>'},
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

    colocaAqui.innerHTML = '';

    //esconde.style.display = "inline-block";
    //esconde.style.width = "100%";

    search.autofocus = true;
    let pesquisa = "";
    $(document).ready(function(){
        $("#search").keypress(function(){
            pesquisa = $("#search").val();
        });
    });
    let consulta = /pesquisa/;

    index.style.display = 'none';
    equipamemto.style.display = 'none';
    let conteudo = "<div class='container'><table class='highlight'><thead><tr><td>Tipo</td><td>Equipamento</td><td>Local</td></tr></thead><tbody>";

    while(a < 14){
        if(consulta.test(produtos[a]['tipo']) ||
            consulta.test(produtos[a]['equipamento']) ||
            consulta.test(produtos[a]['local']) || pesquisa == ''){
                conteudo += "<tr><td>"+produtos[a]['tipo']+"</td><td>"+produtos[a]['equipamento']+"</td><td>"+produtos[a]['local']+"</td><td><button class='waves-effect btn-flat green waves-light' onclick='solicitar()'>Solicitar Equipamento</button></td></tr>";
            }
        a++;
    }
    a = 0;
    conteudo += "</tbody></table></div>";
    colocaAqui.innerHTML = conteudo; 
}

function solicitar(){
    if(confirm("Deseja solicitar esse equipamento sobressalente?")){
        Materialize.toast('Equipamento Solicitado com Sucesso!', 4000);
    }
}