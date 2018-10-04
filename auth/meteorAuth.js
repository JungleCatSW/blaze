import Meteor, { Accounts } from 'react-native-meteor';
// import User from 'react-native-meteor/user/User.js';
import { METEOR_URL } from '../config/api';
// import call from 'react-native-meteor/Call.js';


Meteor.connect(METEOR_URL); // do this only once

export function signUp(name: string, email: string, password: string) {
  Accounts.createUser({
    username: email, email, password, profile: { name },
  }, (error) => {
    if (error) {
      console.log('signUp Error', error.reason);
      // i.e. Email alreadys exists -> Redirect to login / reset password
      // TODO Redirect to login / reset password
    }
  });
}

export function signInWithPassword(email: string, password: string) {
  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      console.log('signInWithPassword Error', error);
      // TODO notify the user but stay on login screen
    } else {
      console.log('Meteor user', Meteor.user());
      console.log('Meteor userId', Meteor.userId());
      console.log('Auth token', Meteor.getAuthToken());
      const user = Meteor.user();
      const userId = Meteor.userId();
      const authToken = Meteor.getAuthToken();
      // TODO Update local state.account using GQL
      // TODO Navigate user to home screen, remove auth screens from stack
    }
  });
}

export function signInWithToken() {
  // TODO query local gql for meteor authToken
  const token = 'ioH4lDehofMsz-HX1kDCiZyH65JIPlSuRDLjeOF6Oeg';
  // console.log(User);
  // console.log(call);
  Meteor._loginWithToken(token);
  console.log('Meteor user', Meteor.user());
}

export function signOut(){
  Meteor.logout(() => {
    console.log('signOut')
  })
}
