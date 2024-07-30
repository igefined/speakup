import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {connectToDB} from '@utils/database'
import User from '@/models/User'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email:',
                    type: 'text',
                    placeholder: 'Enter your email',
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    placeholder: 'Enter your password',
                },
            },
            async authorize(credentials) {
                const user = {id: '1', email: 'ig.pomazkov@gmail.com', password: '123456'};

                if (credentials?.email === user.email && credentials.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({session}) {
            const sessionUser = await User.findOne({email: session.user.email})

            session.user.id = sessionUser._id.toString()

            return session
        },
        async signIn({profile}) {
            try {
                await connectToDB();

                const isUserExists = await User.findOne({email: profile.email})
                if (!isUserExists) {
                    await User.create({
                        email: profile.email,
                        name: profile.name,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.image,
                    })
                }

                return true
            } catch (e) {
                console.log(e)
                return false
            }
        },
    },
})

export {handler as GET, handler as POST};