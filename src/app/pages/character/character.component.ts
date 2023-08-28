import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CharacterService } from './character.service';
import { ICharacter, ICharacterResult } from './models/characters.model';
import { skeletonItemsArray } from '../../constants/skeleton.constant';
import { CharacterResultState, EventRefreshMock } from './models';
import { CharacterModal, CharacterNewModal } from './components';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  providers: [CharacterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {
  charactersResult: ICharacterResult = CharacterResultState;
  userList: any = [];
  skeletonItemsArray = skeletonItemsArray;
  loading = signal(true);

  constructor(
    private modalCtrl: ModalController,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.fetchBookings(EventRefreshMock);
  }

  async openModal(character: ICharacter) {
    const modal = await this.modalCtrl.create({
      component: CharacterModal,
      componentProps: { character: character },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      console.log(data);
    }
  }

  async openNewModal() {
    const modal = await this.modalCtrl.create({
      component: CharacterNewModal,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      console.log(data);
    }
  }

  fetchBookings(event: any) {
    this.characterService.getUserList().subscribe((data: any) => {
      this.loading.set(false);
      event.target.complete();
      this.userList = data;
    });
  }

  handleRefresh(event: any) {
    this.fetchBookings(event);
  }
}
