import update from 'immutability-helper';
import { Actions,CountryState, CountryTypes} from './types';

const initialState: CountryState = {
	countries: {
		isLoading: false,
		list: []
	}
};

export const countryReducers = (state = initialState, action: CountryTypes): CountryState => {
	switch (action.type) {
		case Actions.GET_COUNTRY_START: {
			return update(state, {
				countries: {
					isLoading: { $set: true },
				},
			});
		}
		case Actions.GET_COUNTRY_FULFILLED: {
			return update(state, {
				countries: {
					isLoading: { $set: false },
					list: { $set: [...action.payload] },
				},
			});
		}
		case Actions.GET_COUNTRY_REJECTED: {
			return update(state, {
				countries: {
					isLoading: { $set: false },
				},
			});
		}
		
		default: {
			return { ...state };
		}
	}
};
