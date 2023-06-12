import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected: boolean = false;
  authSubject$: BehaviorSubject<boolean>;
  token: string = '';

  constructor() {
    let statusAuth: boolean = JSON.parse(localStorage.getItem('isConnected') 
      ?? 'false');
    this.isConnected = statusAuth;
    
    this.authSubject$ = new BehaviorSubject<boolean> (this.isConnected);
    this.authSubject$.next(this.isConnected);
    console.log("AuthService  constructor  this.isConnected:", this.isConnected);
  }

  login(): void {
    this.isConnected = true;
    this.authSubject$.next(this.isConnected);
    localStorage.setItem("isConnected", JSON.stringify(this.isConnected));
  }

  logout(): void {
    this.isConnected = false;
    this.authSubject$.next(this.isConnected);
    localStorage.clear();
  }

}
