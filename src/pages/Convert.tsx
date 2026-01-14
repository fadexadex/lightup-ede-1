import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RccgLogo from "../assets/logo.png";
import PastoreAdeboyeImg from "../assets/pastor-adeboye.webp";
import { toast } from "sonner";
import { FormEvent, useState } from "react";

const Convert = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // checking
    const submitForm = async (formData: FormData): Promise<void> => {
        const data = new URLSearchParams();
        formData.forEach((value, key) => {
            data.append(key, value.toString());
        });

        const response = await fetch("/api/convert/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
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
        <div className="min-h-screen relative flex items-center justify-center font-sans overflow-y-auto py-8 px-4">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 h-full w-full fixed"
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
            <div className="relative z-10 w-full max-w-4xl bg-white shadow-3xl rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] md:min-h-[550px]">

                {/* Left Side - Artistic Message */}
                <div className="w-full md:w-1/2 bg-[#FFFDF5] relative flex flex-col items-center justify-center p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 min-h-[320px] md:min-h-full">

                    {/* Clouds Illustration (CSS Approximation) */}
                    <div className="absolute top-0 left-0 right-0 h-32 md:h-40 pointer-events-none">
                        <svg viewBox="0 0 500 150" className="w-full h-full text-[#AABEC3] fill-current opacity-20 transform scale-150">
                            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: '#9BB8C5' }}></path>
                        </svg>
                    </div>

                    <div className="relative z-10 text-center space-y-3 md:space-y-6 max-w-md mx-auto my-auto pb-24 md:pb-0 px-2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-snug md:leading-tight text-center font-handwriting" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                            THANK YOU FOR <br />
                            ACCEPTING JESUS <br />
                            AS YOUR LORD AND <br />
                            PERSONAL SAVIOUR, <br />
                            KINDLY COMPLETE <br />
                            THIS FORM.
                        </h1>
                    </div>

                    {/* Hills Illustration (CSS Approximation) */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 md:h-40 w-full z-0 pointer-events-none overflow-hidden">
                        {/* Back hill */}
                        <div className="absolute bottom-0 left-[-10%] right-[-10%] h-20 md:h-32 bg-[#8FA88F] rounded-t-[100%] transform scale-x-125 translate-y-4 border-t-2 border-black/80"></div>
                        {/* Front hill */}
                        <div className="absolute bottom-0 left-[-20%] right-[-20%] h-14 md:h-20 bg-[#8FA88F] rounded-t-[100%] transform translate-y-2 border-t-2 border-black/80"></div>

                        {/* Dashes */}
                        <div className="absolute bottom-4 left-[20%] md:left-1/4 flex space-x-1 text-black/90 font-bold text-lg md:text-xl z-10 transform -rotate-3 text-shadow-sm">
                            <span>/</span><span>/</span><span>/</span><span>/</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-md space-y-6">
                        {/* Logo */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-white shadow-md overflow-hidden relative z-10 mb-4 transition-transform hover:scale-105 duration-300">
                                <img src={RccgLogo} alt="RCCG Logo" className="w-full h-full object-contain p-1" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-center text-[#556075] uppercase tracking-wider font-sans">
                                New Convert <br /> Form
                            </h2>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                required
                                className="h-12 border-gray-200 hover:border-gray-300 focus:border-[#1e2080] focus:ring-1 focus:ring-[#1e2080]/20 bg-gray-50/50 text-base text-gray-800 placeholder:text-gray-400 rounded-lg shadow-sm transition-all"
                            />

                            <Input
                                type="tel"
                                name="phone_number"
                                placeholder="Phone Number"
                                required
                                className="h-12 border-gray-200 hover:border-gray-300 focus:border-[#1e2080] focus:ring-1 focus:ring-[#1e2080]/20 bg-gray-50/50 text-base text-gray-800 placeholder:text-gray-400 rounded-lg shadow-sm transition-all"
                            />

                            <Input
                                type="text"
                                name="address"
                                placeholder="Home Address"
                                required
                                className="h-12 border-gray-200 hover:border-gray-300 focus:border-[#1e2080] focus:ring-1 focus:ring-[#1e2080]/20 bg-gray-50/50 text-base text-gray-800 placeholder:text-gray-400 rounded-lg shadow-sm transition-all"
                            />

                            <Input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="h-12 border-gray-200 hover:border-gray-300 focus:border-[#1e2080] focus:ring-1 focus:ring-[#1e2080]/20 bg-gray-50/50 text-base text-gray-800 placeholder:text-gray-400 rounded-lg shadow-sm transition-all"
                            />

                            <Textarea
                                name="prayer"
                                placeholder="Prayer Points"
                                required
                                className="min-h-[100px] border-gray-200 hover:border-gray-300 focus:border-[#1e2080] focus:ring-1 focus:ring-[#1e2080]/20 bg-gray-50/50 text-base text-gray-800 placeholder:text-gray-400 rounded-lg shadow-sm resize-none pt-3 transition-all"
                            />

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-[#1e2080] hover:bg-[#151655] active:scale-[0.98] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Form"}
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
