import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary border-t border-slate-800 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[60px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-primary/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-muted">
              Available for opportunities in HR Management, Data Analysis, and Software Development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-slate-400">Ilorin, Kwara State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-slate-400">+234 816 774 5778</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href="mailto:Mayowa.uwagbai@gmail.com" className="text-slate-400 hover:text-accent transition-colors">Mayowa.uwagbai@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/mayowa-uwagbai-55798067" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                    linkedin.com/in/mayowa-uwagbai
                  </a>
                </div>
              </div>
            </div>

            {/* Simple Contact Form Area (Visual) */}
            <div className="bg-secondary p-6 rounded-xl border border-slate-700">
              <h3 className="text-white font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Name</label>
                  <input type="text" className="w-full bg-primary border border-slate-600 rounded p-2 text-white focus:border-accent outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Email</label>
                  <input type="email" className="w-full bg-primary border border-slate-600 rounded p-2 text-white focus:border-accent outline-none" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Message</label>
                  <textarea className="w-full bg-primary border border-slate-600 rounded p-2 text-white focus:border-accent outline-none h-24" placeholder="How can I help you?"></textarea>
                </div>
                <button className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-2 rounded transition-colors shadow-lg shadow-accent/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;