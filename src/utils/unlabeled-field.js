import "./css/fields.css";

function UnlabeledField({ type, value, onChange, placeholder, name }) {    
    return (
        <div className="field">
            <input 
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              name={name}
              >
            </input>
        </div>
    );
  }
  
  export default UnlabeledField;
  