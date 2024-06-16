import { LuLayoutDashboard } from 'react-icons/lu';
import { PiUsersThree } from "react-icons/pi";
import { PiChatTextLight } from "react-icons/pi";
import { GrDocumentTime } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";


export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/Dashboard',
    icon: <LuLayoutDashboard />
  },
  {
    key: 'pasien',
    label: 'Pasien',
    path: '/Pasien',
    icon: <PiUsersThree />,
    subLinks: [
      {
        key: 'all-patients',
        label: 'Pasien Online',
        path: '/PasienOnline'
      },
      {
        key: 'new-patient',
        label: 'Pasien Offline',
        path: '/PasienOffline'
      }
    ]
  },
  {
    key: 'pesan',
    label: 'Pesan',
    path: '/Pesan',
    icon: <PiChatTextLight />
  },
  {
    key: 'janjitemu',
    label: 'Janji Temu',
    path: '/Janjitemu',
    icon: <GrDocumentTime />,
    subLinks: [
      {
        key: 'all-appointments',
        label: 'Janji Online',
        path: '/JanjiOnline'
      },
      {
        key: 'new-appointment',
        label: 'Janji Offline',
        path: '/JanjiOffline'
      }
    ]
  },
  {
    key: 'jadwal',
    label: 'Jadwal',
    path: '/Jadwal',
    icon: <IoCalendarOutline />
  },
  {
    key: 'keluar',
    label: 'Keluar',
    path: '/',
    icon: <LuLogOut />
  }
];
