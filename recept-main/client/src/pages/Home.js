import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import RecipeSearch from "../extras/RecipeSearch";
import "./home.css";
import { homeArt } from "../assets";
import * as Icon from "react-bootstrap-icons";

const Main = () => {
  console.log('home: /')
  return (
    <Col className="home-container">
      <Row>
        <Col className="home-banner banner-container">
          <h2>Найдите новые рецепты!</h2>
          <p>Получите доступ к вкусным рецептам и присоединяйтесь прямо сейчас!</p>
          <img src={homeArt} alt="palceholder" />
          <button id="get-started-btn">
            <Link to="/search">Найти рецепт</Link>
          </button>
        </Col>
      </Row>
      <Col className="home-description">
        <h3>Что вы можете сделать...</h3>
        <Row className="description-item-container">
          <Col className="description-item">
            <h4>Поиск рецептов</h4>
            <Icon.Search
              style={{ width: "100px", height: "150px", color: "grey" }}
            />
            {/* <img src="https://via.placeholder.com/125" alt="palceholder" /> */}
            <p>
            Введите ингредиент, название блюда или используйте фильтры для поиска рецептов.
            </p>
          </Col>
          <Col className="description-item">
            <h4>Сохранить рецепты</h4>
            <Icon.Heart
              style={{ width: "100px", height: "150px", color: "#C05A5A" }}
            />
            {/* <img src="https://via.placeholder.com/125 " alt="palceholder" /> */}
            <p>
              Войдя в систему, вы можете добавить рецепты в закладки своего профиля
              и добавлять ингредиенты рецепта в корзину!
            </p>
          </Col>
          <Col className="description-item">
            <h4>Исследуйте!</h4>
            <Icon.GlobeAmericas
              style={{ width: "100px", height: "150px", color: "#578D3E" }}
            />
            <p>Наслаждайтесь и пробуйте разные кухни!</p>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default Main;

// import React, { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/client';

// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

// import { searchRecipes } from '../utils/API';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

//   // create state for holding returned google api data
//   const [searchedBooks, setSearchedBooks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');

//   const [searchedCategories, setCategories] = useState([]);
//   const [query, setQuery] = useState('');
//   const [total, setTotalResults] = useState(0);

//   const handleFormSubmit = (async (query) => {
//     // const query = "categories.php";

//     try {
//       const response = await searchRecipes(query);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const { categories } = await response.json();

//       console.log("categories: ", categories);
//       setCategories(categories);

//     } catch (err) {
//       console.error(JSON.parse(JSON.stringify(err)));
//     }

//   });

//   // handleFormSubmit();

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           <p>Result: {searchedCategories.map((category) => (
//             <div>
//               <p>Category: {category.strCategory}</p>
//               <img src={category.strCategoryThumb} alt={category.strCategory} />
//               <p>Description: {category.strCategoryDescription}</p>
//             </div>

//           ))} </p>

//           <button
//             type="button"
//             className="btn btn-danger"
//             onClick={() => handleFormSubmit('categories.php')}
//           >
//             Search
//           </button>

//           <ThoughtForm />
//         </div>
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ThoughtList
//               thoughts={thoughts}
//               title="Some Feed for Thought(s)..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;
