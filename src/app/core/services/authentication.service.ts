import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseDto } from '../models/auth-response-dto';
import { RegistrationResponseDto } from '../models/registration-response-dto';
import { UserAuthenticationDto } from '../models/user-authentication-dto';
import { UserForRegistrationDto } from '../models/user-registration-dto';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
    var isTokenNotExpired = !this.jwtHelper.isTokenExpired(token!);
    var isThereToken = token != null;
    return isThereToken && isTokenNotExpired;
  }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto> (this.createCompleteRoute(route, 'https://localhost:7153'), body);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  public loginUser = (route: string, body: UserAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(this.createCompleteRoute(route, 'https://localhost:7153'), body);
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }
}