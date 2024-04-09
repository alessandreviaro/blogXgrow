import './styles.css'

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <div 
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
         className='input' 
        ></div>
    );
};

export default Input;