import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

// Импортируйте Auth из "../../utils/auth";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import MealDetails from './pages/MealDetails';
import SearchForm from './pages/SearchForm';
import Success from './pages/Success';

import { RecipeProvider } from './utils/GlobalState';

// Создайте нашу основную конечную точку GraphQL API
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Создайте промежуточное ПО для запросов, которое будет прикреплять токен JWT к каждому запросу в качестве заголовка `authorization`.
const authLink = setContext((_, { headers }) => {
  // получить токен аутентификации из локального хранилища, если он существует
  const token = localStorage.getItem('id_token');
  // верните заголовки в контекст, чтобы httpLink мог их прочитать
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Настройте нашего клиента на выполнение промежуточного ПО `authLink` перед выполнением запроса к нашему GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <RecipeProvider>
            <Header />
            {/* <SearchForm /> */}
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<SearchForm />} />
                <Route path="/me" element={<Profile />} />
                <Route path="/profiles/:username" element={<Profile />} />
                <Route path="/thoughts/:thoughtId" element={<SingleThought />} />
                <Route path="/recipe/:idMeal" element={<MealDetails />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </div>
            <Footer />
          </RecipeProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
