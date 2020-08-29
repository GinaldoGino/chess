//funcao centralizando e redimensionando tabuleiro
function dimension (){
	var w = window.innerWidth; //identifica a dimensao horizontal
	var h = window.innerHeight; //identifica a dimensao vertical
	
	//condicao para igualar as dimensoes 
	if (h > w) {
		h = w;
	}
	else{
		w = h;
	}

	document.getElementById("tabuleiro").style.width =(w*0.90)+"px"; //90% do tamanho mínimo da tela
	document.getElementById("tabuleiro").style.height =(h*0.90)+"px"; //90% do tamanho mínimo da tela
	document.getElementById("tabuleiro").style.background = "DarkSlateGray";
	diagramacao();
}

//diagramacao das casas
function diagramacao(){
	var teste = document.getElementById("diagrama"); 
	if (!teste.children[0]){ //verifica se ja existe celulas da tabela criada
		for (var i=0; i<8; i++) {
			var newTr = document.createElement("tr"); //cria tag <tr>
			document.getElementById("diagrama").appendChild(newTr); //adiciona tr como filho da tabela
			for (var j=0; j<8; j++) {
				var newTd = document.createElement("td"); //cria tag <td>
				newTr.appendChild(newTd);	//adiciona td como filho de tr
			}
		}
	}	
}