import {Link, usePage} from "@inertiajs/react";

export default function LinkNav({href, children}) {
    let active = usePage().url === href


    const {component} = usePage()
    return (
        <Link href={href}
              className={`${active ? 'text-yellow-500 bg-gray-600' : 'text-gray-200'} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
            {children}
        </Link>
    )
}
