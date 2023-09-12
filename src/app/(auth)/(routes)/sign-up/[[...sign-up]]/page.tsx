import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp appearance={{
    elements: {
      footerActionLink: "text-card hover:text-primary",
      formButtonPrimary: "bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground"
    }
  }} />;
}