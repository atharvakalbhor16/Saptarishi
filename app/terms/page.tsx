'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <>
      <PageHeader 
        title="Terms & Conditions" 
        subtitle="Please read these terms carefully before using our services"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary-yellow/10 border-l-4 border-primary-orange rounded-lg p-6 mb-8">
              <p className="text-gray-800 font-semibold mb-2">
                Last Updated: November 5, 2025
              </p>
              <p className="text-gray-600">
                By accessing and using Saptrishi Foundation's services, you agree to be bound by these Terms and Conditions.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By accessing our website, mobile application, or using any of our services, you acknowledge that you have 
              read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">2. Eligibility</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our services are available to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
              <li>Differently abled individuals in India</li>
              <li>Family members and guardians of differently abled persons</li>
              <li>Healthcare providers and service providers</li>
              <li>Volunteers and donors supporting our cause</li>
              <li>Organizations partnering with Saptrishi Foundation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">3. Services Provided</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Saptrishi Foundation provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
              <li>Information and assistance for government schemes</li>
              <li>Support for document procurement</li>
              <li>Resource center access</li>
              <li>Insurance guidance and support</li>
              <li>Organization of Divyang camps and events</li>
              <li>Digital platform for community networking</li>
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We strive to provide accurate information, but we do not guarantee the completeness or accuracy of all content.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">4. User Responsibilities</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a user, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not misuse or abuse our platform or services</li>
              <li>Respect the privacy and rights of other users</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">5. Registration and Membership</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Membership with Saptrishi Foundation is free for differently abled individuals. By registering, you agree 
              to provide accurate information and keep your profile updated. We reserve the right to suspend or terminate 
              accounts that violate these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">6. Donations</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All donations are voluntary and non-refundable. Donations are eligible for tax deduction under Section 80G 
              of the Income Tax Act, 1961. We commit to using donations transparently and for the intended purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All content on our website and mobile application, including text, graphics, logos, images, and software, 
              is the property of Saptrishi Foundation and protected by intellectual property laws. You may not reproduce, 
              distribute, or use our content without express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">8. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our services are provided "as is" without warranties of any kind, either express or implied. We do not 
              guarantee that our services will be uninterrupted, error-free, or completely secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">9. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Saptrishi Foundation, its directors, employees, and volunteers shall not be liable for any indirect, 
              incidental, special, or consequential damages arising out of or in connection with the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">10. Indemnification</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You agree to indemnify and hold harmless Saptrishi Foundation from any claims, damages, losses, or expenses 
              arising from your use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">11. Termination</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We reserve the right to suspend or terminate your access to our services at any time, without prior notice, 
              for conduct that we believe violates these terms or is harmful to other users or the foundation.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">12. Governing Law</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">13. Changes to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may revise these Terms and Conditions at any time. Continued use of our services after changes 
              constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">14. Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For questions about these Terms and Conditions, please contact:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> legal@saptrishifoundation.in
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +91-XXXXXXXXXX
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Saptrishi Foundation<br />
                Registered with Government of India
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary-yellow/20 to-primary-orange/20 rounded-2xl border-2 border-primary-orange/30">
              <p className="text-gray-800 font-semibold">
                By using our services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
