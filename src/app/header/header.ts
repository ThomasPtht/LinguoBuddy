import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarLogin } from '../avatar-login/avatar-login';

@Component({
  selector: 'app-header',
  imports: [AvatarLogin],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 constructor(private router: Router) { }

    onHome() {
    this.router.navigateByUrl('');
    }
}
