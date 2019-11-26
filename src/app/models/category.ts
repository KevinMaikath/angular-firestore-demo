import {AngularFirestoreDocument} from '@angular/fire/firestore';

export class Category {
  name: string;
  imgUrl: string;
  items: AngularFirestoreDocument[];
}
