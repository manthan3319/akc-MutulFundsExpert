import React from 'react';
import { WhatsApp_icon } from '../images/Images';

const WhatsAppIcon = () => {
  const phoneNumber = "+919974870436"; // अपना फोन नंबर यहाँ डालें

  return (
    <a 
      href={`https://api.whatsapp.com/send/?phone=${phoneNumber}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed right-[10px] bottom-[10px] z-[9]"
    >
      <img src={WhatsApp_icon} className="w-[50px] cursor-pointer" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppIcon;
