import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti'

function Success() {

    const [pieces, setPieces] = useState(200);

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 2000);
    }

    useEffect(() => {
        stopConfetti();
    }, [])


    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='h-screen w-screen flex items-center justify-center'>
            <div className='text-center p-10 flex flex-col bg-white flex rounded-lg w-w1/2 mx-28 font-latoRegular'>
                <h1 className=' text-3xl pb-4 font-latoBold'>Thanks for the registration! ⭐</h1>
                <p>We have sent you an email, please confirm it!</p>
                <Link to='/'>
                    <button type='submit'
                        className='font-bold text-sm text-white py-3 mt-6 rounded-lg w-full'
                        style={{ backgroundColor: "#4286f4" }}>
                        Continue
                    </button>
                </Link>
            </div>
            <Confetti gravity={0.2} numberOfPieces={pieces} />
        </motion.main>
    )
}

export default Success