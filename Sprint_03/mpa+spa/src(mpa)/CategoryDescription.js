import {useParams} from 'react-router-dom';
function CategoryDescription() {
   let {catName}=useParams()
    return(<div>
        <a href="/cat">Назад</a>
        <h1>Category:{catName}</h1>
    </div>
        
    )
}

export default CategoryDescription