'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we protect and handle your personal information"
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
                Saptrishi Foundation is committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Disability-related information for service delivery</li>
              <li>Address and location information</li>
              <li>Registration and membership details</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
              <li>Provide and improve our services</li>
              <li>Process your requests and applications</li>
              <li>Send you relevant updates and notifications</li>
              <li>Facilitate government scheme enrollments</li>
              <li>Organize events and camps</li>
              <li>Generate impact reports and statistics (anonymized)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
              <li>With government departments for scheme enrollment (with your consent)</li>
              <li>With healthcare providers for medical support services</li>
              <li>With partner organizations for program delivery</li>
              <li>When required by law or legal process</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">4. Data Security</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">5. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">6. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to improve your experience on our website. 
              You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">7. Children's Privacy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our services may be used by or on behalf of children with disabilities. We require parental or guardian 
              consent for processing children's personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">8. Changes to Privacy Policy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of significant changes by 
              posting the new policy on our website with an updated "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">9. Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@saptrishifoundation.in
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +91-XXXXXXXXXX
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Saptrishi Foundation<br />
                Registered with Government of India
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
