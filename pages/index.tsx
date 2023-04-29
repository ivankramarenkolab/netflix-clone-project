import Head from "next/head";
import {NextPage} from "next";
import Header from "@/components/Header";

const Home: NextPage = () => {
    return (
        <div className="relative h-screen bg-gradient-to-b from-gray-950/10
        to-[#010511] lg:h-[140vh]">
            <Head>
                <title>Home Netflix</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
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
