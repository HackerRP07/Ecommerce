import React from 'react';
import HomeSectionCard from '../HomeSectioncard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const HomeSectionCarosel = () => {

    const responsive ={
        0:{items:1},
        720:{items:3},
        1024:{items:5.5},
    };

    const items=[1,1,1,1,1].map((item)=><HomeSectionCard/>)
    return (
    <div className=" px-4 lg:px-8 border">
        <div className="relative p-5 ">
        <AliceCarousel
        disableButtonsControls
        items={items}
        infinite
        disableDotsControls
        responsive={responsive} />

        <Button variant="contained" className='z-50 bg-white' sx={{position:'absolute',top:"8rem",right:"0rem",transform:"translateX(50%) rotate(90deg )",bgcolor:"white"}} aria-label='next'>
            <ChevronLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>  
        </Button>

        <Button variant="contained" className='z-50 bg-white' sx={{position:'absolute',top:"8rem",left:"0rem",transform:"translateX(-50%) rotate(-90deg )",bgcolor:"white"}} aria-label='next'>
            <ChevronLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>  
        </Button>
        </div>
    </div>
    )
}

export default HomeSectionCarosel;





