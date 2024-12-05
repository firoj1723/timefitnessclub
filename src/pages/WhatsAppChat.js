import React from 'react';

function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/919887200003"  // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <button className="btn btn-success">
        <i className="fab fa-whatsapp"></i> Chat with us on WhatsApp
      </button>
    </a>
  );
}

export default WhatsAppChat;
