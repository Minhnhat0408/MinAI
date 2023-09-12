import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn appearance={{
    elements:{
      footerActionLink:"text-card hover:text-primary",
      formButtonPrimary:"bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground"
    }
  }}
/>;
}   