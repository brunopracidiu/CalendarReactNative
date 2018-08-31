import { combineReducers } from "redux"
import { homeData } from "../Home/home.reducers"

export default combineReducers<StoreState>({
    home: homeData,
})
