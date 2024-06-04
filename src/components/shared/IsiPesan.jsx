import React from 'react'
import Putri from './assetsdashboard/Putri.png';
import Unsa from './assetsdashboard/Unsa.png';
import Adriana from './assetsdashboard/Adriana.png';
import Roy from './assetsdashboard/Roy.png';
import Michella from './assetsdashboard/Michella.png';
import Helena from './assetsdashboard/Helena.png';
import May from './assetsdashboard/May.png';
import Boy from './assetsdashboard/Boy.png';
import Glen from './assetsdashboard/Glen.png';
import Shakira from './assetsdashboard/Shakira.png';
import Input from './Input';


function IsiPesan() {
    const contacts = [
        {
            name: 'Putri Selena',
            status: '10:50 AM',
            img: Putri
        },
        {
            name: 'Unsa Isnaini',
            status: '08/05/2024',
            img: Unsa
        },
        {
            name: 'Adriana',
            status: '06/05/2024',
            img: Adriana
        },
        {
            name: 'Roy Gabriel',
            status: '03/05/2024',
            img: Roy
        },
        {
            name: 'Michella Putri',
            status: '01/05/2024',
            img: Michella
        },
        {
            name: 'Helena Patricia',
            status: '28/04/2024',
            img: Helena
        },
        {
            name: 'May Lorensia',
            status: '25/04/2024',
            img: May
        },
        {
            name: 'Boy Pradipta',
            status: '20/04/2024',
            img: Boy
        },
        {
            name: 'Glen Putra',
            status: '15/04/2024',
            img: Glen
        },
        {
            name: 'Shakira Anindita',
            status: '10/04/2024',
            img: Shakira
        },
        
    ]
  return (
    <div className='w-full flex flex-row'>
        <div className='w-[30%]'>
            {
                contacts.map(({ name, status, img }) => {
                    return(
                        <div className='flex items-center my-1 p-3 border border-gray-200'>
                        <div className='flex cursor-pointer'>
                        <div><img src={img} 
                        width={50} height={50} /></div>
                        <div className='ml-4'>
                            <h3>{name}</h3>
                            <p className='text-sm font-light'>{status}</p>
                        </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='w-[70%] bg-white flex flex-col items-center'>
            <div className='flex justify-center pt-4 text-xl'>Hari Ini
            </div>
            <div className='h-[75%] border w-full overflow-scroll'>
                <div className='h-[1000px] px-10 py-14'>
                    <div className='flex'>
                <div className='px-2'>
                    <img src={Putri} 
                        width={50} height={50} /></div>
                    <div className='max-w-[60%] bg-gray-200 rounded-b-xl rounded-tr-xl p-4 mb-6'>
                    Halo, saya ingin konsultasi tentang masalah bipolar, depresi, dan hubungan keluarga.
                    </div>
                    </div>
                    <div className='max-w-[70%] bg-gray-200 rounded-b-xl rounded-tl-xl ml-auto p-4 mb-6'>
                    Halo, terima kasih sudah menghubungi saya. Saya senang bisa membantu. Bisakah Anda ceritakan lebih detail tentang masalah yang Anda alami?
                    </div>
                    <div className='flex'>
                <div className='px-2'>
                    <img src={Putri} 
                        width={50} height={50} /></div>
                    <div className='max-w-[70%] bg-gray-200 rounded-b-xl rounded-tr-xl p-4 mb-6'>
                    Saya sudah didiagnosis dengan bipolar beberapa tahun lalu. Saya sering mengalami depresi dan mania, dan itu sangat memengaruhi hidup saya. Saya juga sering bertengkar dengan keluarga saya, dan saya merasa hubungan kami semakin memburuk.
                    </div>
                    </div>
                    <div className='max-w-[70%] bg-gray-200 rounded-b-xl rounded-tl-xl ml-auto p-4 mb-6'>
                    Saya mengerti. Bipolar dan depresi bisa menjadi kondisi yang sangat sulit untuk dihadapi. Dan masalah dalam hubungan keluarga dapat memperburuk kondisi tersebut.
                    </div>
                    <div className='max-w-[70%] bg-gray-200 rounded-b-xl rounded-tl-xl ml-auto p-4'>
                    Jangan khawatir, saya bisa membantu Anda. Pertama-tama, penting untuk memahami gejala bipolar dan depresi Anda dengan lebih baik. Bisakah Anda ceritakan lebih detail tentang gejala yang Anda alami?
                    </div>
                </div>
            </div>
            <div className='p-14 w-full'>
                <Input placeholder='Type a message...' className='w-full' InputClassNames='p-4 border-0 shadow-md
                rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
            </div>
        </div>
    </div>
  )
}

export default IsiPesan