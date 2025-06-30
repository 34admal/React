function Nav(props) {
    return (
        <nav>
            <ul class="main-navigation">
                здесь будет распечатан props
                {props.data.map(item => <li key={item.text}>{item.text}</li>)}
            </ul>
        </nav>
    )
}

export default Nav;