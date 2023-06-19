import React from 'react';
import {Element} from 'react-scroll';
import {GiCardboardBox} from "react-icons/gi"
import {HiColorSwatch} from "react-icons/hi"
import {MdDeveloperBoard} from "react-icons/md"
import {AiOutlineBlock} from "react-icons/ai"

// import { Container } from './styles';

function services() {
  return (
    <Element id='services' name='services'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-400'>
                My skills
            </p>
            <h1 className='text-indigo-900 text-6xl font-bold text-center'>
                My Expertise
            </h1>
            <div className='flex justify-items-start items-center mx40 gap-10 mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center cursor-pointer'>
                        <GiCardboardBox className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 rounded-md'/>

                    </div>
                </div>
            </div>
        </div>
    </Element>
  );
}

export default services;