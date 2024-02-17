const emailRemitente = 'seroptimo.salud@gmail.com';

const llamadaApi = async function llamadaAPI() {
  const url = 'https://backend-profesorjand.onrender.com/seroptimo';
  try {
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  } catch (error) {
    console.log(error);
  }
  return;
};

const grafico = {
  total: null,
  fisica: null,
  ambiente: null,
  mental: null,
  emocional: null,
};
function enviar(e) {
  e.preventDefault();
  const emailReceptor = document.getElementsByName('correo')[0].value;
  console.log('emailReceptor', emailReceptor);
  const urlBase = 'https://guiadeparche.com/ser-optimo/';
  const nombre = document.getElementById('nombre').value;
  let v = { total: 0, fisica: 0, ambiente: 0, mental: 0, emocional: 0 };
  let p = { total: 0, fisica: 0, ambiente: 0, mental: 0, emocional: 0 };
  let k = { total: 0, fisica: 0, ambiente: 0, mental: 0, emocional: 0 };
  const fisica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const ambiente = [16, 17, 18, 19, 20, 21, 22, 30];
  const mental = [23, 24, 25, 26, 27, 28, 29];
  const emocional = [31, 32, 33, 34, 35];
  for (var i = 1; i <= 35; i++) {
    const radio = document.querySelector(
      `input[name="preg${i}"]:checked`
    ).value;
    if (radio === 'v') {
      v.total = v.total + 1;
      v.fisica = v.fisica + (fisica.includes(i) ? 1 : 0);
      v.ambiente = v.ambiente + (ambiente.includes(i) ? 1 : 0);
      v.mental = v.mental + (mental.includes(i) ? 1 : 0);
      v.emocional = v.emocional + (emocional.includes(i) ? 1 : 0);
    }
    if (radio === 'p') {
      p.total = p.total + 1;
      p.fisica = p.fisica + (fisica.includes(i) ? 1 : 0);
      p.ambiente = p.ambiente + (ambiente.includes(i) ? 1 : 0);
      p.mental = p.mental + (mental.includes(i) ? 1 : 0);
      p.emocional = p.emocional + (emocional.includes(i) ? 1 : 0);
    }
    if (radio === 'k') {
      k.total = k.total + 1;
      k.fisica = k.fisica + (fisica.includes(i) ? 1 : 0);
      k.ambiente = k.ambiente + (ambiente.includes(i) ? 1 : 0);
      k.mental = k.mental + (mental.includes(i) ? 1 : 0);
      k.emocional = k.emocional + (emocional.includes(i) ? 1 : 0);
    }
  }
  const elementoParrafoResultado = document.getElementById('parrafoResultado');
  let textoParrafoResultado;

  if (v.total >= 9 && p.total >= 9 && k.total >= 9) {
    // tridosha
    resultadoDosha = 'TRIDOSHA';
    urlPaypalDosha =
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Y9E6FD7D5GQWG';
    (urlGratisDosha = urlBase + 'Tridosha_Inicial.pdf'), '_blank', 'noopener';
    // window.open(urlGratisDosha)
  } else if (
    (v.total >= 15 && p.total >= 12) ||
    (p.total >= 15 && v.total >= 12)
  ) {
    // Vata - Pitta
    resultadoDosha = 'VATA_PITTA';
    urlPaypalDosha =
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YJAURZSHQRR5L';
    (urlGratisDosha = urlBase + 'Vata_Pitta_Inicial.pdf'), '_blank', 'noopener';
    // window.open(urlGratisDosha)
  } else if (
    (v.total >= 15 && k.total >= 12) ||
    (k.total >= 15 && v.total >= 12)
  ) {
    // Vata - Kapha
    resultadoDosha = 'VATA_KAPHA';
    urlPaypalDosha =
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BU744MRJJ6GU4';
    (urlGratisDosha = urlBase + 'Vata_Kapha_Inicial.pdf'), '_blank', 'noopener';
    // window.open(urlGratisDosha)
  } else if (
    (p.total >= 15 && k.total >= 12) ||
    (k.total >= 15 && p.total >= 12)
  ) {
    // Pitta - Kapha
    resultadoDosha = 'PITTA_KAPHA';
    urlPaypalDosha =
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GBKLE4B85GUNE';
    (urlGratisDosha = urlBase + 'Pitta_Kapha_Inicial.pdf'),
      '_blank',
      'noopener';
    // window.open(urlGratisDosha)
  } else if (v.total > p.total && v.total > k.total) {
    //Vata
    resultadoDosha = 'VATA';
    urlPaypalDosha =
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XJC8VUSHPD2PS';
    (urlGratisDosha = urlBase + 'Vata_Inicial.pdf'), '_blank', 'noopener';
    // window.open(urlGratisDosha)
  } else if (p.total > v.total && p.total > k.total) {
    //Pitta
    resultadoDosha = 'PITTA';
    urlPaypalDosha =
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R3PUP33ADCJX4';
    (urlGratisDosha = urlBase + 'Pitta_Inicial.pdf'), '_blank', 'noopener';
    // window.open(urlGratisDosha)
  } else {
    //Kapha
    resultadoDosha = 'KAPHA';
    urlPaypalDosha =
      'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E3YZB2C7UTZXU';
    (urlGratisDosha = urlBase + 'Kapha_Inicial.pdf'), '_blank', 'noopener';
    // window.open(urlGratisDosha)
  }
  textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle inicial de tu "Constitución Dosha" si deseas un detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
  elementoParrafoResultado.innerHTML = textoParrafoResultado;
  const containerPDF = document.getElementById('ContainerPDF');
  containerPDF.classList = 'show';
  const objectPDF = document.getElementById('objectPDF');
  objectPDF.data = urlGratisDosha;
  const anchorDoshaGratis = document.getElementById('anchorDoshaGratis');
  anchorDoshaGratis.href = urlGratisDosha;
  draw({ v, p, k }, resultadoDosha);
  llenarDatosTabla({ v, p, k });
  enviarCorreo({
    nombre,
    emailReceptor,
    resultadoDosha,
    urlPaypalDosha,
    urlGratisDosha,
    emailRemitente,
    v,
    k,
    p,
  });
}

function draw({ v, p, k }, resultadoDosha) {
  const containerResults = document.getElementsByClassName('ContainerResults');
  const containerGraficos =
    document.getElementsByClassName('ContainerGraficos');
  containerResults[0].classList.remove('hide');
  containerGraficos[0].classList.remove('hide');
  containerResults[0].classList.add('show');
  containerGraficos[0].classList.add('show');
  var ctxT = document.getElementById('graficoTotal');
  var ctxF = document.getElementById('graficoFisica');
  var ctxA = document.getElementById('graficoAmbiente');
  var ctxM = document.getElementById('graficoMental');
  var ctxE = document.getElementById('graficoEmocional');
  const dataTotal = [
    {
      label: 'Total - ' + resultadoDosha,
      data: [v.total, p.total, k.total],
      borderColor: 'rgba(224,85,235,0.5)',
      backgroundColor: 'rgba(224,85,235,0.5)',
    },
  ];
  const dataFisica = [
    {
      label: 'Fisica',
      data: [v.fisica, p.fisica, k.fisica],
      borderColor: 'rgba(224,85,235,0.5)',
      backgroundColor: 'rgba(224,85,235,0.5)',
    },
  ];
  const dataAmbiente = [
    {
      label: 'Ambiente',
      data: [v.ambiente, p.ambiente, k.ambiente],
      borderColor: 'rgba(224,85,235,0.5)',
      backgroundColor: 'rgba(224,85,235,0.5)',
    },
  ];
  const dataMental = [
    {
      label: 'Mental',
      data: [v.mental, p.mental, k.mental],
      borderColor: 'rgba(224,85,235,0.5)',
      backgroundColor: 'rgba(224,85,235,0.5)',
    },
  ];
  const dataEmocional = [
    {
      label: 'Emocional',
      data: [v.emocional, p.emocional, k.emocional],
      borderColor: 'rgba(224,85,235,0.5)',
      backgroundColor: 'rgba(224,85,235,0.5)',
    },
  ];
  const data = {
    labels: ['Vata', 'Pitta', 'Kapha'],
    datasets: [
      {
        label: 'Dosha',
        data: dataTotal,
      },
    ],
  };
  const suggestedMaxTotal = 35;
  const suggestedMaxFisica = 15;
  const suggestedMaxAmbiente = 8;
  const suggestedMaxMental = 7;
  const suggestedMaxEmocional = 5;
  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255,255,255,0.8)',
        },
        grid: {
          color: 'rgba(255,255,255,0.4)',
        },
        ticks: {
          color: 'white',
          showLabelBackdrop: false,
        },
        pointLabels: {
          color: ['#6ef9e5', '#b90101', '#fdc609'],
          font: { size: 20 },
          backgroundColor: 'green',
        },
        suggestedMin: 0,
        suggestedMax: suggestedMaxTotal,
      },
    },
    elements: {
      line: {
        backgroundColor: ['#6ef9e5', '#b90101', '#fdc609'],
        borderColor: ['#6ef9e5', '#b90101', '#fdc609'],
      },
    },
    chartArea: {
      backgroundColor: '#0f0f0f',
    },
  };
  const animation = {
    duration: 300,
    onProgress: function (context) {
      if (context.initial) {
        initProgress.value = context.currentStep / context.numSteps;
      } else {
        progress.value = context.currentStep / context.numSteps;
      }
    },
    onComplete: function (context) {
      if (context.initial) {
        // console.log('Initial animation finished');
      } else {
        // console.log('animation finished');
      }
    },
  };

  if (
    grafico.total ||
    grafico.fisica ||
    grafico.ambiente ||
    grafico.mental ||
    grafico.emocional
  ) {
    grafico.total.clear();
    grafico.total.destroy();
    grafico.fisica.clear();
    grafico.fisica.destroy();
    grafico.ambiente.clear();
    grafico.ambiente.destroy();
    grafico.mental.clear();
    grafico.mental.destroy();
    grafico.emocional.clear();
    grafico.emocional.destroy();
  }

  grafico.total = new Chart(ctxT, {
    type: 'radar',
    data: { ...data, datasets: dataTotal },
    options,
    animation,
  });
  grafico.fisica = new Chart(ctxF, {
    type: 'radar',
    data: { ...data, datasets: dataFisica },
    options: {
      ...options,
      scales: {
        ...options.scales,
        r: { ...options.scales.r, suggestedMax: suggestedMaxFisica },
      },
    },
    animation,
  });
  grafico.ambiente = new Chart(ctxA, {
    type: 'radar',
    data: { ...data, datasets: dataAmbiente },
    options: {
      ...options,
      scales: {
        ...options.scales,
        r: { ...options.scales.r, suggestedMax: suggestedMaxAmbiente },
      },
    },
    animation,
  });
  grafico.mental = new Chart(ctxM, {
    type: 'radar',
    data: { ...data, datasets: dataMental },
    options: {
      ...options,
      scales: {
        ...options.scales,
        r: { ...options.scales.r, suggestedMax: suggestedMaxMental },
      },
    },
    animation,
  });
  const dataGraficoEmocional = {
    type: 'radar',
    data: { ...data, datasets: dataEmocional },
    options: {
      ...options,
      scales: {
        ...options.scales,
        r: { ...options.scales.r, suggestedMax: suggestedMaxEmocional },
      },
    },
    animation,
  };

  grafico.emocional = new Chart(ctxE, dataGraficoEmocional);
}

function llenarDatosTabla({ v, p, k }) {
  const tablaResultados = document.getElementById('tablaResultados');
  tablaResultados.classList = 'showTable';
  document.getElementById('totalVata').innerHTML = v.total;
  document.getElementById('fisicoVata').innerHTML = v.fisica;
  document.getElementById('ambienteVata').innerHTML = v.ambiente;
  document.getElementById('mentalVata').innerHTML = v.mental;
  document.getElementById('emocionalVata').innerHTML = v.emocional;

  document.getElementById('totalPitta').innerHTML = p.total;
  document.getElementById('fisicoPitta').innerHTML = p.fisica;
  document.getElementById('ambientePitta').innerHTML = p.ambiente;
  document.getElementById('mentalPitta').innerHTML = p.mental;
  document.getElementById('emocionalPitta').innerHTML = p.emocional;

  document.getElementById('totalKapha').innerHTML = k.total;
  document.getElementById('fisicoKapha').innerHTML = k.fisica;
  document.getElementById('ambienteKapha').innerHTML = k.ambiente;
  document.getElementById('mentalKapha').innerHTML = k.mental;
  document.getElementById('emocionalKapha').innerHTML = k.emocional;
}

async function enviarCorreo(variables) {
  const dataApi = await llamadaAPI();
  emailjs
    .send(dataApi.email.SERVICE_ID, dataApi.email.TEMPLATE_ID, variables)
    .then(
      (response) => {
        console.log(
          'SUCCESS!',
          response.status,
          response.text,
          'variables: ',
          variables
        );
      },
      (error) => {
        console.log('FAILED...', error, 'variables: ', variables);
      }
    );
}
