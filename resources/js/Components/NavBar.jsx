import LinkNav from "./LinkNav.jsx";

export default function NavBar() {
    let navChildren = [
        {href: '/', name: 'Home'},
        {href: '/posts/create', name: 'Create'},
        {href: '/coba', name: 'Coba'},
    ];

    return (
        <nav>
            {navChildren.map((item, index) => {
                //return <Link className={`nav-link`} key={index} href={item.href}>{item.name}</Link>
                return <LinkNav key={index} href={item.href}>{item.name}</LinkNav>
            })}
        </nav>
    )
}
