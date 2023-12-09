import {Rating} from 'types/rating.ts';
import {CatalogGenre} from 'types/genre.ts';

export type Film = {
  id: number;
  title: string;
  img: string;
  posterImg: string;
  rating: Rating;
  text: string[];
  director: string;
  starring: string[];
  genre: CatalogGenre;
  date: number;
  runTime: string;
  video: string;
}
