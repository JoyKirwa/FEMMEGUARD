import { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';


import Navigation, { AuthRouter } from "@/navigation/Navigation";


export default function App() {
// Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null as any | null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  } 

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <AuthRouter />
  }

  return <Navigation />;
}
