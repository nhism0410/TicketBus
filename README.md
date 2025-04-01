# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



 <div className='flex items-center gap-4 justify-between'>
                {/* From and To Inputs */}
                <div className="flex flex-1 gap-4 relative">
                    <div className="flex-1 border border-gray-300 bg-white text-gray-700 px-4 py-3 rounded-lg flex items-center">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <input type="text" placeholder="Chọn điểm lên" className="flex-1 bg-transparent focus:outline-none" />
                    </div>

                    <div className="flex-1 border border-gray-300 bg-white text-gray-700 px-4 py-3 rounded-lg flex items-center">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <input type="text" placeholder="Chọn điểm đến" className="flex-1 bg-transparent focus:outline-none" />
                    </div>

                    {/* Exchange button */}
                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-2 rounded-full shadow-md z-10">
                        <TbArrowsExchange className="text-white w-5 h-5" />
                    </button>
                </div>

                {/* Date Picker */}
                <div className='flex items-center border border-gray-300 bg-white text-gray-700 px-4 py-3 rounded-lg'>
                    <BsCalendar2Date className='text-gray-400 mr-2' />
                    <input type='date' className='bg-transparent focus:outline-none' />
                </div>

                {/* Search Button */}
                <button className='bg-primary hover:bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-md'>
                    <FaSearch /> Tìm chuyến
                </button>
            </div>

            {/* Dễ dàng đặt xe trên website */}
            <div className='mt-6 text-center'>
                <h2 className='text-lg font-semibold text-gray-800'>DỄ DÀNG ĐẶT XE TRÊN WEBSITE</h2>
                <div className='flex justify-center items-center gap-6 mt-4'>
                    <div className='flex flex-col items-center text-center'>
                        <div className='w-14 h-14 border-2 border-dashed border-primary rounded-full flex items-center justify-center'>
                            <FaMapMarkedAlt className='text-primary text-2xl' />
                        </div>
                        <p className='mt-2 text-sm text-gray-600'>Chọn thông tin hành trình và ấn Tìm chuyến</p>
                    </div>
                    <span className='text-2xl text-gray-400'>→</span>
                    <div className='flex flex-col items-center text-center'>
                        <div className='w-14 h-14 border-2 border-dashed border-primary rounded-full flex items-center justify-center'>
                            <FaBus  className='text-primary text-2xl' />
                        </div>
                        <p className='mt-2 text-sm text-gray-600'>Chọn chuyến, chỗ ngồi phù hợp và điền thông tin</p>
                    </div>
                    <span className='text-2xl text-gray-400'>→</span>
                    <div className='flex flex-col items-center text-center'>
                        <div className='w-14 h-14 border-2 border-dashed border-primary rounded-full flex items-center justify-center'>
                            <FaTicketAlt  className='text-primary text-2xl' />
                        </div>
                        <p className='mt-2 text-sm text-gray-600'>Giữ chỗ và nhận mã</p>
                    </div>
                    <span className='text-2xl text-gray-400'>→</span>
                    <div className='flex flex-col items-center text-center'>
                        <div className='w-14 h-14 border-2 border-dashed border-primary rounded-full flex items-center justify-center'>
                            <FaWallet  className='text-primary text-2xl' />
                        </div>
                        <p className='mt-2 text-sm text-gray-600'>Thanh toán và lên xe</p>
                    </div>
                </div>
            </div>







            /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import RootLayout from '../../../layout/RootLayout';

const slides = [
    {
        title: "ĐẶT VÉ XE DỄ DÀNG",
        description: "Tìm kiếm & đặt vé xe khách nhanh chóng với hệ thống đặt vé thông minh.",
        buttonText: "ĐẶT NGAY",
    },
    {
        title: "TUYẾN ĐƯỜNG PHÙ HỢP",
        description: "Nhiều hãng xe, nhiều tuyến đường với giá cả hợp lý, phù hợp với nhu cầu di chuyển của bạn.",
        buttonText: "XEM TUYẾN XE",
    },
    {
        title: "ƯU ĐÃI GIÁ TỐT NHẤT",
        description: "Nhận ngay các ưu đãi hấp dẫn khi đặt vé trực tuyến qua BusTicket.",
        buttonText: "XEM KHUYẾN MÃI",
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Đổi nội dung mỗi 5 giây

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className='w-full flex-1 h-screen bg-[url("./assets/bg1.jpg")] bg-cover bg-no-repeat bg-top relative'
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.85, ease: "easeInOut" }}
        >
            <RootLayout className="absolute top-44 right-16 w-[40%] h-auto py-6 pr-20 bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5 flex items-start justify-center text-start flex-col gap-6">
                {/* Hiệu ứng slide trong RootLayout */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="space-y-4 w-full"
                    >
                        {/* Title với chiều rộng cố định */}
                        <motion.h1 className='text-4xl text-primary font-bold uppercase tracking-wide w-full text-wrap text-start my-4 leading-tight'>
                            {slides[currentSlide].title}
                        </motion.h1>


                        {/* Description */}
                        <motion.p className='text-lg text-gray-600 max-w-full'>
                            {slides[currentSlide].description}
                        </motion.p>

                        {/* Dots Indicator */}
                        <motion.div className="flex gap-2">
                            {slides.map((_, index) => (
                                <span key={index} className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-primary" : "bg-gray-400"}`}></span>
                            ))}
                        </motion.div>

                        {/* Button */}
                        <motion.button
                            className="mt-4 px-6 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-md hover:bg-neutral-500 transition"
                        >
                            {slides[currentSlide].buttonText}
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </RootLayout>

        </motion.div>
    );
}

export default Hero;
