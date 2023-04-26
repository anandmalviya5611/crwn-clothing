import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
    return(
        <div className="directory-container">
        {categories.map((category)=>(
          // key property needs to be passes near map function
        <CategoryItem key={category.id} category={category}/>
        )
        )}
    
        </div>
    )
}

export default Directory;