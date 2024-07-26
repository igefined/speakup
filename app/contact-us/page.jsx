'use client';

import React from 'react'
import Image from '@node_modules/next/image';

const ContactUs = () => {
    return (
        <div className="flex flex-col mt-40">
            <div
                className="mb-40 sm:mt-0 mx-auto grid max-w-1xl grid-cols-1 items-center gap-x-20 gap-y-10 lg:max-w-1xl lg:grid-cols-2">
                <div>
                    <p className="font-gilroy-semi-bold text-md text-primary-blue">Connect Globally, Speak Locally!</p>
                    <h1 className="text-5xl font-bold font-gilroy-semi-bold tracking-tight sm:text-5xl mt-4">
                        Let’s Get in Touch
                    </h1>
                </div>
                <p className="font-gilroy text-md">
                    Speaking Club, Company, Us, We, Our, Ours and other first-person pronouns will refer to the Company,
                    as well as all employees and affiliates of the Company.
                </p>
            </div>
            <div
                className="-mt-20 mb-20 sm:mt-0 mx-auto grid max-w-1xl grid-cols-1 items-center gap-x-20 lg:max-w-1xl lg:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold font-gilroy-semi-bold tracking-tight sm:text-4xl mt-4">
                        Have a question?
                    </h2>
                    <p className="my-6 text-gray-500 font-gilroy">
                        Have any questions or need support? We`re here to help.
                    </p>

                    <div className="my-0 sm:my-10 flex flex-col gap-6">
                        <input type="text" name="name" id="name"
                               class="flex w-100 font-gilroy rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:accent-primary-blue sm:text-md sm:leading-6"
                               placeholder="Name"/>
                        <input type="text" name="email" id="email"
                               class="flex w-100 font-gilroy rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:accent-primary-blue sm:text-md sm:leading-6"
                               placeholder="Email"/>
                        <textarea id="message" rows="4"
                                  class="flex p-3 w-full text-md text-gray-900 rounded-lg font-gilroy border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Type your message..."></textarea>
                        <button
                                className="flex justify-center w-full sm:w-32 rounded px-4 py-3 bg-primary-blue font-gilroy text-base text-white font-semibold hover:bg-primary-blue-strong">
                            Send
                        </button>
                    </div>
                </div>
                <div className="hidden sm:flex mb-10">
                    <Image width="800" height="100" src="/assets/img/contact-us.png" alt="Speak Up"
                           className="rounded-3xl bg-gray-100"/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;