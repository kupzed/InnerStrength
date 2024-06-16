import React from 'react';
import { Link } from 'react-router-dom';
import { HiDownload, HiOutlineChat, HiOutlinePencilAlt } from 'react-icons/hi'; // Import icons from react-icons library
import Sidebar from './Sidebar';
import Headerdash from './Headerdash';

const recentOrderData = [
    {
        id: '1',
        product_id: '12345678',
        customer_name: 'Putri Selena',
        no_telpon: '081234567898',
        tgl_pendaftaran: '10 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Sedang Berlangsung',
    },
    {
        id: '2',
        product_id: '12345678',
        customer_name: 'Usna Isnaini',
        no_telpon: '081234567898',
        tgl_pendaftaran: '08 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '3',
        product_id: '12345678',
        customer_name: 'Adriana',
        no_telpon: '081234567898',
        tgl_pendaftaran: '06 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '4',
        product_id: '12345678',
        customer_name: 'Roy Gabriel',
        no_telpon: '081234567898',
        tgl_pendaftaran: '03 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '5',
        product_id: '12345678',
        customer_name: 'Michella Putri',
        no_telpon: '081234567898',
        tgl_pendaftaran: '01 Mei 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '6',
        product_id: '12345678',
        customer_name: 'Helena Patricia',
        no_telpon: '081234567898',
        tgl_pendaftaran: '28 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '7',
        product_id: '12345678',
        customer_name: 'Mey Lorensia',
        no_telpon: '081234567898',
        tgl_pendaftaran: '25 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '8',
        product_id: '12345678',
        customer_name: 'Boy Pradipta',
        no_telpon: '081234567898',
        tgl_pendaftaran: '15 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '9',
        product_id: '12345678',
        customer_name: 'Glen Putra',
        no_telpon: '081234567898',
        tgl_pendaftaran: '10 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    },
    {
        id: '10',
        product_id: '12345678',
        customer_name: 'Shakira Anindita',
        no_telpon: '081234567898',
        tgl_pendaftaran: '15 April 2024',
        order_paket: 'Basic',
        keluhan: 'Lihat Detail',
        catatan: 'Selama Sesi',
        status: 'Selesai',
    }
];

function RecentOrders() {
    const handleDownload = () => {
        // Implement download logic here if needed
        alert('Downloading recent orders...');
    };

    return (
        <div className='overflow-scroll'>
            <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
                <Sidebar />
                <div className='p-4 flex flex-col flex-1'>
                    <Headerdash />
                    <div className='pt-4 px-4 pb-4 text-xl'>
                        <h2>Pasien Offline</h2>
                    </div>
                    <div className='pt-4 px-4 pb-4 text-xl'></div>
                    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1'>
                        <div className='flex justify-between items-center mb-3'>
                            <h2 className='text-lg font-semibold'></h2>
                            <button
                                className='flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
                                onClick={handleDownload}
                            >
                                <HiDownload className='w-6 h-6 mr-2' />
                                Unduh Laporan
                            </button>
                        </div>
                        <table className='w-full text-center'>
                            <thead>
                                <tr>
                                    <th className='p-2'>No</th>
                                    <th className='p-2'>No Rekam Medis</th>
                                    <th className='p-2'>Nama Pasien</th>
                                    <th className='p-2'>No Telepon</th>
                                    <th className='p-2'>Tanggal Pendaftaran</th>
                                    <th className='p-2'>Paket</th>
                                    <th className='p-2'>Keluhan</th>
                                    <th className='p-2'>Catatan</th>
                                    <th className='p-2'>Status</th>
                                    <th className='p-2'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrderData.map((order) => (
                                    <tr key={order.id} className='border-b'>
                                        <td className='p-2'>{order.id}</td>
                                        <td className='p-2'>{order.product_id}</td>
                                        <td className='p-2'>{order.customer_name}</td>
                                        <td className='p-2'>{order.no_telpon}</td>
                                        <td className='p-2'>{order.tgl_pendaftaran}</td>
                                        <td className='p-2'>{order.order_paket}</td>
                                        <Link to="/">
                                            <td className='p-2 text-green-400'>{order.keluhan}</td>
                                        </Link>
                                        <td className='p-2'>{order.catatan}</td>
                                        <td className='p-2 text-blue-500'>{order.status}</td>
                                        <td className='p-2 flex justify-center space-x-2'>
                                            <HiOutlineChat className='w-6 h-6 text-blue-500 cursor-pointer' />
                                            <HiOutlinePencilAlt className='w-6 h-6 text-yellow-500 cursor-pointer' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentOrders;
