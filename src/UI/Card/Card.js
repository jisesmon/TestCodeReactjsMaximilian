import './Card.css'

const Card=(props)=> {
  const classname= "Card " + (props.className ?? '');
    return (
       <div className={classname}>{props.children}</div>
    )
}

export default Card ;