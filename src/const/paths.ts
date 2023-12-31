export enum Paths {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  MoviePage = '/films/:id',
  MoviePageDetails = '/films/:id/details',
  AddReview = '/films/:id/review',
  MoviePageReviews = '/films/:id/reviews',
  Player = '/player/:id',
}

export enum ApiPaths {
  Films = '/films',
  Promo = '/promo',
  Favorite = '/favorite',
  SetFilmStatus = '/favorite/:filmId/:status',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}
