import React from 'react'
import { HiOutlineChat, HiOutlinePencilAlt } from 'react-icons/hi'

const recentOrderData = [
	{
		id: '1',
		product_id: '12345678',
		customer_name: 'Putri Helena',
		customer_diagnosis: 'Anxiety',
		order_paket: 'Basic',
		order_status: 'Sedang Berlangsung',
		order_aksi: 'PLACED'
	},
	{
		id: '2',
		product_id: '12345678',
		customer_name: 'Putri Helena',
		customer_diagnosis: 'Anxiety',
		order_paket: 'Basic',
		order_status: 'Sedang Berlangsung',
		order_aksi: 'CONFIRMED'
	},
	{
		id: '3',
		product_id: '12345678',
		customer_name: 'Putri Helena',
		customer_diagnosis: 'Anxiety',
		order_paket: 'Basic',
		order_status: 'Sedang Berlangsung',
		order_aksi: 'SHIPPED'
	},
	{
		id: '4',
		product_id: '12345678',
		customer_name: 'Putri Helena',
		customer_diagnosis: 'Anxiety',
		order_paket: 'Basic',
		order_status: 'Sedang Berlangsung',
		order_aksi: 'SHIPPED'
	},
	{
		id: '5',
		product_id: '12345678',
		customer_name: 'Putri Helena',
		customer_diagnosis: 'Anxiety',
		order_paket: 'Basic',
		order_status: 'Sedang Berlangsung',
		order_aksi: 'OUT_FOR_DELIVERY'
	},
	{
		id: '6',
		product_id: '12345678',
		customer_name: 'Putri Helena',
		customer_diagnosis: 'Anxiety',
		order_paket: 'Basic',
		order_status: 'Sedang Berlangsung',
		order_aksi: 'DELIVERED'
	}
]

function RecentOrders() {
  return (
    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1'>
        <strong className='text-gray-400 font-medium px-8'>Janji temu hari ini</strong>
        <div className='mt-4 mb-4'>
        <table className='w-full'>
            <thead>
                <tr className='border-b border-b-gary-700'>
                    <td>No</td>
                    <td>No Rekam Medis</td>
                    <td>Nama Pasien</td>
                    <td>Diagnosis</td>
                    <td>Paket</td>
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
                    <td>{order.customer_diagnosis}</td>
                    <td>{order.order_paket}</td>
                    <td className='text-blue-600'>{order.order_status}</td>
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
  )
}

export default RecentOrders