import React, { useState } from 'react';

export default function ContactView() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    const response = await fetch("https://formspree.io/f/xeedpnbb", {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className="space-y-12 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      <div>
        <h2 className="text-2xl font-bold tracking-widest text-gray-800 uppercase">Get In Touch</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 pt-2">
        <div className="space-y-1.5">
          <label className="text-lg font-bold tracking-wider text-gray-900 uppercase">Name</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder="Your name" 
            className="w-full bg-transparent border-b border-gray-200 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black transition-colors" 
          />
        </div>
        
        <div className="space-y-1.5">
          <label className="text-lg font-bold tracking-wider text-gray-900 uppercase">Email Address</label>
          <input 
            type="email" 
            name="email"
            required
            placeholder="you@example.com" 
            className="w-full bg-transparent border-b border-gray-200 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black transition-colors" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-lg font-bold tracking-wider text-gray-900 uppercase">Message</label>
          <textarea 
            name="message"
            rows="4" 
            required
            placeholder="Type your message here..." 
            className="w-full bg-transparent border-b border-gray-200 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button 
            type="submit" 
            className="inline-flex items-center justify-center px-6 h-10 bg-gray-900 text-white text-xs font-bold tracking-widest rounded hover:bg-black active:scale-[0.98] transition-all cursor-pointer shadow-sm w-full sm:w-auto uppercase"
          >
            {status === 'SUCCESS' ? 'Message Sent!' : 'Send Message'}
          </button>

          {status === 'ERROR' && (
            <p className="text-sm font-semibold text-red-600">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>

      <hr className="border-gray-100" />

      <div className="space-y-4">
        <h4 className="text-base font-bold tracking-widest text-gray-400 uppercase">Other Channels</h4>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-bold tracking-widest uppercase">
          <a href="mailto:arkadipsom@gmail.com" className="text-gray-500 hover:text-black transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/arkadip-som/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/arkadipsom-code" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
            GitHub
          </a>
        </div>
      </div>

    </div>
  );
}