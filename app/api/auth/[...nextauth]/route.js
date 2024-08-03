import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import prisma from '@lib/prisma'

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            name: 'google',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                return ({
                    id: profile.sub,
                    name: `${profile.given_name} - ${profile.family_name}`,
                    email: profile.email,
                    image: profile.picture,
                    role: profile.role ? profile.role : 'user',
                })
            }
        }),
        CredentialsProvider({}),
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token}) {
            session.user.role = token.role;
            return session;
        },
    },
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/sign-in',
        signUp: '/sign-up',
    }
})

export {handler as GET, handler as POST}