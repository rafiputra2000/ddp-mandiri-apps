export interface ApiResponse<T>{
  code: string;
  status: string;
  message: string;
  data: T
}
