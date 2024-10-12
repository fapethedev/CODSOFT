'use client'

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {Dialog, DialogPanel} from "@headlessui/react";

import Link from "next/link";
import Image from "next/image";
import CartDialog from "@/app/components/ui/cart-dialog";
import logo from "../../../../public/logo.png";

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Products', href: 'products' },
  { name: 'About Us', href: 'about' },
  { name: 'Contact', href: 'contact' },
]

export default function Navigation(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('upwdcred');
        if (auth) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <>
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="relative flex justify-between items-center justify-items-center -m-1.5 p-2 gap-4">
                        <Image alt="logo" src={logo} className="h-8 w-auto"/>
                        <span className="text-sm font-semibold">The Real E-Commerce</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 items-center lg:gap-x-10 lg:justify-end">
                    <Link href="#" onClick={() => setOpen(true)} className="rounded text-sm font-semibold px-3 py-0.5 leading-6 text-gray-900 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>

                    </Link>
                    {isAuthenticated ? (
                        <Link href="/account" className="rounded-lg text-sm px-3 py-0.5 font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                            Account <span aria-hidden="true">&rarr;</span>
                        </Link>
                    ) : (
                        <Link href="/login" className="rounded-lg text-sm px-3 py-0.5 font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    )}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="relative flex justify-between items-center justify-items-center -m-1.5 p-2 gap-4">
                            <Image alt="logo" src={logo} className="h-8 w-auto"/>
                            <span className="text-sm font-semibold">The Real E-Commerce</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <a onClick={() => setOpen(true)}
                                   className="relative flex text-base font-semibold leading-7 text-gray-900">
                                    Cart
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                    </svg>
                                </a>
                                {isAuthenticated ? (
                                    <Link href="/account"
                                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300">
                                        Account <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                ) : (
                                    <Link href="/login"
                                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300">
                                        Log in <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
            <CartDialog open={open} setOpen={setOpen} products={products}/>
        </>
    )
}