"use client";

import IntBanner from "@/components/IntBanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaAward,
  FaHandsHelping,
  FaHeart,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <IntBanner
        title={"Empowering Healthcare Careers, One Connection at a Time"}
        description={
          <>
            We are a dedicated platform for treatment-related job opportunities,
            connecting healthcare providers with skilled professionals like
            nurses and caregivers. Our mission is to support compassionate care
            by making it easier to find, apply, and hire for essential
            healthcare roles across the globe.
            <br />
            “C.E.N.M. Healthcare is a veteran-led, multi-state healthcare
            staffing agency providing trusted clinical professionals to
            facilities across California and Tennessee — with expansion into
            Ohio underway.”
          </>
        }
      />

      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
        {/* Who We Are Section */}
        <motion.section
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h4
            variants={item}
            className="text-4xl font-extrabold text-primary mb-6 text-center sm:text-left"
          >
            <span className="relative inline-block">
              Who We Are
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
            </span>
          </motion.h4>

          <motion.div
            variants={item}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="md:w-2/3">
              <p className="text-xl text-gray-800 mt-4 leading-relaxed">
                C.E.N.M. Healthcare is a nurse-led staffing agency built on
                family, clinical excellence, and integrity. We proudly serve
                skilled nursing facilities, hospitals, and home health agencies
                with reliable, compassionate professionals.
              </p>
              <p className="text-xl text-gray-800 mt-4 leading-relaxed">
                C.E.N.M. stands for family —our founder & his family. Our family
                is our mission: to deliver care as if our own family depended on
                it.
              </p>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
              <div className="text-5xl text-primary mb-4 flex justify-center">
                <FaUsers />
              </div>
              <h5 className="text-2xl font-bold text-center text-gray-800">
                Family-First Approach
              </h5>
              <p className="text-gray-600 mt-2 text-center">
                Treating every client and candidate like family since 2010
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Mission & Vision Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.section
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaHandsHelping className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-3xl font-extrabold text-primary">
                Our Mission
              </h4>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed">
              To provide dependable healthcare staffing that ensures every
              patient receives exceptional care—wherever and whenever {"it's"}
              needed.
            </p>
          </motion.section>

          <motion.section
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaAward className="text-2xl text-purple-600" />
              </div>
              <h4 className="text-3xl font-extrabold text-primary">
                Our Vision
              </h4>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed">
              To be the most trusted staffing partner in the industry—rooted in
              family values and driven by excellence.
            </p>
          </motion.section>
        </div>

        {/* Core Values */}
        <motion.section
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-4xl font-extrabold mb-8 text-center">
            Our Core Values
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Integrity",
                desc: "We do what's right, always.",
              },
              {
                icon: <FaHeart />,
                title: "Compassion",
                desc: "People come first.",
              },
              {
                icon: <FaAward />,
                title: "Excellence",
                desc: "No shortcuts. Only top-tier staff.",
              },
              {
                icon: <FaHandsHelping />,
                title: "Accountability",
                desc: "We own every outcome.",
              },
              {
                icon: <FaUsers />,
                title: "Family",
                desc: "Built by family, run with heart.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white text-primary bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h5 className="text-xl font-bold mb-2">{value.title}</h5>
                <p className="text-opacity-90">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h4
            variants={item}
            className="text-4xl font-extrabold text-primary mb-8 text-center"
          >
            Why Facilities Choose Us
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {[
              "Fast, reliable staffing—without the stress",
              "Clinically-vetted, compassionate professionals",
              "Flexible, responsive, and relationship-driven",
              "24/7 support for all your staffing needs",
              "Competitive rates with transparent pricing",
              "Local expertise with national reach",
            ].map((itemText, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-800">{itemText}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonial */}
        <motion.section
          className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 p-10 rounded-2xl shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white opacity-50 mx-auto mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-2xl md:text-3xl font-semibold text-white italic">
              {
                "We just don't fill shifts - we build relationships that elevate care. That's the promise behind every name in C.E.N.M."
              }
            </p>
            <p className="text-lg text-white mt-6 ml-16 opacity-90">
              - C.E.N.M. Healthcare Team
            </p>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-4xl font-extrabold text-primary mb-6">
            Ready to Elevate Your Care Team?
          </h4>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need trusted professionals or want to join our team of
            exceptional caregivers, {"we're"} here to help you every step of the
            way.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <Link href="/contact">
              <motion.button
                // className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg w-full sm:w-auto"
                className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Request Staffing</span>
              </motion.button>
            </Link>

            <Link href="/apply-jobs">
              <motion.button
                // className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg w-full sm:w-auto"
                className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join Our Team</span>
              </motion.button>
            </Link>
          </div>

          <p className="mt-8 text-gray-600">
            Have questions?{" "}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact us
            </Link>{" "}
            anytime.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
