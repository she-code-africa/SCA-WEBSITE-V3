import React from 'react';

const ContactForm = () => {
  return <div className="grid col-span-12">
           <div className="col-span-12 col-start-7 flex flex-col sm:flex-row justify-between contact_section px-6 w-full">
                <div className="w-5/12">
                  <h4 className="__shecode_title">Contact Us</h4>
                </div>
               <div className="__shecode_contactform">
                    <form method="post">
                        <div className="mb-4">
                            <input placeholder="Full Name" required className="form-control contact-form-input"/>
                        </div>
                        <div className="">
                            <input placeholder="Email" required className="form-control contact-form-input"/>
                        </div>
                        <br/>
                        <div>
                            <textarea className="contact-form-textarea" type="message" rows="8" placeholder="What would you like to ask us?"/>
                        </div>
                        <button type="submit" className="shecode_button">Send Message</button>
                    </form>
                 </div>
            </div>
    </div>      
};

export default ContactForm;
