import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Headerdash from './Headerdash';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const newNotifications = [
        {
          id: 1,
          date: '2024-05-10, 09:00 AM',
          message: 'Pengingat Janji Temu',
          detail: 'Anda memiliki janji temu dengan pasien Putri Selena hari ini pukul 10:00 pagi. Silakan siapkan hal yang diperlukan untuk sesi terapi.',
          link: '/appointment/1',
          color: 'text-blue-500'
        },
        {
          id: 2,
          date: '2024-05-09, 02:15 PM',
          message: 'Pembatalan Janji Temu',
          detail: 'Janji temu dengan pasien Alice Johnson yang dijadwalkan pada 15 Mei 2024 pukul 11:00 telah dibatalkan. Mohon jadwalkan ulang janji temu sesuai ketersediaan Anda.',
          link: '/appointment/2',
          color: 'text-red-500'
        },
        {
          id: 3,
          date: '2024-05-07, 11:45 AM',
          message: 'Pembaruan Catatan Pasien',
          detail: 'Catatan terbaru telah ditambahkan untuk pasien Putri Selena. Silakan periksa catatan tersebut dan tambahkan komentar atau rekomendasi Anda jika diperlukan.',
          link: '/appointment/3',
          color: 'text-green-500'
        }
      ];
      setNotifications(newNotifications);
    };

    fetchNotifications();
  }, []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
      <Sidebar />
      <div className='p-4 flex flex-col flex-1'>
        <Headerdash />
        <div className='bg-white h-full w-full p-4'>
          <h2 className='text-xl mb-4'>Notifications</h2>
          <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div key={notification.id} className="py-2 flex justify-between items-center border-b border-gray-200 last:border-none">
                  <div className="flex items-center gap-2">
                    <HiOutlineExclamationCircle className={`h-6 w-6 ${notification.color}`} />
                    <div>
                      <div className="font-bold">{notification.date}</div>
                      <a href={notification.link} className="text-blue-500 hover:underline">
                        {notification.message}
                      </a>
                      <div className="text-gray-700">{notification.detail}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
              ))
            ) : (
              <div>No new notifications</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
