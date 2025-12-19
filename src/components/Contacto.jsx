import '../styles/contacto.css'

const Contacto = () => {
    return (
        <>
            
            <section class="contact section" id="contact">
                <h2 class="section-title" data-heading="Get in Touch">Contactame</h2>

                <div class="contact-container container grid">
                    <div class="contact-content ">
                        <div class="contact-info text-decoration-none">
                            <div class="contact-card">
                                <i class="uil uil-envelope-edit contact-card-icon"></i>
                                <h3 class="contact-card-title">Email</h3>
                                <span class="contact-card-data">user@gmail.com</span>
                                <span class="contact-button">Escribime <i class="uil uil-arrow-right contact-button-icon"></i></span>
                            </div>

                            <div class="contact-card">
                                <i class="uil uil-whatsapp contact-card-icon"></i>
                                <h3 class="contact-card-title">Whatsapp</h3>
                                <span class="contact-card-data">333-333-333</span>
                                <span class="contact-button">Escribime <i class="uil uil-arrow-right contact-button-icon"></i></span>
                            </div>

                            <div class="contact-card">
                                <i class="uil uil-facebook-messenger contact-card-icon"></i>
                                <h3 class="contact-card-title">@lastoribia</h3>
                                <span class="contact-card-data">user.ssss</span>
                                <span class="contact-button">Seguime <i class="uil uil-arrow-right contact-button-icon"></i></span>
                            </div>
                        </div>
                    </div>

                    <div class="contact-content">
                        <form action="" class="contact-form">
                            <div class="input-container">
                                <input type="text" class="input"/>
                                    <label for="">Username</label>
                                    <span>Username</span>
                            </div>

                            <div class="input-container">
                                <input type="email" class="input"/>
                                    <label for="">Email</label>
                                    <span>Email</span>
                            </div>

                            <div class="input-container">
                                <input type="tel" class="input"/>
                                    <label for="">Phone</label>
                                    <span>Phone</span>
                            </div>

                            <div class="input-container textarea">
                                <textarea name="" id="" class="input"></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>

                            <button type="submit" class="button"><i class="uil uil-navigator button-icon"></i>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>  
    

    </>
    );
}

export default Contacto;
