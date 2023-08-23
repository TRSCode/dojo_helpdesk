import Link from "next/link";

export default function AuthLayout({ children }) {
    return (
        <>
            <nav>
                <h1>Dojo Helpdesk</h1>
                <Link href="/signup">Sign Up</Link>
                <Link href="/log in">Login</Link>
            </nav>
            {children}
        </>
    )
}
