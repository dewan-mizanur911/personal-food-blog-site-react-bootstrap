import React from 'react';
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import Main from "../Main/Main";
import PopularRecipes from "../PopularRecipes/PopularRecipes";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
        <div>
        <Category></Category>
        <Subscribe></Subscribe>
        <PopularRecipes></PopularRecipes>
         <Blog></Blog>
        <Main></Main>
      </div>
    );
};

export default Home;