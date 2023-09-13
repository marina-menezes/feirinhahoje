let feirinhasList = document.getElementById('feirinhas-list');
feiras.forEach(feira => {

    const diaSemana = feira['Dia'].replace('Feira', 'feira');

    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(feira['Bairro'] + ', ' + feira['Endereço'])}`;

    var newElem = `
        <div class="container mt-3 pb-3 border-bottom">
            <div class="row">

                <div class="col">
                    <div class="custom-weight bairro">
                        <a class="text-body-secondary" href="${googleMapsLink}" target="_blank">${feira['Bairro']}</a>
                    </div>                     
                    <div class="endereco text-body-tertiary">${feira['Endereço']}</div>
                </div>

                <div class="col dia text-body-secondary">
                    ${diaSemana}
                </div>

                <div class="col hora text-body-secondary">
                    ${feira['Horário']}
                </div>
                
            </div>
        </div>`;
    
    feirinhasList.innerHTML += newElem;
    
});

// Manipular evento de digitação na caixa de busca
document.getElementById('search-input').addEventListener('input', function () {
    let searchTerm = this.value.toLowerCase();
    let feiraElements = feirinhasList.getElementsByClassName('container');
  
    // Percorrer os elementos de feira e mostrar/esconder com base no termo de busca
    for (let i = 0; i < feiraElements.length; i++) {
      let feiraElement = feiraElements[i];
      let bairro = feiraElement.querySelector('.bairro').textContent.toLowerCase();
      let endereco = feiraElement.querySelector('.endereco').textContent.toLowerCase();
      let dia = feiraElement.querySelector('.dia').textContent.toLowerCase();
      let hora = feiraElement.querySelector('.hora').textContent.toLowerCase();
  
      if (bairro.includes(searchTerm) || endereco.includes(searchTerm) || dia.includes(searchTerm) || hora.includes(searchTerm)) {
        feiraElement.style.display = 'block'; // Mostrar elemento
      } else {
        feiraElement.style.display = 'none'; // Esconder elemento
      }
    }
  });
