import config from '../config';

// eslint-disable-next-line import/no-named-as-default-member
const URL_VIDEOS = `${config.URL_TOP}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possivel cadastrar os dados!');
    });
}

export default {
  create,
};
