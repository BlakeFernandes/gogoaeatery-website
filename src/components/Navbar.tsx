"use client";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { cn } from '~/utils/utils'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Menu', href: '/menu', current: false },
    { name: 'Catering', href: '/catering', current: false },
    { name: 'Events', href: '/events', current: false },
    { name: 'Store', href: '/store', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

export default function NavBar(props: { primary?: boolean, className?: string }) {
    return (
        <Disclosure as="nav" className={cn("w-full text-white", props?.primary ? "absolute z-20 top-0" : "", props.className)}>
            {({ open }) => (
                <>
                    <div className="px-16 py-6">
                        <div className="relative flex items-center justify-between">
                            <div className="inset-y-0 left-0 w-full items-center block xl:hidden">
                                {/* Mobile menu button*/}
                                <div className='flex justify-between my-2'>
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#1A191B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                    <p className="text-2xl font-medium tracking-wider">GO GOA EATERY</p>
                                </div>
                                <Disclosure.Panel className="xl:hidden w-full h-full my-4">
                                    <div className="space-y-1 px-2 pb-3 pt-2 bg-white rounded-md">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={cn(
                                                    item.current ? 'bg-[#1A191B] text-white' : 'text-black hover:bg-[#14110C] hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </div>
                            <div className="hidden space-x-4 justify-between w-full xl:flex items-center">
                                <div className="space-x-8 hidden xl:flex">
                                    <Link href="/" className="text-sm font-normal tracking-wide leading-6 text-white">HOME</Link>
                                    <Link href="/catering" className="text-sm font-normal tracking-wide leading-6 text-white">CATERING</Link>
                                    <Link href="/events" className="text-sm font-normal tracking-wide leading-6 text-white">EVENTS</Link>
                                    <Link href="/store" className="text-sm font-normal tracking-wide leading-6 text-white">STORE</Link>
                                </div>
                                <p className="flex-1 text-center text-2xl font-medium tracking-wider">{props?.primary ?? "GO GOA EATERY"}</p>
                                <div className="space-x-8 hidden xl:flex">
                                    <Link href="/about" className="text-sm font-normal tracking-wide leading-6 text-white">ABOUT</Link>
                                    <Link href="/menu" className="text-sm font-normal tracking-wide leading-6 text-white">MENUS</Link>
                                    <Link href="/contact" className="text-sm font-normal tracking-wide leading-6 text-white">CONTACT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
