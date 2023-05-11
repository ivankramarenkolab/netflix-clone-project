import Head from "next/head";

const Login = () => {
    return (
        <div className="relative flex h-screen w-screen flex-col
        md:items-center md:justify-center">
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <img
                src="https://rb.gy/p2hphi"
                className="-z-10 !hidden opacity-60 sm:!inline w-full h-full object-cover"
            />
        </div>
    );
};

export default Login;