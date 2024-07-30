'use client';

import React from 'react'
import Image from '@node_modules/next/image'
import {useRouter} from 'next/navigation'

export default function SignIn() {
    const router = useRouter()

    return (
        <div className="flex flex-col justify-center items-center lg:px-8 border-red-600 w-full h-screen">
            <div className="flex flex-col justify-center items-center gap-10 w-1/2">
                <div className="flex w-full justify-center">
                    <Image width="180" height="100" src="/assets/img/not-found.png" alt="Speka Logo"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="flex text-3xl font-gilroy-semi-bold">Oops! Page Not Found</p>
                    <div>
                        <p className="flex justify-center font-gilroy">Looks like you've lost your way in our speaking
                            club
                            maze.</p>
                        <p className="flex justify-center font-gilroy">This page is still in development and will be
                            available soon.</p>
                    </div>
                </div>
                <button onClick={() => router.push('/')}
                        className="flex rounded-xl bg-primary-blue-strong text-white px-6 py-4 font-gilroy">Back to the
                    Homepage
                </button>
            </div>
        </div>
    )
}
