import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthInterface } from '../interfaces/interfaces';
import { defer, filter, from } from 'rxjs';
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

  signUpWithBack(cred: string) {
    return this.http.post(
      'https://cosinuts.herokuapp.com/auth/signup',
      { email: cred },
      { responseType: 'text' }
    );
  }

  verifyToken(token: string, id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });

    return this.http.post(
      'https://cosinuts.herokuapp.com/auth/login',
      { id: id },
      {
        headers: headers,
      }
    );
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
