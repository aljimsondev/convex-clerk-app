import { SignUp } from '@clerk/nextjs';

function SignUpPage() {
  return (
    <section className="container mx-auto h-[100dvh] relative w-full items-center justify-center flex">
      <SignUp />
    </section>
  );
}

export default SignUpPage;
