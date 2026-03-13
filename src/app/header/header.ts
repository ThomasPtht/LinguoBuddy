import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarLogin } from '../avatar-login/avatar-login';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [AvatarLogin],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  username = '';

  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  onHome() {
    this.router.navigateByUrl('');
  }
}