import {describe, expect} from 'vitest';
import {NameSpace} from '@const/namespaces.ts';
import {
  getPromoFilm, getFilms, getAllFilms, getShowFilms, getFilmData, getError, getReviews, getSimilarFilms,
  filmsDataLoading, filmDataLoading, getGenre, getGenres, getSection, getMyList, myListLoading, getMyListCount
}
  from '@store/film/selections.ts';
import {SHOWED_FILMS_COUNT} from '@const/values.ts';
import {CatalogGenre} from 'types/genre.ts';
import {Film, FilmCard, PromoFilm} from 'types/film.ts';
import {ReviewType} from 'types/review.ts';

describe('UserSlice selectors', () => {
  const promofilm: PromoFilm = {
    id: '26193591-d574-43c5-b80a-9344b71814dc',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'https://13.design.htmlacademy.pro/static/film/poster/Fantastic_Beasts.jpg',
    backgroundImage: 'https://13.design.htmlacademy.pro/static/film/background/Fantastic_Beasts.jpg',
    videoLink: 'https://13.design.htmlacademy.pro/static/film/video/bike.mp4',
    genre: 'Fantasy',
    released: 2018,
    isFavorite: true
  };

  const filmCard : FilmCard = {
    id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    name: 'test',
    posterImage: 'https://url-to-image/image.jpg',
    backgroundImage: 'https://url-to-image/image.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://url-to-video/video.jpg',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false
  };
  const film1: Film = {
    id: 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    name: 'test1',
    previewImage: 'https://url-to-image/image.jpg',
    previewVideoLink: 'https://url-to-video/video.mp4',
    genre: 'Comedy'
  };
  const film2 = {...film1};
  film2.name = 'test2';
  const film3 = {...film1};
  film3.name = 'test3';
  const review: ReviewType = {
    id: 'ac8adb38-0cfa-4585-a767-d3afcc557a05',
    date: '2023-05-25T12:00:00.000Z',
    user: 'Kate Muir',
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    rating: 8
  };
  const state = {
    [NameSpace.Film]:{
      genre: 'All genres' as CatalogGenre,
      genres: ['All genres'] as CatalogGenre[],
      promoFilm: promofilm,
      filteredFilms: [film1, film2],
      allFilms: [film1, film2, film3],
      count: SHOWED_FILMS_COUNT,
      authorizationStatus: false,
      error: 'test_error',
      film: filmCard,
      similarFilms: [film3],
      reviews: [review],
      section: 'Overview' as 'Overview' | 'Details' | 'Reviews',
      isFilmsDataLoading: true,
      isFilmDataLoading: false,
      isPromoFilmLoading: true,
      myList: [film2],
      isMyListLoading: false,
      myListCount: 1
    },
  };
  it('should return promoFilm from state', () => {
    const {promoFilm} = state[NameSpace.Film];
    const result = getPromoFilm(state);
    expect(result).toBe(promoFilm);
  });
  it('should return filteredFilms from state', () => {
    const {filteredFilms} = state[NameSpace.Film];
    const result = getFilms(state);
    expect(result).toBe(filteredFilms);
  });
  it('should return allFilms from state', () => {
    const {allFilms} = state[NameSpace.Film];
    const result = getAllFilms(state);
    expect(result).toBe(allFilms);
  });
  it('should return count from state', () => {
    const {count} = state[NameSpace.Film];
    const result = getShowFilms(state);
    expect(result).toBe(count);
  });
  it('should return film from state', () => {
    const {film} = state[NameSpace.Film];
    const result = getFilmData(state);
    expect(result).toBe(film);
  });
  it('should return error from state', () => {
    const {error} = state[NameSpace.Film];
    const result = getError(state);
    expect(result).toBe(error);
  });
  it('should return reviews from state', () => {
    const {reviews} = state[NameSpace.Film];
    const result = getReviews(state);
    expect(result).toBe(reviews);
  });
  it('should return similarFilms from state', () => {
    const {similarFilms} = state[NameSpace.Film];
    const result = getSimilarFilms(state);
    expect(result).toBe(similarFilms);
  });
  it('should return isFilmsDataLoading from state', () => {
    const {isFilmsDataLoading} = state[NameSpace.Film];
    const result = filmsDataLoading(state);
    expect(result).toBe(isFilmsDataLoading);
  });
  it('should return isFilmDataLoading from state', () => {
    const {isFilmDataLoading} = state[NameSpace.Film];
    const result = filmDataLoading(state);
    expect(result).toBe(isFilmDataLoading);
  });
  it('should return genre from state', () => {
    const {genre} = state[NameSpace.Film];
    const result = getGenre(state);
    expect(result).toBe(genre);
  });
  it('should return genres from state', () => {
    const {genres} = state[NameSpace.Film];
    const result = getGenres(state);
    expect(result).toBe(genres);
  });
  it('should return section from state', () => {
    const {section} = state[NameSpace.Film];
    const result = getSection(state);
    expect(result).toBe(section);
  });
  it('should return myList from state', () => {
    const {myList} = state[NameSpace.Film];
    const result = getMyList(state);
    expect(result).toBe(myList);
  });
  it('should return isMyListLoading from state', () => {
    const {isMyListLoading} = state[NameSpace.Film];
    const result = myListLoading(state);
    expect(result).toBe(isMyListLoading);
  });
  it('should return myListCount from state', () => {
    const {myListCount} = state[NameSpace.Film];
    const result = getMyListCount(state);
    expect(result).toBe(myListCount);
  });

});
