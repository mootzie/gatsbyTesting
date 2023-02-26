import React from 'react';
import '../styles/hero.css'
import Sidebar from '../components/sidebar';
const Hero = () => {
    return(

        <div className='hero__container my_bg' >
       
            <div className='hero__row'>
                <div classname='hero__col'>

                    <div className='hero__textContainer'>

                        <h1 className='hero__heading'>
                         <span className='scriptText'>Your Life</span>
                        </h1>
                        
                    <div className='hero__subheading'>
                        <h2 className='hero__subheading hero__subheading__text'>
                           what you gonna do?
                        </h2>
                    </div>
                    </div>
                    <div class="center">
  <h1>
    <span>Welcome</span>
  
    <span>Welcome</span>
    <span>Welcome</span>
  
  </h1>
</div>
                </div>
            </div>
</div>

    )
}

export default Hero;