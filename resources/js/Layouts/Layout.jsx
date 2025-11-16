import NavBar from "../Components/NavBar.jsx";

export default function Layout({children}) {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
        </>
    )
};
