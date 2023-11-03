import React from 'react'
import { Route } from "react-router-dom";
import { supabase } from "./supabaseClient";

const Home = () => {

    const signOut = async () => {

        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log(error);
            return;
        }

        console.log("logout")
    }
  return (
    <Route path="/Home">
        <button className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={signOut}>signOut</button>
    </Route>
  )
}

export default Home