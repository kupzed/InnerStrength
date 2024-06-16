import React, { useState } from 'react';

const Profile = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Pria');
  const [profileImage, setProfileImage] = useState(null);

  const handlePasswordUpdate = () => {
    // Add your password update logic here
    console.log('Password updated');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full md:w-full p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Profile akun</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Informasi login</h3>
        <p className="text-gray-700">geizka@gmail.com</p>
        <button className="text-blue-500 hover:underline mt-2">Ubah Sandi</button>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Ubah Sandi</h3>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Verifikasi password lama"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Buat password baru"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Masukkan kembali password baru"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="w-full p-2 bg-blue-500 text-white rounded-md"
            onClick={handlePasswordUpdate}
          >
            Update Password
          </button>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Personal informasi</h3>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Nama Depan (opsional)"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nama Tengah (opsional)"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nama Belakang (opsional)"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <select
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Foto profilku</h3>
        <div className="mt-4 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="upload"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="upload"
            className="cursor-pointer p-2 bg-blue-500 text-white rounded-md"
          >
            Upload foto
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
