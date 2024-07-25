'use client'

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="w-full p-0 m-0">
            <footer className="bottom-0 bg-dark-grey rounded-lg shadow my-4">
                <div className="max-w-screen-xl mx-auto p-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#"
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image width="120" height="200" src="/assets/img/logo.png" className="h-12" alt="Speka Up Logo"/>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-gilroy text-light-grey sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                        <div className="flex gap-6 items-center">
                            <a href="#">
                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 10.5L13.19 7.49999L8 4.49999V10.5ZM19.56 2.66999C19.69 3.13999 19.78 3.76998 19.84 4.56998C19.91 5.36999 19.94 6.05999 19.94 6.65999L20 7.49999C20 9.68999 19.84 11.3 19.56 12.33C19.31 13.23 18.73 13.81 17.83 14.06C17.36 14.19 16.5 14.28 15.18 14.34C13.88 14.41 12.69 14.44 11.59 14.44L10 14.5C5.81 14.5 3.2 14.34 2.17 14.06C1.27 13.81 0.69 13.23 0.44 12.33C0.31 11.86 0.22 11.23 0.16 10.43C0.0900001 9.62999 0.0599999 8.93999 0.0599999 8.33999L0 7.49999C0 5.30999 0.16 3.69999 0.44 2.66999C0.69 1.76998 1.27 1.18998 2.17 0.939985C2.64 0.809985 3.5 0.719985 4.82 0.659985C6.12 0.589985 7.31 0.559985 8.41 0.559985L10 0.499985C14.19 0.499985 16.8 0.659985 17.83 0.939985C18.73 1.18998 19.31 1.76998 19.56 2.66999Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 10.5C20 4.97998 15.52 0.499985 10 0.499985C4.48 0.499985 0 4.97998 0 10.5C0 15.34 3.44 19.37 8 20.3V13.5H6V10.5H8V7.99998C8 6.06998 9.57 4.49998 11.5 4.49998H14V7.49998H12C11.45 7.49998 11 7.94998 11 8.49998V10.5H14V13.5H11V20.45C16.05 19.95 20 15.69 20 10.5Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.028 0.499985C12.153 0.502985 12.724 0.508985 13.217 0.522985L13.411 0.529985C13.635 0.537985 13.856 0.547985 14.123 0.559985C15.187 0.609985 15.913 0.777985 16.55 1.02498C17.21 1.27898 17.766 1.62298 18.322 2.17798C18.8305 2.67788 19.2239 3.28257 19.475 3.94998C19.722 4.58698 19.89 5.31298 19.94 6.37798C19.952 6.64398 19.962 6.86498 19.97 7.08998L19.976 7.28398C19.991 7.77598 19.997 8.34698 19.999 9.47198L20 10.218V11.528C20.0024 12.2574 19.9948 12.9868 19.977 13.716L19.971 13.91C19.963 14.135 19.953 14.356 19.941 14.622C19.891 15.687 19.721 16.412 19.475 17.05C19.2246 17.7178 18.8311 18.3226 18.322 18.822C17.8219 19.3303 17.2173 19.7237 16.55 19.975C15.913 20.222 15.187 20.39 14.123 20.44C13.8857 20.4512 13.6483 20.4612 13.411 20.47L13.217 20.476C12.724 20.49 12.153 20.497 11.028 20.499L10.282 20.5H8.97297C8.24323 20.5025 7.51349 20.4948 6.78397 20.477L6.58997 20.471C6.35258 20.462 6.11524 20.4517 5.87797 20.44C4.81397 20.39 4.08797 20.222 3.44997 19.975C2.78264 19.7244 2.17818 19.3308 1.67897 18.822C1.17001 18.3223 0.776191 17.7175 0.524967 17.05C0.277967 16.413 0.109967 15.687 0.0599666 14.622C0.0488254 14.3847 0.0388253 14.1474 0.0299666 13.91L0.0249667 13.716C0.00653879 12.9868 -0.00179544 12.2574 -3.33508e-05 11.528V9.47198C-0.00282432 8.74258 0.0045098 8.01318 0.0219667 7.28398L0.0289667 7.08998C0.0369667 6.86498 0.0469667 6.64398 0.0589667 6.37798C0.108967 5.31298 0.276967 4.58798 0.523967 3.94998C0.775081 3.28189 1.16969 2.67701 1.67997 2.17798C2.17906 1.66946 2.78311 1.27597 3.44997 1.02498C4.08797 0.777985 4.81297 0.609985 5.87797 0.559985C6.14397 0.547985 6.36597 0.537985 6.58997 0.529985L6.78397 0.523985C7.51316 0.506217 8.24256 0.49855 8.97197 0.500985L11.028 0.499985ZM9.99997 5.49998C8.67388 5.49998 7.40211 6.02677 6.46443 6.96445C5.52675 7.90213 4.99997 9.1739 4.99997 10.5C4.99997 11.8261 5.52675 13.0978 6.46443 14.0355C7.40211 14.9732 8.67388 15.5 9.99997 15.5C11.326 15.5 12.5978 14.9732 13.5355 14.0355C14.4732 13.0978 15 11.8261 15 10.5C15 9.1739 14.4732 7.90213 13.5355 6.96445C12.5978 6.02677 11.326 5.49998 9.99997 5.49998ZM9.99997 7.49998C10.3939 7.49992 10.7841 7.57745 11.1481 7.72815C11.5121 7.87886 11.8428 8.09978 12.1214 8.37831C12.4001 8.65684 12.6211 8.98752 12.7719 9.35147C12.9227 9.71542 13.0004 10.1055 13.0005 10.4995C13.0005 10.8934 12.923 11.2836 12.7723 11.6476C12.6216 12.0116 12.4007 12.3423 12.1221 12.6209C11.8436 12.8996 11.5129 13.1206 11.149 13.2714C10.785 13.4223 10.3949 13.4999 10.001 13.5C9.20532 13.5 8.44226 13.1839 7.87965 12.6213C7.31704 12.0587 7.00097 11.2956 7.00097 10.5C7.00097 9.70433 7.31704 8.94127 7.87965 8.37866C8.44226 7.81605 9.20532 7.49998 10.001 7.49998M15.251 3.99998C14.9194 3.99998 14.6015 4.13168 14.3671 4.3661C14.1327 4.60052 14.001 4.91846 14.001 5.24998C14.001 5.5815 14.1327 5.89945 14.3671 6.13387C14.6015 6.36829 14.9194 6.49998 15.251 6.49998C15.5825 6.49998 15.9004 6.36829 16.1349 6.13387C16.3693 5.89945 16.501 5.5815 16.501 5.24998C16.501 4.91846 16.3693 4.60052 16.1349 4.3661C15.9004 4.13168 15.5825 3.99998 15.251 3.99998Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0.499985C4.48 0.499985 0 4.97998 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.97998 15.52 0.499985 10 0.499985ZM14.64 7.29998C14.49 8.87998 13.84 12.72 13.51 14.49C13.37 15.24 13.09 15.49 12.83 15.52C12.25 15.57 11.81 15.14 11.25 14.77C10.37 14.19 9.87 13.83 9.02 13.27C8.03 12.62 8.67 12.26 9.24 11.68C9.39 11.53 11.95 9.19998 12 8.98998C12.0069 8.95818 12.006 8.92516 11.9973 8.89379C11.9886 8.86242 11.9724 8.83365 11.95 8.80999C11.89 8.75998 11.81 8.77998 11.74 8.78998C11.65 8.80999 10.25 9.73998 7.52 11.58C7.12 11.85 6.76 11.99 6.44 11.98C6.08 11.97 5.4 11.78 4.89 11.61C4.26 11.41 3.77 11.3 3.81 10.95C3.83 10.77 4.08 10.59 4.55 10.4C7.47 9.12998 9.41 8.28999 10.38 7.88999C13.16 6.72999 13.73 6.52998 14.11 6.52998C14.19 6.52998 14.38 6.54998 14.5 6.64998C14.6 6.72998 14.63 6.83998 14.64 6.91998C14.63 6.97998 14.65 7.15999 14.64 7.29998Z"
                                        fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8"/>
                    <span
                        className="block text-sm text-gray-500 sm:text-center font-gilroy dark:text-gray-400">© 2024 <a
                        href="/home"
                        className="hover:underline">Speak Up™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;