'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Saptrishi Foundation</h3>
            <p className="text-gray-400 mb-4">
              Pioneer initiative in India for integrated one stop solution for all types of differently abled people.
            </p>
                            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/SaptarishiFoundation-1939989342916545" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/SaptrishiF1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/foundationsaptrishi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saptrishi-foundation-29b073230/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/initiatives" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link href="/associates" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Associates
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-gray-400 hover:text-primary-orange transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Divyang Membership
                </Link>
              </li>
              <li>
                <Link href="/suggestions" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Suggestions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Saptrishi Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
