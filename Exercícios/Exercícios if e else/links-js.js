function medianotas() {
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let nota3 = Number(document.getElementById("nota3").value);
  let nota4 = Number(document.getElementById("nota4").value);

  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 7) {
    document.getElementById("resultado").innerHTML = "Aprovado";
  } else {
    document.getElementById("resultado").innerHTML = "Reprovado";
  }
}

function medianotas2() {
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);

  let media = (nota1 + nota2) / 2;
  let mensagem;

  if (media >= 0 && media < 3) {
    mensagem = "Reprovado";
  } else if (media >= 3 && media < 7) {
    mensagem = "Exame";
  } else if (media >= 7 && media <= 10) {
    mensagem = "Aprovado";
  } else {
    mensagem = "Impossível informar";
  }
  document.getElementById("mensagem").innerHTML = mensagem;
}

function calcularescolha() {
  let primeiro_nro = Number(document.getElementById("primeiro_nro").value);
  let segundo_nro = Number(document.getElementById("segundo_nro").value);
  let opçao = Number(document.getElementById("opçao").value);

  let resultado;

  switch (opçao) {
    case 1:
      resultado = (primeiro_nro + segundo_nro) / 2;
      break;

    case 2:
      if (primeiro_nro >= segundo_nro) {
        resultado = primeiro_nro - segundo_nro;
      } else {
        resultado = segundo_nro - primeiro_nro;
      }
      break;

    case 3:
      resultado = primeiro_nro * segundo_nro;
      break;

    case 4:
      if (segundo_nro != 0) {
        resultado = primeiro_nro / segundo_nro;
      } else {
        resultado = "Não existe divisão por 0";
      }
      break;
    default:
      resultado = "Opção invalida";
  }
  document.getElementById("resultado").innerHTML = resultado;
}

function calcularmenor() {
  let primeironro = Number(document.getElementById("primeironro").value);
  let segundonro = Number(document.getElementById("segundonro").value);

  let menor = 0;

  if (primeironro < segundonro) {
    menor = primeironro;
  } else {
    menor = segundonro;
  }
  document.getElementById("resultado").innerHTML = `O menor numero é ${menor}`;
}

function calcularmaior() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = Number(document.getElementById("n3").value);

  let maior = 0;

  if (n1 > n2) {
    maior = n1;
  } else {
    maior = n2;
  }
  if (maior < n3) {
    maior = n3;
  }

  document.getElementById("resultado").innerHTML = `O maior numero é ${maior}`;
}

function Calcularescolha1() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let escolha = Number(document.getElementById("escolha").value);

  switch (escolha) {
    case 1:
      document.getElementById(
        "resultado"
      ).innerHTML = `O resultado é ${Math.pow(n1, n2)}`;
      break;
    case 2:
      document.getElementById(
        "resultado"
      ).innerHTML = `<p>A raiz quadrada do primeiro numero é ${Math.pow(
        n1,
        1 / 2
      )}</p> A do segundo numero é ${Math.pow(n2, 1 / 2)}`;
      break;
    case 3:
      document.getElementById(
        "resultado"
      ).innerHTML = `<p>A raiz cubica do primeiro numero é ${Math.pow(
        n1,
        1 / 3
      )}</p> A do segundo numero é ${Math.pow(n2, 1 / 3)}`;
      break;
    default:
      alert(`Escolha uma opção valida!`);
  }
}

function Calcularsalario() {
  let salario = Number(document.getElementById("salario").value);

  if (salario <= 500) {
    let aumento = (salario * 30) / 100;
    document.getElementById(
      "resultado"
    ).innerHTML = `Seu novo salario será de ${salario + aumento}`;
  } else {
    alert(`Você nao terá aumento!`);
  }
}

function Calcularsalario2() {
  let salario = Number(document.getElementById("salario").value);

  if (salario <= 300) {
    let aumento = (salario * 35) / 100;
    document.getElementById(
      "resultado"
    ).innerHTML = `Seu novo salario será de ${n1 + aumento}`;
  } else {
    let aumento = (salario * 15) / 100;
    document.getElementById(
      "resultado"
    ).innerHTML = `Seu novo salario será de ${n1 + aumento}`;
  }
}

function Calcularsaldo() {
  let saldo = Number(document.getElementById("saldo").value);
  var credito = 0;

  if (saldo > 400) {
    var credito = (saldo * 30) / 100;
  } else if (saldo <= 400 && saldo > 300) {
    var credito = (saldo * 25) / 100;
  } else if (saldo <= 300 && saldo > 200) {
    var credito = (saldo * 20) / 100;
  } else {
    var credito = (saldo * 10) / 100;
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `Seu crédito será de ${credito}`;
}

function Calcularcusto() {
  let custo = Number(document.getElementById("custo").value);
  var distribuidor = 0;
  var imposto = 0;
  var preco = 0;

  if (custo < 12000) {
    var distribuidor = (custo * 5) / 100;
    var preco = custo + distribuidor;
  } else if (custo >= 12000 && custo <= 25000) {
    var distribuidor = (custo * 10) / 100;
    var imposto = (custo * 15) / 100;
    var preco = custo + distribuidor + imposto;
  } else {
    var distribuidor = (custo * 15) / 100;
    var imposto = (custo * 20) / 100;
    var preco = custo + distribuidor + imposto;
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `O preço do carro é de ${preco}`;
}

function calcularGrupoRisco() {
  let idade = Number(document.getElementById("idade").value);
  let peso = Number(document.getElementById("peso").value);
  var risco; 

  if (idade < 20) {
    if (peso >= 0 && peso < 60) {
      risco = 9;
    } else if (peso >= 60 && peso <= 90) {
      risco = 8;
    } else if (peso > 90) {
      risco = 7;
    }
  } else if (idade >= 20 && idade <= 50) {
    if (peso >= 0 && peso < 60) {
      risco = 6;
    } else if (peso >= 60 && peso <= 90) {
      risco = 5;
    } else if (peso > 90) {
      risco = 4;
    }
  } else if (idade > 50) {
    if (peso >= 0 && peso < 60) {
      risco = 3;
    } else if (peso >= 60 && peso <= 90) {
      risco = 2;
    } else {
      risco = 1;
    }
  } else {
    risco = "Idade inválida, não é possível calcular";
  }
  console.log(idade, peso, risco); 

  document.getElementById("risco").innerHTML = `Seu grupo de risco é ${risco}`
}



