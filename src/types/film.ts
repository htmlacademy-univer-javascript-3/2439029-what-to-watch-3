import {CatalogGenre} from 'types/genre.ts';

export type Film = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: CatalogGenre;
}

export type PromoFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: CatalogGenre;
  released: number;
  isFavorite: boolean;
};

export type FilmCard = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: CatalogGenre;
  released: number;
  isFavorite: boolean;
};

export type Review = {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
};
