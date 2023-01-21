import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../interfaces/interfaces';
import firebase from 'firebase/compat';
import * as auth from 'firebase/auth';
import { defer, from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
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
  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe(user => {
          if (user) {
            console.log(user);
          }
        });
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
  signUp(email: string, password: string) {
    return defer(() =>
      from(this.afAuth.createUserWithEmailAndPassword(email, password))
    );
  }
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      console.log(res);
    });
  }
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(result => {
        this.setUserData(result.user);
      })
      .catch(error => {
        window.alert(error);
      });
  }
  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
