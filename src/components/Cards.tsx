import React, { useState, useEffect } from 'react';
import axios from 'axios';
import star from '../assets/images/ic_star.svg';
import favorite from '../assets/images/ic-favorite.svg';

interface Recipe {
  title: string;
  image: string;
  dishTypes: string[];
  weightWatcherSmartPoints: number;
  servings: number;
  readyInMinutes: number;
}

interface SpoonacularRandomRecipesResponse {
  recipes: Recipe[];
}

const API_KEY = "7d4107b4f8474936930f58d199f6eed1";
const NUMBER_OF_RECIPES = 4;

export default function Cards() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<SpoonacularRandomRecipesResponse>(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${NUMBER_OF_RECIPES}`)
      .then((response) => {
        const recipeData = response.data.recipes.map((recipe) => {
          console.log(recipe);

          const { title, image, dishTypes, weightWatcherSmartPoints, servings, readyInMinutes } = recipe;
          return { title, image, dishTypes, weightWatcherSmartPoints, servings, readyInMinutes };
        });
        setRecipes(recipeData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="recipes">
      <div className="recipes__title">
        <h2>Nuevas Recetas</h2>
      </div>
      <div className={`recipes__card${isMobile ? ' slider' : ''}`}>
        {recipes.map((recipe, index) => (
          <div
            key={recipe.title}
            className="recipe-card-container"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className={`recipe-card-text ${hoveredIndex === index ? 'recipe-card-text--hidden' : ''}`}>
              <span className="food">{recipe.title.split(' ')[0]}</span>
              {recipe.dishTypes && recipe.dishTypes.length > 0 && <span className="foodDesc">{recipe.dishTypes[0].split(' ')[0]}</span>}
            </div>
            <div className={`recipe-card-text-alternative ${hoveredIndex === index ? 'recipe-card-text-alternative--visible' : ''}`}>
              <div className="container-hover">
                <div className="icon-cubiertos"></div>
                <p className="text-hover">Tamaño de la porcion</p>
                <p className="text-porciones">{recipe.servings} porciones</p>
              </div>
              <div className="container-hover">
                <div className="icon-tiempo"></div>
                <p className="text-hover">Tiempo de preparación</p>
                <p className="text-porciones">{recipe.readyInMinutes} minutos</p>
              </div>
              <div className="container-hover">
                <div className="icon-chef"></div>
                <p className="text-hover">Dificultad</p>
                <p className="text-porciones">facil</p>
              </div>
            </div>
            <div className={`recipe-point ${hoveredIndex === index ? 'hidden' : 'visible'}`}>
              <img className="recipe-point__icon" src={star} alt="icono de estrella" />
              <p className="recipe-point__value">{recipe.weightWatcherSmartPoints}</p>
            </div>
            <div className={`recipe-favorite ${hoveredIndex === index ? 'hidden' : 'visible'}`}>
              <img src={favorite} alt="imagen conrazon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
