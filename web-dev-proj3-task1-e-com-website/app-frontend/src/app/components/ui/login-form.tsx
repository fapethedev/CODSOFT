'use client'

import Link from "next/link";
import ComingSoonDialog from "@/app/components/ui/coming-soon-dialog";
import {useState} from "react";
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useRouter} from "next/navigation";
import {api} from "@/lib/api";

const loginSchema = z.object({
    username: z.string().email({message: "Invalid email address"}).min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const router = useRouter();

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await api.post(`/login`, data);

            if (response.status === 204) {
                const credentials = btoa(`${data.username}:${data.password}`);

                localStorage.setItem('upwdcred', data.username);
                localStorage.setItem('usrncred', credentials);

                router.push('/account')
            }
        } catch (error) {
            console.log(error)
            setError('Invalid username or password.');
        }
    };

    return (
        <>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register('username')}
                            />
                        </div>
                        {errors.username && <p className="font-medium text-xs text-red-500 accent-red-600">{errors.username.message}</p>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a onClick={() => setOpen(true)} href="#"
                                   className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                {...register('password')}
                            />
                        </div>
                        {errors.password && <p className="font-medium text-xs text-red-500 accent-red-600">{errors.password.message}</p>}
                    </div>

                    <div>
                        {error && <p className="font-medium text-xs text-red-500 accent-red-600">{error}</p>}
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Create an account now !
                    </Link>
                </p>
            </div>
            <ComingSoonDialog open={open} setOpen={setOpen}/>
        </>
    )
}