import { useParams,Link } from "react-router-dom"
function Category(props){
    let url = useParams()

    return(
        <>
<ul>
    {/* {props.data.map(item=>( <li key={item.text}> <Link to={item.url}>{item.text}</Link> </li>) )} */}
    {props.data.map((item) => (
          <li key={item.text}><a href={'/cat'+ item.url}>{item.text}</a>
          </li>
        ))}

{/* <li><Link to={`${url.pathname}/notebook `}>Ноутбуки</Link></li>
<li><Link to={`${url.pathname}/monitor`}>Мониторы</Link></li>
<li><Link to={`${url.pathname}/phone`}>Мобильные телефоны</Link></li> */}
</ul></>

    )
}
export default Category