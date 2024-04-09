 import './styles.css'

 const Button = ({ Text, onClick, Type = "button" }) => {
    return (
        <div  type={Type} onClick={onClick} className='button'>        
            {Text}
        </div>
    )
 };

 export default Button;