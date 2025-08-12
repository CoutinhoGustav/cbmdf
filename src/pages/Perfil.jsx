import React, { useEffect, useState } from 'react';
import '../css/Perfil.css';

// Modal separado (pode ser extraído para outro arquivo futuramente)
const Modal = ({ titulo, mensagem, onConfirm, onCancel }) => (
  <div
    className="modal-perfil-backdrop"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div className="modal-perfil-content">
      <h3 id="modal-title">{titulo}</h3>
      <p>{mensagem}</p>
      <div className="modal-buttons">
        <button className="btn-confirm" onClick={onConfirm}>
          Confirmar
        </button>
        <button className="btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  </div>
);

const Perfil = () => {

  const defaultUser = {
    nome: 'João da Silva',
    email: 'joao.silva@email.com',
    telefone: '(11) 9 1234-5678',
    dataNascimento: '1990-05-12',
    genero: 'Masculino',
    cpf: '123.456.789-00',
    fotoPerfil: '',
  };

  // Carrega dados do localStorage com fallback seguro
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('userData');
      return stored ? JSON.parse(stored) : defaultUser;
    } catch (e) {
      console.error('Erro ao carregar userData:', e);
      return defaultUser;
    }
  });

  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const [modalSalvarAberto, setModalSalvarAberto] = useState(false);
  const [modalCancelarAberto, setModalCancelarAberto] = useState(false);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const formatarCPF = (value) => {
    const somenteDigitos = value.replace(/\D/g, '').slice(0, 11);
    if (somenteDigitos.length <= 3) return somenteDigitos;
    if (somenteDigitos.length <= 6)
      return `${somenteDigitos.slice(0, 3)}.${somenteDigitos.slice(3)}`;
    if (somenteDigitos.length <= 9)
      return `${somenteDigitos.slice(0, 3)}.${somenteDigitos.slice(
        3,
        6
      )}.${somenteDigitos.slice(6)}`;
    return `${somenteDigitos.slice(0, 3)}.${somenteDigitos.slice(
      3,
      6
    )}.${somenteDigitos.slice(6, 9)}-${somenteDigitos.slice(9, 11)}`;
  };

  const formatarTelefone = (value) => {
    const somenteDigitos = value.replace(/\D/g, '').slice(0, 11);
    if (somenteDigitos.length <= 2) return `(${somenteDigitos}`;
    if (somenteDigitos.length === 3)
      return `(${somenteDigitos.slice(0, 2)}) ${somenteDigitos.slice(2)}`;
    if (somenteDigitos.length <= 6)
      return `(${somenteDigitos.slice(0, 2)}) ${somenteDigitos.slice(2)}`;
    if (somenteDigitos.length <= 10)
      return `(${somenteDigitos.slice(0, 2)}) ${somenteDigitos.slice(
        2,
        3
      )} ${somenteDigitos.slice(3, 7)}-${somenteDigitos.slice(7)}`;
    return `(${somenteDigitos.slice(0, 2)}) ${somenteDigitos.slice(
      2,
      3
    )} ${somenteDigitos.slice(3, 7)}-${somenteDigitos.slice(7, 11)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'cpf') {
      setFormData((prev) => ({ ...prev, cpf: formatarCPF(value) }));
    } else if (name === 'telefone') {
      setFormData((prev) => ({ ...prev, telefone: formatarTelefone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, fotoPerfil: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const tentarSalvar = () => setModalSalvarAberto(true);
  const tentarCancelar = () => setModalCancelarAberto(true);

  const confirmarSalvar = () => {
    setUser(formData);
    setEditando(false);
    setModalSalvarAberto(false);
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  const confirmarCancelar = () => {
    setFormData(user);
    setEditando(false);
    setModalCancelarAberto(false);
  };

  const fecharModalSalvar = () => setModalSalvarAberto(false);
  const fecharModalCancelar = () => setModalCancelarAberto(false);

  return (
    <div className="perfil-page">
      <main className="perfil-container">

        <div className="foto-container">
          <img
            src={formData.fotoPerfil || '/user-placeholder.png'}
            alt={`Foto de perfil de ${formData.nome}`}
            className="foto-perfil"
          />
          {editando && (
            <input
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
              className="input-foto"
              aria-label="Selecionar foto de perfil"
            />
          )}
        </div>

        <div className="perfil-info">
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              disabled={!editando}
            />
          </label>

          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editando}
            />
          </label>

          <label>
            Telefone:
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              disabled={!editando}
              placeholder="(00) 0 0000-0000"
              maxLength={16}
            />
          </label>

          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              disabled={!editando}
              maxLength={14}
              placeholder="000.000.000-00"
            />
          </label>

          <label>
            Data de Nascimento:
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              disabled={!editando}
            />
          </label>

          <label>
            Gênero:
            <select
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              disabled={!editando}
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
              <option value="Prefiro não dizer">Prefiro não dizer</option>
            </select>
          </label>
        </div>

        <div className="perfil-botoes">
          {editando ? (
            <>
              <button onClick={tentarSalvar} className="salvar">
                Salvar
              </button>
              <button onClick={tentarCancelar} className="cancelar">
                Cancelar
              </button>
            </>
          ) : (
            <button onClick={() => setEditando(true)} className="editar">
              Editar Perfil
            </button>
          )}
        </div>

        {modalSalvarAberto && (
          <Modal
            key="salvar-modal"
            titulo="Confirmar Alterações"
            mensagem="Deseja realmente salvar as alterações feitas no seu perfil?"
            onConfirm={confirmarSalvar}
            onCancel={fecharModalSalvar}
          />
        )}

        {modalCancelarAberto && (
          <Modal
            key="cancelar-modal"
            titulo="Descartar Alterações"
            mensagem="Tem certeza que deseja descartar as alterações feitas?"
            onConfirm={confirmarCancelar}
            onCancel={fecharModalCancelar}
          />
        )}
      </main>
    </div>
  );
};

export default Perfil;
