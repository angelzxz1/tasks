import { ModeToggle } from "./toggle-button";

export default function NavBar({ children }: { children?: React.ReactNode }) {
    return (
        <nav className="flex items-center justify-center p-2 bg-neutral-800/10 w-full border-b border-neutral-800/20 backdrop-blur-md dark:bg-neutral-500/10 dark:border-neutral-500/10">
            <div className="lg:w-3/4 w-full flex items-center justify-between">
                <section className="w-1/4 flex ">
                    <div>a</div>
                </section>
                <section className="w-2/4 justify-evenly flex">
                    {children}
                </section>
                <section className="w-1/4 flex items-center justify-end-safe">
                    <ModeToggle />
                </section>
            </div>
        </nav>
    );
}
