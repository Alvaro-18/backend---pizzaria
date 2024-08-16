// Isso serve pra sobrescrever o tipo do express

declare namespace Express {
  export interface Request {
    user_id: string
  }
}