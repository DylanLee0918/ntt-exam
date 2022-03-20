import { combineReducers } from 'redux';
import { countryReducers } from "./country/reducers";

const reducers = combineReducers({
	country: countryReducers
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
