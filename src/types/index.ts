export interface Project {
    name: string;
    description: string;
    _id: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  githubId?: string;
}