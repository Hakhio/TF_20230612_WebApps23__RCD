import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isConnected: boolean = false;
  constructor (private _authService: AuthService) { }

  ngOnInit (): void {
    // this.isConnected = this._authService.isConnected;
    this._authService.authSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    })
  }

  signin (): void {
    this._authService.login();
    this.isConnected = this._authService.isConnected;
  }

}
