import './styles.css'

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
         className='input' 
        ></input>
    );
};

export default Input;