import {Rating} from 'types/rating.ts';

export type Film = {
  title: string;
  img: string;
  rating: Rating;
  text: string[];
  director: string;
  starring: string;
  genre: string;
  date: number;
}
