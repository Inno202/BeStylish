import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: 'Bespoke Suit',
    notes: '',
  });

  const services = [
    'Bespoke Suit',
    'Evening Gown',
    'Streetwear Customization',
    'Alterations',
    'Traditional Wear',
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Appointment request sent! We will contact you shortly.');
  };

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-4 block font-medium">
            Book a Fitting
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            SCHEDULE AN APPOINTMENT
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
            Visit our studio for a professional fitting and fabric consultation. 
            Our master tailors will guide you through the bespoke process.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-5"
        >
          {/* Left - Info */}
          <div className="md:col-span-2 bg-black p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">Our Studio</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar size={20} className="text-white/40 mt-1" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-1">Hours</p>
                    <p className="text-sm text-white/60 font-light">Mon - Sat: 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <User size={20} className="text-white/40 mt-1" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-sm text-white/60 font-light">123 Fashion Ave, Johannesburg</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold">Follow Us</p>
              <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-white/60 transition-colors">IG</a>
                <a href="#" className="hover:text-white/60 transition-colors">TW</a>
                <a href="#" className="hover:text-white/60 transition-colors">FB</a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    required
                    className="w-full border-b border-gray-200 pl-6 py-3 text-sm focus:border-black outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="email"
                    required
                    className="w-full border-b border-gray-200 pl-6 py-3 text-sm focus:border-black outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Date</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="date"
                    required
                    className="w-full border-b border-gray-200 pl-6 py-3 text-sm focus:border-black outline-none transition-colors"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Time</label>
                <div className="relative">
                  <Clock size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="time"
                    required
                    className="w-full border-b border-gray-200 pl-6 py-3 text-sm focus:border-black outline-none transition-colors"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Service Type</label>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setFormData({ ...formData, service })}
                    className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all ${
                      formData.service === service
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-500 hover:border-black'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Additional Notes</label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-0 top-4 text-gray-300" />
                <textarea
                  className="w-full border-b border-gray-200 pl-6 py-3 text-sm focus:border-black outline-none transition-colors min-h-[100px] resize-none"
                  placeholder="Tell us about your requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-black text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-gray-900 transition-all shadow-xl"
            >
              Request Appointment
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
