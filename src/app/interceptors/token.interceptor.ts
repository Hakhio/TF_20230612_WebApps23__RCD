import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const authToken = localStorage.getItem('authToken');

    // if (authToken && authToken != '') {
    //   let clone = request.clone({ setHeaders: { 'Authorization': 'Bearer ' + this._authService.token } })
    //   return next.handle(clone);
    // }

    if (this._authService.token) {
      let clone = request.clone({ setHeaders: { 'Authorization': 'Bearer ' + this._authService.token } })
      return next.handle(clone);
    }

    return next.handle(request);
  }
}
