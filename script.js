function jogar(){
	let b1 = document.getElementById('n1').value;
	let b2 = document.getElementById('n2').value;
	let b3 = document.getElementById('n3').value
	let b4 = document.getElementById('n4').value;
	let b5 = document.getElementById('n5').value;
	let b6 = document.getElementById('n6').value;
	 //array com o  valor de cada aposta
	let bolao = [b1,b2,b3,b4,b5,b6];
	console.log(bolao);
	 //sorteio da mega da virada
	 let sorteio = [];
	 sorteio = bolao.map(function(jogo){
	 	return Math.floor(Math.random()*99);
	 });
	 console.log(sorteio);
	 //resultado do bolao
	let acertos = [];
	acertos = sorteio.filter(function(acertou){
		for(i in bolao){
			if(bolao == sorteio){
				return true;
			}else{
				return false;
			}
		}
	});
	resultado();

}

function resultado(){
	let resultado = document.getElementById('resultado');
	if(acertos.lenght == 6){
		resultado.innerHTML="Voçe Ganhou parabêns!"
	}else{
		resultado.innerHTML="Boa sorte tente outra vez..."
	}

}







