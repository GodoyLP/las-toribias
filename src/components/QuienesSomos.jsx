import React, { useState, useEffect, useRef } from 'react';
import vista_sierra from '../imagenes/fotos/vista-sierra.webp';
import condor from '../imagenes/fotos/condor.webp';
import arroyo1 from '../imagenes/fotos/arroyo1.webp';

import reviews from '../data/reseña';

const QuienesSomos = () => {

    const nwData = reviews.filter(r => r.rating > 3);

    const [nwIndex, setNwIndex] = useState(0);
    const nwTimerRef = useRef(null);
    const startXRef = useRef(0);

    const nwInit = (n) => n.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2);

    const nwGo = (i) => {
        setNwIndex(i);
        if (nwTimerRef.current) clearInterval(nwTimerRef.current);
        nwTimerRef.current = setInterval(() => {
            setNwIndex(prev => (prev + 1) % nwData.length);
        }, 4000);
    };

    const nwNext = () => {
        setNwIndex(prev => {
            const next = (prev + 1) % nwData.length;
            if (nwTimerRef.current) clearInterval(nwTimerRef.current);
            nwTimerRef.current = setInterval(() => {
                setNwIndex(p => (p + 1) % nwData.length);
            }, 4000);
            return next;
        });
    };

    const nwPrev = () => {
        setNwIndex(prev => {
            const next = (prev - 1 + nwData.length) % nwData.length;
            if (nwTimerRef.current) clearInterval(nwTimerRef.current);
            nwTimerRef.current = setInterval(() => {
                setNwIndex(p => (p + 1) % nwData.length);
            }, 4000);
            return next;
        });
    };

    useEffect(() => {
        nwTimerRef.current = setInterval(() => {
            setNwIndex(prev => (prev + 1) % nwData.length);
        }, 4000);

        const carousel = document.querySelector('.nw-carousel');
        if (!carousel) return;

        // Touch support
        const handleTouchStart = (e) => {
            startXRef.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const diff = startXRef.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? nwNext() : nwPrev();
            }
        };

        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('touchend', handleTouchEnd);

        // Keyboard support
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') nwPrev();
            if (e.key === 'ArrowRight') nwNext();
        };

        document.addEventListener('keydown', handleKeyDown);

        // Pause on hover
        const widget = document.querySelector('.nw-widget');
        const handleMouseEnter = () => {
            if (nwTimerRef.current) clearInterval(nwTimerRef.current);
        };
        const handleMouseLeave = () => {
            nwTimerRef.current = setInterval(() => {
                setNwIndex(prev => (prev + 1) % nwData.length);
            }, 4000);
        };

        if (widget) {
            widget.addEventListener('mouseenter', handleMouseEnter);
            widget.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (nwTimerRef.current) clearInterval(nwTimerRef.current);
            carousel.removeEventListener('touchstart', handleTouchStart);
            carousel.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('keydown', handleKeyDown);
            if (widget) {
                widget.removeEventListener('mouseenter', handleMouseEnter);
                widget.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);




    return (
        <>
            <div className="p-2 mt-5 pt-5  bg-dark text-light">
                <div className='container-quienesomos text-center'>

                    <div className="row mt-4">
                        <div className="text-toribia col-sm-3 p-4">
                            Disfruta de la tranquilidad y el confort en nuestra segunda cabaña, equipada con todo lo necesario para una estadía inolvidable.
                        </div>
                        <div className="col-sm-6 text-center">
                            <img className="img-quienes-somos" src={vista_sierra} alt="foto vista desde lasierra" />
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-sm-6 text-center">
                            <img className="img-quienes-somos" src={condor} alt="Foto condor volando" />
                        </div>
                        <div className="text-toribia col-sm-3 p-4">
                            Disfruta de la tranquilidad y el confort en nuestra segunda cabaña, equipada con todo lo necesario para una estadía inolvidable.
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="text-toribia col-sm-3 p-4">
                            Disfruta de la tranquilidad y el confort en nuestra segunda cabaña, equipada con todo lo necesario para una estadía inolvidable.
                        </div>
                        <div className="col-sm-6 text-center">
                            <img className="img-quienes-somos" src={arroyo1} alt="Foto de arro en la sierra" />
                        </div>

                    </div>

                    <div className="nw-widget">
                        <div className="nw-header">
                            <div className="nw-rating">
                                <div className="nw-rating-row">
                                    <span className="nw-score">5.0</span>
                                    <div className="nw-stars">
                                        <svg className="nw-star" viewBox="0 0 24 24" fill="#ffd700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                        <svg className="nw-star" viewBox="0 0 24 24" fill="#ffd700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                        <svg className="nw-star" viewBox="0 0 24 24" fill="#ffd700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                        <svg className="nw-star" viewBox="0 0 24 24" fill="#ffd700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                        <svg className="nw-star" viewBox="0 0 24 24" fill="#ffd700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    </div>
                                </div>
                                <div className="nw-count">14 reseñas en Google</div>
                            </div>
                        </div>

                        <div className="nw-container">
                            <button className="nw-arrow nw-arrow-prev" onClick={nwPrev}>
                                <svg className="nw-arrow-icon" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
                            </button>
                            <button className="nw-arrow nw-arrow-next" onClick={nwNext}>
                                <svg className="nw-arrow-icon" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" /></svg>
                            </button>
                            <div className="nw-carousel">
                                <div className="nw-slides" style={{ transform: `translateX(-${nwIndex * 20}%)` }}>
                                    {nwData.map((review, index) => (
                                        <div key={index} className="nw-slide">
                                            {/* <div className="nw-avatar">{nwInit(review.name)}</div> */}
                                            <div className="nw-name">{review.name}</div>
                                            <div className="nw-review-stars">
                                                {Array(5).fill(0).map((_, i) => (
                                                    <svg key={i} className="nw-review-star" viewBox="0 0 24 24" fill={i < review.rating ? '#ffd700' : '#e2e8f0'}>
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <div className="nw-text">{review.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="nw-dots">
                            {nwData.map((_, i) => (
                                <button
                                    key={i}
                                    className={`nw-dot${i === nwIndex ? ' nw-active' : ''}`}
                                    onClick={() => nwGo(i)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="nw-center">
                        <a href="https://www.google.com/maps/place/Caba%C3%B1as+Las+Toribias/@-32.3454028,-64.9968124,17z/data=!4m8!3m7!1s0x95d2e70378da967b:0x63be3942a0680c5c!8m2!3d-32.3454074!4d-64.9919468!9m1!1b1!16s%2Fg%2F11sv0y3zc4?authuser=0&entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="nw-btn">
                            <svg className="nw-icon" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            ver en Google<br></br> Toribia I
                        </a>
                        <a href="https://www.google.com/maps/place/Las+Toribias+II/@-34.6009253,-58.5481858,15z/data=!4m8!3m7!1s0x95d2e79a21212f2d:0x35984b32ed519716!8m2!3d-32.3456825!4d-64.99271!9m1!1b1!16s%2Fg%2F11wtlr880t?authuser=0&entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="nw-btn">
                            <svg className="nw-icon" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            ver en Google <br></br> Toribia II
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default QuienesSomos;
