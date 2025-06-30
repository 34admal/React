function Nav(props){
    return(
        <nav>
 <ul className="main-navigation">{/*тут поменял в  теге ul class  на className чтобы в консоли ошибок не было */}
{ props.data.map(item => <li >{item.text}</li>)}
 </ul>
</nav>
    )
}

export default Nav