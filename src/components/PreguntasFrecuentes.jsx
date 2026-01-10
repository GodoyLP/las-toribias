import React, { useState, useRef, useEffect } from 'react';

const FaqItem = ({ question, answer, isOpen, toggle }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className="faq-item">
            <button className={`faq-question ${isOpen ? 'active' : ''}`} onClick={toggle}>
                {question}
            </button>
            <div className="faq-answer" ref={contentRef} style={{ maxHeight: height }}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const PreguntasFrecuentes = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { q: "¿Qué incluye el paquete?", a: "Nuestros paquetes incluyen vuelos, alojamiento familiar, traslados, guías especializados y actividades pensadas para niños y bebés." },
        { q: "¿Cómo hago la reserva?", a: "La reserva se puede hacer fácilmente a través de nuestra página web en la sección \"Agendar Viaje\" o contactando directamente con nuestro equipo." },
        { q: "¿Hay descuentos para niños?", a: "Sí, ofrecemos descuentos especiales para niños menores de 12 años y tarifas especiales para bebés. Consulta nuestras promociones vigentes." },
        { q: "¿Se puede cancelar la reserva?", a: "Las reservas se pueden cancelar con hasta 7 días de anticipación para obtener reembolso completo. Verifica términos específicos según el paquete." },
        { q: "¿Qué medidas de seguridad se aplican durante el viaje?", a: "Implementamos estrictos protocolos sanitarios y seleccionamos alojamientos con certificación de seguridad para proteger a toda la familia." }
    ];

    return (
        
               <div className='text-center '>             
                <section className="faq-section">
                    <h3 className="faq-title">Preguntas Frecuentes</h3>
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={activeIndex === index}
                            toggle={() => toggleFAQ(index)}
                        />
                    ))}
                </section>
            </div>

        
    );
};


export default PreguntasFrecuentes;
