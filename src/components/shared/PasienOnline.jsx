import React from 'react'
import { Link } from 'react-router-dom'

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
]

function RecentOrders() {
  return (
    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1'>
        <div className='mt-3'>
        <table className='w-full text-center'>
            <thead>
                <tr>
                    <td>No</td>
                    <td>No Rekam Medis</td>
                    <td>Nama Pasien</td>
                    <td>No Telepon</td>
                    <td>Tanggal Pendaftaran</td>
                    <td>Paket</td>
                    <td>Keluhan</td>
                    <td>Catatan</td>
                    <td>Status</td>
                    <td>Aksi</td>
                </tr>
            </thead>
            <tbody>
                {recentOrderData.map((order) => (
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product_id}</td>
                    <td>{order.customer_name}</td>
                    <td>{order.no_telpon}</td>
                    <td>{order.tgl_pendaftaran}</td>
                    <td>{order.order_paket}</td>
                    <Link to="/"><td className='text-green-400'>{order.keluhan}</td></Link>
                    <td>{order.catatan}</td>
                    <td className='text-blue-500'>{order.status}</td>
                    <td>{order.aksi}</td>
                </tr>    
        ))}
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default RecentOrders