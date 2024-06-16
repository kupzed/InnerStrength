import React, { useState } from 'react';
import nopayment from './assets/payment.svg'

const PaymentSettings = () => {
  const [selectedMethod, setSelectedMethod] = useState('BCA');

  const paymentMethods = ['BCA', 'Dana', 'BNI', 'BRI', 'Mandiri'];

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold mb-4">Pengaturan Pembayaran</h2>
      <p className="mb-8">Atur pembayaran anda untuk memudahkan memesan terapi di Innerstrength</p>
      <div className="flex">
        <div className="w-1/4">
          <ul className="space-y-2">
            {paymentMethods.map((method) => (
              <li 
                key={method} 
                className={`cursor-pointer p-2 ${selectedMethod === method ? 'font-bold text-blue-500' : ''}`}
                onClick={() => setSelectedMethod(method)}
              >
                {method}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 p-4 border-l border-gray-300">
          <div className="flex flex-col items-center">
            <img src={nopayment} alt="No card" className="w-48 h-48 mb-4" />
            <p className="mb-4">Belum ada kartu tersimpan</p>
            <p className="text-gray-600 mb-4">Tambah informasi kartu kredit/debit kamu untuk kemudahan pembayaran</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Tambah Kartu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;
