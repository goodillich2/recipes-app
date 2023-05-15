import s from "./UserPage.module.css";
import * as apiService from "../../APIservice";
import { useState, useEffect } from "react";


const UserPage = () => { 

    const [recipes, setRecipes] = useState([]);
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        apiService.getUserRecipes().then(setRecipes);
    }, [isDelete]);


    const handleDelete = (id) => {  
    fetch(`http://localhost:8800/recipes/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.text();
      })
      .then((data) => {
        setIsDelete(!isDelete);
      })
        .catch((error) => {
        console.log(error);
      });
  };


    return (
        <div>
            <h2 className={s.title}>My library</h2>
            <ul className={s.wrapper}>
                 {!recipes ? <p>There is no recipe yet</p> : 
                recipes.map(recipe =>
                    <li key={recipe.id} className={s.item}>
                        <div className={s.cardContainer}>
                            <h2 className={s.name}>{recipe.title}</h2>
                            <button type="button" onClick={() => handleDelete(recipe.id)} className={s.btn}>Delete</button>
                            <h3 className={s.subtitle}>Ingredients:</h3>
                            <ul>
                                {recipe && recipe.ingredients.map(ingredient =>
                                <li key={ingredient.id} className={s.item}>
                                {ingredient.name} - {ingredient.measures.us.amount} {ingredient.measures.us.unitShort}
                                </li>)}
                            </ul>
                            <h3 className={s.subtitle}>How to cook:</h3>
                         <ul>
                                {recipe.steps && recipe.steps.map(step =>
                                <li key={step.number} className={s.item}>
                                {step.step}
                                </li>)}
                            </ul>
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}

export default UserPage;