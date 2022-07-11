import React from 'react';
import supportImg from '../assets/rumah1.jpg'
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const Pricing = () => {
  const arrPaket = [
    {
      namaPaket: 'Paket 1',
      codePaket: 'paket1',
      harga: 'Rp 250.000',
      per: 'lantai',
      detailPaket: ['Denah 2D', 'Denah 3D', '3x Revisi']
    },
    {
      namaPaket: 'Paket 2',
      codePaket: 'paket2',
      harga: 'Rp 400.000',
      per: 'lantai',
      detailPaket: ['Denah 2D', '3D Eksterior (5 View)', '3x Revisi']
    },
    {
      namaPaket: 'Paket 3',
      codePaket: 'paket3',
      harga: 'Rp 20.000',
      per: 'm2',
      detailPaket: ['Denah 2D', '3D Eksterior (5 View)', 'Gambar Kerja (Detail Bangunan)', '3x Revisi']
    },
    {
      namaPaket: 'Paket Lain Lain',
      codePaket: 'paketOther',
      harga: 'Rp 150.000',
      per: 'ruangan',
      detailPaket: ['3D Interior']
    }
  ]
  const handleClick = (paket) => {
    if (paket === 'paket1') {
      const url = 'https://api.whatsapp.com/send?phone=6281326605281&text=Hai+kiw.ds%2C+saya+ingin+order+desain+paket+1';
      window.open(url, "_blank") 
    } else if (paket === 'paket2') {
      const url = 'https://api.whatsapp.com/send?phone=6281326605281&text=Hai+kiw.ds%2C+saya+ingin+order+desain+paket+2';
      window.open(url, "_blank")
    } else if (paket === 'paket3') {
      const url = 'https://api.whatsapp.com/send?phone=6281326605281&text=Hai+kiw.ds%2C+saya+ingin+order+desain+paket+3';
      window.open(url, "_blank")
    } else if (paket === 'paketOther') {
      const url = 'https://api.whatsapp.com/send?phone=6281326605281&text=Hai+kiw.ds%2C+saya+ingin+order+desain+paket+lain';
      window.open(url, "_blank")
    }
  }
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Harga</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Harga yang terjangkau</h3>
          <p className='text-3xl'>
            Kami menyediakan dua paket, dengan berbagai keuntungan.
          </p>
        </div>

        <div className='grid md:grid-cols-2 relative'>
        {arrPaket.map((item, idx) => (
          <div className='flex flex-col justify-between bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
            <div className="p-1">
              <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>{item.namaPaket}</span>
              <div>
                <p className='text-3xl md:text-4xl lg:text-6xl font-bold py-4 flex'>{item.harga}<span className='text-xl text-slate-500 flex flex-col justify-end'>/{item.per}</span></p>
              </div>
              <p className='text-2xl py-5 md:py-8 text-slate-500'>Dengan memesan paket ini anda mendapatkan:</p>
              {item.detailPaket.map((el, idx) => (
                <div className='text-2xl'>
                  <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>{el}.</p>
                </div>
              ))}
            </div>
            <div className='bg-white'>
              <button className='w-full py-4 my-4' onClick={() => handleClick(`${item.codePaket}`)}>Pesan</button>
            </div>
          </div>
        ))}
          {/* <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-5xl md:text-5xl lg:text-6xl font-bold py-4 flex'>Rp.150.000<span className='text-xl text-slate-500 flex flex-col justify-end'>,--</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Dengan memesan paket standard anda mendapatkan:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar Kerja.</p>
            </div>
            <div className='bg-white'>
              <button className='w-full py-4 my-4' onClick={() => handleClick('standard')}>Pesan</button>
            </div>
          </div> */}
          {/* <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>Rp.300.000<span className='text-xl text-slate-500 flex flex-col justify-end'>,--</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Dengan memesan paket premium anda mendapatkan:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar Kerja</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar 3D Eksterior (4)</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar 3D Interior (2)</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><XIcon className='w-8 mr-5 text-red-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4' onClick={() => handleClick('premium')}>Pesan</button>
            </div>
            <div className='bg-white'>
              <button className='w-full py-4 my-4' onClick={() => handleClick('standard')}>Pesan</button>
            </div>
          </div> */}
          {/* <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>Rp.150.000<span className='text-xl text-slate-500 flex flex-col justify-end'>,--</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Dengan memesan paket standard anda mendapatkan:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar Kerja.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar 3D Eksterior (2)</p>
                <p className='flex py-4'><XIcon className='w-8 mr-5 text-red-600'  />Gambar 3D Interior</p>
                <p className='flex py-4'><XIcon className='w-8 mr-5 text-red-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><XIcon className='w-8 mr-5 text-red-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4' onClick={() => handleClick('standard')}>Pesan</button>
            </div>
          </div> */}
          {/* <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>Rp.300.000<span className='text-xl text-slate-500 flex flex-col justify-end'>,--</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Dengan memesan paket premium anda mendapatkan:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar Kerja</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar 3D Eksterior (4)</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gambar 3D Interior (2)</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p> 
                <button className='w-full py-4 my-4' onClick={() => handleClick('premium')}>Pesan</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
