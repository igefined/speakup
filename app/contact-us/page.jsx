'use client';

import React, {useState} from 'react'
import Image from '@node_modules/next/image'

const initValues = {name: "", email: "", message: ""};
const initState = {isLoading: false, error: "", values: initValues};

const ContactUs = () => {
    const [state, setState] = useState(initState);

    const {values, isLoading, error} = state;
    const [isValidEmail, setValidEmail] = useState(true);
    const [isValidName, setValidName] = useState(true);
    const [isValidMessage, setValidMessage] = useState(true);

    const [btnMessage, setBtnMessage] = useState('Send');

    const handleEmailChange = (e) => {
        const enteredEmail = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                email: enteredEmail,
            },
        }));

        setValidEmail(emailRegex.test(enteredEmail));
    };

    const handleNameChange = (e) => {
        const enteredName = e.target.value;
        const nameRegex = /^[a-zA-Zа-яА-я]+(-_ [a-zA-Zа-яА-я]+)*/

        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                name: enteredName,
            },
        }));

        setValidName(nameRegex.test(enteredName));
    };

    const handleMessageChange = (e) => {
        const enteredMessage = e.target.value;
        if (enteredMessage.length <= 5) {
            setValidMessage(false);
            return
        }

        setValidMessage(true);
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                message: enteredMessage,
            },
        }));
    };

    const handleChange = ({target}) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmit = async () => {
        if (!isValidName || state.values.name.length <= 1) {
            setValidName(false);
            return
        }

        if (!isValidEmail || state.values.email.length <= 1) {
            setValidEmail(false);
            return
        }

        if (!isValidMessage || state.values.message.length <= 1) {
            setValidMessage(false);
            return
        }

        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            fetch("/api/emails", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {"Content-Type": "application/json", Accept: "application/json"},
            }).then((res) => {
                setBtnMessage('Sent')

                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                }));
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

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

                    <form className="my-0 sm:my-10 flex flex-col gap-6">
                        <input type="text" name="name" id="name"
                               className="flex w-100 font-gilroy rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:accent-primary-blue sm:text-md sm:leading-6"
                               onChange={handleNameChange}
                               placeholder="Name" required/>
                        <p hidden={isValidName}
                           className="-mt-4 font-gilroy text-sm text-red-600 dark:text-red-500"><span
                            className="font-gilroy-semi-bold">Required only letters</span></p>
                        <input type="email" name="email" id="email"
                               className="flex w-100 font-gilroy rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:accent-primary-blue sm:text-md sm:leading-6"
                               onChange={handleEmailChange}
                               placeholder="Email" required/>
                        <p hidden={isValidEmail}
                           className="-mt-4 font-gilroy text-sm text-red-600 dark:text-red-500"><span
                            className="font-gilroy-semi-bold">Should be email:</span> test@mail.com</p>
                        <textarea id="message" name="message" rows="4"
                                  className="flex p-3 w-full text-md text-gray-900 rounded-lg font-gilroy border border-gray-300 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                  onChange={handleMessageChange}
                                  placeholder="Type your message..." required></textarea>
                        <p hidden={isValidMessage} className="-mt-4 font-gilroy text-sm text-red-600 dark:text-red-500"><span
                            className="font-gilroy-semi-bold">Required message greater 5 letters</span></p>

                        <button type="button"
                                className="flex justify-center items-center w-full sm:w-48 rounded px-4 py-3 bg-primary-blue font-gilroy text-base text-white font-semibold hover:bg-primary-blue-strong"
                                disabled={isLoading}
                                onClick={onSubmit}>
                            <svg role="status"
                                 className={isLoading ? 'flex items-center justify-center w-4 h-4 me-3 text-white animate-spin' : 'hidden'}
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"/>
                            </svg>
                            {isLoading ? 'Processing...' : btnMessage}
                        </button>
                    </form>
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