import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <header className=" flex justify-end gap-5 p-5">
          <Link
            className="bg-red-500 rounded-md p-2 text-white hover:bg-red-900 focus-within:bg-red-900"
            href={"/login"}
          >
            Log in
          </Link>
        </header>
        <div className=" mx-auto flex justify-center">
          <h1 className="text-3xl mt-24">Welcome To The Landing Page</h1>
        </div>
      </div>
    </div>
  );
}
