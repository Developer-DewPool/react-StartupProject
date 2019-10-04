const Access = async () => {
  const data = new URLSearchParams();

  data.append('client_id', '3SFul84QLEmRJI8kc4FkXh5Lh2wKfxSbvRgfTphSKX')
  data.append('client_secret', '1ttBi7vrtwL2DVHbWFHaZE0XIk9CBJTeoXvfDLnRQh')
  data.append('grant_type', 'client_credentials')

  await fetch('https://api.moltin.com/oauth/access_token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data.toString(),
    json: true,
  }).then(function (response) {
    return response.json();
  }).then(function (myJson) {
    const access_token = myJson.access_token
    localStorage.setItem('access_token', access_token);
  });

  return localStorage.getItem('access_token')

}

module.exports.Access = Access
