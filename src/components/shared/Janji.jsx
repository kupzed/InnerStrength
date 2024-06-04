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
	}
]

function Janji() {
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

export default Janji