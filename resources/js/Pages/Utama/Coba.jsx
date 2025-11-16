import {useEffect, useState} from "react";
import ButtonPrimary from "@/Components/ButtonPrimary.jsx";
import {Head, usePage} from "@inertiajs/react";

export default function Coba(props) {
    const [data, setData] = useState(props.data);
    const [act, setAct] = useState(false);
    const {component} = usePage()
    const componentName = component.split('/').pop()
    const productNames = ['Buku', 'Pensil', 'Penghapus', 'Penggaris', 'Stapler', 'Calculator', 'Notebook', 'Highlighter'];

    useEffect(() => {
        console.log(data)
    }, [act])

    return <>
        <Head title={`${componentName}`}/>
        <h1 className={`title`}>Halaman Coba</h1>
        <p className={`text-xl text-center my-5 font-bold underline`}>Name {props.name}</p>
        <ul className={'mx-2'}>
            {
                data.map((item, index) => {
                    return <li key={index}>{`${item.prod_name}, ${item.prod_description} Price ${item.prod_price}`}</li>
                })
            }
        </ul>

        <ButtonPrimary type={'button'} className={'bg-green-500 ring-gray-200'}
                       onClick={() => setData([...data, {
                           prod_price: Math.floor(Math.random() * 1000),
                           prod_name: productNames[randomIndex],
                           prod_description: 'Buku Tulis'
                       }])}>Add</ButtonPrimary>

        <ButtonPrimary
            type={'button'}
            className={'bg-red-500 ring-gray-200'}
            onClick={() => setData(data.slice(0, -1))}
        >
            Del
        </ButtonPrimary>

        <ButtonPrimary
            type={'button'}
            className={`bg-${act ? 'red' : 'green'}-500 ring-gray-200`}
            onClick={() => setAct(!act)}
        >Change</ButtonPrimary>
        <p>{act ? 'True' : 'False'}</p>
    </>
}
