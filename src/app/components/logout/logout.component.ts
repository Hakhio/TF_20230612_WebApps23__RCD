import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isConnected: boolean = false;
  constructor (private _authService: AuthService) { }

  ngOnInit (): void {
    this._authService.authSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    })
  }

  signout (): void {
    this._authService.logout();
  }

}
