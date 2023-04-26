import Image from 'next/image'
import {Inter} from 'next/font/google'
import Head from "next/head";
import {NextPage} from "next";

const inter = Inter({subsets: ['latin']})

const Home: NextPage = () => {
    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <Head>
                <title>Home Netflix</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/* Header */}
            <main>
                {/* Banner */}
                <section>
                    {/* Row */}
                    {/* Row */}
                    {/* Row */}
                    {/* Row */}
                </section>
            </main>
            {/* Modal */}
        </div>
    )
}

export default Home
