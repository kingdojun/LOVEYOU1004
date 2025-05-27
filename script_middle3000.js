
let rawData = JSON.parse(localStorage.getItem("wrongWords_middle3000")) || [];
console.log('오답 데이터 수:', rawData.length);
console.log('오답 데이터 수:', rawData.length);
let data = [];
let allMeanings = rawData.map(item => item.meaning);
let current = 0;
let isPaused = false;
let timer = 5;
let interval;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

rawData.forEach(item => {
  let wrongs = allMeanings.filter(m => m !== item.meaning);
  shuffle(wrongs);
  let choices = [item.meaning, ...wrongs.slice(0, 3)];
  shuffle(choices);
  data.push({ word: item.word, meaning: item.meaning, choices });
});

shuffle(data);

function startTimer() {
  timer = 5;
  document.getElementById("timer").innerText = timer;
  document.getElementById("timer").style.color = "green";
  interval = setInterval(() => {
    if (!isPaused) {
      timer--;
      document.getElementById("timer").innerText = timer;
      document.getElementById("timer").style.color =
        timer >= 4 ? "green" : timer >= 2 ? "orange" : "red";
      if (timer <= 0) {
        clearInterval(interval);
        nextQuestion();
      }
    }
  }, 1000);
}

function togglePause() {
  isPaused = !isPaused;
  document.getElementById("pauseBtn").innerText = isPaused ? "▶️" : "⏸";
}

function showQuestion() {
  if (data.length === 0) {
    document.getElementById("question").innerText = "오답이 없습니다.";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("timer").style.display = "none";
    return;
  }

  const item = data[current];
  document.getElementById("counter").innerText = `${current + 1}/${data.length}`;
  document.getElementById("question").innerText = item.word;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  item.choices.forEach(choice => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.innerText = choice;
    btn.onclick = () => {
      clearInterval(interval);
      if (choice === item.meaning) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        [...choicesDiv.children].forEach(el => {
          if (el.innerText === item.meaning) {
            el.classList.add("correct");
          }
        });
      }
      setTimeout(nextQuestion, 1000);
    };
    choicesDiv.appendChild(btn);
  });

  startTimer();
}

function nextQuestion() {
  current = (current + 1) % data.length;
  showQuestion();
}

showQuestion();
