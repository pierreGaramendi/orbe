import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  bookingListRef: any = {};

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {}

  getUserList() {
    return this.afs.collectionGroup('usuarios').valueChanges({ idField: 'id' });
  }

  getOneUser(id: string) {
    return this.afs
      .collectionGroup(`usuarios/${id}`)
      .valueChanges({ idField: 'id' });
  }

  addUser(values: any) {
    return this.afs.collection('usuarios').add(values);
  }
}
