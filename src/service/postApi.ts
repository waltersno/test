import { IComment } from './service-types';

class CommentAPI {
  private static readonly API_URL: string =
    'https://jsonplaceholder.typicode.com/comments';

  public static getComments = async (): Promise<IComment[] | null> => {
    try {
      const res = await fetch(`${this.API_URL}?_limit=4`);
      const data = await res.json();
      return data;
    } catch {
      return null;
    }
  };

  public static getComment = async (page: number): Promise<IComment | null> => {
    try {
      const res = await fetch(`${this.API_URL}/${page}`);
      const data = await res.json();
      return data;
    } catch {
      return null;
    }
  };
}

export default CommentAPI;
