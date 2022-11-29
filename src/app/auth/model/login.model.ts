//request
export interface Login {
  email: string;
  password: string;
}

//response
export interface LoginResponse {
  email: string;
  accessToken: string;

}
