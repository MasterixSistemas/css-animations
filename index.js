const getIgData = async (username) => {
  const res = await fetch('https://m-tools-ig-module.vercel.app/api/user', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(username),
  });
  const data = await res.json(res);

  renderData(data);
  return data;
};

const renderData = (data) => {
  const { media } = data.data.business_discovery;

  media.data.map((value) => {
    console.log('Media do usuário: ', value);
  });
};

getIgData({ username: 'pdrolucas.dev' });
