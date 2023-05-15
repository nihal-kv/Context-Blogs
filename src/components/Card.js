import './Card.css';

const Card=(props)=>{
    const title=props.post.title;
    const author=props.post.author;
    const date=props.post.date;
    const category=props.post.category;
    const content=props.post.content;
    const img=props.post.img;


    return (
        <div className='card'>
            <div className='content'>
                <h1>{title}</h1>
                <p>{category}</p>
                <p> Created By {author} on {date}</p>
                <p>{content}</p>
            </div>
            <div className='image'>
                <img src={img} alt=''></img>
            </div>

        </div>
    )
}

export default Card;