document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const razaoSocial = document.getElementById('first-name').value.trim();
  const cnpj = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const mensagemErro = document.getElementById('mensagemErro');
  const resultadoDiv = document.getElementById('resultado');


  mensagemErro.textContent = '';


  let formularioValido = true;

  const cnpjPattern = /^\d{14}$/; 
  if (!cnpj || !cnpjPattern.test(cnpj)) {
    formularioValido = false;
    mensagemErro.textContent = 'Por favor, insira um CNPJ válido com 14 dígitos.';
  }

 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    formularioValido = false;
    mensagemErro.textContent = 'Por favor, insira um e-mail válido.';
  }

  if (formularioValido) {
    alert('Formulário enviado com sucesso!');
    console.log('Razão Social:', razaoSocial);
    console.log('CNPJ:', cnpj);
    console.log('E-mail:', email);
    console.log('Mensagem:', message);
  }
  
});
