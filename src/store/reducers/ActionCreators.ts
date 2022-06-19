import {createAsyncThunk} from "@reduxjs/toolkit";
import {productAPI} from "../../axios/api/api";

// санка яка отримує продукти для головної сторінки
export const getProductsForMainPage = createAsyncThunk(
    'product/getAll',
    async (data: any, thunkAPI) => {
        try {
            // productAPI ксатомний axios
            const response = await productAPI.getProductsForMainPage(data.limit, data.page)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Products не загрузились')
        }
    }
)
// санка що отримує популярні продукти
export const getPopularProductsForMainPage = createAsyncThunk(
    'popularProduct/getAll',
    async (data: any, thunkAPI) => {
        try {
            // productAPI ксатомний axios
            const response = await productAPI.getPopularProductsForMainPage(data.limit, data.page)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Products не загрузились')
        }
    }
)