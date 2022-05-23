import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
 Container,
 Header,
 CarImages,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 About
} from './styles';


export function CarDetails(){

  return (
     <Container>
       <Header>
          <BackButton onPress={() => {}}/>
       </Header>

        <CarImages>
          <ImageSlider imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} />
       </CarImages>

       <Content>
         <Details>

           <Description>
             <Brand>Lamborghini</Brand>
             <Name>Huracan</Name>
           </Description>

           <Rent>
             <Period>Ao dia</Period>
             <Price>R$ 580</Price>
           </Rent>

         </Details>

         <About>
           Este é um automovel espotivo. Surgiu do lendario touro de lide insultado na praça Real Maestranha. É um belissimo carro para quem gosta de acelerar.
         </About>
       </Content>

     </Container>
  );
  
}