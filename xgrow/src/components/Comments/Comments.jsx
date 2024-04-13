import './style.css'



const Comment = ({items}) => {

    const initialPost = items.find(item => item.id === '1');

    return (
        <div className='comments'>
            <div key={initialPost.id} ></div>
            <img className='image' src='https://source.unsplash.com/random/40x40?sig=1' alt='random'></img>
            <ul>
                <li><p className='user-name'><b>Usuário:</b> {initialPost.username} | {initialPost.email}</p></li>
                <li><p className='user-message'><b>Mensagem:</b>{initialPost.comment}</p></li>
            </ul>
        </div>
    )
};

export default Comment;