
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = e.target;
  var formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {'Accept': 'application/json'}
  }).then(function(response) {
    if (response.ok) {
      document.getElementById('form-result').style.display = 'block';
      form.reset();
    } else {
      alert('Falha ao enviar a mensagem, tente novamente.');
    }
  }).catch(function(error) {
    alert('Erro ao enviar a mensagem, tente novamente.');
  });
});
