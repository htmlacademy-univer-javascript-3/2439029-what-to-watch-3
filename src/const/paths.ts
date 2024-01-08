export const Paths = {
  Main: () => '/',
  SignIn: () => '/login',
  MyList: () => '/mylist',
  MoviePage: (id:string) => `/films/${id}`,
  MoviePageDetails: (id:string) => `/films/${id}/details`,
  AddReview: (id:string) => `/films/${id}/review`,
  MoviePageReviews:(id:string) =>`/films/${id}/reviews`,
  Player: (id:string) => `/player/${id}`,
  NotFound: () => '*',
};

export const ApiPaths = {
  Films : () => '/films',
  Film: (id: string) => `/films/${id}`,
  Similar: (id: string) => `/films/${id}/similar`,
  Promo: () => '/promo',
  Favorite: () => '/favorite',
  // SetFilmStatus: (filmId: string, status: FilmStatus) =>
  //   `/favorite/${filmId}/${status}`,
  Comments: (id: string) => `/comments/${id}`,
  Login: () => '/login',
  Logout: () => '/logout',
};
