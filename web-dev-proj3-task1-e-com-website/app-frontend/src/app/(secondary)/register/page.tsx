import Logo from "@/app/components/ui/logo";
import {Metadata} from "next";
import RegisterForm from "@/app/components/ui/register-form";

export const metadata: Metadata = {
  title: 'Register',
};

export default function Page() {
  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo size="h-16"/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register to a new account
          </h2>
        </div>

        <RegisterForm/>
      </div>
  )
}
