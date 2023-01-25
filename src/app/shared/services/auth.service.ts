import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthInterface, User } from '../interfaces/interfaces';
import * as auth from 'firebase/auth';
import {
  defer,
  filter,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { getIdToken } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private http: HttpClient
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // signIn(email: string, password: string) {
  //
  //   return this.afAuth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(result => {
  //       this.setUserData(result.user);
  //       this.afAuth.authState.subscribe(user => {
  //         if (user) {
  //           console.log(user);
  //         }
  //       });
  //     })
  //     .catch(error => {
  //       window.alert(error.message);
  //     });
  // }

  login(creds: AuthInterface) {
    return defer(() =>
      from(this.afAuth.signInWithEmailAndPassword(creds.email, creds.password))
    );
  }

  showUser() {
    return defer(() => from(this.afAuth.currentUser)).pipe(
      filter(currentUser => !!currentUser && !!currentUser.getIdToken(true))
    );
  }

  signUp(email: string, password: string) {
    return defer(() =>
      from(this.afAuth.createUserWithEmailAndPassword(email, password))
    );
  }

  verifyToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });

    return this.http.get('http://localhost:3000/login', { headers: headers });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
