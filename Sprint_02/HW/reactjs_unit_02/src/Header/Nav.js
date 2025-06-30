function Nav(props){
    return(
        <nav>
 <ul className="main-navigation">{/*тут поменял в  теге ul class  на className чтобы в консоли ошибок не было */}
 {props.data.map(item => <li key={item.text}><a href={item.link}>{item.text}</a></li>)}
 </ul>
</nav>
    )
}

export default Nav