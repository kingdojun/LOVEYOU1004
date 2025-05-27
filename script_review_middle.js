
const saved = localStorage.getItem("middle_wrong");
const wrongList = saved ? JSON.parse(saved) : [];

if (!wrongList || wrongList.length === 0) {
  alert("오답이 없습니다!");
  window.location.href = "menu.html";
} else if (wrongList.length < 4) {
  alert("오답이 3개 이하군요! 축하해요!");
  window.location.href = "menu.html";
} else {
  const quizContainer = document.getElementById("quiz-container");
  const wordElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const counterElement = document.getElementById("counter");
  const pauseButton = document.getElementById("pauseBtn");

  let current = 0;
  const quizData = shuffle([...wrongList]);
  const total = quizData.length;
  let isPaused = false;
  let timer;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }

  function showQuestion() {
    if (current >= total) {
      alert("복습이 끝났어요! 수고했어요.");
      window.location.href = "menu.html";
      return;
    }

    const currentWord = quizData[current];
    const correct = currentWord.meaning;
    let choices = [correct];

    while (choices.length < 4) {
      const rand = quizData[Math.floor(Math.random() * quizData.length)];
      if (!choices.includes(rand.meaning)) {
        choices.push(rand.meaning);
      }
    }

    choices = shuffle(choices);
    wordElement.textContent = currentWord.word;
    speak(currentWord.word);
    counterElement.textContent = `${current + 1} / ${total}`;

    choicesElement.innerHTML = "";
    choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.className = "choice-button";
      btn.onclick = () => {
        clearTimeout(timer);
        if (choice === correct) {
          btn.style.backgroundColor = "#4CAF50";
        } else {
          btn.style.backgroundColor = "#f44336";
          const correctBtn = [...choicesElement.children].find(b => b.textContent === correct);
          if (correctBtn) correctBtn.style.backgroundColor = "#4CAF50";
        }
        setTimeout(() => {
          current++;
          if (!isPaused) showQuestion();
        }, 1200);
      };
      choicesElement.appendChild(btn);
    });

    timer = setTimeout(() => {
      const correctBtn = [...choicesElement.children].find(b => b.textContent === correct);
      if (correctBtn) correctBtn.style.backgroundColor = "#4CAF50";
      setTimeout(() => {
        current++;
        if (!isPaused) showQuestion();
      }, 1000);
    }, 5000);
  }

  pauseButton.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? "▶️" : "⏸️";
    if (!isPaused) showQuestion();
  });

  showQuestion();
}
