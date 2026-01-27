import configDetail from "@/config";

export const openWhatsApp = (propertyTitle?: string) => {
  const phoneNumber = configDetail.phoneNumber; 
  const phoneNumber2 = configDetail.phoneNumber_2;
  const phoneNumber3 = configDetail.phoneNumber_3;
  
  const phoneNumbers = [phoneNumber, phoneNumber2, phoneNumber3].filter(Boolean);
  const selectedPhone = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];

  const baseMessage = propertyTitle
    ? `Hello! I'm interested in the property "${propertyTitle}". Could you please provide more details about:\n\n• Price and payment options\n• Location and amenities\n• Availability for viewing\n\nThank you!`
    : `Hello! I'm interested in your property listings. Could you please provide more details about available properties?\n\nThank you!`;

  const encodedMessage = encodeURIComponent(baseMessage);
  const whatsappUrl = `https://wa.me/${selectedPhone}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
