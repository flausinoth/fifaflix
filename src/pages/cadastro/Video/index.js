import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import './video.css';

function validate(values, categoriaEscolhida) {
  const errors = {};
  if (!values.url.includes('youtu')) {
    errors.url = 'please, insert a valid URL';
  }

  if (categoriaEscolhida === undefined) {
    errors.categoria = 'please, insert a valid categoria';
  }

  if (!values.titulo) {
    errors.titulo = 'Please, insert a valid title';
  }
  return errors;
}

function CadastroVideo() {
  const [errors, setErrors] = useState({ });

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((response) => {
        setCategorias(response);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        const error = validate(values, categoriaEscolhida);
        const countErrors = Object.entries(error).length;
        setErrors(validate(values, categoriaEscolhida));

        if (countErrors > 0) {
          return;
        }

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        {errors.titulo && <span className="formField__error">{errors.titulo}</span>}

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        {errors.url && <span className="formField__error">{errors.url}</span>}

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        {errors.categoria && <span className="formField__error">{errors.categoria}</span>}
        <div>
          <Button type="submit">
            Cadastrar
          </Button>
        </div>
      </form>

      {/* <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link> */}
    </PageDefault>
  );
}

export default CadastroVideo;
