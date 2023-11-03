import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Dashboard from "./Dashboard";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    const loginWithMagicLink = async () => {

        const { error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                // set this to false if you do not want the user to be automatically signed up
                shouldCreateUser: true,
              },
        });

        if (error) {
            console.log(error);
            return;
        }

    }

    if (!session) {
        return (
            <div>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Login
                                </h1>

                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <button className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={loginWithMagicLink}>Login with Magic Link</button>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <Dashboard/>
        </div>
    );
}

export default Auth