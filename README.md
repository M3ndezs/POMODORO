# ⏱️ Pomodoro Timer

Este é um timer baseado na técnica *Pomodoro*, desenvolvido com HTML, CSS e JavaScript puros. O projeto inclui controle de tempo de foco, pausa, modo noturno, sons de alarme e personalização de tempo.

---

## 🧠 O que é a técnica Pomodoro?

A técnica Pomodoro é um método de gerenciamento de tempo que divide o trabalho em blocos de foco (geralmente de 25 minutos), seguidos de pausas curtas (5 minutos). A cada 4 ciclos, é recomendada uma pausa mais longa (15-30 minutos).

*Ciclo básico:*

1. Trabalhe por 25 minutos (1 pomodoro)
2. Faça uma pausa curta de 5 minutos
3. Após 4 pomodoros, faça uma pausa longa

---

## 🎥 Demonstração

Veja o timer funcionando abaixo:


---

## 🔧 Tecnologias usadas

- HTML5
- CSS3
- JavaScript puro

---

## 🧩 Explicação da lógica setInterval e clearInterval

No JavaScript, a função setInterval() é usada para executar uma função repetidamente em um intervalo de tempo definido (em milissegundos). No nosso caso, ela é usada para *atualizar o timer a cada segundo*:

```javascript
timer = setInterval(() => {
  if (time > 0) {
    time--;
    updateDisplay();
  } else {
    clearInterval(timer); // para o timer quando chegar em zero
    document.getElementById('alarm').play();
    isRunning = false;
  }
}, 1000);
