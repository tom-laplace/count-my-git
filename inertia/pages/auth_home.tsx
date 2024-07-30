import { GithubToken } from "@adonisjs/ally/types";
import { Head } from "@inertiajs/react";

export default function AuthHome(props: {
    user: {
        token: GithubToken;
        id: any;
        nickName: any;
        email: any;
        emailVerificationState: "verified" | "unverified" | "unsupported";
        name: any;
        avatarUrl: any;
        original: any;
    }
}) {
    return (
        <>
            <Head title="Authenticated Homepage" />

            <div className='flex-col'>
                <div className='text-center my-36'>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                        Welcome {props.user.nickName}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        You are now authenticated with Github.
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={props.user.avatarUrl} alt={props.user.nickName} className='h-20 w-20 rounded-full' />
                </div>
            </div>
        </>
    )
}