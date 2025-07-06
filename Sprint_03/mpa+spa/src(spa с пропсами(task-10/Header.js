import { Link } from "react-router-dom";

function Header(props) {
  return (<nav><ul>
        {props.data.map((item) => (
          <li key={item.text}><Link to={item.link}>{item.text}</Link>
          </li>
        ))}

        {/* <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О сайте</Link>
        </li>
        <li>
          <Link to="/cat">Категории</Link>

        </li> */}
      </ul>
    </nav>
  );
}
export default Header;
