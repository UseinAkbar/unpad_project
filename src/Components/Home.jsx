import React from 'react'
import SidebarComp from './SidebarComp'
import SwiperLogo from './SwiperLogo';
import Landing_logo from '../unpad_asset/Logo/Landing_logo.png';
import Asset_3 from '../unpad_asset/printilan/Asset_3.png';
import Asset_7 from '../unpad_asset/printilan/Asset_7.png';
import Asset_1 from '../unpad_asset/printilan/Asset_1.png';
import Asset_5 from '../unpad_asset/printilan/Asset_5.png';
import Asset_6 from '../unpad_asset/printilan/Asset_6.png';
import Asset_9 from '../unpad_asset/printilan/Asset_9.png';
import Asset_10 from '../unpad_asset/printilan/Asset_10.png';
import Tablet from '../unpad_asset/Logo/tablet.png';
// Makna
// import Logo_1 from '../unpad_asset/Logo/1.png';
// staff
import Staff_1 from '../unpad_asset/staff/1.png';
import Staff_2 from '../unpad_asset/staff/2.png';
import Staff_3 from '../unpad_asset/staff/3.png';
import Staff_4 from '../unpad_asset/staff/4.png';
import Staff_5 from '../unpad_asset/staff/5.png';
import Staff_6 from '../unpad_asset/staff/6.png';
import Staff_7 from '../unpad_asset/staff/7.png';
import Staff_8 from '../unpad_asset/staff/8.png';
import Staff_9 from '../unpad_asset/staff/9.png';
import Staff_10 from '../unpad_asset/staff/10.png';
import Staff_11 from '../unpad_asset/staff/11.png';
import Staff_12 from '../unpad_asset/staff/12.png';
import Staff_13 from '../unpad_asset/staff/13.png';
import Staff_14 from '../unpad_asset/staff/14.png';
import Staff_15 from '../unpad_asset/staff/15.png';
import Staff_16 from '../unpad_asset/staff/16.png';
import Staff_17 from '../unpad_asset/staff/17.png';
import Staff_18 from '../unpad_asset/staff/18.png';
import Staff_19 from '../unpad_asset/staff/19.png';
import Staff_20 from '../unpad_asset/staff/20.png';
import Staff_21 from '../unpad_asset/staff/21.png';
import Staff_22 from '../unpad_asset/staff/22.png';
import Staff_23 from '../unpad_asset/staff/23.png';
import Staff_24 from '../unpad_asset/staff/24.png';
import Staff_25 from '../unpad_asset/staff/25.png';
import Staff_26 from '../unpad_asset/staff/26.png';
import Staff_27 from '../unpad_asset/staff/27.png';
import Staff_28 from '../unpad_asset/staff/28.png';
import Staff_29 from '../unpad_asset/staff/29.png';
import Staff_30 from '../unpad_asset/staff/30.png';
import Staff_31 from '../unpad_asset/staff/31.png';

const Home = () => {
    return (
        <main>
            <SidebarComp />
            <section className=" py-24 bg-yellow-q flex justify-center items-center">
                <div className="space-y-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-red-q font-bold text-center">Bring Back The Memories</h1>
                    <div>
                        <img src={Landing_logo} width="400" className="w-64 lg:w-auto mx-auto" alt="logo" />
                    </div>
                    <div className="flex justify-center">
                        <a href="/stages" style={{WebkitTapHighlightColor: 'transparent'}} className='rounded-full flex items-center space-x-4 w-80 lg:w-96 justify-center uppercase font-bold px-7 bg-green-q text-yellow-q p-4 text-sm lg:text-xl'>
                            <span>
                                Let's Start Our Journey
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section className='py-24 bg-red-bgq flex justify-center items-center'>
                <div className="w-3/4">
                    <div className="flex flex-col-reverse lg:flex-row space-x-5 lg:space-x-0 items-center">
                        <div className="w-full lg:w-1/2 space-y-5 text-purple-q">
                            <h1 className="font-extrabold text-4xl lg:text-6xl">Apa itu Pyhsics on Air?</h1>
                            <p className="text-justify font-semibold text-xl">
                                Physics On Air (Physics One Night Affair) merupakan salah satu program kerja unggulan BP HIMA FMIPA Unpad 2021 Kabinet gemini yang bertujuan untuk memperingati ulang tahun HIFI dan menjadi wadah rekreasi anggota HIFI FMIPA UNPAD dalam berbagai bidang serta menjadi dan menjaga silaturahmi antara warga himpunan mahasiswa dan alumni Fisika FMIPA Unpad. 
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
                            <img src={Tablet} width='400' className="mx-auto" alt="tablet logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-yellow-q">   
            <div className="">
                <h1 className="text-4xl lg:text-6xl font-bold text-center pt-20 lg:pt-20 lg:mb-0 lg:py-20 text-green-q2">Makna Logo</h1>
                <div className="makna-logo">
                   <SwiperLogo />
                </div>
            </div>
            </section>
            <section className="py-24 bg-screen-pattern bg-cover">
                <div className="py-0 md:py-20">
                    <div className="px-12">
                        <div className="flex space-x-4">
                            <h1 className="text-yellow-q2 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                <span className="bg-red-q">Meet The Team!</span>
                            </h1>
                            <div>
                                <img src={Asset_3} className="w-10 md:w-20 transform rotate-12" alt="camera" />
                            </div>
                        </div>
                        {/* section 1 */}
                        <div className="flex justify-center mt-20">
                            <div className="hidden lg:flex items-center">
                                <img src={Asset_1} width="170" className="transform -rotate-12" alt="Tape" />
                            </div>
                            <div className="w-4/6">
                                <div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                    <div className="col-span-2 md:col-span-1 row-span-2 -mr-0 lg:-mr-14 flex justify-center items-center">
                                        <img src={Staff_1} width="200" className="ml-0 md:ml-auto" alt="staff 1" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_2} width="170" className="ml-auto" alt="staff 2" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_3} width="170" alt="staff 3" />
                                    </div>
                                    <div className="col-span-2 ">
                                        <img src={Staff_4} width="280" className="mx-auto" alt="staff 4" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex items-end">
                                    <img src={Asset_7} width="150" className="transform scale-x-flip" alt="Tape" />
                            </div>
                        </div>
                    </div>
                    {/* section 2 */}

                    <div className="mt-20">
                        <div className="inline lg:flex">
                            <div className="w-full lg:w-1/2">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center justify-center">
                                    <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-3 -mr-0 md:-mr-14 lg:-mr-5 flex justify-center items-center">
                                        <img src={Staff_5} width="200" className="ml-0 md:ml-auto" alt="staff 5" />
                                    </div>
                                    <div className="mr-0 md:mr-10">
                                        <img src={Staff_6} width="150" className="ml-auto" alt="staff 6" />
                                    </div>
                                    <div className="-ml-0 md:-ml-10">
                                        <img src={Staff_7} width="150" alt="staff 7" />
                                    </div>
                                    <div className="mr-0 md:mr-10">
                                        <img src={Staff_8} width="150" className="ml-auto" alt="staff 8" />
                                    </div>
                                    <div className="-ml-0 md:-ml-10">
                                        <img src={Staff_9} width="150" className="mr-auto" alt="staff 9" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                                <div className="-ml-0 lg:-ml-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div className="-mr-0 md:-mr-12 lg:-mr-0  row-span-1 md:row-span-3 col-span-2 md:col-span-1 flex justify-center items-center">
                                        <img src={Staff_10} className="transform-none md:transform scale-0 md:scale-115 ml-0 md:ml-4" width="150" alt="staff 10" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_11} width="150" className="ml-auto" alt="staff 11" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_12} width="150" alt="staff 12" className="mr-auto lg:mx-0"/>
                                    </div>
                                    <div className="flex items-center row-span-1 md:row-span-3">
                                        <img src={Staff_13} width="150" alt="staff 13" className="ml-auto md:-ml-10 md:mr-auto lg:mx-0" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_14} width="150" className="mr-auto md:mr-0 md:ml-auto" alt="staff 14" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <img src={Staff_15} width="150" className="mx-auto md:mx-0 md:mr-auto lg:ml-auto lg:mr-auto" alt="staff 15" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-12 my-5 lg:my-10">
                        <div className="hidden md:flex">
                            <div className="w-1/2">
                                <img src={Asset_6} className="transform -rotate-12" alt="" />
                            </div>
                            <div className="w-1/2">
                                <img src={Asset_5} className="ml-12 transform rotate-12" width="200" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* section 3 */}
                    <div className="-mt-0 md:mt-20 lg:-mt-10">
                        <div className="mt-10 lg:mt-0 inline lg:flex">
                            <div className="w-full lg:w-1/2">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                    <div className="row-span-1 md:row-span-3 col-span-2 md:col-span-1 -mr-0 md:-mr-5 flex justify-center items-center">
                                        <img src={Staff_16} width="150" className="w-40 md:w-48 mx-auto md:mx-0 md:ml-auto" alt="staff 5" />
                                    </div>
                                    <div className="mr-0 md:mr-10">
                                        <img src={Staff_17} width="150" className="ml-auto" alt="staff 6" />
                                    </div>
                                    <div className="-ml-0 md:-ml-10">
                                        <img src={Staff_18} width="150" alt="staff 7" />
                                    </div>
                                    <div className="mr-0 md:mr-10">
                                        <img src={Staff_19} width="150" className="ml-auto" alt="staff 8" />
                                    </div>
                                    <div className="-ml-0 md:-ml-10">
                                        <img src={Staff_20} width="150" className="mr-auto" alt="staff 9" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-20 lg:mt-0 w-full lg:w-1/2">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                                    <div className="row-span-1 md:row-span-3 col-span-2 md:col-span-1 -mr-0 md:-mr-5 flex justify-center items-center">
                                        <img src={Staff_21} width="200" className="mx-auto md:mx-0 md:ml-auto" alt="staff 5" />
                                    </div>
                                    <div className="mr-0 md:mr-10">
                                        <img src={Staff_22} width="150" className="ml-auto" alt="staff 6" />
                                    </div>
                                    <div className="-ml-0 md:-ml-10">
                                        <img src={Staff_23} width="150" alt="staff 7" />
                                    </div>
                                    <div className="mr-0 md:mr-10">
                                        <img src={Staff_24} width="150" className="ml-auto" alt="staff 8" />
                                    </div>
                                    <div className="-ml-0 md:-ml-10">
                                        <img src={Staff_25} width="150" className="mr-auto" alt="staff 9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-end pr-14">
                            <div  className="z-10 -mt-24">
                                <img src={Asset_9} alt="" />
                            </div>
                        </div>
                    {/* section 4 */}
                    <div className="mt-20">
                        <div className="flex justify-center space-x-10">
                            <div className="hidden lg:inline">
                                <img src={Asset_3} alt="" className="transform -rotate-12" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div className="row-span-1 md:row-span-3 col-span-2 md:col-span-1 flex justify-center items-center">
                                        <img src={Staff_26} className="tranform-none md:transform slace-0 md:scale-115 -ml-8 md:-ml-8" width="150" alt="staff 10" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_27} width="150" className=" ml-auto" alt="staff 11" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_28} width="150" alt="staff 12" />
                                    </div>
                                    <div className="inline md:flex items-center row-span-1 md:row-span-3">
                                        <img src={Staff_29} width="150" className="-mt-0 md:-mt-16 ml-auto md:ml-0" alt="staff 13" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_30} width="150" className="mr-auto md:ml-auto" alt="staff 14" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <img src={Staff_31} width="150" className="mx-auto md:mr-auto" alt="staff 15" />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex items-end">
                                <img src={Asset_10} alt="" className="transform rotate-12" width="150" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen bg-brown-q">
                <div className="m-auto">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-purple-q2 font-bold text-center text-3xl md:text-4xl lg:text-5xl">Contact Us</h1>
                        <a href="https://instagram.com/hifiunpad" style={{WebkitTapHighlightColor: 'transparent'}} className="bg-green-q text-center align-middle text-yellow-q3 p-3 lg:p-4 text-md rounded-full lg:text-2xl font-bold">Instagram</a>
                        <a href="mailto:physicsonair2021@gmail.com" style={{WebkitTapHighlightColor: 'transparent'}} className="bg-green-q2 text-center align-middle text-yellow-q3 p-3 lg:p-4 text-md rounded-full lg:text-2xl font-bold">Email</a>
                    </div>
                </div>
            </section>

            <section className="flex flex-col py-14 px-10 justify-center md:py-20 space-y-8 md:space-y-0 md:px-32 bg-yellow-q md:flex-row">
                <div className="w-full md:w-1/3">
                    <h1 className="uppercase font-bold text-xl">Get in touch</h1>
                    <div className="flex flex-col text-left mt-3 font-semibold">
                        <a href="https://instagram.com/physicsonair" style={{WebkitTapHighlightColor: 'transparent'}}><span className="hover:underline">Instagram</span></a>
                        <a href="https://twitter.com/hifiunpad" style={{WebkitTapHighlightColor: 'transparent'}}><span className="hover:underline">Twitter</span></a>
                        <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=pit2224i" style={{WebkitTapHighlightColor: 'transparent'}}><span className="hover:underline">Line Official Account</span></a>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <h1 className="uppercase font-bold text-xl">Email</h1>
                    <div className="flex flex-col text-left mt-3 font-semibold">
                        <a href="mailto:physicsonair2021@gmail.com" style={{WebkitTapHighlightColor: 'transparent'}}><span className="hover:underline">physicsonair2021@gmail.com</span></a>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-0 md:px-20">
                    <h1 className="uppercase font-bold text-xl">Location</h1>
                    <div className="flex flex-col text-left mt-3 font-semibold">
                        <p>Jl. Raya Bandung Sumedang KM.21, Hegarmamah, Jatinagor, Kabupaten Sumedang, Jawa Barat 45363 </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home