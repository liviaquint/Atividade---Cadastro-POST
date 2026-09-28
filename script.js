function enviarDados() {
  let nome = document.getElementById('nome').value
  let sobrenome = document.getElementById('sobrenome').value
  let telefone = document.getElementById('telefone').value
  let cidade = document.getElementById('cidade').value
  let estado = document.getElementById('estado').value
  let cep = document.getElementById('cep').value
  let rg = document.getElementById('rg').value
  let cpf = document.getElementById('cpf').value
  let idade = document.getElementById('idade').value
  let curso = document.getElementById('curso').value
  let escola = document.getElementById('escola').value

  fetch('http://localhost:3000/cadastros', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      sobrenome: sobrenome,
      telefone: telefone,
      cidade: cidade,
      estado: estado,
      cep: cep,
      rg: rg,
      cpf: cpf,
      idade: idade,
      curso: curso,
      escola: escola
    })
  })
    .then(resposta => resposta.json())
    .then(dados => {
      alert('Cadastro enviado!')
      console.log(dados)
    })
    .catch(erro => {
      console.log(erro)
    })
}