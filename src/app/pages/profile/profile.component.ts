import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { PersonalDataComponent } from './components';
import { ModalController } from '@ionic/angular';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userMock } from '../main';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  user = signal(userMock);
  url =
    'https://images.squarespace-cdn.com/content/v1/5e6ece70bd2f8a6de8472818/714f685e-d0ba-40f9-8bb2-38722c1fd29c/Tiny+Avatar.png';
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
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
      } else {
      }
    });
  }

  async openPersonalDataModal() {
    const modal = await this.modalCtrl.create({
      component: PersonalDataComponent,
    });
    modal.present();
    const { role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.loadProfile();
    }
  }
}
