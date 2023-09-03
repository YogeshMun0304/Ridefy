import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full bg-blue-500">

    <div className="flex h-screen items-center justify-center bg-blue-500">
      <SignIn />
    </div>
    </div>
  );
}
