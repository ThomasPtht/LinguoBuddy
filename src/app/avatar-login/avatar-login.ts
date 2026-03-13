import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-login',
  imports: [],
  templateUrl: './avatar-login.html',
  styleUrl: './avatar-login.scss',
})
export class AvatarLogin {
  @Input() username?: string;

  get initial(): string {
    return this.username?.[0]?.toUpperCase() ?? '?';
  }
}