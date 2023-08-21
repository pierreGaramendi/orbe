import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../../auth/auth.service';
import { appPages, userMock } from './main.constants';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  user = Object.assign({}, userMock);
  appPages = appPages;
  constructor(
    private storage: Storage,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.user = await this.storage.get('iden');
  }

  async loginOut() {
    await this.authService.logOut();
    await this.storage.set('in', false);
    await this.storage.set('iden', userMock);
    await this.router.navigate(['/login']);
  }
}
