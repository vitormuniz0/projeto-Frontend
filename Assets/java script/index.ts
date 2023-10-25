const emailInput = document.querySelector("#email") // INPUT DE EMAIL //
const nomeInput = document.querySelector("#nome");  // INPUT DE NOME //
const telInput = document.querySelector("#numTel");  // INPUT DE TELEFONE // 

function Get() {
    return fetch('https://apigenerator.dronahq.com/api/WBZ3Dcor/carro')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  async function postData(url = 'https://apigenerator.dronahq.com/api/WBZ3Dcor/carro', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  postData('https://apigenerator.dronahq.com/api/WBZ3Dcor/carro/', {"nome":nomeInput, "email":emailInput, "telefone":telInput })
    .then((data) => {
      console.log(data);  
  });