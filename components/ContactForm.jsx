'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zSchema } from "@/lib/zodSchema"
import { toast } from "react-toastify"
import { useState } from "react"
import axios from "axios"
import ButtonLoader from "./ButtonLoader"
import ServiceCategory from "@/lib/ServiceCategory"

export default function ContactSection() {
    const [loading, setloading] = useState(false)
    const formSchema = zSchema.pick({
        email: true,
        name: true,
        message: true,
        category: true,

    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            category: "",
        },
    })

    const onSubmit = async (values) => {
        try {
            setloading(true)
            const { data: ResponseSend } = await axios.post('/api/sendMail', values)
            if (!ResponseSend.success) {
                toast.error(ResponseSend.message)
            }
            if (ResponseSend.success) {
                form.reset()
                toast.success(ResponseSend.message)
            }
        } catch (error) {
            toast.error(error)
        } finally {
            setloading(false)
        }

    }

    return (
        <section className=" relative z-10 text-white pb-10 md:pb-0 md:mb-10 md:py-24  md:px-12">
            <div className=" flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Side - Heading */}
                <div className="flex-1 flex flex-col mb-10 md:mb-0 relative md:bottom-12 items-center text-center md:text-left">

                    <h2 className="text-white text-[10rem] md:text-[180px] font-extrabold leading-tight ">Let's</h2>
                    <h2 className="text-orange-500 text-[9rem] absolute top-24 md:top-28 md:text-[180px] font-extrabold leading-tight">Talk!</h2>

                </div>

                {/* Right Side - Contact Form */}
                <div className="flex-1 w-full">
                    <Card className="bg-slate-500/10 border md:w-[45vw] border-white/10 backdrop-blur-md shadow-xl rounded-4xl">

                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-5"
                                >
                                    {/* Name Field */}
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300 text-lg font-bold">Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your name..."
                                                        className="bg-[#1b1b1b]  h-14 text-xl! font-medium! placeholder:text-lg border-white/10 rounded-3xl focus:shadow-md focus:shadow-orange-500 text-white placeholder-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Email Field */}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300 text-lg font-bold">Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your email..."
                                                        type="email"
                                                        className="bg-[#1b1b1b]  h-14 text-xl! font-medium! placeholder:text-lg border-white/10 rounded-3xl focus:shadow-md focus:shadow-orange-500 text-white placeholder-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* ServiceCategory */}
                                    <FormField
                                        control={form.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300 text-lg font-bold">
                                                    Service Category
                                                </FormLabel>
                                                <FormControl>
                                                    <select
                                                        {...field}
                                                        className="bg-[#1b1b1b] h-14  w-full rounded-3xl text-gray-400 px-4 focus:outline-none border border-white/10"
                                                    >
                                                        <option className="text-xl text-orange-500 font-bold" value="">Which service are you interested in?</option>
                                                        {ServiceCategory.map((el) => (
                                                            <option className="" value={el.value} key={el.id}>
                                                                {el.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Message Field */}
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300 text-lg font-bold">Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        rows={8}
                                                        placeholder="Write your message..."
                                                        className="bg-[#1b1b1b]  h-28 text-xl! font-medium! placeholder:text-lg border-white/10 rounded-3xl focus:shadow-md focus:shadow-orange-500 text-white placeholder-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Submit Button */}
                                    <ButtonLoader
                                        type={'submit'} text={'Submit'} loading={loading}
                                        className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-black font-semibold text-lg py-6 rounded-xl transition-all"
                                    />

                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
