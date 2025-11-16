import {Head, useForm, usePage} from "@inertiajs/react";
import {useState} from "react";

export default function Create() {
    const {data, setData, post, errors, processing} = useForm({
        body: '',
    });

    let [data1, setData1] = useState(0)

    setTimeout(() => {
        setData1(data1 + 1)
    }, 1000)

    function doSubmit(e) {
        e.preventDefault();
        post('/posts');
    }

    const {component} = usePage()
    const componentName = component.split('/').pop()

    return (
        <>

            <Head title={`${componentName}`}/>
            <h1 className={`title`}>Create</h1>
            <span>{data.body}</span>

            <form onSubmit={doSubmit}>
                <textarea className={`${errors.body ? 'ring-red-500' : ''}`} name="body" id="body" cols="30" rows="10"
                          value={data.body}
                          onChange={(e) => setData("body", e.target.value)}></textarea>

                {errors.body && <span className={`text-red-500`}>{errors.body}</span>}
                <button className={`primary-btn mt-1`}>Create Post</button>
            </form>
        </>
    )
}
