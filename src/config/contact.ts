// Contact configuration for the entire application
export const CONTACT = {
  phone: '+966539662194',
  phoneDisplay: '+966 53 966 2194',
  whatsapp: '966539662194',
  telegram: '966539662194',
  email: 'info@babarlogistics.com',
  location: {
    en: 'Riyadh, Saudi Arabia',
    ar: 'الرياض، المملكة العربية السعودية',
  },
};

export const getWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

export const getTelegramLink = (message?: string) => {
  const baseUrl = `https://t.me/${CONTACT.telegram}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

export const getEmailLink = (subject?: string, body?: string) => {
  let link = `mailto:${CONTACT.email}`;
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  if (params.length) link += `?${params.join('&')}`;
  return link;
};

export const getPhoneLink = () => `tel:${CONTACT.phone}`;
