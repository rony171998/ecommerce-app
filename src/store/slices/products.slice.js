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
export const { setProducts  } = productsSlice.actions;

export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res =>dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addProductsToCart = (id,quantity) => (dispatch) => {
    const data = {id, quantity}
    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart" , data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const pachProductsToCart = (id,quantity) => (dispatch) => {
    const data = {id, newQuantity: quantity}
    dispatch(setIsLoading(true));
    return axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart" , data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const DelProductsToCart = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}` , getConfig())
        .then((res) => dispatch(alert(res.data.status)))
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

export const filterProductsByPrices = (priceMin , priceMax) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then((res) => {
        const productsSearched = res.data.data.products.filter(
            (productsItem) => productsItem.price >= priceMin  && productsItem.price <= priceMax
        );
        dispatch(setProducts(productsSearched));
        })
        .finally(() => dispatch(setIsLoading(false)));      
}

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getCarts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then((res) => dispatch(setProducts(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const postCart = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", data, getConfig())
        .then((res) => dispatch(alert(res.data.status)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default productsSlice.reducer;