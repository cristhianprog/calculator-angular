import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private db: AngularFireDatabase) { }

  saveBd(operation) {
    this.db.list('operacao').push(operation)
      .then(() => {
        console.log('Operations saved!');
      })
      .catch((error) => {
        console.error('Error to save:', error);
      });
  }

  clearBd() {
    this.db.list('operacao').remove()
      .then(() => {
        console.log('Operations list cleaned!');
      })
      .catch((error) => {
        console.error('Error to cleaned:', error);
      });
  }

  getBd() {
    return this.db.list('operacao')
      .snapshotChanges()
      .pipe(
        map(changes => {
          console.log('changes', changes)

           return changes.map(c => ({key: c.payload.val(), data: c.payload.val() }));
        })
      )

  }

}
