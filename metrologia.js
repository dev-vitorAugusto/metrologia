// CRIANDO O EVENTO DE CLICK E ADICIONANDO-O AO FORMULÁRIO
document.getElementById("conversor-form").addEventListener("submit", function(event) {
    // PREVINE A EXECUÇÃO DO CÓDIGO SE NÃO HOUVER DADOS DIGITADOS
    event.preventDefault(); 

    // DEFININDO AS CONSTANTES QUE RECEBEM OS DADOS VINDO DOS INPUTS DO HTML
    const mmInput = document.getElementById("mm").value;
    // CONVERTE O VALOR VINDO PARA UM NÚMERO REAL
    const mm = parseFloat(mmInput);
  

    // VERIFICA SE O VALOR DIGITADO REALMENTE É UM NÚMERO
    if (isNaN(mm)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // CRIA UMA CONSTANTE QUE RECEBE O RESULTADO QUE A FUNÇÃO RETORNA
    const resultado = conversosMmParaPolegadas(mm);
    // ADICIONA O RESULTADO AO ELEMENTO HTML QUE TEM O ID MENCIONADO, OU SEJA, O RESULTADO SERÁ EXIBIDO NO ELEMENTO
    document.getElementById("polegadasConvertida").classList.remove('d-none')
    document.getElementById("polegadasConvertida").innerText = resultado + " polegadas";
  
});

// CRIANDO O EVENTO DE CLICK E ADICIONANDO-O AO FORMULÁRIO 2
document.getElementById("conversor-form2").addEventListener("submit", function(event) {
    // PREVINE A EXECUÇÃO DO CÓDIGO SE NÃO HOUVER DADOS DIGITADOS
    event.preventDefault(); 

    // DEFININDO AS CONSTANTES QUE RECEBEM OS DADOS VINDO DOS INPUTS DO HTML
    const numeradorInput = document.getElementById("numerador").value;
    const denominadorInput = document.getElementById("denominador").value; 
    // CONVERTE O VALOR VINDO PARA UM NÚMERO REAL
    const numeradorPolegada = parseInt(numeradorInput);
    const denominadorPolegada = parseInt(denominadorInput);

    // CRIA UMA CONSTANTE QUE RECEBE O RESULTADO QUE A FUNÇÃO RETORNA
    const resultado2 = conversorPolegadaParaMm(numeradorPolegada, denominadorPolegada);
    // ADICIONA O RESULTADO AO ELEMENTO HTML QUE TEM O ID MENCIONADO, OU SEJA, O RESULTADO SERÁ EXIBIDO NO ELEMENTO
    document.getElementById("milimetroConvertido").innerText = resultado2;

});

// FUNÇÃO QUE CONVERTE O VALOR EM MM PARA POLEGADAS 
function conversosMmParaPolegadas(mm) {
    let numerador = Math.round(mm * 5.0); // Correção do fator de conversão
    let denominador = 128;

    // Simplificação da fração
    while (numerador % 2 === 0 && denominador % 2 === 0) {
        numerador /= 2;
        denominador /= 2;
    }

    return `${numerador}/${denominador}"`;
}


// FUNÇÃO QUE CONVERTE O VALOR EM POLEGADAS PARA MM
function conversorPolegadaParaMm(numeradorPolegada, denominadorPolegada){
    let multiplicacaoNumerador = numeradorPolegada * 25.4;
    let divisaoPolegada = multiplicacaoNumerador / denominadorPolegada; 
    
    return `${divisaoPolegada}mm`
}

