const grafico = {total:null, fisica:null, ambiente:null, mental:null, emocional:null};
      function enviar(e){
        const urlBase = "https://guiadeparche.com/ser-optimo/";
        const nombre = document.getElementById("nombre").value;
        e.preventDefault();
        let v = {total:0, fisica:0, ambiente:0, mental:0,emocional:0};
        let p = {total:0, fisica:0, ambiente:0, mental:0,emocional:0};
        let k = {total:0, fisica:0, ambiente:0, mental:0,emocional:0};
        const fisica = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        const ambiente = [16,17,18,19,20,21,22,30];
        const mental = [23,24,25,26,27,28,29];
        const emocional = [31,32,33,34,35];
        for(var i = 1; i <= 35; i++){
          const radio = document.querySelector(`input[name="preg${i}"]:checked`).value;
          if(radio === "v") {
            v.total = v.total + 1;
            v.fisica = v.fisica + (fisica.includes(i) ? 1 : 0);
            v.ambiente = v.ambiente + (ambiente.includes(i) ? 1 : 0);
            v.mental = v.mental + (mental.includes(i) ? 1 : 0);
            v.emocional = v.emocional + (emocional.includes(i) ? 1 : 0);
          };
          if(radio === "p") {
            p.total = p.total + 1;
            p.fisica = p.fisica + (fisica.includes(i) ? 1 : 0);
            p.ambiente = p.ambiente + (ambiente.includes(i) ? 1 : 0);
            p.mental = p.mental + (mental.includes(i) ? 1 : 0);
            p.emocional = p.emocional + (emocional.includes(i) ? 1 : 0);
          };
          if(radio === "k") {
            k.total = k.total + 1;
            k.fisica = k.fisica + (fisica.includes(i) ? 1 : 0);
            k.ambiente = k.ambiente + (ambiente.includes(i) ? 1 : 0);
            k.mental = k.mental + (mental.includes(i) ? 1 : 0);
            k.emocional = k.emocional + (emocional.includes(i) ? 1 : 0);
          };
        }
        const elementoParrafoResultado = document.getElementById("parrafoResultado");
        let textoParrafoResultado
        if(v.total >= 9 && p.total >= 9 && k.total >= 9){
            // tridosha
            console.log("Tridosha")
            resultadoDosha = "Tridosha";
            urlPaypalDosha = "URLTRIDOSHA"
            textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle sobre inicial de tu Constitución Dosha si deseas un Detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
            elementoParrafoResultado.innerHTML = textoParrafoResultado;
          window.open(urlBase + "Tridosha_Inicial.pdf",'_blank','noopener')
        }
        else if(v.total >= 15 && p.total >= 12 ||  p.total >= 15 && v.total >= 12){
          // Vata - Pitta
          console.log("Vata - Pitta")
          resultadoDosha = "Vata - Pitta";
          urlPaypalDosha = "URL Vata - Pitta";
          textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle sobre inicial de tu Constitución Dosha si deseas un Detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
          elementoParrafoResultado.innerHTML = textoParrafoResultado;
          window.open(urlBase + "Vata_Pitta_Inicial.pdf",'_blank','noopener')
        }
        else if(v.total >= 15 && k.total >= 12 ||  k.total >= 15 && v.total >= 12){
          // Vata - Kapha
          console.log("Vata - Kapha")
          resultadoDosha = "Vata - Kapha";
          urlPaypalDosha = "URL Vata - Kapha";
          textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle sobre inicial de tu Constitución Dosha si deseas un Detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
          elementoParrafoResultado.innerHTML = textoParrafoResultado;
          window.open(urlBase + "Vata_Kapha_Inicial.pdf",'_blank','noopener')
        }
        else if(p.total >= 15 && k.total >= 12 ||  k.total >= 15 && p.total >= 12){
          // Pitta - Kapha
          console.log("Pitta - Kapha")
          resultadoDosha = "Pitta - Kapha";
          urlPaypalDosha = "URL Pitta - Kapha";
          textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle sobre inicial de tu Constitución Dosha si deseas un Detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
          elementoParrafoResultado.innerHTML = textoParrafoResultado;
          window.open(urlBase + "Pitta_Kapha_Inicial.pdf",'_blank','noopener')
        }
        else if(v.total > p.total && v.total > k.total){
          //Vata
          console.log("Vata")
          resultadoDosha = "Vata";
          urlPaypalDosha = "URL Vata";
          textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle sobre inicial de tu Constitución Dosha si deseas un Detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
          elementoParrafoResultado.innerHTML = textoParrafoResultado;
          window.open(urlBase + "Vata_Inicial.pdf",'_blank','noopener')
        }
        else if(p.total > v.total && p.total > k.total){
          //Pitta
          console.log("Pitta")
          resultadoDosha = "Pitta";
          urlPaypalDosha = "URL Pitta";
          textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle sobre inicial de tu Constitución Dosha si deseas un Detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
          elementoParrafoResultado.innerHTML = textoParrafoResultado;
          window.open(urlBase + "Pitta_Inicial.pdf",'_blank','noopener')
        }
        else{
          //Kapha
          console.log("Kapha")
          resultadoDosha = "Kapha";
          urlPaypalDosha = "URL Kapha";
          textoParrafoResultado = `Felicidades ${nombre} tu resultado final es: ${resultadoDosha}. Abajo tendras un detalle sobre inicial de tu Constitución Dosha si deseas un Detalle más avanzado ve a este enlace <a href="${urlPaypalDosha}" target="_blank">${resultadoDosha} - AVANZADO</a>`;
          elementoParrafoResultado.innerHTML = textoParrafoResultado;
          window.open(urlBase + "Kapha_Inicial.pdf",'_blank','noopener')
        }
        console.log(v,p,k);
        alert("Vata: "+ v.total +", Pitta: "+ p.total + ", Kapha: "+ k.total);
        draw({v, p, k});
        
      }

      
      function draw({v,p,k}) {
        var ctxT = document.getElementById("graficoTotal");
        var ctxF = document.getElementById("graficoFisica");
        var ctxA = document.getElementById("graficoAmbiente");
        var ctxM = document.getElementById("graficoMental");
        var ctxE = document.getElementById("graficoEmocional");
        const dataTotal = [{label:"Total", data: [v.total,p.total,k.total],borderColor: 'rgba(255,0,0,0.5)',
        backgroundColor: 'rgba(255,0,0,0.5)'}];
        const dataFisica = [{label:"Fisica", data: [v.fisica,p.fisica,k.fisica],borderColor: 'rgba(255,0,0,0.5)',
        backgroundColor: 'rgba(255,0,0,0.5)'}];
        const dataAmbiente = [{label:"Ambiente", data: [v.ambiente,p.ambiente,k.ambiente],borderColor: 'rgba(255,0,0,0.5)',
        backgroundColor: 'rgba(255,0,0,0.5)'}];
        const dataMental = [{label:"Mental", data: [v.mental,p.mental,k.mental],borderColor: 'rgba(255,0,0,0.5)',
        backgroundColor: 'rgba(255,0,0,0.5)'}];
        const dataEmocional = [{label:"Emocional", data: [v.emocional,p.emocional,k.emocional],borderColor: 'rgba(255,0,0,0.5)',
        backgroundColor: 'rgba(255,0,0,0.5)'}];
        const data = {
            labels: ['Vata', 'Pitta', 'Kapha'],
            datasets: [{
              label: 'Dosha',
              data: dataTotal,
            }]
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
                    color: 'rgba(255,255,255,0.8)'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.4)'
                    },
                    ticks: {
                        color: 'white',
                        showLabelBackdrop:false
                    },
                    pointLabels: {
                        color: ['#6ef9e5',"#b90101","#fdc609"],
                        font:{size:20},
                        backgroundColor:"green"
                    },          
                    suggestedMin: 0,
                    suggestedMax: suggestedMaxTotal
                }
            },
            elements:{
                line:{
                    backgroundColor:['#6ef9e5',"#b90101","#fdc609"],
                    borderColor:['#6ef9e5',"#b90101","#fdc609"],
                }
            },
            chartArea: {
                backgroundColor: '#0f0f0f',
            },
            
        };
        const animation = {
          duration: 2000,
          onProgress: function(context) {
            if (context.initial) {
              initProgress.value = context.currentStep / context.numSteps;
            } else {
              progress.value = context.currentStep / context.numSteps;
            }
          },
          onComplete: function(context) {
            if (context.initial) {
              console.log('Initial animation finished');
            } else {
              console.log('animation finished');
            }
          }
        };  

        if(grafico.total || grafico.fisica || grafico.ambiente || grafico.mental || grafico.emocional){
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
          data:{...data,datasets: dataTotal},
          options,
          animation
        });
        grafico.fisica = new Chart(ctxF, {
          type: 'radar',
          data:{...data,datasets:dataFisica},
          options:{...options, scales: {...options.scales, r:{...options.scales.r, suggestedMax:suggestedMaxFisica}}},
          animation
        });
        grafico.ambiente = new Chart(ctxA, {
          type: 'radar',
          data:{...data,datasets: dataAmbiente},
          options:{...options, scales: {...options.scales, r:{...options.scales.r, suggestedMax:suggestedMaxAmbiente}}},
          animation
        });
        grafico.mental = new Chart(ctxM, {
          type: 'radar',
          data:{...data,datasets: dataMental},
          options:{...options, scales: {...options.scales, r:{...options.scales.r, suggestedMax:suggestedMaxMental}}},
          animation
        });
        grafico.emocional = new Chart(ctxE, {
          type: 'radar',
          data:{...data,datasets: dataEmocional},
          options:{...options, scales: {...options.scales, r:{...options.scales.r, suggestedMax:suggestedMaxEmocional}}},
          animation
        });
      }