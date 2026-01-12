import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RccgLogo from "../assets/logo.png";
import PastoreAdeboyeImg from "../assets/pastor-adeboye.webp";
import { toast } from "sonner";
import { FormEvent, useState } from "react";

const Convert = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = async (formData: FormData): Promise<void> => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simulate randomization of success/failure if needed, but for now just success
        console.log("Form Data Submitted:", Object.fromEntries(formData));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            await submitForm(formData);
            toast.success("Form submitted successfully!", {
                description: "Thank you for completing the form.",
            });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            toast.error("Submission failed", {
                description: "Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-screen relative flex items-center justify-center font-sans overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${PastoreAdeboyeImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Sepia/Warm styling overlay to match screenshot */}
                <div className="absolute inset-0 bg-[#5c5446]/40 mix-blend-multiply"></div>
            </div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row min-h-[500px] md:min-h-[550px] m-2 md:m-4">

                {/* Left Side - Artistic Message */}
                <div className="w-full md:w-1/2 bg-[#FFFDF5] relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">

                    {/* Clouds Illustration (CSS Approximation) */}
                    <div className="absolute top-0 left-0 right-0 h-32 md:h-40">
                        <svg viewBox="0 0 500 150" className="w-full h-full text-[#AABEC3] fill-current opacity-20 transform scale-150">
                            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: '#9BB8C5' }}></path>
                        </svg>
                        {/* More explicit cloud shapes can be added here or via an image if available */}
                    </div>

                    <div className="relative z-10 text-center space-y-4 md:space-y-6 max-w-md mx-auto my-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-in text-black leading-tight text-center font-handwriting" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                            THANK YOU FOR <br />
                            ACCEPTING JESUS <br />
                            AS YOUR LORD AND <br />
                            PERSONAL SAVIOUR, <br />
                            KINDLY COMPLETE <br />
                            THIS FORM.
                        </h1>
                    </div>

                    {/* Hills Illustration (CSS Approximation) */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 w-full z-0">
                        {/* Back hill */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#8FA88F] rounded-t-[100%] transform scale-x-150 translate-y-8 border-t-2 border-black/80"></div>
                        {/* Front hill */}
                        <div className="absolute bottom-0 left-[-20%] right-[-20%] h-16 bg-[#8FA88F] rounded-t-[100%] transform translate-y-3 border-t-2 border-black/80"></div>

                        {/* Dashes */}
                        <div className="absolute bottom-6 left-1/4 flex space-x-1 text-black font-bold text-xl z-10 transform -rotate-6">
                            <span>/</span><span>/</span><span>/</span><span>/</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-md">
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-md overflow-hidden relative z-10">
                                <img src={RccgLogo} alt="RCCG Logo" className="w-full h-full object-contain" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-center text-[#7a8699] mb-6 uppercase tracking-wide font-sans mt-2">
                            New Convert <br /> Form
                        </h2>

                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                required
                                className="h-12 border-gray-100 hover:border-gray-200 focus:border-gray-300 focus:ring-0 bg-white text-base text-gray-700 placeholder:text-gray-300 rounded-md shadow-sm"
                            />

                            <Input
                                type="tel"
                                name="phone_number"
                                placeholder="Phone Number"
                                required
                                className="h-12 border-gray-100 hover:border-gray-200 focus:border-gray-300 focus:ring-0 bg-white text-base text-gray-700 placeholder:text-gray-300 rounded-md shadow-sm"
                            />

                            <Input
                                type="text"
                                name="address"
                                placeholder="Home Address"
                                required
                                className="h-12 border-gray-100 hover:border-gray-200 focus:border-gray-300 focus:ring-0 bg-white text-base text-gray-700 placeholder:text-gray-300 rounded-md shadow-sm"
                            />

                            <Input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="h-12 border-gray-100 hover:border-gray-200 focus:border-gray-300 focus:ring-0 bg-white text-base text-gray-700 placeholder:text-gray-300 rounded-md shadow-sm"
                            />

                            <Textarea
                                name="prayer"
                                placeholder="Prayer Points"
                                required
                                className="min-h-[80px] border-gray-100 hover:border-gray-200 focus:border-gray-300 focus:ring-0 bg-white text-base text-gray-700 placeholder:text-gray-300 rounded-md shadow-sm resize-none pt-3"
                            />

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-[#1e2080] hover:bg-[#151655] text-white font-semibold text-lg rounded-md shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Convert;
