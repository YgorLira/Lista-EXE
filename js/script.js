    
    //tabuada

    function clique() {
      let numero = parseInt(document.getElementById("numero").value);
      let resultado = document.getElementById("resultado");

      if (isNaN(numero)) {
        alert("Por favor, digite um número válido!");
        return;
      }

      let tabuada = `<h3>Tabuada do ${numero}</h3>`;
      for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}<br>`;
      }

      resultado.innerHTML = tabuada;
    }

function cliques() {
    let numero = parseInt(document.getElementById('numeros').value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido!");
        return;
}

    if (numero > 0) {
        resultado.innerHTML = ("É um número positivo");
        return;
    }

    else if (numero == 0) {
        resultado.innerHTML = ("É um número nulo");
        return;
    }

    else if (numero < 0)
        resultado.innerHTML = ("É um número negativo");
        return;
}

//Primas?

function ContaPrimo() {

    let numeros = parseInt(document.getElementById('numeros').value);
    let resultado = document.getElementById("primo");

    if (isNaN(numeros)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    let prima = true;

    if (numeros === 1){
        prima = false;
    } else{
        
        for(let p = 2; p <= Math.sqrt(numeros); p++){

            if (numeros % p === 0) {
                prima = false;
                break;
            }
        }
    }

    if (prima){
        resultado.innerText = `${numeros} é primo`;
    } else{
        resultado.innerText = `${numeros} não é primo`;
    }
}

//natação EXE4

function MostrarTabela() {
  // Pega todos os inputs
  const inputs = document.querySelectorAll('.valor');

  // Converte para array de números (ignora vazios)
  const valores = Array.from(inputs)
    .map(input => Number(input.value))
    .filter(v => !isNaN(v));

  // Ordena do menor para o maior
  const ordenados = valores.sort((a, b) => a - b);

  // Seleciona a tabela e limpa o conteúdo anterior
  const tabela = document.getElementById('tabela');
  tabela.innerHTML = `
    <tr>
      <th>Posição</th>
      <th>Valor</th>
    </tr>
  `;

  // Adiciona as linhas na tabela
  ordenados.forEach((valor, index) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${index + 1}</td><td>${valor}</td>`;
    tabela.appendChild(linha);
  });
}

//EXE 5

function descobrir() {
    let m = parseInt(document.getElementById("M").value);
    let a = parseInt(document.getElementById("A").value);
    let b = parseInt(document.getElementById("B").value);
    let terceiro = m - (a + b);

    if (isNaN(m) || isNaN(a) || isNaN(b)) {
        document.getElementById("s").innerHTML = "Preencha todos os campos.";
        document.getElementById("n").innerHTML = "";
        return;
    }

    if (a + b > m) {
        document.getElementById("s").innerHTML = "A soma das idades dos filhos é maior que a idade da mãe";
        document.getElementById("n").innerHTML = "";
        return;
    }

      if (a + b == m) {
        document.getElementById("s").innerHTML = "As idades somam exatamente a idade da mãe — falta idade desconhecida (0).";
    } else {
        document.getElementById("s").innerHTML = "A idade do filho mais velho é: " + terceiro + " anos.";
    }
}
