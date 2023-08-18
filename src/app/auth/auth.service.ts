import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth, private storage: Storage) {}
  isLoggedIn() {
    return this.storage.get('in');
  }
  logging(data: any) {
    return this.afa.signInWithEmailAndPassword(data.email, data.password);
  }
  logOut() {
    return this.afa.signOut();
  }
}
