import {Head, useForm} from "@inertiajs/react";

export default function Show({post}) {
    const handleBack = () => {
        // Kembali ke halaman sebelumnya dengan history
        window.history.back();
    };
    //console.log(post)

    const {delete: destroy} = useForm()

    function doDelete(e) {
        console.log(e)
        e.preventDefault()
        destroy(`/posts/${post.id}`)
    }

    return (
        <>
            <Head title={`Show Post ${post.id}`}/>
            <h1 className={`title`}>Show</h1>
            <p>ID: {post.id}, {new Date(post.created_at).toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            })}, {new Date(post.created_at).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })}</p>
            <p>{post.body}</p>
            {/*<Link*/}
            {/*    preserveState={true}*/}
            {/*    preserveScroll={true}*/}
            {/*    href={'/'} className={`bg-green-500 rounded px-2 py-1`}>Back</Link>*/}

            <div className={`flex justify-start mt-1 gap-2`}>
                <button
                    onClick={handleBack}
                    className={`bg-green-500 rounded px-2 py-1`}
                >
                    Back
                </button>

                <div>
                    <form onSubmit={doDelete}>
                        <button className={`bg-red-500 rounded text-white p-1`}>Delete</button>
                    </form>
                </div>

            </div>

        </>
    )
}
