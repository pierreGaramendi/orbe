import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-character/modal',
  templateUrl: './character-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterModal implements OnInit {
  character: any;
  name:any
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log(this.modalCtrl);
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.character, 'confirm');
  }
}
