import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-no-internet-modal',
  templateUrl: './no-internet.component.html',
  styleUrls: ['./no-internet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoInternetModal implements OnInit {
  character: any;
  name:any
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
