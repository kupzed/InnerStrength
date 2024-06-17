import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import logo from './assets/logo.png';
import Footer from '../../components/Footer';

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // State to manage current step

  const handleBackClick = () => {
    if (currentStep === 1) {
      navigate(-1); // Navigate to the previous page if on the first step
    } else {
      setCurrentStep(currentStep - 1); // Move to the previous step
    }
  };

  const handleNextClick = () => {
    if (currentStep === 1 || currentStep === 2) {
      setCurrentStep(currentStep + 1); // Move to the next step for steps 1 and 2
    } else if (currentStep < 13) {
      setCurrentStep(currentStep + 1); // Move to the next step for steps 3 to 12
    } else {
      handleFinalStep(); // Handle final step logic
    }
  };

  const handleFinalStep = () => {
    // Perform any final actions before navigating to the new page
    navigate('/PembayaranOnline'); // Navigate to the new page after final step
  };

  // Define content for each step with two paragraphs
  const stepContent = {
    1: {
      paragraph1: "Persetujuan Data Pribadi",
      paragraph2: "Dengan melanjutkan, Anda menyetujui pengumpulan, penggunaan, dan pengungkapan informasi Anda sesuai dengan kebijakan privasi kami."
    },
    2: {
      paragraph1: "Pemeriksa Kesehatan Mental",
      paragraph2: "Kuesioner ini terdiri dari 10 pertanyaan dan Anda hanya membutuhkan waktu 2-3 menit untuk menyelesaikannya. Semua informasi yang Anda bagikan di sini akan tetap dirahasiakan."
    },
    3: {
      paragraph1: "Terima Kasih Telah Berbagi Tentang Apa yang Anda Rasakan",
      paragraph2: "Apakah Anda berpikir untuk mengakhiri hidup?"
    },
    4: {
      paragraph1: "Apakah Anda mengalami perubahan yang",
      paragraph2: "signifikan dalam pola makan Anda?"
    },
    5: {
      paragraph1: "Apakah Anda merasa tidak berharga atau bersalah",
      paragraph2: "tanpa alasan yang jelas?"
    },
    6: {
      paragraph1: "Apakah Anda merasa lelah atau kehabisan energi",
      paragraph2: "sepanjang hari?"
    },
    7: {
      paragraph1: "Apakah Anda sering merasa gelisah atau cemas",
      paragraph2: "tanpa alasan yang jelas?"
    },
    8: {
      paragraph1: "Apakah Anda pernah mengalami masa di mana Anda",
      paragraph2: "merasa sangat sedih, kehilangan minat pada aktivitas yang biasanya Anda nikmati, dan sulit untuk merasa senang?"
    },
    9: {
      paragraph1: "Apakah Anda mengalami serangan panik secara tiba-tiba?",
    },
    10: {
      paragraph1: "Apakah Anda kesulitan tidur atau mengalami tidur",
      paragraph2: "berlebihan?"
    },
    11: {
      paragraph1: "Apakah Anda merasa ingin menghindari orang-orang atau",
      paragraph2: "situasi sosial?"
    },
    12: {
      paragraph1: "Apakah Anda mengalami gejala fisik seperti detak jantung",
      paragraph2: "cepat, gemetar, atau sesak napas ketika merasa cemas?"
    },
    13: {
      paragraph1: "Terima kasih telah berbagi apa yang Anda alami",
      paragraph2: "Apakah Anda akan melanjutkan konsultasi?",
    }
  };

  return (
    <div className="overflow-hidden min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <button onClick={handleBackClick} className="text-[#1572A1] hover:text-blue-500">
          <FaArrowLeft size={24} />
        </button>
        <img src={logo} alt="Logo" className="h-8" />
        <div className="w-6"></div>
      </header>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md text-center">
          <p>{stepContent[currentStep].paragraph1}</p>
          <p>{stepContent[currentStep].paragraph2}</p>
          {currentStep === 13 && (
            <div className="flex items-center justify-center mt-4">
              <FaCheckCircle size={50} className="text-green-500 mr-2" />
            </div>
          )}
          <div className="mt-4 flex justify-center space-x-2">
            {currentStep === 1 || currentStep === 2 ? (
              // First and second steps have one button
              <button 
                onClick={handleNextClick} 
                className="bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
              >
                Selanjutnya
              </button>
            ) : currentStep < 13 ? (
              // Steps 3 to 12 have "Ya" and "Tidak" buttons
              <>
                <button 
                  onClick={handleNextClick} 
                  className="bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                  Ya
                </button>
                <button 
                  onClick={handleNextClick} 
                  className="bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                  Tidak
                </button>
              </>
            ) : (
              // Final step has "Ya" and "Tidak" buttons, handleFinalStep for "Ya"
              <>
                <button 
                  onClick={handleFinalStep} 
                  className="bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                  Ya
                </button>
                <button 
                  onClick={handleNextClick} 
                  className="bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                >
                  Tidak
                </button>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;
