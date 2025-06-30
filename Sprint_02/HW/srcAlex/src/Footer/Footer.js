import Nav from "../Header/Nav"


function Footer(props){
    return(
        <footer>
	<h3>{props.data.site_name}</h3>
	сюда импортируем компонент nav
    <Nav data={props.data.nav} > </Nav>

</footer>
    )
}

export default Footer