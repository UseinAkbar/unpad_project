import React from 'react'
import SidebarComp from './SidebarComp'
import Landing_logo from '../unpad_asset/Logo/Landing_logo.png';
import Asset_3 from '../unpad_asset/printilan/Asset_3.png';
import Asset_7 from '../unpad_asset/printilan/Asset_7.png';
import Asset_1 from '../unpad_asset/printilan/Asset_1.png';
import Asset_5 from '../unpad_asset/printilan/Asset_5.png';
import Asset_6 from '../unpad_asset/printilan/Asset_6.png';
import Asset_9 from '../unpad_asset/printilan/Asset_9.png';
import Asset_10 from '../unpad_asset/printilan/Asset_10.png';
import Tablet from '../unpad_asset/Logo/tablet.png';

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
            <section className="min-h-screen bg-yellow-q flex justify-center items-center">
                <div className="space-y-5">
                    <h1 className="text-6xl text-red-q font-bold">Bring Back The Memories</h1>
                    <img src={Landing_logo} width="400" className="mx-auto" alt="logo" />
                    <div className="flex justify-center">
                        <a href="/stages" className='rounded-full flex items-center space-x-4 w-96 justify-center uppercase font-bold px-7 bg-green-q text-yellow-q p-4 text-xl'>
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
            <section className='min-h-screen bg-red-bgq flex justify-center items-center'>
                <div className="w-3/4">
                    <div className="flex space-x-5 items-center">
                        <div className="w-1/2 space-y-5 text-purple-q">
                            <h1 className="font-extrabold text-6xl">Apa itu Pyhsics on Air?</h1>
                            <p className="text-justify font-semibold text-xl">
                                Physics On Air (Physics One Night Affair) merupakan salah satu program kerja unggulan BP HIMA FMIPA Unpad 2021 Kabinet gemini yang bertujuan untuk memperingati ulang tahun HIFI dan menjadi wadah rekreasi anggota HIFI FMIPA UNPAD dalam berbagai bidang serta menjadi dan menjaga silaturahmi antara warga himpunan mahasiswa dan alumni Fisika FMIPA Unpad. 
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src={Tablet} width='400' className="mx-auto" alt="tablet logo" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen bg-screen-pattern bg-cover">
                <div className="py-20">
                    <div className="container mx-auto">
                        <div className="flex space-x-4">
                            <h1 className="text-yellow-q2 font-bold text-6xl">
                                <span className="bg-red-q">Meet The Team!</span>
                            </h1>
                            <div>
                                <img src={Asset_3} width="70" className="transform rotate-12" alt="camera" />
                            </div>
                        </div>
                        {/* section 1 */}
                        <div className="flex justify-center mt-20">
                            <div className="flex items-center">
                                <img src={Asset_1} width="170" className="transform -rotate-12" alt="Tape" />
                            </div>
                            <div className="w-4/6">
                                <div>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="row-span-3 -mr-14 flex justify-center items-center">
                                        <img src={Staff_1} width="200" className="ml-auto" alt="staff 1" />
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
                            <div className="flex items-end">
                                    <img src={Asset_7} width="150" className="transform scale-x-flip" alt="Tape" />
                            </div>
                        </div>
                    </div>
                    {/* section 2 */}

                    <div className="mt-20">
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="row-span-3 -mr-5 flex justify-center items-center">
                                        <img src={Staff_5} width="200" className="ml-auto" alt="staff 5" />
                                    </div>
                                    <div className="mr-10">
                                        <img src={Staff_6} width="150" className="ml-auto" alt="staff 6" />
                                    </div>
                                    <div className="-ml-10">
                                        <img src={Staff_7} width="150" alt="staff 7" />
                                    </div>
                                    <div className="mr-10">
                                        <img src={Staff_8} width="150" className="ml-auto" alt="staff 8" />
                                    </div>
                                    <div className="-ml-10">
                                        <img src={Staff_9} width="150" className="mr-auto" alt="staff 9" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="-ml-12 grid grid-cols-4 gap-4 text-center">
                                    <div className="row-span-3 flex justify-center items-center">
                                        <img src={Staff_10} className="transform scale-115 ml-4" width="400" alt="staff 10" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_11} width="150" className="ml-auto" alt="staff 11" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_12} width="150" alt="staff 12" />
                                    </div>
                                    <div className="flex items-center row-span-3">
                                        <img src={Staff_13} width="150" alt="staff 13" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_14} width="150" className="ml-auto" alt="staff 14" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_15} width="150" className="mr-auto" alt="staff 15" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto mt-20">
                        <div className="flex">
                            <div className="w-1/2">
                                <img src={Asset_6} className="transform -rotate-12" alt="" />
                            </div>
                            <div className="w-1/2">
                                <img src={Asset_5} className="ml-12 transform rotate-12" width="200" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* section 3 */}
                    <div className="-mt-10">
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="row-span-3 -mr-5 flex justify-center items-center">
                                        <img src={Staff_16} width="200" className="ml-auto" alt="staff 5" />
                                    </div>
                                    <div className="mr-10">
                                        <img src={Staff_17} width="150" className="ml-auto" alt="staff 6" />
                                    </div>
                                    <div className="-ml-10">
                                        <img src={Staff_18} width="150" alt="staff 7" />
                                    </div>
                                    <div className="mr-10">
                                        <img src={Staff_19} width="150" className="ml-auto" alt="staff 8" />
                                    </div>
                                    <div className="-ml-10">
                                        <img src={Staff_20} width="150" className="mr-auto" alt="staff 9" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="row-span-3 -mr-5 flex justify-center items-center">
                                        <img src={Staff_21} width="200" className="ml-auto" alt="staff 5" />
                                    </div>
                                    <div className="mr-10">
                                        <img src={Staff_22} width="150" className="ml-auto" alt="staff 6" />
                                    </div>
                                    <div className="-ml-10">
                                        <img src={Staff_23} width="150" alt="staff 7" />
                                    </div>
                                    <div className="mr-10">
                                        <img src={Staff_24} width="150" className="ml-auto" alt="staff 8" />
                                    </div>
                                    <div className="-ml-10">
                                        <img src={Staff_25} width="150" className="mr-auto" alt="staff 9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end pr-14">
                            <div  className="z-10 -mt-24">
                                <img src={Asset_9} alt="" />
                            </div>
                        </div>
                    {/* section 4 */}
                    <div className="mt-20">
                        <div className="flex justify-center space-x-10">
                            <div>
                                <img src={Asset_3} alt="" className="transform -rotate-12" />
                            </div>
                            <div className="w-1/2">
                                <div className="grid grid-cols-4 gap-4 text-center">
                                    <div className="row-span-3 flex justify-center items-center">
                                        <img src={Staff_26} className="transform scale-115 -ml-8" width="400" alt="staff 10" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_27} width="150" className="ml-auto" alt="staff 11" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_28} width="150" alt="staff 12" />
                                    </div>
                                    <div className="flex items-center row-span-3">
                                        <img src={Staff_29} width="150" className="-mt-16" alt="staff 13" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_30} width="150" className="ml-auto" alt="staff 14" />
                                    </div>
                                    <div className="">
                                        <img src={Staff_31} width="150" className="mr-auto" alt="staff 15" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <img src={Asset_10} alt="" className="transform rotate-12" width="150" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen bg-brown-q">
                <div className="m-auto">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-purple-q2 font-bold text-center text-5xl">Contact Us</h1>
                        <a href="http://instagram.com/" className="bg-green-q text-center align-middle text-yellow-q3 p-4 rounded-full text-2xl font-bold px-28">Instagram</a>
                        <a href="mailto:mail.com" className="bg-green-q2 text-center align-middle text-yellow-q3 p-4 rounded-full text-2xl font-bold px-28">Email</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home