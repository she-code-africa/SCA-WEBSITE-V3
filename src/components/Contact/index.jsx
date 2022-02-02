import React from 'react';

const ContactForm = () => {
  return <section>
      <div className="contact_section">
            <div className="flex flex-row justify-between px-6">
                <div>
                    <h4 className="__shecode_title">Contact Us</h4>
                </div>
                <div className="__shecode_contactform">
                        <form>
                            <div>
                                <input placeholder="Full Name" required className="form-control"/>
                            </div>
                            <div>
                                <input placeholder="Email" required className="form-control"/>
                            </div>
                            <br/>
                            <div>
                                <textarea type="message" rows="8" placeholder="What would you like to ask us?"/>
                            </div>
                            <button type="submit" className="shecode_button">Send Message</button>
                        </form>
                </div>
            </div>
      </div>
  </section>;
};

export default ContactForm;
