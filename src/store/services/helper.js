import _isString from 'lodash/isString';
import _get from 'lodash/get';

export const getLoadingState = () => ({ isFetching: true, errMsg: '', data: null });
export const getErrorState = (errMsg = 'Something went wrong') => ({ isFetching: false, errMsg: errMsg + '', data: null });
export const getSuccessState = (data) => ({ isFetching: false, errMsg: '', data });

export const getAxiosErrorMessage = (error, defaultMessage) => {
    if (_isString(error)) return error;

    const message = _get(error, 'response.data.message');
    if (_isString(message)) return message;
    return defaultMessage;
}

export const getUniqResourceIdsFromRecords = (records) => {
    const res = {};
    const addToRes = (urls) => {
        urls.forEach(url => {
            res[url] = url;
        })
    };

    records.forEach(record => {
        const vehicles = record.vehicles || [];
        const films = record.films || [];
        const species = record.species || [];
        const starships = record.starships || [];
        const planets = record.planets || [];
        const people = record.people || [];
        const pilots = record.pilots || [];
        const characters = record.characters || [];
        const residents = record.residents || [];


        addToRes(characters);
        addToRes(vehicles);
        addToRes(films);
        addToRes(species);
        addToRes(starships);
        addToRes(planets);
        addToRes(people);
        addToRes(pilots);
        addToRes(residents);
    })
    
    return Object.keys(res);
}