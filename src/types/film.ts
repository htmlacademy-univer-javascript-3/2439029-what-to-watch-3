import {Rating} from 'types/rating.ts';

export type Film = {
  id: number;
  title: string;
  img: string;
  posterImg: string;
  rating: Rating;
  text: string[];
  director: string;
  starring: string[];
  genre: string;
  date: number;
  runTime: string;
  video: string;
}
