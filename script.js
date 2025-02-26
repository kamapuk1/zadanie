// Dla strony logowania
const correctLogin = 'ishyrokykh';
const correctPassword = '123';

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if (login === correctLogin && password === correctPassword) {
    window.location.href = 'main.html';
  } else {
    alert('Błędny login lub hasło!');
    document.getElementById('login').disabled = true;
    document.getElementById('password').disabled = true;
  }
});

// Dla strony z kodami
const codes = [
  'Kod 1: AB1234',
  'Kod 2: CD5678',
  'Kod 3: EF9876',
  'Kod 4: GH1357',
  'Kod 5: IJ2468',
  'Kod 6: KL5790',
  'Kod 7: MN9101',
  'Kod 8: OP1122',
  'Kod 9: QR3344',
  'Kod 10: ST5566'
];

const codesContainer = document.getElementById('codes');
codes.forEach((code, index) => {
  const button = document.createElement('button');
  button.innerHTML = `Kod ${index + 1}`;
  button.onclick = function() {
    alert(code);
  };
  codesContainer.appendChild(button);
});
