const startScreen = document.querySelector("#start-screen");
const questionScreen = document.querySelector("#question-screen");
const resultsScreen = document.querySelector("#results-screen");
const progress = document.querySelector("#progress");
const prompt = document.querySelector("#prompt");
const instructions = document.querySelector("#instructions");
const options = document.querySelector("#options");
const feedbackStatus = document.querySelector("#feedback-status");
const check = document.querySelector("#check");
const next = document.querySelector("#next");

let order;
let position;
let correctCount;

function element(tag, text) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  return node;
}

function startQuiz() {
  order = [...questions];
  for (let index = order.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [order[index], order[other]] = [order[other], order[index]];
  }

  position = 0;
  correctCount = 0;
  startScreen.hidden = true;
  resultsScreen.hidden = true;
  questionScreen.hidden = false;
  showQuestion();
}

function showQuestion() {
  const question = order[position];
  const multiple = Array.isArray(question.correct);
  progress.textContent = `Question ${position + 1} of ${order.length}`;
  prompt.textContent = question.prompt;
  instructions.hidden = !multiple;
  options.replaceChildren();
  feedbackStatus.textContent = "";
  check.hidden = !multiple;
  check.disabled = true;
  next.hidden = true;
  next.textContent = position === order.length - 1 ? "See results" : "Next question";

  question.options.forEach(([answer, explanation], index) => {
    const option = element("div");
    option.className = "option";
    const answerText = `${String.fromCharCode(65 + index)}. ${answer}`;
    if (multiple) {
      const label = element("label");
      const input = element("input");
      input.type = "checkbox";
      input.value = index;
      input.addEventListener("change", () => {
        check.disabled = !options.querySelector("input:checked");
      });
      label.append(input, element("span", answerText));
      option.append(label);
    } else {
      const button = element("button", answerText);
      button.type = "button";
      button.addEventListener("click", () => grade([index]));
      option.append(button);
    }

    const feedback = element("p", explanation);
    feedback.className = "feedback";
    feedback.hidden = true;
    option.append(feedback);
    options.append(option);
  });

  prompt.focus();
  window.scrollTo(0, 0);
}

function grade(selected) {
  const { correct } = order[position];
  const correctOptions = Array.isArray(correct) ? correct : [correct];
  const isCorrect = selected.length === correctOptions.length &&
    correctOptions.every((index) => selected.includes(index));
  if (isCorrect) correctCount++;

  [...options.children].forEach((option, index) => {
    const correctOption = correctOptions.includes(index);
    option.classList.add(correctOption ? "correct" : "incorrect");
    option.querySelector("button, input").disabled = true;

    const feedback = option.querySelector(".feedback");
    const label = element("strong", correctOption ? "Correct answer. " : "Incorrect option. ");
    if (selected.includes(index)) label.append("Your choice. ");
    feedback.prepend(label);
    feedback.hidden = false;
  });

  check.hidden = true;
  feedbackStatus.textContent = isCorrect ? "Correct." : "Incorrect. Review the explanations above.";
  next.hidden = false;
  next.focus({ preventScroll: true });
}

function advance() {
  position++;
  if (position < order.length) {
    showQuestion();
    return;
  }

  questionScreen.hidden = true;
  resultsScreen.hidden = false;
  document.querySelector("#total").textContent = `${correctCount} / ${order.length} correct`;
  const percentage = Number((correctCount / order.length * 100).toFixed(1));
  document.querySelector("#percentage").textContent = `${percentage}%`;
  document.querySelector("#results-heading").focus();
  window.scrollTo(0, 0);
}

document.querySelector("#start").addEventListener("click", startQuiz);
document.querySelector("#retry").addEventListener("click", startQuiz);
check.addEventListener("click", () => {
  const selected = [...options.querySelectorAll("input:checked")].map((input) => Number(input.value));
  if (selected.length) grade(selected);
});
next.addEventListener("click", advance);
