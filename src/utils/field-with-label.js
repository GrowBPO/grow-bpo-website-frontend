import "./css/fields.css";


/**
 * Componente reutilizável para renderizar um campo de formulário.
 * 
 * @param {string} type - Tipo do campo de formulário (e.g., "text", "password").
 * @param {string} value - Valor do campo de formulário.
 * @param {function} onChange - Função de callback para lidar com mudanças no valor do campo.
 * @param {string} placeholder - Texto de placeholder para o campo de formulário.
 * @param {string} name - Nome do campo de formulário.
 * @param {string} id - ID do campo de formulário.
 * @param {string} label - Texto do rótulo associado ao campo de formulário.
 * @returns {JSX.Element} Componente de campo de formulário.
 */
function FormField({ type, value, onChange, placeholder, name, id, label }) {
  return (
    <div className="field">
      {id && label && (
        <label
          htmlFor={id}>
          {label}
        </label>
      )
      }
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
      >
      </input>
    </div>
  );
}

export default FormField;
