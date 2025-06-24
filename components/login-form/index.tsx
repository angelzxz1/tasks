"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

export function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col h-full justify-evenly"
            >
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Welcome to Tasks!
                </h1>
                <h2 className="text-sm text-neutral-500 mb-6 text-center">
                    Create and assign the tasks for you to complete your
                    archievements.
                </h2>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Email"
                                    {...field}
                                    type="email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Password"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="w-full">
                    <Button
                        type="submit"
                        className="w-full rounded-full cursor-pointer"
                    >
                        Submit
                    </Button>
                </div>
                <div className="w-full flex justify-center">
                    <p className="text-sm text-muted-foreground text-center">
                        Don&apos;t have an account?{"  "}
                        <Link
                            href="/register"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Register!
                        </Link>
                    </p>
                </div>
            </form>
        </Form>
    );
}
