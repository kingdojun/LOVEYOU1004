
document.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("middle_wrong");
  const quizData = saved ? JSON.parse(saved) : [];

  if (!quizData || quizData.length === 0) {
    alert("오답이 없습니다!");
    window.location.href = "menu.html";
    return;
  } else if (quizData.length < 4) {
    alert("오답이 3개 이하군요! 축하해요!");
    window.location.href = "menu.html";
    return;
  }

  let current = 0;
  let paused = false;
  const total = quizData.length;
  const counter = document.getElementById("counter");
  const question = document.getElementById("question");
  const pauseBtn = document.getElementById("pauseBtn");

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
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  }

  function showNext() {
    if (current >= total) {
      alert("복습이 끝났어요!");
      window.location.href = "menu.html";
      return;
    }

    const wordData = quizData[current];
    const correct = wordData.meaning;
    const word = wordData.word;

    counter.textContent = (current + 1) + " / " + total;
    question.textContent = word;
    speak(word);

    current++;
    if (!paused) {
      setTimeout(showNext, 5000);
    }
  }

  pauseBtn.addEventListener("click", () => {
    paused = !paused;
    pauseBtn.textContent = paused ? "▶️ 다시시작" : "⏸ 일시정지";
    if (!paused) {
      showNext();
    }
  });

  shuffle(quizData);
  showNext();
});
