import {  all, fork } from '@redux-saga/core/effects';

import { countryWatchers } from './country';

export function* rootSaga() {
	yield all([
		fork(countryWatchers)
	]);
}
