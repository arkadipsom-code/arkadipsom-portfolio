import React, { useState } from 'react';
import { Mail, Code, ExternalLink } from 'lucide-react';

export default function ContactView() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    
    const response = await fetch("https://formspree.io/f/xeedpnbb", {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div>
        <h2 className="text-lg font-semibold text-white tracking-tight">Get In Touch</h2>
        <p className="text-xs text-neutral-400 mt-1">Drop a message or find my links down below.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* CRITICAL: Formspree requires the "name" attribute on inputs to identify the data fields */}
        <input 
          type="text" 
          name="name"
          required
          placeholder="Your Name" 
          className="w-full bg-zinc-900/50 border border-white/5 rounded-lg p-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 transition-all" 
        />
        
        <input 
          type="email" 
          name="email"
          required
          placeholder="Your Email Address" 
          className="w-full bg-zinc-900/50 border border-white/5 rounded-lg p-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 transition-all" 
        />

        <textarea 
          name="message"
          rows="4" 
          required
          placeholder="Type your message here..." 
          className="w-full bg-zinc-900/50 border border-white/5 rounded-lg p-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/20 transition-all resize-none custom-scrollbar"
        />

        <button 
          type="submit" 
          className="w-full h-10 bg-neutral-200 text-zinc-950 text-xs font-bold rounded-lg hover:bg-white active:scale-[0.99] transition-all cursor-pointer shadow-sm flex items-center justify-center"
        >
          {status === 'SUCCESS' ? 'Message Sent!' : 'Send Message'}
        </button>

        {status === 'ERROR' && (
          <p className="text-[11px] font-mono text-red-400 text-center">Failed to route transmission. Try again.</p>
        )}
      </form>

      <div className="pt-4 border-t border-white/5 flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-[11px] text-neutral-400">
        <a href="mailto:arkadipsom@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Mail size={12} /> Email
        </a>
        <a href="https://www.linkedin.com/in/arkadip-som/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <ExternalLink size={12} /> LinkedIn
        </a>
        <a href="https://github.com/arkadipsom-code" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Code size={12} /> GitHub
        </a>
      </div>
    </div>
  );
}