import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

// Редуктор - это функция, которая принимает текущее состояние и действие. Она возвращает новое состояние, основанное на этом действии.
export const reducer = (state, action) => {
  switch (action.type) {
    // Возвращает копию state с обновленным массивом products. Мы используем свойство action.products и переносим его содержимое в новый массив.
    case UPDATE_PRODUCTS:
      console.log("action.products", action.products);
      console.log("state", state);
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product]
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    // Возвращаем копию состояния, устанавливаем cartOpen в true и перебираем товары в корзине.
    // Если `id` элемента совпадает с `id`, указанным в action.payload, мы обновляем количество покупок.
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action.item === product.item) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // Сначала мы перебираем каждый товар в корзине и проверяем, совпадает ли `product._id` с `action._id`.
    // Если да, то мы удаляем его из корзины и устанавливаем обновленное состояние в переменную `newState`.
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product.item !== action.item;
      });

      // Затем мы возвращаем копию состояния и проверяем, пуста ли корзина.
      // Если нет, то устанавливаем статус cartOpen в `true`. Затем мы возвращаем обновленный массив корзины, установленный на значение `newState`.
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // Верните состояние как есть в случае, если `action.type`, переданный нашему reducer, не был учтен разработчиками.
    // Это спасет нас от пиздеца.
    default:
      return state;
  }
};

export function useRecipeReducer(initialState) {
  return useReducer(reducer, initialState);
}
