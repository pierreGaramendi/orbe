import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../../auth/auth.service';
import { appPages, userMock } from './main.constants';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  user = signal(userMock);
  appPages = appPages;
  constructor(
    private storage: Storage,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user.mutate((value) => {
          value.name = user.displayName || '';
          value.email = user.email || '';
        });
      }
    });
  }

  async loginOut() {
    await this.authService.logOut();
    await this.storage.set('in', false);
    await this.storage.set('iden', userMock);
    await this.router.navigate(['/login']);
  }
}
