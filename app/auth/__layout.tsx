import { Slot } from "expo-router";

//  the login and sign up pages would share this route

async function AuthLayout() {
  return <Slot />;
}
