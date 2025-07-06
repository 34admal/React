import { useLocation } from "react-router-dom";
function Category() {
  let url = useLocation()
  console.log(url)

  return (
    <>
      <h1>Category</h1>;
      
<ul>
<li><a href={`${url.pathname}/ notebook`}>Ноутбуки</a></li>
<li><a href={`${url.pathname}/ monitors`}>Мониторы</a></li>
<li><a href={`${url.pathname}/ Phone`}>Мобильные телефоны</a></li>
</ul>

    
    </>
  );
}
export default Category;
