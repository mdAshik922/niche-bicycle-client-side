import { useState, useEffect } from 'react';
import initializeFirebase from '../Components/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

initializeFirebase();
const useFirebae = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error  , setError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const createAccount = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setError('');
              const newUser = { email, displayName: name };
              setUser(newUser);
              // save user to the database
              saveUser(email, name, 'POST');
              // send name to firebase after creation
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              history.replace('/');
          })
          .catch((error) => {
            setError(error.message);
            
          })
          .finally(() => setIsLoading(false));
  }

  const logIn = (email, password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const destination = location?.state?.from || '/';
              history.replace(destination);
              setError('');
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
  };

  const signInGoogle = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
          .then((result) => {
              const user = result.user;
              saveUser(user.email, user.displayName, 'PUT');
              setError('');
              const destination = location?.state?.from || '/';
              history.replace(destination);
          }).catch((error) => {
            setError(error.message);
          }).finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
              getIdToken(user)
                  .then(idToken => {
                      setToken(idToken);
                  })
          } else {
              setUser({})
          }
          setIsLoading(false);
      });
      return () => unsubscribed;
  }, [auth])

  useEffect(() => { 
      fetch(`https://nameless-stream-54785.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
  }, [user.email])

  const logOut = () => {
      setIsLoading(true);
      signOut(auth).then(() => {
          // Sign-out successful.
      }).catch((error) => {
          // An error happened.
      })
          .finally(() => setIsLoading(false));
  }

  const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('https://nameless-stream-54785.herokuapp.com/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }

    

  return {
    user,
    admin,
    token,
    signInGoogle,
    createAccount,
    logIn,
    isLoading,
    error,
    logOut
  }
};

export default useFirebae;