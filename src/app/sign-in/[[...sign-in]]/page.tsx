import { SignIn } from '@clerk/nextjs';

function SignInPage() {
  return (
    <section className="container mx-auto h-[100dvh] relative w-full items-center justify-center flex">
      <SignIn />
    </section>
  );
}

export default SignInPage;
