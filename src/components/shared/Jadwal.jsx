import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from './Sidebar';
import Headerdash from './Headerdash';

function Schedule() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [sessionType, setSessionType] = useState('pagi');
    const [times, setTimes] = useState([]);
    const [newTime, setNewTime] = useState('');

    const handleAddTime = () => {
        if (newTime.trim() !== '') {
            setTimes([...times, { session: sessionType, time: newTime }]);
            setNewTime('');
        }
    };

    const handleRemoveTime = (index) => {
        const updatedTimes = [...times];
        updatedTimes.splice(index, 1);
        setTimes(updatedTimes);
    };

    return (
        <div className='flex bg-neutral-100 h-screen w-screen'>
            <Sidebar />
            <div className='p-4 flex flex-col flex-1'>
                <Headerdash />
                <div className='flex flex-col lg:flex-row-reverse lg:justify-end pt-4 px-4 pb-4 text-xl'>
                    {/* Bagian Pilih Tanggal */}
                    <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 w-full lg:w-1/3 lg:ml-4 mb-4 lg:mb-0'>
                        <h2 className='text-lg font-semibold mb-2'>Pilih Tanggal</h2>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className='border rounded p-2 w-full'
                            placeholderText='Pilih Tanggal'
                        />
                    </div>
                    {/* Bagian Pilih Sesi dan Tambahkan Waktu */}
                    <div className='flex flex-col w-full lg:w-2/3'>
                        <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 mb-4'>
                            <h2 className='text-lg font-semibold mb-2'>Pilih Sesi</h2>
                            <select
                                value={sessionType}
                                onChange={(e) => setSessionType(e.target.value)}
                                className='border rounded p-2 w-full'
                            >
                                <option value="pagi">Pagi</option>
                                <option value="siang">Siang</option>
                                <option value="malam">Malam</option>
                            </select>
                        </div>
                        <div className='bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200'>
                            <h2 className='text-lg font-semibold mb-2'>Tambahkan Waktu</h2>
                            <div className='flex'>
                                <input
                                    type='time'
                                    value={newTime}
                                    onChange={(e) => setNewTime(e.target.value)}
                                    className='border rounded p-2 flex-1'
                                />
                                <button
                                    onClick={handleAddTime}
                                    className='bg-blue-500 text-white px-4 py-2 rounded ml-2'
                                >
                                    Tambah
                                </button>
                            </div>
                            {/* Daftar waktu yang ditambahkan */}
                            {times.length > 0 && (
                                <div>
                                    <h3 className='text-gray-700 font-bold mb-2 mt-4'>Daftar Waktu</h3>
                                    <ul className='list-disc list-inside'>
                                        {times.map((item, index) => (
                                            <li key={index} className='mb-1'>
                                                {item.session.charAt(0).toUpperCase() + item.session.slice(1)} - {item.time}
                                                <button
                                                    onClick={() => handleRemoveTime(index)}
                                                    className='ml-2 text-red-500'
                                                >
                                                    Hapus
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
