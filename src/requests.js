import { getOneMonthAgoReleaseDate } from "./utils";

export const GITHUB_BASE_URL = "https://kazooie.io/";
export const GITHUB_AVATAR_URL = "https://avatars.githubusercontent.com/u/25078541?v=4";
const GITHUB_ASSETS_BASE_URL = "http://metazooie.com/img/hero_desktop.webp";
export const LANG = "en-US";
export const REGION = "US";
export const BASE_IMG_URL = "https://i.ibb.co/R32XDZj/Highres-Screenshot00001.png";
export const FALLBACK_IMG_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_readme.png`;
export const LOGO_URL = `http://metazooie.com/img/logo_white.png`;
export const MOBILE_LOGO_URL = `http://metazooie.com/img/logo_white.png`;
export const PROFILE_PIC_URL = `https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png`;
export const SIGNIN_BGIMG_URL = `${GITHUB_ASSETS_BASE_URL}`;
export const TADUM_SOUND_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_TaDum.mp3`;
const ONEMONTHAGO = getOneMonthAgoReleaseDate();
const { REACT_APP_API_KEY } = process.env;



const requests = {
	fetchSearchQuery: `/search/multi?api_key=${BASE_IMG_URL}&language=${LANG}&query=`,
	fetchTrendingAll: `/trending/all/week?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchReleasedMoviesByOneMonth: `/discover/movie?api_key=${REACT_APP_API_KEY}&primary_release_date.gte=${ONEMONTHAGO}&sort_by=popularity.desc&language=${LANG}`,
    // Movies
	fetchTrendingMovies: `/trending/movies/week?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchUpcomingMovies: `/movie/upcoming?api_key=${REACT_APP_API_KEY}&language=${LANG}`,
	fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&region=${REGION}`,
	fetchActionMovies: `/discover/movie?api_key=https://i.ibb.co/R32XDZj/Highres-Screenshot00001.png&with_genres=28&sort_by=popularity.desc&language=${LANG}`,
	fetchAdventureMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=12&sort_by=popularity.desc&language=${LANG}`,
	fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
	fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27&sort_by=popularity.desc&language=${LANG}`,
	fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749&sort_by=popularity.desc&language=${LANG}`,
	fetchWarMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10752&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
	discoverMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
    // Series
	discoverSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchTrendingSeries: `/trending/tv/week?api_key=${REACT_APP_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213&sort_by=popularity.desc&language=${LANG}`,
	fetchActionAdventureSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10759&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
	fetchComedySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
	fetchCrimeSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=80&sort_by=popularity.desc&language=${LANG}`,
	fetchDocumentarySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=99&sort_by=popularity.desc&language=${LANG}`,
	fetchFamilySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10751&sort_by=popularity.desc&language=${LANG}`,
	fetchKidsSeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10762&sort_by=popularity.desc&language=${LANG}`,
	fetchSciFiFantasySeries: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_genres=10765&sort_by=popularity.desc&language=${LANG}`,
};

export default requests;
