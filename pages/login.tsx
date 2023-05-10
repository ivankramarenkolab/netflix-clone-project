import Head from "next/head";
import Image from "next/image";

const Login = () => {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center
        md:justify-center md:bg-transparent">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Image
                src='/images/banner-login.jpg'
                layout='fill'
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
            />
        </div>
    );
};

export default Login;