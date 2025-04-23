const etapas = [
    "🌾 A produção começa no campo, com agricultores que cultivam alimentos como o tomate, o milho e o feijão de forma sustentável.",
    "🚛 Os alimentos são transportados em caminhões refrigerados para os centros de distribuição urbanos.",
    "🏬 Nos centros de distribuição, os alimentos são separados, armazenados e enviados para mercados e feiras.",
    "🍽️ Finalmente, os alimentos chegam aos consumidores nas cidades, sendo parte essencial de uma alimentação saudável e conectada ao campo."
  ];
  
  function showInfo(index) {
    const infoBox = document.getElementById("info");
    infoBox.innerHTML = `<p>${etapas[index]}</p>`;
  }
  