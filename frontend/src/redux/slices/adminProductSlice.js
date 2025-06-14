import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`
const USER_TOKEN = `Bearer ${localStorage.getItem('userToken')}`;

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'adminProduct/fetchProducts',
    async () => {
        const response = await axios.get(`${API_URL}/api/admin/products`, {

            headers: {
                Authorization: USER_TOKEN,
            }
        });
        return response.data;
    }
);

//create a new product
export const createProduct = createAsyncThunk(
    'adminProducts/createProduct',
    async (productData) => {
        const response = await axios.post(`${API_URL}/api/admin/products`, productData, {
            headers: {
                Authorization: USER_TOKEN,
            }
        });
        return response.data;
    }
);

// Update an existing product
export const updateProduct = createAsyncThunk(
    'adminProducts/updateProduct',
    async ({ id, productData }) => {
        const response = await axios.put(`${API_URL}/api/products/${id}`, productData, {
            headers: {
                Authorization: USER_TOKEN,
            }
        });
        return response.data;
    }
);
// Delete a product
export const deleteProduct = createAsyncThunk(
    'adminProducts/deleteProduct',
    async (id) => {
        const response = await axios.delete(`${API_URL}/api/products/${id}`, {
            headers: {
                Authorization: USER_TOKEN,
            }
        });
        return id; // Return the product ID for deletion
    }
);
// Admin Product Slice
const adminProductSlice = createSlice({
    name: 'adminProduct',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(product => product._id === action.payload._id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(product => product._id !== action.payload);
            });
    },
});

export default adminProductSlice.reducer;