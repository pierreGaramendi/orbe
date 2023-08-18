import { Component, OnInit, signal } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-character-new/modal',
  templateUrl: './character-new-modal.component.html',
  providers: [CharacterService],
})
export class CharacterNewModal implements OnInit {
  character: any;
  name: any;
  ionicForm: FormGroup = this.formBuilder.group({});
  nameErrorMessage = 'aliens';
  messages = signal({
    name: { message: 'Error' },
    last: { message: 'Error' },
  });
  constructor(
    private modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    private characterService: CharacterService
  ) {}

  buildForm() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      last: ['', [Validators.required, Validators.minLength(2)]],
      age: [null, [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      birthday: ['', Validators.compose([Validators.required])],
    });
    console.log(this.ionicForm.controls?.['name']);
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  ngOnInit() {
    this.buildForm();
    this.ionicForm.statusChanges.subscribe((status) => {
      this.generateErrorMessages(this.ionicForm);
    });
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  submitForm() {
    if (this.ionicForm.valid) {
      const values = this.ionicForm.value;
      console.log(this.ionicForm.value);
      this.characterService
        .addUser(values)
        .then((result) => {
          console.log(result.id);
        })
        .catch((error) => {
          console.log(error);
        });
      this.confirm();
    } else {
      return console.log('Please provide all the required values!');
    }
  }

  confirm() {
    return this.modalCtrl.dismiss(this.character, 'confirm');
  }

  generateErrorMessages(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((controlName) => {
      let control = formGroup.controls[controlName];
      let errors = control.errors;
      if (errors === null || errors['count'] === 0) {
        return;
      }
      if (controlName === 'name') {
        if (errors['required']) {
          this.messages.mutate((value) => {
            value.name.message = `${controlName} is required`;
          });
        }
        if (errors['minlength']) {
          this.messages.mutate((value) => {
            value.name.message = `${controlName} minimum length is ${errors?.['minlength'].requiredLength}`;
          });
        }
      }
    });
  }
}
