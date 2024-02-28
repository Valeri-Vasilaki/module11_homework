function greetUser() {
  const firstName = prompt("Введите ваше имя:");
  const lastName = prompt("Введите вашу фамилию:");

  const greetingMessage = `Привет, ${firstName} ${lastName}!`;

  alert(greetingMessage);
}

module.exports = greetUser;
