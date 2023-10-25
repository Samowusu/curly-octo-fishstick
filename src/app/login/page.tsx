import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <div className=" w-full bg-blue-300 p-3 text-center">
        <h1 className=" text-white text-2xl">
          Enter your email and password to log in
        </h1>
      </div>
      <LoginForm />
    </div>
  );
}
