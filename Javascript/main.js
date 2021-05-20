async function getWeather() {
  try {
      const response = await fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019');
      if (response) {
          const jsonResponse = await response.json();
          const today = jsonResponse.fecha;
          const weather = jsonResponse.stateSky.description.toLowerCase();
          const temperature = jsonResponse.temperatura_actual;
          const tiempo = `Hoy, ${today},  habrá  ${weather} de ${temperature}º`;
          document.getElementById('tiempo').innerHTML = tiempo;
      }
  } catch (error) {
      console.log(error);
  }
}
