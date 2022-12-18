import { Inter } from "@next/font/google";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Script from "next/script";

export default function Head() {
    return (
        <>
            <title>ZORT</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon.ico" />
       
        </>
    );
}
