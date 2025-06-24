import NavBar from "@/components/nav-bar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar>sample</NavBar>
            {children}
        </>
    );
}
