export type ReviewComment = {
  id:string;
  comment: string;
  rating: number;
}

export type ReviewCommentResponse = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}
