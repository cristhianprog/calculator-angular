import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private db: AngularFireDatabase) { }

  saveBd(operacao){
    this.db.list('operacao').push(operacao);
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
