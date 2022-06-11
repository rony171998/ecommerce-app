import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload
        }
    }
})
export const { setProducts } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res =>dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategory = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
        .then((res) => {
            const productsSearched = res.data.data.products.filter(
                (productsItem) => productsItem.category.id === Number(id)
            );
            dispatch(setProducts(productsSearched));
        })
        .finally(() => dispatch(setIsLoading(false)));
        
}

export const filterProductsByName = (name) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then((res) => {
        const productsSearched = res.data.data.products.filter(
            (productsItem) => productsItem.title.toLowerCase().includes(name)
        );
        dispatch(setProducts(productsSearched));
        })
        .finally(() => dispatch(setIsLoading(false)));      
}


export default productsSlice.reducer;