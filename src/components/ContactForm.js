'use client'
import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { sendEmail } from "@/utils/sendEmail";

export default function ContactForm(){
    const  [formData, setFormData]= useState({
        from_name: '',
        from_email: '',
        phone_number: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({type: '', message: ''});
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(()=> {

        if(submitStatus.message){
            const timer = setTimeout(()=> {
                setSubmitStatus({type: '', message: ''});
            }, 5000)
        
            return () => clearTimeout(timer)
        }
    }, [submitStatus.message])

    const handleChange = (e) => {
        setIsTyping(true);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsTyping(false);
        setIsSubmitting(true);
        setSubmitStatus({type:'', message: ''});

        try {
            await sendEmail(formData);
            setSubmitStatus({
                type: 'success',
                message: 'Message Sent Successfully!'
            });
            setFormData({
                from_name: '',
                from_email: '',
                phone_number: '',
                subject: '',
                message: ''
    });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    }



    return (
        <SectionWrapper id="contact" paddingBottom= "25px" paddingTop= "25px">
            <SectionHeading title="GET IN TOUCH"/>
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="grid grid-rows-3 gap-6">
                            <div className="row-span-1">
                            <FormInput 
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                            </div>
                            <div className="row-span-1">
                            <FormInput 
                                type="tel"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                placeholder="Phone Number"
                            />
                            </div>
                            <div className="row-span-1">
                             <FormInput 
                                type="email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-6">
                            <div className="row-span-1">
                            <FormInput 
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                            />
                            </div>
                             <div className="row-span-2">
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message..."
                                required
                                className="w-full h-full rounded-3xl resize-none text-xs md:text-base lg:text-base"
                                rows="4"
                                style={{
                                    backgroundColor: "var(--input-background)",
                                    border: '1.5px solid transparent',
                                    color: 'var(--gray-text)',
                                    padding: '14px 24px',
                                    outline: 'none',
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor  = 'transparent'}
                            />
                        </div>
                        </div>
                    </div>
                     <div className="flex justify-end" style={{marginTop: "40px"}}>
                                <button
                                    type="submit"
                                    disabled= {isSubmitting}
                                    aria-disabled={isSubmitting}
                                    aria-busy={isSubmitting}
                                    className="rounded-full text-base font-semibold transition-all"
                                    style={{
                                        backgroundColor: 'var(--accent)',
                                        color: isButtonHovered?  'var(--background)' : 'var(--foreground)',
                                        padding: '10px 22px',
                                        border: 'none',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                        opacity: isSubmitting ? 0.6 : 1,
                                        boxShadow: isButtonHovered ? '0 0 25px rgba(113, 197, 173, 0.6)' : 'none',
                                    }}
                                    onMouseEnter={() => setIsButtonHovered(true)}
                                    onMouseLeave={() => setIsButtonHovered(false)}
                                    >{isSubmitting ? 'Sending...' : 'Send Message'}</button>
                        </div>

                        {submitStatus.message && !isTyping && (
                        <div role="status"
                            aria-live="polite"
                            className="rounded-4xl text-center w-full justify-center"
                            style={{
                                marginTop: '20px',
                                padding: '12px',
                                backgroundColor: submitStatus.type === 'success' 
                                    ? 'rgba(113, 197, 173, 0.1)' 
                                    : 'rgba(239, 68, 68, 0.1)',
                                border: `1px solid ${submitStatus.type === 'success' 
                                    ? 'var(--accent)' 
                                    : '#ef4444'}`,
                                color: submitStatus.type === 'success' 
                                    ? 'var(--accent)' 
                                    : '#ef4444'
                            }}
                        >
                            {submitStatus.message}
                        </div>
                    )}        
                </form>                         
            </div>
        </SectionWrapper>
    )
}