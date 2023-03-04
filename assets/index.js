document.getElementById('discord-submit').addEventListener('click', () => {
  document.getElementById('discord-submit').disabled = true;
  document.getElementById('discord-submit').innerText = '등록 중';

  const http = new XMLHttpRequest();
  const url = 'https://api.rhea-so.link/tech-news/add-discord-subscription';
  const params = {
    webhookUrl: document.getElementById('discord-webhook-url').value,
  };
  http.open('POST', url, true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send(JSON.stringify(params));

  http.onreadystatechange = () => {
    if (http.readyState === 4 && http.status === 200) {
      document.getElementById('discord-submit').innerText = '등록이 완료되었습니다.';
      alert('등록이 완료되었습니다.');
    } else {
      document.getElementById('discord-submit').innerText = '등록';
      document.getElementById('discord-submit').disabled = false;
      alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };
});
