export const __prod__ = process.env.NODE_ENV === 'production';

export const API_URL = __prod__
	? 'https://lireddit-server01.herokuapp.com/graphql'
	: 'http://localhost:4000/graphql';
