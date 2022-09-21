import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios.js';

const initialState = {
    news: [],
    popularNews: [],
    loading: false,
}

export const createNews = createAsyncThunk(
    'news/createNews',
    async (params) => {
        try {
            const { data } = await axios.post('/news', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getAllNews = createAsyncThunk(
    'news/getAllNews', 
    async () => {
    try {
        const { data } = await axios.get('/news')
        return data
    } catch (error) {
        console.log(error)
    }
})


export const singleNewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        // Создание news
        [createNews.pending]: (state) => {
            state.loading = true
        },
        [createNews.fulfilled]: (state, action) => {
            state.loading = false
            state.news.push(action.payload)
        },
        [createNews.rejected]: (state) => {
            state.loading = false
        },
        // Получаение всех news
        [getAllNews.pending]: (state) => {
            state.loading = true
        },
        [getAllNews.fulfilled]: (state, action) => {
            state.loading = false
            state.news = action.payload.news
            state.popularNews = action.payload.popularNews
        },
        [getAllNews.rejected]: (state) => {
            state.loading = false
        },

    },
})

export default singleNewsSlice.reducer