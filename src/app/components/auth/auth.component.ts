import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userLogin: string = 'admin'
  userPassword: string = '123'
  message: string = ''

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.message = 'Try to log in...'
    this.authService.login(this.userLogin, this.userPassword).subscribe({
      next: (res: any) => {
        this.setMessage()
        // if(!this.authService.redirectUrl) return
        if(this.authService.isLoggedIn) this.router.navigate([this.authService.redirectUrl])
      },
      error: err => console.log(err)
    })
  }

  logout(): void {
    this.authService.logout()
    this.setMessage()
  }

  setMessage():void {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`
  }
}
