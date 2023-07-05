import { getUserData, login } from "@/infra/requests";
import { USER_DATA_URL } from "@/infra/urls";
import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { use } from "react";

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Insert username..." },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log('inside authorize', credentials)
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                try {
                
                    //send request to get tokens
                    const tokens = await login(credentials.username, credentials.password)
                    const response = await axios.get(USER_DATA_URL, {
                        headers: {Authorization: `Bearer ${tokens['access']}`}
                    })
                    // localStorage.setItem('token', tokens.access)

                    //send request to get user data
                    // const userData = await getUserData()
                    console.log('returning userData', response.data)
                    return response.data;

                } catch (error) {
                    console.error(error)
                    // Return null if user data could not be retrieved
                    return null
                }
              }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log('inside signIn', user, account, profile, email, credentials)
            return true
          },
          async redirect({ url, baseUrl }) {
            console.log('inside redirect', url, baseUrl)
            return baseUrl
          },
          async session({ session, user, token }) {
            console.log('inside session', session, user, token)
            // Send properties to the client from a provider
            session.first_name = token.first_name
            session.last_name = token.last_name
            return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            console.log('inside jwt\n', 'token:',token, '\nuser:',user, '\naccount:', account, isNewUser)
            // Persist the data to the token right after signin
            if (account) {
                token.first_name = user.first_name
                token.last_name = user.last_name
            }
            return token
          }
      },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }