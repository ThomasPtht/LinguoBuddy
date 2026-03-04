import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-avatar-login',
  imports: [LucideAngularModule],
  templateUrl: './avatar-login.html',
  styleUrl: './avatar-login.scss',
})
export class AvatarLogin {
  @Input() avatarUrl?: string;

}
