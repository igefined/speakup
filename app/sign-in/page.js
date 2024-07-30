'use client'

import React from 'react'

export default function SignIn() {
    return (
        <div className="flex flex-col justify-center lg:px-8 mt-40 mb-20 w-1/3 p-10 shadow-md">
            <div className="flex flex-col items-start sm:mx-auto sm:w-full sm:max-w-sm gap-4 text-gray-600">
                <h2 className="text-center text-3xl font-gilroy-bold leading-9 tracking-tight text-gray-900">
                    Sign in
                </h2>
                <p className="font-gilroy">Please login to continue to your account.</p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6 mb-10">
                    <div>
                        <div className="relative">
                            <input type="text" id="floating_outlined"
                                   className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-gray-400 border-1 appearance-none font-gilroy focus:outline-none focus:ring-0 focus:border-primary-blue-strong peer"
                                   placeholder=" "/>
                            <label htmlFor="floating_outlined"
                                   className="font-gilroy absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Email or username
                            </label>
                        </div>
                    </div>

                    <div>
                        <div className="relative">
                            <input type="password" id="floating_outlined"
                                   className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-gray-400 border-1 appearance-none font-gilroy focus:outline-none focus:ring-0 focus:border-primary-blue-strong peer"
                                   placeholder=" "/>
                            <label htmlFor="floating_outlined"
                                   className="font-gilroy absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Password
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-xl bg-primary-blue px-3 py-3 text-md font-gilroy leading-6 text-white shadow-sm hover:bg-primary-blue-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                        <div className="separator">
                            <span className="font-gilroy text-sm">or</span>
                        </div>
                        <button
                            type="submit"
                            className="flex gap-2 w-full justify-center rounded-xl bg-primary-blue-secondary px-3 py-3 text-md font-gilroy leading-6 text-primary-blue-strong shadow-sm hover:bg-primary-blue-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in with Google
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M20.66 12.1932C20.66 11.5905 20.6059 11.011 20.5055 10.4546H12.5V13.7425H17.0746C16.8775 14.8051 16.2786 15.7053 15.3784 16.308V18.4407H18.1255C19.7327 16.961 20.66 14.7819 20.66 12.1932Z"
                                      fill="#4285F4"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.5 20.5002C14.795 20.5002 16.7191 19.7391 18.1254 18.4409L15.3784 16.3082C14.6173 16.8182 13.6436 17.1196 12.5 17.1196C10.2861 17.1196 8.41224 15.6243 7.74383 13.6152H4.90405V15.8175C6.30269 18.5955 9.17724 20.5002 12.5 20.5002Z"
                                      fill="#34A853"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M7.74387 13.6149C7.57387 13.1049 7.47728 12.5601 7.47728 11.9999C7.47728 11.4397 7.57387 10.8949 7.74387 10.3849V8.18262H4.90409C4.32841 9.33012 4 10.6283 4 11.9999C4 13.3715 4.32841 14.6697 4.90409 15.8172L7.74387 13.6149Z"
                                      fill="#FBBC05"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.5 6.88069C13.7479 6.88069 14.8684 7.30955 15.7493 8.15183L18.1873 5.71387C16.7152 4.34227 14.7911 3.5 12.5 3.5C9.17724 3.5 6.30269 5.40478 4.90405 8.18273L7.74383 10.385C8.41224 8.37592 10.2861 6.88069 12.5 6.88069Z"
                                      fill="#EA4335"/>
                            </svg>

                        </button>
                    </div>
                </form>
                <p className="flex w-full justify-center font-gilroy text-gray-500">
                    Need an account? <a href="/sign-up" className="flex ml-1 text-primary-blue-strong font-gilroy-semi-bold underline">Create one</a>
                </p>
            </div>
        </div>
    )
}
