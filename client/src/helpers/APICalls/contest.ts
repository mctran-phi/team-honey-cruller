import { FetchOptions } from '../../interface/FetchOptions';
import { AuthApiData, ContestById } from '../../interface/AuthApiData';

export const getAllContests = async (): Promise<AuthApiData> => {
    const fetchData: FetchOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    }
    
    return await fetch('/contest', fetchData)
        .then(data => data.json())
        .catch(err => ({ error: { message: 'Can not connect to server' } }))
}

export const getContestByUser = async (): Promise<AuthApiData> => {
    const fetchData: FetchOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    }

    return await fetch('/users/contests', fetchData)
    .then(data => data.json())
    .catch(err => ({ error: { message: 'Could not find User Contests'}}))
}

export const getContestById = async (): Promise<AuthApiData> => {
    const fetchData: FetchOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    }

    return await fetch('/contest', fetchData)
    .then(data => data.json())
    .catch(err => ({ error: { message: 'Could not find Contest.'}}))
}
