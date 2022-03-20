import { Actions, CountryTypes} from './types';

export const getCountryList = (): CountryTypes => ({
	payload: undefined,
	type: Actions.GET_COUNTRY_START,
});
