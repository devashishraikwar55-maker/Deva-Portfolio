import React from 'react';
import { PROFILE_DATA } from '../constants';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Ready to collaborate?</h2>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
          I'm currently open to job opportunities and freelance projects. Let's build something intelligent together.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
            <a 
                href={`mailto:${PROFILE_DATA.personal_information.email}`}
                className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-medium text-lg shadow-xl hover:-translate-y-1"
            >
                <Mail size={20} />
                Send an Email
            </a>
             <a 
                href={`tel:${PROFILE_DATA.personal_information.phone}`}
                className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full border border-gray-200 hover:bg-gray-50 transition-all font-medium text-lg shadow-sm hover:shadow-md"
            >
                <Phone size={20} />
                {PROFILE_DATA.personal_information.phone}
            </a>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {PROFILE_DATA.personal_information.full_name}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                {/* Social Placeholders */}
                <a href="#" className="hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
            </div>
        </div>

      </div>
    </section>
  );
};