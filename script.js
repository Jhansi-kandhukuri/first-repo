const message = document.getElementById('feedback');

function showFeedback(text) {
  message.textContent = text;
  message.classList.remove('show');
  void message.offsetWidth;
  message.classList.add('show');
}

document.querySelectorAll('.action-btn').forEach((button) => {
  button.addEventListener('click', () => {
    showFeedback(button.dataset.message);
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 350);
  });
});

document.querySelectorAll('.pipeline span').forEach((step) => {
  step.addEventListener('click', () => {
    document.querySelectorAll('.pipeline span').forEach((item) => item.classList.remove('active'));
    step.classList.add('active');
    showFeedback(`${step.textContent} step selected`);
  });
});
