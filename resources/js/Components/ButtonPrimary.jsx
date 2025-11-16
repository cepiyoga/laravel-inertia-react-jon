export default function ButtonPrimary({type, className, children, onClick}) {
    return <button type={type} className={`${className} px-1 m-1 rounded hover:text-white`}
                   onClick={onClick}>{children}</button>
}
