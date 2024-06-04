// src/DaftarTerapis.jsx
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField, Box, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Input, Checkbox, FormGroup } from '@mui/material';
import { Link } from "react-router-dom";

const steps = ['Data Diri', 'Pendidikan dan Pengalaman', 'Keahlian dan Keterampilan', 'Kepribadian dan Motivasi', 'Dokumentasi'];

const DaftarTerapis = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    namalengkap: '',
    alamat:'',
    nomortelepon:'',
    email: '',
    tanggallahir: '',
    jeniskelamin: '',
    kewarganegaraan: '',
    password: '',
    masukkankembalipassword: '',
    gelarsarjanapsikolog: '',
    namauniversitas: '',
    tahunlulus: '',
    fokuspengalaman: '',
    pengalamankerja: '',
    pengalamanterapionline: '',
    pemahamantentangteori: '',
    kemampuanmembangun: '',
    kemampuanpenilaian: '',
    kemampuanmengembangkan: '',
    kemampuankomunikasi: '',
    kemampuanmenjaga: '',
    tingkatempati: '',
    tingkatkeserapan: '',
    orientasi: '',
    komitmen: '',
    antusiasme: '',
    kemampuanmenjagaprivasi:'',
    document: null,

  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleFileChange = (e) => {
    setFormValues({ ...formValues, document: e.target.files[0] });
  };

  const handleSubmit = () => {
    // Logic untuk submit data
    console.log(formValues);
    setActiveStep(activeStep + 1);
  };
  
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box p={2}>
            <br></br>Nama Lengkap
            <TextField 
              name="namalengkap"
              value={formValues.namalengkap}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Alamat
            <TextField
              type="alamat"
              name="alamat"
              value={formValues.alamat}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Nomor Telepon
            <TextField
              name="nomortelepon"
              value={formValues.nomortelepon}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Email
            <TextField
              name="email"
              value={formValues.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Tanggal Lahir
            <TextField
              name="tanggallahir"
              value={formValues.tanggallahir}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Jenis Kelamin
            <TextField
              name="jeniskelamin"
              value={formValues.jeniskelamin}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Kewarganegaraan
            <TextField
              name="kewarganegaraan"
              value={formValues.kewarganegaraan}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Password
            <TextField
              name="password"
              value={formValues.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Masukkan Kembali Password
            <TextField
              name="masukkankembalipassword"
              value={formValues.masukkankembalipassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
        );
      case 1:
        return (
          <Box p={2}>
            <br></br>Gelar Sarjana Spikolog
            <TextField
              name="gelarsarjanapsikolog"
              value={formValues.gelarsarjanapsikolog}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Nama Universitas
            <TextField
              name="namauniversitas"
              value={formValues.namauniversitas}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Fokus Pengalaman (Pilih Salah Satu atau Lebih)
            <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Gangguan Kecemanasan" />
            <FormControlLabel control={<Checkbox />} label="Depresi" />
            <FormControlLabel control={<Checkbox />} label="Gangguan Bipolar" />
            <FormControlLabel control={<Checkbox />} label="Trauma" />
            <FormControlLabel control={<Checkbox />} label="Gangguan hubungan dan keluarga" />
            <FormControlLabel control={<Checkbox />} label="Gangguan makan" />
            <FormControlLabel control={<Checkbox />} label="Kecanduan" />
            </FormGroup>
            <br></br>Pengalaman Kerja (Minimal 2 Bulan)
            <TextField
              name="pengalamankerja"
              value={formValues.pengalamankerja}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <br></br>Pengalaman Terapi Online
            <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Ya" />
            <FormControlLabel control={<Checkbox />} label="Tidak" />
            </FormGroup>
          </Box>
        );
      case 2:
        return (
          <Box p={2}>
            <Typography variant="h6"> Harap berikan penilaian Anda untuk setiap kriteria di bawah ini menggunakan skala 1-5, di mana:
            <br></br>1. Tidak Memadai: Tidak memiliki pemahaman atau kemampuan dalam area tersebut.
            <br></br>2. Kurang Memadai: Memiliki pemahaman atau kemampuan yang sangat terbatas dalam area tersebut.
            <br></br>3. Cukup Memadai: Memiliki pemahaman atau kemampuan yang memadai dalam area tersebut, tetapi masih memerlukan pengembangan lebih lanjut.
            <br></br>4. Baik: Memiliki pemahaman atau kemampuan yang baik dalam area tersebut dan dapat melaksanakan tugas dengan lancar.
            <br></br>5. Sangat Baik: Memiliki pemahaman atau kemampuan yang sangat baik dalam area tersebut dan dapat menjadi panutan bagi orang lain.</Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="pemahamantentangteori"
                name="pemahamantentangteori"
                value={formValues.pemahamantentangteori}
                onChange={handleChange}
                row
              >
                <div className='flex gap-32 items-center border w-full'>
                <p>Pemahaman tentang Teori dan Praktik Psikoterapi</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="kemampuanmembangun"
                name="kemampuanmembangun"
                value={formValues.kemampuanmembangun}
                onChange={handleChange}
                row
              >
                <div className='flex gap-32 items-center border w-full'>
                <p>Kemampuan Membangun Hubungan Terapeutik</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="kemampuanpenilaian"
                name="kemampuanpenilaian"
                value={formValues.kemampuanpenilaian}
                onChange={handleChange}
                row
              >
                <div className='flex gap-32 items-center border w-full'>
                <p>Kemampuan Penilaian Psikologis dan Diagnosis</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="kemampuanmengembangkan"
                name="kemampuanmengembangkan"
                value={formValues.kemampuanmengembangkan}
                onChange={handleChange}
                row
              >
                <div className='flex gap-32 items-center border w-full'>
                <p>Kemampuan Mengembangkan Rencana Terapi</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="kemampuankomunikasi"
                name="kemampuankomunikasi"
                value={formValues.kemampuankomunikasi}
                onChange={handleChange}
                row
              >
                <div className='flex gap-40 items-center border w-full'>
                <p>Kemampuan Komunikasi</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="kemampuanmenjaga"
                name="kemampuanmenjaga"
                value={formValues.kemampuanmenjaga}
                onChange={handleChange}
                row
              >
                <div className='flex gap-32 items-center border w-full'>
                <p>Kemampuan Menjaga Privasi dan Kerahasiaan</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
          </Box>
        );
      case 3:
        return (
          <Box p={2}>
            <Typography variant="h6"> Harap berikan penilaian Anda untuk setiap kriteria di bawah ini menggunakan skala 1-5, di mana:
            <br></br>1. Tidak Memadai: Tidak memiliki pemahaman atau kemampuan dalam area tersebut.
            <br></br>2. Kurang Memadai: Memiliki pemahaman atau kemampuan yang sangat terbatas dalam area tersebut.
            <br></br>3. Cukup Memadai: Memiliki pemahaman atau kemampuan yang memadai dalam area tersebut, tetapi masih memerlukan pengembangan lebih lanjut.
            <br></br>4. Baik: Memiliki pemahaman atau kemampuan yang baik dalam area tersebut dan dapat melaksanakan tugas dengan lancar.
            <br></br>5. Sangat Baik: Memiliki pemahaman atau kemampuan yang sangat baik dalam area tersebut dan dapat menjadi panutan bagi orang lain.</Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="tingkatempati"
                name="tingkatempati"
                value={formValues.tingkatempati}
                onChange={handleChange}
                row
              >
              <div className='flex gap-44 items-center border w-full'>
                <p>Tingkat Empati</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="tingkatkeserapan"
                name="tingkatkeserapan"
                value={formValues.tingkatkeserapan}
                onChange={handleChange}
                row
              >
              <div className='flex gap-44 items-center border w-full'>
                <p>Tingkat Kesabaran</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="orientasi"
                name="orientasi"
                value={formValues.orientasi}
                onChange={handleChange}
                row
              >
              <div className='flex gap-36 items-center border w-full'>
                <p>Orientasi pada Solusi dan Pemulihan</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="komitmen"
                name="komitmen"
                value={formValues.komitmen}
                onChange={handleChange}
                row
              >
              <div className='flex gap-32 items-center border w-full'>
                <p>Komitmen untuk Memberikan Layanan Terbaik</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="antusiasme"
                name="antusiasme"
                value={formValues.antusiasme}
                onChange={handleChange}
                row
              >
              <div className='flex gap-32 items-center border w-full'>
                <p>Antusiasme dalam Membantu Kesejahteraan Mental</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
            <Typography variant="h6"> </Typography>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup
                aria-label="kemampuanmenjagaprivasi"
                name="kemampuanmenjagaprivasi"
                value={formValues.kemampuanmenjagaprivasi}
                onChange={handleChange}
                row
              >
              <div className='flex gap-32 items-center border w-full'>
                <p>Kemampuan Menjaga Privasi dan Kerahasiaan</p>
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                </div>
              </RadioGroup>
            </FormControl>
          </Box>
        );
        case 4:
        return (
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6"></Typography>
            <br></br>Salinan Ijazah Sarjana Psikologi
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            
            />
            <Typography variant="h6"></Typography>
            <br></br>Transkip Nilai Akademik
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6"></Typography>
            <br></br>Surat Izin Praktik Psikolog (SIPP)
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6"></Typography>
            <br></br>Curriculum Vitae (CV)
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6"></Typography>
            <br></br>Surat Rekomendasi dari 2 Psikolog Senior
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6"></Typography>
            <br></br>Sertifikat Pelatihan Terapi yang Relevan
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6"></Typography>
            <br></br>Surat Keterangan Sehat dari Dokter
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
            <Typography variant="h6"></Typography>
            <br></br>Foto Terbaru Ukuran 4x6 cm
            <Input
              type="file"
              name="document"
              onChange={handleFileChange}
              fullWidth
              margin="normal"
            />
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box p={3}>
      <Stepper className="w-full" activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel className="flex flex-col w-32 text-center gap-3">
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className='pt-4'>
          <Link to="/LoginTerapis"
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1572A1] hover:bg-[#008DDA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008DDA]"
          >
            Login
          </Link>
        </div>
        ) : (
          <div>
            {renderStepContent(activeStep)}
            <Box mt={2}>
              {activeStep === steps.length - 1 ? (
                <Button className='w-full' variant="contained" color="primary" onClick={handleSubmit}>
                  Selesai
                </Button>
              ) : (
                <Button className="w-full" variant="contained" color="primary" onClick={handleNext}>
                  Selanjutnya
                </Button>
              )}
            </Box>
          </div>
        )}
      </div>
    </Box>
  );
};

export default DaftarTerapis;