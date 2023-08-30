import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NoInternetModal } from './components';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public onlineOffline: boolean = navigator.onLine;

  constructor(private storage: Storage, private modalCtrl: ModalController) {
    window.addEventListener('offline', () => {
      this.openModal();
    });
  }

  async ngOnInit() {
    if (!navigator.onLine) {
      this.openModal();
    }
    await this.storage.create();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({ component: NoInternetModal });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
    }
  }
}
