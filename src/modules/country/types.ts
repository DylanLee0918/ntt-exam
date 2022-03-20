import { Action } from '../../types/Redux';

export enum Actions {
	GET_COUNTRY_START = '@country/GET_COUNTRY_START',
	GET_COUNTRY_FULFILLED = '@country/GET_COUNTRY_FULFILLED',
	GET_COUNTRY_REJECTED = '@country/GET_COUNTRY_REJECTED',
}

export interface DataState {
	countryInfo: Country;
}

export interface Country {
    name: string;
    code: string;
    population: number;
    latest_data: LatestData
}

export interface LatestData {
    deaths: number;
    confirmed: number;
    recovered: number;
    critical: number;
}

type WithLoadingList<T> = {
	isLoading: boolean;
	list: T;
};

export interface CountryState {
	countries: WithLoadingList<Country[]>;
}

export type GetCountryRequest = Action<typeof Actions.GET_COUNTRY_START>;
export type GetCountryAction = Action<typeof Actions.GET_COUNTRY_FULFILLED, Country[]>;
export type GetCountryError = Action<typeof Actions.GET_COUNTRY_REJECTED>;

export type CountryTypes = GetCountryRequest | GetCountryAction | GetCountryError
