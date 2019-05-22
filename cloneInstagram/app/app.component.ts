import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyDGAg74C87y38IXssPf_JZQzOLgAGFfYgg",
      authDomain: "jta-instagram-clone-84b88.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-84b88.firebaseio.com",
      projectId: "jta-instagram-clone-84b88",
      storageBucket: "jta-instagram-clone-84b88.appspot.com",
      messagingSenderId: "1039749420643"
    };

    firebase.initializeApp(config)
  }
}
