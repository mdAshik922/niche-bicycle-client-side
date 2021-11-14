import { useState, useEffect } from 'react';
import initializeFirebase from '../Components/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

initializeFirebase();
const useFirebae = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoding, setIsLoding] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const provider = new GoogleAuthProvider();


  const signInGoogle = (location, history) => {
    setIsLoding(true);
    signInWithPopup(auth, provider)
      .then((result) => {

        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        // ...
        setError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      }).catch((error) => {
        setError(error.message);
      }).finally(() => setIsLoding(false));
  };


  const createAccount = (email, password, name, history) => {
    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        setIsLoding(true);
        const newUser = { email, displayName: name };
        setUser(newUser);

        //save user
        saveUser(email, name, 'POST');

        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
          error(error.message)
        });
        history.replace('/');
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoding(false));
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
          getIdToken(user)
          .then(idToken => {
             setToken(idToken);
            });
      }
      else {
          setUser({});
      }
      setIsLoding(false);
  });
  return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(` https://nameless-stream-54785.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email]);

  const logOut = () => {
    setIsLoding(true)
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  const logIn = (email, password, location, history) => {
    setIsLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/dashbord';
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoding(false));
  };

 


 


  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(' https://nameless-stream-54785.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  };

  return {
    user,
    admin,
    token,
    signInGoogle,
    createAccount,
    logIn,
    isLoding,
    error,
    logOut
  }
};

export default useFirebae;