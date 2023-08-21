import { Component, OnInit } from '@angular/core';
import { PersonalDataComponent } from './components';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {}
  async openPersonalDataModal() {
    const modal = await this.modalCtrl.create({
      component: PersonalDataComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      console.log(data);
    }
  }
}
