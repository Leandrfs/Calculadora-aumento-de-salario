function calcular() {
    // Limpa os dados armazenados no localStorage
    localStorage.clear();
    
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
    const porcentagemAumento = parseFloat(document.getElementById('porcentagemAumento').value);
  
    if (isNaN(salarioAtual) || isNaN(porcentagemAumento)) {
      document.getElementById('resultado').innerHTML = '<p>Preencha os valores corretamente.</p>';
      document.getElementById('resultado').style.display = 'block';
    } else {
      const novoSalario = salarioAtual * (1 + (porcentagemAumento / 100));
      const aumento = novoSalario - salarioAtual;
  
      document.getElementById('resultado').innerHTML = `
        <p>Salário atual: R$ ${salarioAtual.toFixed(2)}</p>
        <p>Porcentagem de aumento: ${porcentagemAumento}%</p>
        <p>Aumento: R$ ${aumento.toFixed(2)}</p>
        <p>Novo salário: R$ ${novoSalario.toFixed(2)}</p>
      `;
  
      document.getElementById('resultado').style.display = 'block';
    }
  }
  