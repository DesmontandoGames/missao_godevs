document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');

  const rules = {
    name: {
      regex: /^[a-zA-ZÀ-ÿ\s]{2,}$/,
      error: "// Por favor, digite seu nome"
    },

    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: "// Verifique o formato do endereço de email"
    },

    // Mensagem: 10 caracteres garante uma frase mínima, mas para teste vou deixar mais flexível
    message: {
      regex: /.{3,}/,
      error: "// Conte-nos um pouco mais"
    }
  };

  const setUIError = (id, message, isError) => {
    const input = document.getElementById(id);
    const container = input.parentElement;
    const errorDisplay = document.getElementById(`${id}-err`);

    if (isError) {
      container.classList.remove('border-zinc-700');
      container.classList.add('border-red-600');
      errorDisplay.textContent = message;
      errorDisplay.classList.remove('opacity-0');
    } else {
      container.classList.remove('border-red-600');
      container.classList.add('border-zinc-700');
      errorDisplay.classList.add('opacity-0');
    }
  };

  // Auto-resize textarea
  const textarea = document.getElementById('message');
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });

  // Limpa o erro ao digitar
  Object.keys(rules).forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', () => setUIError(id, '', false));
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formIsValid = true;

    Object.keys(rules).forEach(id => {
      const field = document.getElementById(id);
      const value = field.value.trim();

      if (!value) {
        setUIError(id, "// Campo obrigatório", true);
        formIsValid = false;
      } else if (!rules[id].regex.test(value)) {
        setUIError(id, rules[id].error, true);
        formIsValid = false;
      }
    });

    if (formIsValid) {
      form.style.opacity = "0.2";
      form.style.pointerEvents = "none";
      successMsg.classList.remove('hidden');

      console.log('// Transmission complete');

      setTimeout(() => {
        form.reset();
        form.style.opacity = "1";
        form.style.pointerEvents = "all";
        successMsg.classList.add('hidden');
        textarea.style.height = 'auto';
      }, 4000);
    }
  });
});
