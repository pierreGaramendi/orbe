import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({});
  isAlertOpen = false;
  errorMessageAlert = signal('Ha ocurrido un error');
  public alertButtons = ['OK'];

  constructor(
    private router: Router,
    private authService: AuthService,
    public formBuilder: FormBuilder,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
      password: ['123456', [Validators.required, Validators.minLength(2)]],
      email: [
        'test@test.com',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
  }

  async submitForm() {
    if (this.loginForm.valid) {
      try {
        const values = this.loginForm.value;
        const userdata = await this.authService.logging(values);
        console.log(userdata)
        await this.storage.set('in', true);
        await this.storage.set('iden', {
          name: 'Pierre G',
          email: 'pierre@gmail.com',
        });
        await this.router.navigate(['/app/characters']);
      } catch (e: any) {
        if (e.code == 'auth/user-not-found') {
          this.errorMessageAlert.set('Usuario no encontrado');
        } else if (e.code == 'auth/wrong-password') {
          this.errorMessageAlert.set('Contraseña incorrecta');
        }
        this.setOpen(true);
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
