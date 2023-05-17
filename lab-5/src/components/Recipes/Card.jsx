import { useParams, useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import * as apiService from "../../APIservice";
import s from "./Card.module.css";



const Card = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [recipe, setRecipe] = useState(null);
    const [byID, setByID] = useState(null);

    useEffect(() => {
        apiService.fetchRecipeDetails(recipeId)
            .then(setRecipe);
        apiService.fetchRecipeByID(recipeId)
            .then(setByID);
    }, [recipeId]);

    // ----

    const handleOnClick = () => {
        const formData = {
            id: byID.id,
            title: byID.title,
            ingredients: byID.extendedIngredients,
            steps: recipe[0].steps
    };

    fetch("http://localhost:8800/recipes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        alert("Added")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
    
    // ----
    
    const onGoBack = () => {
        (location.state && location.state.from) ? navigate(location.state.from) : navigate("/");
    };
   

    return (
        <>
            <button type="button" onClick={onGoBack} className={ s.button}>Back</button>
            {recipe && <article className={s.container}>
                {byID && <h1 className={s.mainTitle}>{byID.title}</h1>}
                <h2 className={s.title}>Ingredients:</h2>
                {byID && byID.extendedIngredients.map(ingredient =>
                    <li key={ingredient.id} className={s.item}>
                        {ingredient.name} - {ingredient.measures.us.amount} {ingredient.measures.us.unitShort}
                    </li>)}
                <h2 className={s.title}>How to cook:</h2>
                {recipe[0].steps.map(step => <li key={step.number} className={s.item}>{step.step}</li>)}
                <div className={s.wrapper}>
                    <p className={s.label}>Add recipe to your library</p>
                    <button type="button" onClick={handleOnClick} className={s.addBtn}>+</button>
                </div>
            </article>}
            
        </>    
)
}

export default Card;