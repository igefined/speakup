'use client'

import React, {useEffect} from 'react';
import {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'
import {getProviders, signIn, signOut, useSession} from '@node_modules/next-auth/react';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'

const navigation = [
    {name: 'Timetable', href: '#'},
    {name: 'FAQ', href: '/faq'},
    {name: 'Contact Us', href: '/contact-us'},
]

const Nav = () => {
    const {data: session} = useSession()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders()

            setProviders(response)
        }

        setUpProviders()
    }, [])

    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Speak Up</span>
                            <Image
                                width="100"
                                height="100"
                                alt="Speak Up"
                                src="/assets/img/logo.png"
                                className='w-32 h-18'
                            />
                        </a>
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
                            <a key={item.name} href={item.href}
                               className="text-base font-gilroy leading-6 text-gray-700 font-normal hover:text-primary-blue">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {session?.user ? (
                            <div className="flex justify-center items-center gap-4 hover:cursor-pointer">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton
                                            className="flex w-full items-center justify-center gap-4 font-gilroy-semi-bold text-gray-900">
                                            <p>Igor P.</p>
                                            <Image width="50" height="50" alt="Speak Up"
                                                   src={session ? session?.user.image : '/assets/img/unknown-profile.png'}
                                                   className="flex h-10 w-10 rounded-full ring-white mr-4"/>
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a href="/profile"
                                                   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">My
                                                    Profile</a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a href="/settings"
                                                   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                                    Settings
                                                </a>
                                            </MenuItem>
                                        </div>
                                        <div className="py-1">
                                            <MenuItem>
                                                <button onClick={() => signOut()}
                                                        className="block px-4 w-full text-left py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                                    Sign Out
                                                </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        ) : (
                            <button
                                type='button'
                                onClick={() => signIn()}
                                className='nav-sign-btn'>
                                Sign in
                            </button>
                        )}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Speak Up</span>
                                <Image
                                    width="100"
                                    height="100"
                                    alt="Speak Up"
                                    src="/assets/img/logo.png"
                                    className="h-14 w-auto"
                                />
                            </a>
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
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-gilroy leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                {session?.user ? (
                                    <div className="py-6">
                                        <a href="/profile"
                                           className="-mx-3 block font-gilroy rounded-lg px-3 py-2.5 text-lg leading-7 text-gray-900 hover:bg-gray-50">
                                            My Profile
                                        </a>
                                        <a href="/settings"
                                           className="-mx-3 block font-gilroy rounded-lg px-3 py-2.5 text-lg leading-7 text-gray-900 hover:bg-gray-50">
                                            Settings
                                        </a>
                                        <div className="border-t mt-6 py-4">
                                            <button onClick={() => signOut()}
                                                    className="-mx-3 flex w-full rounded-md font-gilroy px-3 py-2.5 text-lg leading-7 text-gray-900 hover:bg-gray-50">
                                                Sign Out
                                            </button>
                                        </div>

                                    </div>
                                ) : (
                                    <div className="py-6">
                                        <button onClick={() => signIn()}
                                                className="-mx-3 flex w-full rounded-md font-gilroy rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Sign in
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    )
}

export default Nav;