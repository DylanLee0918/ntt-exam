import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import axios from 'axios';
import { Actions } from '../modules/country/types';

export function* getCountries(): SagaIterator{
	try {
		const {data}: any = yield call(
            axios.get ,'https://corona-api.com/countries' 
        );

		console.log(data.data);

		yield put({ type: Actions.GET_COUNTRY_FULFILLED, payload: data.data });
	} catch (error) {
		console.log(error);
		yield put({ type: Actions.GET_COUNTRY_REJECTED, payload: undefined });
	}
}

export function* countryWatchers() {
	yield all([
		takeLatest(Actions.GET_COUNTRY_START, getCountries),
	]);
}
