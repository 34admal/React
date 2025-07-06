import { Link, useParams } from "react-router-dom";
function CategoryDescription() {
  let { catName } = useParams();
  console.log(catName)
  return (<div>
        <Link to="/cat">Назад</Link>
      <h1>Category:{catName}</h1>
    </div>
  );
}
export default CategoryDescription;
