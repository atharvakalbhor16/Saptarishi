'use client'

import PageHeader from '@/components/PageHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, FileText, Heart, Stethoscope, ClipboardList, CloudRain, GraduationCap, ShieldCheck } from 'lucide-react'

export default function InitiativesPage() {
  const initiatives = [
    {
      icon: Users,
      title: 'Holistic Divyang Support Program',
      subtitle: 'One stop solution for divyang support',
      description: 'This program provides support for people living with disabilities to avail the government certificates to access various schemes and resources. This effort is intended to make their lives better and more independent. These initiatives have been taken to address the needs of the people living with disabilities.',
      image: '/images/Holistic-Divyang-Support-Program.jpg',
      subPrograms: [
        {
          title: 'Disability Certificates And UDID Card',
          description: 'The assistance is provided for people living with Disabilities to get the disability certificate and UDID Card. To get the better access of government facilities under the one roof, the organization was established a centre at District (Aundh) Hospital, Sangvi, Pune.',
          impact: 'Till today, more than 1000 people have received disability certificates and UDID Card'
        },
        {
          title: 'Assistance To Get The Aadhar & Pan Card',
          description: 'People living with disabilities find it difficult to get the Aadhar card as the centers are remotely located. Also the process of obtaining Aadhar card is complex and unknown to the disabled people. The organization team provides end-to-end support to get the Aadhar and PAN card for disabled people. Also, the camps are being organized to get the Aadhar and PAN card.',
          impact: 'More than 200 people received Aadhar and PAN card'
        },
        {
          title: 'Niramaya Health Insurance Scheme',
          description: 'Niramaya Health Insurance Scheme provides a Health Insurance card of Rs. 1 Lakh for a Person living with a disability. The disabilities covered under this scheme are Intellectual disabilities, Autism, Cerebral Palsy and Multiple Disabilities as per the national trust act. This amount is reimbursed to the beneficiaries after the treatment. The enrollment of the beneficiaries done with the help of registered organization under National trust act. Saptrishi Foundation provides assistance to the beneficiaries to avail the benefits of the insurance scheme and ensure that no one is left behind to avail the benefits of the scheme. This is a unique model to provide assistance to the beneficiaries and it can be adopted by other organizations and government to implement across India.',
          impact: null
        }
      ]
    },
    {
      icon: Stethoscope,
      title: 'Health Camp for Special People',
      description: 'The health camp for people living with intellectual disability is being organized on regular basis. The Physiotherapists, Neurologists, Orthopedics experts conduct the health check-up camps and necessary treatment.',
      impact: 'Till today more than 1000 people benefited from the health check-up camp.',
      image: '/images/Health Camp for Special People.png'
    },
    {
      icon: ClipboardList,
      title: 'Divyang Document Support Camp',
      description: 'Saptrishi Foundation conducts document support camps for the Divyang people on regular basis. Till today around 200 beneficiaries took an active part in the camp and got benefited from the camp. The Divyang got support regarding disability certification/UDID, Pan Card, Government Financial benefits, railway concession benefits for Divyang etc.',
      image: '/images/Divyang Document support camp.png'
    },
    {
      icon: Heart,
      title: 'Funeral of Unclaimed Human Dead Bodies',
      description: 'This is a unique initiative where the organization is protecting the dignity of deceased people and help police officials to do the funeral of unclaimed human dead bodies. The police department informs the organization if they found the unclaimed human dead body in PCMC City. The dead bodies are mostly found on the roadside, in the garden, railway track, near highways, on bridge, near rivers, canals, etc. The organization team completes the documentation and legal process and does the funeral of the dead body. The organization also tries to trace the relatives of the dead bodies and facilitates the process to get the free ambulance.',
      impact: 'Till today, more than 500 funerals of unclaimed human dead bodies are conducted in Pimpri Chinchwad.'
    },
    {
      icon: ShieldCheck,
      title: 'Blanket Distribution Program',
      description: 'According to the Lancet Study report, In India, the number of deaths per year linked with abnormal cold temperatures is 6,55,400. This is another example of working towards fulfilling the mission of the organization, like reaching out to the unreached people. To protect street and destitute people from cold waves, The Foundation distributes the blankets every year. Till now more than 1000 blankets are distributed. Saptrishi Foundation provided blankets to the children and street people. This helps children and people residing on street to protect themselves from the cold. Blankets are distributed to the needy children and people residing on the street.',
      image: '/images/Blanket Distribution Program.png'
    },
    {
      icon: GraduationCap,
      title: 'Scholarship Program',
      description: 'Imparting good education to young generation leads to the development of the nation. Therefore, the organization provides educational scholarships to support students from marginalized and lower-income communities to get quality education. The Principal of Mahatma Phule Vidyalaya, Pune requested the foundation to provide scholarships to the three students as they were not able to pay the education fees due to poor family conditions.'
    },
    {
      icon: CloudRain,
      title: 'Watershed Program',
      subPrograms: [
        {
          title: 'Soil and Water Conservation initiatives in Aurangabad',
          description: 'The technical team of the organization visited the drought-affected Khandala village in Aurangabad district. In this project, our technical team conducted a survey and designed techniques which are suitable to the areas. The best possible solution was to construct Continuous Contour Tranches which helps to conserve rain water and help to increase the water level.'
        },
        {
          title: 'Soil and Water Conservation Activities in KVK Campus, Aurangabad',
          description: 'Due to dependence on the available surface and ground water, in the month of April-May usually KVK Campus was facing the scarce water scenario. Hon\'ble Vice Chancellor, VNMA, University, Parbhani had invited our organization to discuss the measures to address ground water issue. In the KVK campus, Nala of 10m width was desilted and it has increased ground water level of campus well and its overflow was adjusted to downstream side. The activity was planned and executed under the supervision of experts.'
        }
      ]
    }
  ]

  return (
    <>
      <PageHeader 
        title="Our Initiatives" 
        subtitle="Aligned with our focus areas to create lasting impact"
      />

      {/* Introduction Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Our initiatives are aligned with our focus areas
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              They mainly include the following:
            </p>
            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start gap-4">
                <span className="text-primary-orange text-2xl flex-shrink-0">•</span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Awareness programs for parents of children with intellectual and developmental disabilities.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-orange text-2xl flex-shrink-0">•</span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Capacity building and training workshops on hygiene, safety, sexuality awareness, and emotional development.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-orange text-2xl flex-shrink-0">•</span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Facilitating access to government schemes and financial assistance for persons with disabilities.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary-orange text-2xl flex-shrink-0">•</span>
                <span className="text-gray-700 text-lg leading-relaxed">
                  Collaborating with trusts, schools, and special educators to build inclusive support networks.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white"
              >
                {/* Initiative Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <initiative.icon className="text-white" size={28} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {initiative.title}
                    </h2>
                  </div>
                  
                  {initiative.subtitle && (
                    <p className="text-lg text-primary-orange font-semibold mb-4 ml-[72px]">
                      {initiative.subtitle}
                    </p>
                  )}
                  
                  <p className="text-gray-700 text-base leading-relaxed ml-[72px]">
                    {initiative.description}
                  </p>
                  
                  {initiative.impact && !initiative.subPrograms && (
                    <div className="mt-6 ml-[72px] bg-green-50 border-l-4 border-primary-orange p-4 rounded-r-lg">
                      <p className="font-semibold text-gray-800 mb-1">Impact:</p>
                      <p className="text-gray-700">{initiative.impact}</p>
                    </div>
                  )}
                </div>

                {/* Initiative Image - Full width, proper aspect ratio */}
                {initiative.image && !initiative.subPrograms && (
                  <div className="mb-8 flex justify-center">
                    <div className="rounded-xl overflow-hidden shadow-md w-full max-w-2xl">
                      <div className="relative w-full h-auto">
                        <Image
                          src={initiative.image}
                          alt={initiative.title}
                          width={800}
                          height={450}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub Programs */}
                {initiative.subPrograms && (
                  <>
                    {initiative.subPrograms.length > 0 && (
                      <p className="text-gray-700 font-semibold mb-6 ml-[72px]">
                        Under this initiative, the following activities are conducted:
                      </p>
                    )}
                    
                    {/* Main Image for Holistic Program */}
                    {initiative.image && (
                      <div className="mb-8 flex justify-center">
                        <div className="rounded-xl overflow-hidden shadow-md w-full max-w-2xl">
                          <div className="relative w-full h-auto">
                            <Image
                              src={initiative.image}
                              alt={initiative.title}
                              width={800}
                              height={450}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-6 ml-[72px]">
                      {initiative.subPrograms.map((subProgram, subIndex) => (
                        <motion.div
                          key={subIndex}
                          className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-orange"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: subIndex * 0.1 }}
                        >
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {subProgram.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {subProgram.description}
                          </p>
                          {'impact' in subProgram && subProgram.impact && (
                            <div className="bg-white border-l-4 border-green-500 p-3 rounded-r mt-4">
                              <p className="font-semibold text-sm text-gray-800 mb-1">Impact:</p>
                              <p className="text-gray-700 text-sm">{subProgram.impact}</p>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}

                {/* Separator */}
                {index < initiatives.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-yellow to-primary-orange text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Giving is not just about making a Donation it's about making difference.
            </h2>
            <p className="text-xl mb-8 text-white/90">
              (Your Donation will be Exempted Under Income Tax Act Provision Section 80G)
            </p>
            <a
              href="https://rzp.io/l/saptrishifoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary-orange rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
