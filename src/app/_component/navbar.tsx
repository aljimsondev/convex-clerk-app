import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="shadow-sm border-border border-[1px] p-4 rounded-full my-4 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center justify-center gap-2 select-none">
          <div className="h-[42px] aspect-square relative">
            <Image alt="logo" src="/convex.png" fill />
          </div>
          +
          <div className="h-[42px] w-[120px] relative">
            <Image alt="logo" src="/clerk.png" fill className="object-cover" />
          </div>
        </div>
      </Link>
      <UserButton />
    </nav>
  );
}

export default Navbar;
