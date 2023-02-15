import { Observable } from 'rxjs';

export interface UserService {
  GreetUser(data: WelcomeUserRequest): Observable<WelcomeUserResponse>;

  StreamGreet(data: StreamGreetRequest): Observable<StreamGreetResponse>;
}

export interface WelcomeUserRequest {
  name: string;
}

export interface WelcomeUserResponse {
  greet: string;
}

export interface StreamGreetRequest {
  msg: string;
}

export interface StreamGreetResponse {
  msg: string;
}
