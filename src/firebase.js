import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB1p19UrjP3J18C29wAPauBMWXZNgs86g8",
  authDomain: "album-5566c.firebaseapp.com",
  databaseURL: "https://album-5566c.firebaseio.com",
  projectId: "album-5566c",
  storageBucket: "album-5566c.appspot.com",
  messagingSenderId: "500192615998",
  appId: "1:500192615998:web:8c1f5aae7c61f8ad557b6f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
