import { Observable } from 'rxjs';

export interface UserService {
  GreetUser(data: WelcomeUserRequest): Observable<WelcomeUserResponse>;
}

export interface WelcomeUserRequest {
  name: string;
}

export interface WelcomeUserResponse {
  greet: string;
}
