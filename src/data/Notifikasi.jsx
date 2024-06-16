import React, { useState, useEffect } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Navbar from '../components/HeaderLogin';
import Footer from '../components/Footer';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest');

  useEffect(() => {
    const fetchNotifications = async () => {
      const newNotifications = [
        {
          id: 1,
          date: '2024-05-10, 09:00 AM',
          message: 'Pengingat Janji Temu',
          detail: 'Anda memiliki janji temu dengan pasien Putri Selena hari ini pukul 10:00 pagi. Silakan siapkan hal yang diperlukan untuk sesi terapi.',
          link: '/appointment/1',
          color: 'text-blue-500',
        },
        {
          id: 2,
          date: '2024-05-09, 07:00 AM',
          message: 'Pembatalan Janji Temu',
          detail: 'Janji temu dengan pasien Alice Johnson yang dijadwalkan pada 15 Mei 2024 pukul 11:00 telah dibatalkan. Mohon jadwalkan ulang janji temu sesuai ketersediaan Anda.',
          link: '/appointment/2',
          color: 'text-red-500',
        },
        {
          id: 3,
          date: '2024-05-07, 11:45 AM',
          message: 'Pembaruan Catatan Pasien',
          detail: 'Catatan terbaru telah ditambahkan untuk pasien Putri Selena. Silakan periksa catatan tersebut dan tambahkan komentar atau rekomendasi Anda jika diperlukan.',
          link: '/appointment/3',
          color: 'text-green-500',
        },
      ];
      setNotifications(newNotifications);
    };

    fetchNotifications();
  }, []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notifications
    .filter(notification =>
      notification.message.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'Newest' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
    );

  return (
    <div className='overflow-hidden'>
      <Navbar />
    <div className="flex flex-col mx-28 my-24 h-screen p-4 bg-white-100">
      <h2 className="text-2xl font-bold text-center mb-8">Notifikasi</h2>
      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-md w-full mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="Newest">Terbaru</option>
          <option value="Oldest">Terlama</option>
        </select>
      </div>
      <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 p-4 overflow-y-auto">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
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
          <div>Tdak ada Notifikasi</div>
        )}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Notifications;




// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/HeaderLogin'
// import { HiOutlineExclamationCircle } from 'react-icons/hi';

// const Notifikasi = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const newNotifications = [
//         {
//           id: 1,
//           date: '2024-05-10, 09:00 AM',
//           message: 'Pengingat Janji Temu',
//           detail: 'Anda memiliki janji temu dengan pasien Putri Selena hari ini pukul 10:00 pagi. Silakan siapkan hal yang diperlukan untuk sesi terapi.',
//           link: '/appointment/1',
//           color: 'text-blue-500'
//         },
//         {
//           id: 2,
//           date: '2024-05-09, 02:15 PM',
//           message: 'Pembatalan Janji Temu',
//           detail: 'Janji temu dengan pasien Alice Johnson yang dijadwalkan pada 15 Mei 2024 pukul 11:00 telah dibatalkan. Mohon jadwalkan ulang janji temu sesuai ketersediaan Anda.',
//           link: '/appointment/2',
//           color: 'text-red-500'
//         },
//         {
//           id: 3,
//           date: '2024-05-07, 11:45 AM',
//           message: 'Pembaruan Catatan Pasien',
//           detail: 'Catatan terbaru telah ditambahkan untuk pasien Putri Selena. Silakan periksa catatan tersebut dan tambahkan komentar atau rekomendasi Anda jika diperlukan.',
//           link: '/appointment/3',
//           color: 'text-green-500'
//         }
//   ];
//     setNotifications(newNotifications);
//   };

//     fetchNotifications();
//   }, []);

//   const removeNotification = (id) => {
//     setNotifications(notifications.filter(notification => notification.id !== id));
//   };

//   return (
//     <div className='overflow-hidden'>
//       <Navbar />
//       <div className='flex flex-row mt-16 bg-neutral-100 h-screen w-screen'>
//         <div className='p-4 flex flex-col flex-1'>
//           <div className='bg-white h-full w-full p-4'>
//             <h2 className='text-3xl text-center mb-4'>Notifikasi</h2>
//               <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
//                 {notifications.length > 0 ? (
//                   notifications.map((notification) => (
//                     <div key={notification.id} className="py-2 flex justify-between items-center border-b border-gray-200 last:border-none">
//                       <div className="flex items-center gap-2">
//                         <HiOutlineExclamationCircle className={`h-6 w-6 ${notification.color}`} />
//                         <div>
//                           <div className="font-bold">{notification.date}</div>
//                             <a
//                               href={notification.link}
//                               className="text-blue-500 hover:underline"
//                             >
//                               {notification.message}
//                             </a>
//                           <div className="text-gray-700">{notification.detail}</div>
//                         </div>
//                       </div>
//                         <button
//                           onClick={() => removeNotification(notification.id)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           &times;
//                         </button>
//                     </div>
//                   ))
//                 ) : (
//                   <div>No new notifications</div>
//                 )}
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Notifikasi