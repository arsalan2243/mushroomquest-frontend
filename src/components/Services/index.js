import React from 'react';
import Icon1 from '../../mushromPictures/education.png'
import Icon2 from '../../mushromPictures/phone.png'
import Icon3 from '../../mushromPictures/collection.png'
import Icon4 from '../../mushromPictures/nature.png'
import {ServiceContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
const Services = () => {


    return (
        <>
        <ServiceContainer id="services">
            <ServicesH1> Our Services </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2> EDUCATIONAL ADVENTURE!</ServicesH2>
                        <ServicesP> Our app makes mushroom identification fun for all ages!</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2> Unlimited Access. Anytime, Anywhere   </ServicesH2>
                        <ServicesP> no matter the time, we are always there to identify your findings</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>expanding collection!</ServicesH2>
                        <ServicesP>We are growing our mushroom collection day by day, so you never run out of fun activities!</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4}/>
                        <ServicesH2> appriciate nature! </ServicesH2>
                        <ServicesP>
By understanding its inhabitants better, you will come to appreciate it even more than before!</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServiceContainer>
        </>
    )
}

export default Services