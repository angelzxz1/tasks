import { LoginForm } from "@/components/login-form";

export default function Login() {
    return (
        <section className="flex-1 flex justify-center items-center">
            <div className="border rounded-xl p-4 w-full max-w-2xl h-4/5 flex">
                <div className="w-2/5 border-r py-2 px-4">
                    Contenido a cambiar
                </div>
                <div className="w-3/5 py-2 px-4">
                    <LoginForm />
                </div>
            </div>
        </section>
    );
}
