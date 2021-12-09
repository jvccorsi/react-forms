import React from 'react';
import './App.css';
// import Title from './Title';
import './Title.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import NotFound from './NotFound';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [textarea, setTextarea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(false);

  // Com objetos:
  const [form, setForm] = React.useState({
    nome_object: '',
    email_object: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="nome1">Nome</label>
        <input
          type="text"
          id="nome1"
          name="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <p>Value: {nome}</p>

        <label htmlFor="email1">Email</label>
        <input
          type="email"
          id="email1"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p>Value: {email}</p>

        <label htmlFor="textarea">TextArea</label>
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          onChange={({ target }) => setTextarea(target.value)}
        ></textarea>
        <p>Value: {textarea}</p>

        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option value="" disabled>
            Selecione:
          </option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <p>Value: {select}</p>

        <label>
          <input
            type="radio"
            value="notebook"
            checked={radio === 'notebook'}
            onChange={({ target }) => setRadio(target.value)}
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            value="smartphone"
            checked={radio === 'smartphone'}
            onChange={({ target }) => setRadio(target.value)}
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            value="tablet"
            checked={radio === 'tablet'}
            onChange={({ target }) => setRadio(target.value)}
          />
          Tablet
        </label>
        <p>Value: {radio}</p>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={({ target }) => setCheckbox(target.checked)}
          />
          Li os termos.
        </label>
        {console.log(checkbox)}
      </form>

      <form onSubmit={handleSubmit}>
        <h1>Outra maneira de fazer forms (objetos)</h1>
        <label htmlFor="nome_object">Nome</label>
        <input
          type="text"
          id="nome_object"
          value={form.nome_object}
          onChange={handleChange}
        />
        {form.nome_object}
        <label htmlFor="email_object">Email</label>
        <input
          type="email"
          id="email_object"
          value={form.email_object}
          onChange={handleChange}
        />
        {form.email_object}

        <button>Enviar</button>
      </form> */}
    </BrowserRouter>
  );
};

export default App;
