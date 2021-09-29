import React, { useState, useEffect } from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import sliderData from '../assets/slider.data';

const HeroView =({slides})=>{
    const [current, setCurrent] = useState(0);
    const length = slides.length

    const handleNextSliders = () =>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const handlePrevSlidet = () =>{
        setCurrent(current === 0 ? length -1 : current -1)
    }
    
    useEffect(() => {
        setTimeout(()=>{
            handleNextSliders()
        },6000)
    }, [current]);


    if(!Array.isArray(slides) || length <= 0){
        return null
    }

    return(<>
        <div className='heroContainer'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={handlePrevSlidet}/>
                <FaArrowAltCircleRight className='right-arrow' onClick={handleNextSliders}/>                
                {
                    sliderData.map((element,index) => {
                        return(
                            <div>
                                {index === current && (<img src={element.image} key={element.id} alt='Makrtplace' className='image'/>)}                                
                            </div>
                        )
                    })
                }
        </div>
    </>)
}

export default HeroView