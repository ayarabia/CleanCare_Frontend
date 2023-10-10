import React from 'react';
import Service1 from '../../assets/imags/service1.png'
import Service2 from '../../assets/imags/service2.png'
import Service3 from '../../assets/imags/service3.png'
import Service4 from '../../assets/imags/service4.png'
import Service5 from '../../assets/imags/service5.png'
const card = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-10 -mt-24'>
            <div className='max-w-6xl mx-auto md:p-4'>
                <div className=''>
                    <a className='bg-[#ED5B2C] rounded-lg shadow-2xl w-72 h-72 grid '><img src={Service1} className='py-20 px-16' alt="" /></a>
                </div>
                <div className='my-8'>
                    <h1 className='flex justify-center text-xl'>Cleaning</h1>
                </div>
            </div>
            <div className='flex-1 max-w-6xl mx-auto md:p-4 '>
                <div className='bg-white rounded-lg'>
                    <a className='rounded-lg shadow-xl w-72 h-72 grid '><img src={Service2} className='py-20 px-16' alt="" /></a>
                </div>
                <div className='my-6'>
                    <h1 className='flex justify-center text-xl'>Laundry</h1>
                </div>
            </div>
            <div className='flex-1 max-w-6xl mx-auto md:p-4 '>
                <div className='bg-white rounded-lg'>
                    <a className='rounded-lg shadow-xl w-72 h-72 grid '><img src={Service3} className='py-20 px-16' alt="" /></a>
                </div>
                <div className='my-8'>
                    <h1 className='flex justify-center text-xl'>Car Wash</h1>
                </div>
            </div>
            <div className='flex-1 max-w-6xl mx-auto md:p-4 '>
                <div className='bg-white rounded-lg'>
                    <a className='rounded-lg shadow-xl w-72 h-72 grid '><img src={Service5} className='py-20 px-16' alt="" /></a>
                </div>
                <div className='my-8'>
                    <h1 className='flex justify-center text-xl'>Beautysalon</h1>
                </div>
            </div>
            <div className='flex-1 max-w-6xl mx-auto md:p-4 '>
                <div className='bg-white rounded-lg'>
                    <a className='rounded-lg shadow-xl w-72 h-72 grid '><img src={Service4} className='py-20 px-16' alt="" /></a>
                </div>
                <div className='my-8'>
                    <h1 className='flex justify-center text-xl'>Men Salon</h1>
                </div>
            </div>
            <div className='flex-1 max-w-6xl mx-auto md:p-4 '>
                <div className='hover:bg-black/20 bg-white rounded-lg'>
                    <a className='rounded-lg shadow-xl w-72 h-72 grid '><img src={Service5} className='py-20 px-16' alt="" /></a>
                </div>
                <div className='my-8'>
                    <h1 className='flex justify-center text-xl'>All Services</h1>
                </div>
            </div>
        </div>
    );
};

export default card;


