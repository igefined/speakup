import React from 'react';
import Carousel from '@components/Carousel';
import '@styles/carousel.css';
import Image from 'next/image'

const comments = [
    {
        id: 1,
        text: '"Being part of this club has transformed my English! I\'ve gained confidence and made friends from all over. It\'s both fun and educational"',
        author: {
            name: 'Alexa Shestakova',
            position: 'Customer Service Representative',
            img: '/assets/img/commentator1.png'
        },
        stars: 5
    },
    {
        id: 2,
        text: '"I love this speaking club! The sessions are engaging and I\'ve improved my English a lot. Plus, the community is so friendly and supportive."',
        author: {
            name: 'Igor Pomazkov',
            position: 'Software Engineer',
            img: '/assets/img/commentator2.png'
        },
        stars: 5
    },
]

const OPTIONS = {dragFree: true, loop: true}
const SLIDES = [
    {
        index: 1,
        text: 'Join the English Learning Community',
        description: 'Connect with others and practice your English skills',
    },
    {
        index: 2,
        text: 'Discuss our Hot Topics Daily!',
        description: 'Dive into engaging conversations on a wide range of prepared questions, from current events to personal interests, in a lively English-speaking environment.',
    },
    {
        index: 3,
        text: 'Expand Your Cultural Horizons!',
        description: 'Explore diverse cultures and perspectives through daily English conversations with people from around the world.',
    }
]

const posts = [
    {
        id: 1,
        title: 'IELTS Preparation',
        description:
            'Dive into focused sessions designed to equip you with the necessary skills and strategies to excel in the IELTS exam. Maximize your score and achieve your desired band level.',
        datetime: '2020-03-16',
        img: '/assets/img/dml1.png',
        href: '#'
    },
    {
        id: 2,
        title: 'Job Interview',
        description:
            'Prepare for success in your next job interview with tailored sessions that simulate real-life interview scenarios. Gain confidence to articulate your experiences impressively to potential employers.',
        img: '/assets/img/dml2.png',
        href: '#'
    },
    {
        id: 3,
        title: 'Group Discussion',
        description:
            'Engage in dynamic group discussions aimed at enhancing your communication and critical thinking skills. Explore diverse topics, express your opinions, and learn to navigate conversations effectively.',
        img: '/assets/img/dml3.png',
        href: '#'
    },
]

const getStars = (starsLen) => {
    let content = [];
    for (let i = 0; i < starsLen; i++) {
        content.push(
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.071 0.640664C9.41474 -0.175795 10.5855 -0.175794 10.9292 0.640666L12.958 5.45955C13.103 5.80375 13.4307 6.03893 13.8068 6.06872L19.0728 6.4858C19.965 6.55646 20.3268 7.65645 19.647 8.23172L15.6349 11.627C15.3483 11.8695 15.2231 12.2501 15.3107 12.6127L16.5365 17.6893C16.7441 18.5494 15.797 19.2293 15.0331 18.7684L10.5247 16.0479C10.2026 15.8535 9.79762 15.8535 9.4756 16.0479L4.96711 18.7684C4.20323 19.2293 3.25608 18.5494 3.46376 17.6893L4.68954 12.6127C4.7771 12.2501 4.65194 11.8695 4.36538 11.627L0.353184 8.23172C-0.326596 7.65645 0.0351899 6.55646 0.927413 6.4858L6.19348 6.06872C6.56962 6.03893 6.89728 5.80375 7.04219 5.45955L9.071 0.640664Z"
                    fill="#FFC107"/>
            </svg>
        );
    }
    return content;
};

const Home = () => {
    // @ts-ignore
    return (
        <div>
            <div className="relative isolate">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:gap-0 gap-20 mb-20 sm:mb-10">
                    <div className="flex mt-0 sm:mt-20 lg:pt-52 md:pt-52 md:h-500 sm:pt-40 pt-40">
                        <div className="lg:text-left sm:text-center text-center">
                            <h1 className="text-4xl font-gilroy-semi-bold tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
                                Build bridges, <br/>
                                broaden horizons - <br/>
                                <span className="talk-learn-grow">talk, learn, grow!</span> 🚀
                            </h1>
                            <p className="mt-8 font-gilroy sm:text-lg text-balance leading-1 text-gray-600">
                                The Speaking Club is the best way to <span className="text-black font-gilroy-semi-bold">Practice Speaking in English</span> and
                                other languages
                                <span className="text-black font-gilroy-semi-bold"> Online</span> in
                                a real life setting. Structured conversation groups with incredible hosts.
                            </p>
                            <div className="mt-10 flex items-center lg:justify-start justify-center gap-x-6">
                                <button
                                    className="rounded bg-primary-blue font-gilroy px-3.5 py-2.5 text-base text-white shadow-sm hover:bg-primary-blue-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Get started
                                </button>
                                <button
                                    className="rounded border px-3.5 py-2.5 border-primary-blue-strong font-gilroy text-base text-primary-blue font-semibold hover:bg-primary-blue-weak">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="carousel sm:flex hidden sm:items-center sm:justify-center lg:justify-start xl:w-auto sm:pt-40 sm:pb-20 sm:max-w-4xl">
                        <Carousel slides={SLIDES} options={OPTIONS}/>
                    </div>
                </div>
            </div>
            <div className="mb-20 sm:mb-40">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold font-gilroy-semi-bold text-gray-900 sm:text-4xl">Dynamic
                            Meeting
                            Lineup</h2>
                    </div>
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex  max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4">
                                    <Image width="400" height="250" src={post.img} alt=""/>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-6 text-2xl font-gilroy-semi-bold text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0"/>
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 line-clamp-3 font-gilroy text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <a className="mt-5 font-gilroy-semi-bold text-primary-blue hover:text-primary-blue-strong flex"
                                   href={post.href}>
                                    Try session <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.70697 16.9777L15.414 11.2707L9.70697 5.56372L8.29297 6.97772L12.586 11.2707L8.29297 15.5637L9.70697 16.9777Z"
                                        fill="#0F35D6"/>
                                </svg>
                                </a>
                            </article>

                        ))}
                    </div>
                </div>
            </div>
            <div className="banner md:container md:mx-auto bg-primary-blue rounded-3xl sm:mb-40 mb-20 p-10">
                <h1 className="text-white text-4xl font-gilroy-semi-bold mb-4">Subscribe Now!</h1>
                <p className="text-white font-gilroy">Unlock exclusive access to our latest updates and special
                    offers</p>
            </div>
            <div className="mb-40">
                <div className="mx-auto grid max-w-1xl grid-cols-1 items-center gap-x-20 lg:max-w-1xl lg:grid-cols-2">
                    <div>
                        <h2 className="text-5xl font-bold font-gilroy-semi-bold tracking-tight sm:text-5xl">
                            Meet people from <br/><span className="text-primary-blue">all over the world!</span>
                        </h2>
                        <p className="mt-4 text-gray-500 font-gilroy">Meet, speak, connect! Join our sessions to
                            converse with people worldwide. Our hosts handle arrangements, offer new topics, and
                            facilitate one-on-one discussions with multiple partners. Enhance your language skills with
                            ease!</p>

                        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="text-md font-gilroy-semi-bold">Host will arrange everything</dd>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="text-md font-gilroy-semi-bold">One on one conversation</dd>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="text-md font-gilroy-semi-bold">New topics every meeting</dd>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="mt-2 text-md font-gilroy-semi-bold">Multiple partners</dd>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <button
                                    className="hidden sm:flex rounded px-6 py-2.5 bg-primary-blue font-gilroy text-base text-white hover:bg-primary-blue-strong mb-4">
                                    Start conversation
                                </button>
                            </div>
                        </dl>
                    </div>
                    <div className="grid">
                        <Image width="800" height="100" src="/assets/img/boys.png" alt="Speak Up"
                               className="rounded-3xl bg-gray-100"/>
                    </div>
                </div>
            </div>
            <div className="sm:mb-40 mb-20">
                <div
                    className="-mt-20 sm:mt-0 mx-auto grid max-w-1xl grid-cols-1 items-center gap-x-20 lg:max-w-1xl lg:grid-cols-2">
                    <div className="flex mb-10">
                        <Image width="800" height="100" src="/assets/img/bwoman.png" alt="Speak Up"
                               className="rounded-3xl bg-gray-100"/>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold font-gilroy-semi-bold tracking-tight sm:text-5xl mt-4">
                            Find practice partners
                        </h2>
                        <p className="mt-4 text-gray-500 font-gilroy">
                            Your social hub for linguistic growth. Discover practice partners effortlessly with our
                            intuitive search form. Expand your network by adding friends, and communicate seamlessly
                            through messaging. Rate your partners and elevate your language journey with us!
                        </p>

                        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="text-md font-gilroy-semi-bold">Find a partner search form</dd>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="text-md font-gilroy-semi-bold">Add friends</dd>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="text-md font-gilroy-semi-bold">Messaging</dd>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.05611 10.6432C4.12688 10.2617 5.25367 9.75462 6.12259 9.02046C7.15459 8.14846 7.5743 7.02541 7.85614 5.84326C8.21799 4.32449 8.36257 2.70662 8.80134 1.18539C8.9638 0.620468 9.27645 0.406925 9.41061 0.312156C9.74968 0.0727715 10.0924 0.00878412 10.4149 0.0327841C10.797 0.0604764 11.322 0.205082 11.6672 0.845697C11.7164 0.93739 11.7804 1.07709 11.8235 1.26847C11.8549 1.40878 11.8752 1.84754 11.9084 2.02846C11.9915 2.474 12.061 2.91956 12.1263 3.36756C12.3435 4.85863 12.4684 6.12508 13.1546 7.49492C14.0857 9.35462 15.0186 10.4925 16.2838 10.9965C17.5072 11.4838 18.97 11.3922 20.8389 11.01C21.0167 10.9669 21.1927 10.93 21.3669 10.8999C22.1909 10.7559 22.9786 11.2968 23.1404 12.1177C23.3023 12.938 22.7786 13.7374 21.962 13.9177C21.7915 13.9552 21.6235 13.9909 21.4574 14.0235C18.9318 14.6488 16.0081 16.8802 14.309 18.834C13.7853 19.4365 13.0186 21.1208 12.2364 22.1952C11.6592 22.9878 11.0106 23.5103 10.466 23.6949C10.101 23.8192 9.79336 23.8002 9.53921 23.7374C9.16998 23.6463 8.86353 23.4463 8.62845 23.1282C8.50045 22.954 8.38166 22.7208 8.32504 22.4229C8.29797 22.2795 8.29491 21.9153 8.29552 21.7503C8.13614 21.202 7.94106 20.6666 7.7989 20.1134C7.45982 18.7934 6.79458 17.9577 6.00443 16.8537C5.26535 15.8205 4.47153 15.1712 3.30784 14.6531C3.15646 14.6162 1.93491 14.3171 1.50353 14.1454C0.873376 13.8937 0.573052 13.4722 0.464129 13.2451C0.278898 12.8598 0.259838 12.5232 0.296761 12.2426C0.35153 11.8285 0.537378 11.474 0.867224 11.1879C1.07153 11.01 1.37677 10.8371 1.78538 10.7528C2.10107 10.6869 2.93858 10.6488 3.05611 10.6432ZM10.2223 8.49184C10.2789 8.618 10.3392 8.74478 10.4032 8.87278C11.7669 11.5965 13.2918 13.1171 15.1454 13.8549L15.2075 13.8789C13.9675 14.7996 12.845 15.8285 11.9872 16.8149C11.634 17.2211 11.1663 18.0648 10.6611 18.93C10.202 17.4377 9.45121 16.3829 8.50721 15.0629C7.78598 14.0556 7.03029 13.2974 6.10167 12.6796C6.82229 12.3097 7.50967 11.8765 8.10843 11.3706C9.10536 10.5282 9.76443 9.55215 10.2223 8.49184Z"
                                          fill="#0F35D6"/>
                                </svg>
                                <dd className="mt-2 text-md font-gilroy-semi-bold">Rate your partners</dd>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <button
                                    className="hidden sm:flex rounded px-6 py-2.5 bg-primary-blue font-gilroy text-base text-white hover:bg-primary-blue-strong mb-4">
                                    Try now
                                </button>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="mb-20 sm:mb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-4xl font-gilroy-semi-bold tracking-tight text-gray-900 sm:text-4xl">
                            What Our Customers Say
                        </p>
                    </div>
                    <div className="max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                        <dl className="grid max-w-xl gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {comments.map((feature) => (
                                <div key={feature.id} className="flex flex-col justify-self-stretch">
                                    <div className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="flex justify-center p-4 gap-2">
                                            {getStars(feature.stars)}
                                        </div>
                                        <div
                                            className="flex justify-center items-center mt-2 text-base font-gilroy-medium-italic text-center mb-4">{feature.text}</div>
                                        <div className="flex flex-row justify-center">
                                            <Image width="50" height="50" alt="Speak Up" src={feature.author.img}
                                                   className="flex h-8 w-8 rounded-full ring-white mr-4 mt-6"/>
                                            <div className="mt-6 flex flex-col font-gilroy items-start text-sm">
                                                <p>{feature.author.name}</p>
                                                <p className="text-gray-500">{feature.author.position}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="sm:mb-40 mb-20 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-extrabold font-gilroy-semi-bold sm:text-5xl">
                            Find a Plan That’s Right For You
                        </h2>
                        <div className="arrow-container">
                            <svg width="228" height="131" viewBox="0 0 228 131" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M310.123 57.7758C297.161 25.6124 289.889 8.81035 255.946 19.0945C238.942 24.2466 232.759 32.9355 233.988 48.9059C234.805 59.5225 250.695 55.9008 249.856 45.0062C248.762 30.7896 241.986 17.3668 229.586 9.22044C200.627 -9.80418 157.115 17.6915 138.896 38.8169C131.657 47.2106 131.205 69.2569 145.848 59.1124C156.19 51.9478 148.203 33.9463 140.755 27.961C107.017 0.847659 71.5615 35.6929 50.5565 60.0492C43.4985 68.2332 29.766 86.8332 27.6568 97.0749C25.9472 105.376 6.2087 79.9335 17.5619 92.3467C24.1318 99.53 36.9936 109.727 47.3757 110.138C52.3836 110.337 25.2736 118.618 21.2475 120.779C14.4923 124.406 -1.01971 134.002 3.25019 124.248C6.78553 116.172 11.7587 102.531 11.1161 94.182"
                                    stroke="#0F35D6" strokeWidth="4" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div
                            className="group border rounded-3xl shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:bg-primary-blue hover:text-white">
                            <div className="my-8">
                                <h3 className="text-2xl font-gilroy-semi-bold">FREE</h3>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-gilroy-semi-bold">$0</span>
                                <span className="text-sm font-gilroy-semi-bold">/mo</span>
                            </div>
                            <button
                                className="rounded border px-4 py-2.5 border-primary-blue-strong font-gilroy text-base text-primary-blue font-semibold hover:bg-primary-blue-weak mb-10 group-hover:bg-white">
                                Get Started
                            </button>
                            <ul className="border-t mb-8 space-y-4 text-gray-400 py-10">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">1 user account</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span
                                        className="group-hover:text-white font-gilroy">10 transactions per month</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">Basic support</span>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="group border rounded-3xl shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:bg-primary-blue hover:text-white">
                            <div className="my-8">
                                <h3 className="text-2xl font-gilroy-semi-bold">1 MONTH</h3>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-gilroy-semi-bold">$12</span>
                                <span className="text-sm font-gilroy-semi-bold">/mo</span>
                            </div>
                            <button
                                className="rounded border px-4 py-2.5 border-primary-blue-strong font-gilroy text-base text-primary-blue font-semibold hover:bg-primary-blue-weak mb-10 group-hover:bg-white">
                                Get Started
                            </button>
                            <ul className="border-t mb-8 space-y-4 text-gray-400 py-10">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">1 user account</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span
                                        className="group-hover:text-white font-gilroy">10 transactions per month</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">Basic support</span>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="group border rounded-3xl shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:bg-primary-blue hover:text-white">
                            <div className="my-8">
                                <h3 className="text-2xl font-gilroy-semi-bold">3 MONTH</h3>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-gilroy-semi-bold">$32</span>
                                <span className="text-sm font-gilroy-semi-bold">/mo</span>
                            </div>
                            <button
                                className="rounded border px-4 py-2.5 border-primary-blue-strong font-gilroy text-base text-primary-blue font-semibold hover:bg-primary-blue-weak mb-10 group-hover:bg-white">
                                Get Started
                            </button>
                            <ul className="border-t mb-8 space-y-4 text-gray-400 py-10">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">1 user account</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span
                                        className="group-hover:text-white font-gilroy">10 transactions per month</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">Basic support</span>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="group border rounded-3xl shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:bg-primary-blue hover:text-white">
                            <div className="my-8">
                                <h3 className="text-2xl font-gilroy-semi-bold">6 MONTH</h3>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-gilroy-semi-bold">$59</span>
                                <span className="text-sm font-gilroy-semi-bold">/mo</span>
                            </div>
                            <button
                                className="rounded border px-4 py-2.5 border-primary-blue-strong font-gilroy text-base text-primary-blue font-semibold hover:bg-primary-blue-weak mb-10 group-hover:bg-white">
                                Get Started
                            </button>
                            <ul className="border-t mb-8 space-y-4 text-gray-400 py-10">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">1 user account</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span
                                        className="group-hover:text-white font-gilroy">10 transactions per month</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="group-hover:text-white font-gilroy">Basic support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10">
                <div className="mx-auto grid max-w-1xl grid-cols-1 items-center gap-x-20 lg:max-w-1xl lg:grid-cols-2">
                    <div>
                        <h2 className="text-5xl font-bold font-gilroy-semi-bold tracking-tight sm:text-5xl">
                            Empower Your
                            <br/>
                            Language Journey!
                        </h2>
                        <p className="mt-4 text-gray-500 font-gilroy">Dive into our immersive platform and join a
                            vibrant community
                            of learners. Start now and elevate your skills to new heights!</p>
                        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex items-center gap-2">
                                <button
                                    className="sm:flex rounded px-6 py-3 bg-primary-blue font-gilroy text-base text-white hover:bg-primary-blue-strong mb-4">
                                    Start Now
                                </button>
                            </div>
                        </dl>
                    </div>
                    <div className="sm:flex hidden">
                        <Image width="800" height="100" src="/assets/img/pexels-alexander-suhorucov-6457552.png"
                               alt="Speak Up"
                               className="rounded-3xl bg-gray-100"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;