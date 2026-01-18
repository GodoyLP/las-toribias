import React, { useState, useEffect } from 'react';
import watsappGif from '../imagenes/iconos/gif/whatsapp-hover-pinch.gif';

const BotonWhatsapp = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const rect = footer.getBoundingClientRect();
                // Si el borde superior del footer entra en la ventana (es menor que la altura de la ventana), ocultamos el botón
                setIsVisible(rect.top > window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificación inicial por si carga ya scrolleado

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href="https://wa.me/5491160387088"
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat en WhatsApp"
            style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none', // Evita clicks cuando es invisible
                transition: 'opacity 0.3s ease, transform 0.3s ease-in-out', // Mantiene tu animación de hover
                
            }}
        >
            <img src={watsappGif} alt="WhatsApp" />
        </a>
    );
};

export default BotonWhatsapp;