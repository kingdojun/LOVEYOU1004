
let currentQuestion = 0;
let correctCount = 0;
let totalQuestions = 0;
let isPaused = false;

const saved = JSON.parse(localStorage.getItem("wrongAnswers_middle") || "[]");
let reviewData = [...saved];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

if (reviewData.length === 0) {
    alert("오답이 없습니다!");
    window.location.href = "menu.html";
} else if (reviewData.length < 4) {
    alert("오답이 3개 이하군요! 축하해요!");
    window.location.href = "menu.html";
} else {
    shuffle(reviewData);
    totalQuestions = reviewData.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= reviewData.length) {
        alert("복습이 끝났습니다!");
        window.location.href = "menu.html";
        return;
    }

    const wordObj = reviewData[currentQuestion];
    const choices = generateChoices(wordObj.meaning);
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const countElement = document.getElementById("count");

    questionElement.textContent = wordObj.word;
    countElement.textContent = `${currentQuestion + 1} / ${totalQuestions}`;
    choicesContainer.innerHTML = "";

    speak(wordObj.word);

    choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "choice-button";
        button.textContent = choice;
        button.onclick = () => {
            if (choice === wordObj.meaning) {
                button.style.backgroundColor = "#4CAF50";
                correctCount++;
            } else {
                button.style.backgroundColor = "#f44336";
                const correctButton = [...choicesContainer.children].find(btn => btn.textContent === wordObj.meaning);
                if (correctButton) correctButton.style.backgroundColor = "#4CAF50";
            }
            setTimeout(() => {
                currentQuestion++;
                showQuestion();
            }, 1200);
        };
        choicesContainer.appendChild(button);
    });
}

function generateChoices(correct) {
    const meanings = reviewData.map(item => item.meaning);
    const uniqueMeanings = [...new Set(meanings.filter(m => m !== correct))];
    shuffle(uniqueMeanings);
    const choices = uniqueMeanings.slice(0, 3);
    choices.push(correct);
    shuffle(choices);
    return choices;
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

function togglePause() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById("pauseBtn");
    pauseBtn.textContent = isPaused ? "▶️" : "⏸";
}
