import {Head, Link, usePage} from "@inertiajs/react";
import {useState} from "react";


export default function Home({posts}) {
    let {nama_share} = usePage().props
    let {flash} = usePage().props
    const {component} = usePage()

    const [flashMessage, setFlashMessage] = useState(flash.message)

    setTimeout(() => {
        setFlashMessage(null)
    }, 1000)

    return (<>

        <Head title={`${component}`}/>
        <h1 className={`title`}>Home, Hallo {`${nama_share}`}</h1>
        {flashMessage && <div
            className={`absolute top-24 center bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white `}>
            {flashMessage}</div>}
        <Link href={'/posts/create'} className={`bg-green-500 rounded px-2 py-1`}>Create Post</Link>
        <div>
            {posts.data.map((post, index) => (
                <div key={index} className={`p4 border-b`}>
                    <div className={`text-gray-500 text-sm`}>
                        <span>Create at: </span>
                        <span>{new Date(post.created_at).toLocaleTimeString('en-US')}</span>

                    </div>
                    <p className={`font-medium`}>{post.body}</p>
                    <Link className={`text-link`} href={`/posts/${post.id}`}>Read more ...</Link>

                </div>


            ))}
        </div>

        <div className={`flex justify-between mt-1`}>

            <div className={`flex justify-start gap-2`}>
                {posts.links.map((link, index) => (
                    link.url ? (
                        <Link
                            href={link.url}
                            key={index}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className={`px-3 py-1 rounded ${
                                link.active
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />
                    ) : (
                        <span
                            key={index}
                            dangerouslySetInnerHTML={{__html: link.label}}
                            className={`px-3 py-1 rounded bg-gray-200 text-gray-500 cursor-not-allowed`}
                        />
                    )
                ))}
            </div>
            <div>
                from {posts.from} to {posts.to} of {posts.total}
            </div>

        </div>

    </>)
}
