import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all fields.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate sending message API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slatebg blueprint-grid-bg border-t border-gray-800 relative">
      {/* Decorative Blueprint Label */}
      <div className="absolute top-0 right-10 font-mono text-[9px] text-gray-700 select-none">
        [MODULE: WORK_ORDER_DISPATCH]
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Main Card Frame */}
        <div className="bg-[#0e1116] border border-gray-800 p-6 sm:p-10 md:p-14 shadow-[6px_6px_0px_#111827] hover:border-rust/85 hover:shadow-[6px_6px_0px_#f26a57] transition-all duration-300 relative group overflow-hidden">
          
          <div className="blueprint-scanline"></div>

          {/* Diagnostic status tags */}
          <div className="absolute -top-3 left-6 font-mono text-[9px] bg-[#0e1116] px-3 py-0.5 border border-gray-800 text-rust">
            SYS_STATUS: ACTIVE_FOR_INQUIRIES
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Connection Details */}
            <div className="md:col-span-5 text-left space-y-8">
              
              <div className="space-y-3">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
                  Let's <span className="text-rust">Connect</span>
                </h2>
                <p className="text-gray-400 text-xs font-mono max-w-sm leading-relaxed">
                  [CURRENTLY_SEEKING_INTERNSHIPS_OR_CONTRACT_PROJECTS]
                  <br className="mb-2" />
                  Dispatch a message via the technical specification sheet on the right to sync coordinates.
                </p>
              </div>

              {/* Technical links channels */}
              <div className="space-y-4 font-mono text-xs">
                
                <div className="p-3 bg-[#08090c] border border-gray-800 flex items-center gap-4 hover:border-rust/45 transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center text-rust bg-[#0e1116] border border-gray-805">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] text-gray-500 uppercase font-semibold">EMAIL_CHANNEL:</h4>
                    <a 
                      href="mailto:ayushsjha2008@gmail.com" 
                      id="contact-email-link"
                      className="text-gray-300 hover:text-rust transition-colors font-bold"
                    >
                      ayushsjha2008@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-[#08090c] border border-gray-800 flex items-center gap-4 hover:border-rust/45 transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center text-rust bg-[#0e1116] border border-gray-805">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[9px] text-gray-500 uppercase font-semibold">COORDINATES:</h4>
                    <p className="text-gray-300 font-bold">Thane, MH, India</p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-gray-800 space-y-3">
                <h4 className="text-[9px] text-gray-500 uppercase font-mono tracking-wider">NET_ROUTING:</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/AyushJha2008" 
                    id="contact-social-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#08090c] border border-gray-800 hover:border-rust hover:text-rust flex items-center justify-center text-gray-400 transition-colors shadow-[2px_2px_0px_#000] hover:translate-y-[-1px]"
                    title="GitHub Repository"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ayush-jha200805/" 
                    id="contact-social-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#08090c] border border-gray-800 hover:border-rust hover:text-rust flex items-center justify-center text-gray-400 transition-colors shadow-[2px_2px_0px_#000] hover:translate-y-[-1px]"
                    title="LinkedIn Network"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Work Order Dispatch Form */}
            <div className="md:col-span-7 bg-[#08090c] border border-gray-800 p-5 sm:p-8 relative overflow-hidden group">
              <div className="blueprint-scanline"></div>
              <span className="absolute top-1 right-2 font-mono text-[8px] text-gray-700 select-none z-10">SPEC_SHEET_AJ_09</span>
              
              <form onSubmit={handleSubmit} className="space-y-6 text-left relative z-10">
                
                {/* Diagnostic feedback boxes */}
                {errorMsg && (
                  <div className="font-mono text-xs text-red-400 bg-red-950/30 border border-red-900 p-3.5 flex items-center gap-2">
                    <FaExclamationTriangle className="w-4 h-4 shrink-0 text-red-500 animate-pulse" />
                    <span>[STATUS_ERR]: {errorMsg}</span>
                  </div>
                )}
                
                {submitSuccess && (
                  <div className="font-mono text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900 p-3.5 flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>[STATUS_OK]: DISPATCH_SENT.TXT SUCCESSFULLY TRANSFERRED.</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label 
                    htmlFor="form-name" 
                    className="block font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                  >
                    [01] SENDER_NAME.TXT
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0e1116] border border-gray-800 rounded-none px-4 py-3 text-white text-sm focus:border-rust outline-none transition-all font-mono placeholder:text-gray-700"
                    placeholder="[ENTER_SENDER_NAME]"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="form-email" 
                    className="block font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                  >
                    [02] RETURN_EMAIL.TXT
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0e1116] border border-gray-800 rounded-none px-4 py-3 text-white text-sm focus:border-rust outline-none transition-all font-mono placeholder:text-gray-700"
                    placeholder="[ENTER_RETURN_EMAIL]"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="form-message" 
                    className="block font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest"
                  >
                    [03] MEMO_PAYLOAD_BODY.TXT
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-[#0e1116] border border-gray-800 rounded-none px-4 py-3 text-white text-sm focus:border-rust outline-none transition-all font-mono resize-none placeholder:text-gray-700"
                    placeholder="[DESCRIBE_PROJECT_OR_INQUIRY_PARAMETERS...]"
                  />
                </div>

                <button
                  type="submit"
                  id="form-submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-transparent border-2 border-rust text-rust hover:bg-rust hover:text-black font-bold font-mono text-xs tracking-wider transition-all shadow-[4px_4px_0px_#111827] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer rounded-none"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-rust border-t-transparent rounded-full animate-spin"></span>
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-3.5 h-3.5" />
                      <span>SUBMIT_DISPATCH.EXE</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-[10px] font-mono text-gray-600 select-none">
        &copy; {new Date().getFullYear()} Ayush Jha. All rights reserved. // SECURE_SHELL_EST
      </div>
    </section>
  )
}

export default Contact