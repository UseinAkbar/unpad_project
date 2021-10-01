import React from 'react'
import PI_LOGO from '../unpad_asset/Logo/PI.png';
import SidebarComp from './SidebarComp';

export default function Info() {
    return (
        <div className="bg-yellow-q min-h-screen">
            <SidebarComp />
            <div className="mt-10">
                <h1 className="text-5xl md:text-6xl font-semibold text-center text-red-q">Pelayanan Internal</h1>
                <img src={PI_LOGO} alt="logo PI" className="mx-auto mt-10" width="240" />
                <p className="w-10/12 pb-10 md:pb-0 md:w-8/12 lg:w-6/12 text-xl text-light mt-5 mx-auto text-justify">
                Terwujudnya PI yang peduli, apresiatif, dan berperan sebagai tumpuan untuk  mencapai kesejahteraan dengan  menunjang kebutuhan warga himpunan. Salah satunya melalui program kerja <span className="font-semibold text-red-q">Physics On Air</span> ini diharapkan acara tersebut dapat berperan sebagai <span className="font-semibold">apresiasi dan penunjang keharmonisan komunikasi antara alumni dengan anggota HIFI FMIPA UNPAD serta sebagai wadah hiburan bagi anggota HIFI FMIPA UNPAD.</span> Kegiatan ini bukan hanya sekedar perayaan atas bertambahnya usia, lebih dari itu, perayaan ini juga menjadi ajang silaturahmi bagi keluarga HIFI FMIPA Unpad dari berbagai angkatan.
                </p>
            </div>
        </div>
    )
}
