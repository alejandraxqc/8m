const greetings = [
  "Hola, ¿qué tal?",
  "Hello, how are you?",
  "Bonjour, comment ça va ?",
  "Ciao, come stai?",
  "Hallo, wie geht es dir?",
  "Olá, tudo bem?",
  "Marhaba, kayfa haluk?",
  "Konnichiwa, ogenki desu ka?"
];

const greetingNode = document.querySelector("[data-language-word]");

if (greetingNode) {
  let currentIndex = 0;

  const swapGreeting = () => {
    currentIndex = (currentIndex + 1) % greetings.length;
    greetingNode.classList.add("is-exiting");

    window.setTimeout(() => {
      greetingNode.textContent = greetings[currentIndex];
      greetingNode.classList.remove("is-exiting");
      greetingNode.classList.add("is-entering");

      window.setTimeout(() => {
        greetingNode.classList.remove("is-entering");
      }, 900);
    }, 420);
  };

  window.setInterval(swapGreeting, 4000);
}
