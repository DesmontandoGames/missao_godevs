document.addEventListener('DOMContentLoaded', () => {
  // 1. Mapeando os elementos do DOM
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const successMessage = document.getElementById('successMessage');

  // Padrões Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Regex para Nome: Aceita letras (maiúsculas e minúsculas), acentos em português e espaços. Rejeita números e símbolos.
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;

  // 2. Função para limpar os erros visuais enquanto o usuário digita
  const clearErrorOnInput = (inputElement, errorElement) => {
    inputElement.addEventListener('input', () => {
      inputElement.classList.remove('input-error');
      errorElement.style.display = 'none';
    });
  };

  clearErrorOnInput(nameInput, nameError);
  clearErrorOnInput(emailInput, emailError);

  // 3. Interceptando o envio do formulário
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar

    let isValid = true;
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // 4. Validando o Nome (Vazio, Curto ou com Números/Símbolos)
    if (nameValue === '') {
      nameInput.classList.add('input-error');
      nameError.textContent = '* O nome é obrigatório.';
      nameError.style.display = 'block';
      isValid = false;
    } else if (nameValue.length < 3) {
      nameInput.classList.add('input-error');
      nameError.textContent = '* O nome deve ter pelo menos 3 letras.';
      nameError.style.display = 'block';
      isValid = false;
    } else if (!nameRegex.test(nameValue)) {
      // Se tiver números como "GatinhaManhosa123" ou símbolos como "@", cai aqui
      nameInput.classList.add('input-error');
      nameError.textContent = '* O nome deve conter apenas letras.';
      nameError.style.display = 'block';
      isValid = false;
    }

    // 5. Validando o E-mail (Vazio ou Formato Inválido)
    if (emailValue === '') {
      emailInput.classList.add('input-error');
      emailError.textContent = '* O e-mail é obrigatório.';
      emailError.style.display = 'block';
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailInput.classList.add('input-error');
      emailError.textContent = '* Digite um e-mail válido (ex: nome@email.com).';
      emailError.style.display = 'block';
      isValid = false;
    }

    // 6. Se tudo estiver correto, simulamos o envio
    if (isValid) {
      console.log('Dados prontos para envio:', {
        name: nameValue,
        email: emailValue
      });

      // Mostra a mensagem de sucesso
      successMessage.classList.remove('hidden');
      
      // Limpa os campos do formulário
      form.reset();

      // Oculta a mensagem de sucesso após 3.5 segundos
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 3500);
    }
  });
});