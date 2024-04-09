import './style.css'

const Comment = () => {
    return (
        <div className='comments'>
            <img className='image' src='https://source.unsplash.com/random/40x40?sig=1' alt='random'></img>
            <ul>
                <li><p className='user-name'><b>Usuário:</b> DevExample</p></li>
                <li><p className='user-message'><b>Mensagem:</b> Que top, parabéns! </p></li>
            </ul>
        </div>
    )
};

export default Comment;