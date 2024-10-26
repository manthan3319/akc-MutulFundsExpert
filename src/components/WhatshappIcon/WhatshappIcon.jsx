import React from 'react';
import { WhatsApp_icon } from '../images/Images';

const WhatsAppIcon = () => {
  
  return (
    <a 
      href=' https://wa.me/919974870436'
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed right-[10px] bottom-[10px] z-[9]"
    >
      <img src={WhatsApp_icon} className="w-[50px] cursor-pointer" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppIcon;
