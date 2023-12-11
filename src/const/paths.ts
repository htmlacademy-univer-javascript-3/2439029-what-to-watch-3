export enum Paths {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  MoviePage = '/films/:id',
  MoviePageDetails = '/films/:id/details',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum ApiPaths {
  Films = "/films",
  Film = "/films/:filmId",
  Similar = "/films/:filmId/similar",
  Promo = "/promo",
  Favorite = "/favorite",
  SetFilmStatus = "/favorite/:filmId/:status",
  Comments = "/comments/:filmId",
  Login = "/login",
  Logout = "/logout",
}
