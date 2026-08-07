import React, { useState } from 'react'

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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.05)]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Info */}
            <div className="text-left space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Let's <span className="text-gradient">Connect</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  I am actively seeking internship opportunities or freelance projects. Send over a message and let's build something awesome together!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Email Me</h4>
                    <a 
                      href="mailto:ayushsjha2008@gmail.com" 
                      id="contact-email-link"
                      className="text-gray-300 hover:text-violet-400 transition-colors text-sm font-semibold"
                    >
                      ayushsjha2008@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Location</h4>
                    <p className="text-gray-300 text-sm font-semibold">Thane, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">On the web</h4>
                <div className="flex gap-4 text-2xl">
                  <a 
                    href="https://github.com/AyushJha2008" 
                    id="contact-social-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all transform hover:-translate-y-1"
                    title="GitHub Profile"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ayush-jha200805/" 
                    id="contact-social-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all transform hover:-translate-y-1"
                    title="LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {errorMsg && (
                  <div className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                    {errorMsg}
                  </div>
                )}
                {submitSuccess && (
                  <div className="text-emerald-400 text-xs bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg flex items-center gap-2">
                    <i className="fas fa-check-circle text-sm"></i> 
                    <span>Sent! I'll get back to you soon.</span>
                  </div>
                )}

                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:bg-white/10 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:bg-white/10 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:bg-white/10 outline-none transition-all resize-none"
                    placeholder="Describe your project, ideas, or internship details..."
                  />
                </div>

                <button
                  type="submit"
                  id="form-submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-xs"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>

        <div className="text-center mt-12 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Ayush Jha. All rights reserved.
        </div>
      </div>
    </section>
  )
}

export default Contact