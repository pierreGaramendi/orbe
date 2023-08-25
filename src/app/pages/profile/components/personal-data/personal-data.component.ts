import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { getAuth, updateProfile } from 'firebase/auth';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {
  user: any = getAuth().currentUser;
  userForm: FormGroup = this.formBuilder.group({});
  isToastOpen = false;

  constructor(
    private modalCtrl: ModalController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const name = this.user.displayName;
    this.buildForm(name);
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  buildForm(name: string) {
    this.userForm = this.formBuilder.group({
      name: [name, [Validators.required, Validators.minLength(2)]],
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.userForm.invalid) {
      return;
    }
    const { name } = this.userForm.value;
    updateProfile(this.user, { displayName: name })
      .then(() => {
        this.setOpen(true);
        return this.modalCtrl.dismiss({}, 'confirm');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
