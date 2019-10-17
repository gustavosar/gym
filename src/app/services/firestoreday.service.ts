import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskII } from '../models/day.interface';

@Injectable({
    providedIn: 'root'
  })

export class FirestoredayService {

    private daysCollection: AngularFirestoreCollection<TaskII>;
    private days: Observable<TaskII[]>;
  
    constructor(db:AngularFirestore) { 
      this.daysCollection = db.collection<TaskII>('days');
      this.days = this.daysCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        })
      );
    }
  
    getdays(){
      return this.days;
    }
  
    getDay(id: string){
      return this.daysCollection.doc<TaskII>(id).valueChanges();
    }
  
    updateDay(day:TaskII, id: string){
      return this.daysCollection.doc(id).update(day);
    }
    
    addDay(day: TaskII){
      return this.daysCollection.add(day);
    }
    
    removeDay(id: string){
      return this.daysCollection.doc(id).delete();
    }
  
  }
  