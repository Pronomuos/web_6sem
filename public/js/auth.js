async function send(request_url, email, password) {
  const url = window.location;
  const base_url = url.protocol + '//' + url.host;

  const json = {
    formFields: [
      {
        id: 'email',
        value: email,
      },
      {
        id: 'password',
        value: password,
      },
    ],
  };

  await fetch( base_url + request_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  });

  window.location.href = base_url;
}

async function sign_in() {
  const email = document.getElementById('signin_email').value;
  const password = document.getElementById('signin_password').value;

  await send('/auth/signin', email, password);
}

async function sign_up() {
  const email = document.getElementById('signup_email').value;
  const password = document.getElementById('signup_password').value;

  await send('/auth/signup', email, password);
}

async function sign_out() {
  const url = window.location;
  const base_url = url.protocol + '//' + url.host;

  await fetch(base_url + '/auth/signout', { method: 'POST' });
  window.location.href = base_url;
}
