import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col gap-10 w-full mt-40 mb-20">
            <h1 className="flex font-gilroy-semi-bold text-4xl">Privacy Policy</h1>
            <div className="flex flex-col gap-1">
                <p className="font-gilroy-semi-bold">Effective Date: October 16th, 2020</p>
                <p className="font-gilroy-semi-bold">Site Covered: speakingclub.com</p>
            </div>
            <div className="flex flex-col w-full sm:w-2/3 gap-10">
                <p className="font-gilroy">
                    <span className="font-gilroy-semi-bold text-xl">THE AGREEMENT: </span>
                    The use of this website and services on this website provided by Speaking Club (hereinafter referred
                    to as “Company”) are subject to the following Terms & Conditions (hereinafter the “Agreement”), all
                    parts and sub-parts of which are specifically incorporated by reference here. This Agreement shall
                    govern the use of all pages on this website (hereinafter collectively referred to as “Website”) and
                    any services provided by or on this Website (“Services”).
                </p>
                <div className="flex flex-col gap-2">
                    <h2 className="font-gilroy-bold text-2xl">1) DEFINITIONS</h2>
                    <p className="font-gilroy">The parties referred to in this Agreement shall be defined as
                        follows:</p>
                    <p className="flex font-gilroy ml-4">a) Company, Us, We: The Company, as the creator, operator, and publisher of the Website, makes
                        the Website, and certain Services on it, available to users. Speaking Club, Company, Us, We,
                        Our, Ours and other first-person pronouns will refer to the Company, as well as all employees
                        and affiliates of the Company.</p>
                    <p className="flex font-gilroy ml-4">b) You, the User, the Client: You, as the user of the Website, will be referred to throughout
                        this Agreement with second-person pronouns such as You, Your, Yours, or as User or Client.</p>
                    <p className="flex font-gilroy ml-4">c) Parties: Collectively, the parties to this Agreement (the Company and You) will be referred to
                        as Parties.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-gilroy-bold text-2xl">2) ASSENT & ACCEPTANCE</h2>
                    <p className="font-gilroy">By using the Website, You warrant that You have read and reviewed this
                        Agreement and that You
                        agree to be bound by it. If You do not agree to be bound by this Agreement, please leave the
                        Website immediately. The Company only agrees to provide use of this Website and Services to You
                        if You assent to this Agreement.</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy