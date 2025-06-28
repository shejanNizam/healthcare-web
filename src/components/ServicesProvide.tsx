import {
  CalendarFilled,
  ClockCircleFilled,
  EnvironmentFilled,
  HeartFilled,
  MessageFilled,
  PhoneFilled,
  SafetyCertificateFilled,
  TeamOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";

// Primary color palette
const primaryColor = "#2563eb";
const primaryLight = "#93c5fd";

import type { Variants } from "framer-motion";

export default function ServicesProvide() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const testimonials = [
    {
      quote:
        "C.E.N.M. is the only agency that truly understands what we need. Their nurses just fit.",
      author: "Jasmine P., DON, Anaheim",
      avatarColor: "#3b82f6",
    },
    {
      quote:
        "They saved my team more than once. Reliable, fast, and professional.",
      author: "Marcus T., RN Supervisor, Pasadena",
      avatarColor: "#10b981",
    },
  ];

  const coverageAreas = [
    {
      name: "Los Angeles County",
      icon: <EnvironmentFilled className="text-xl" />,
    },
    { name: "San Bernardino", icon: <EnvironmentFilled className="text-xl" /> },
    { name: "Riverside", icon: <EnvironmentFilled className="text-xl" /> },
    { name: "San Diego", icon: <EnvironmentFilled className="text-xl" /> },
    { name: "Ventura & more", icon: <EnvironmentFilled className="text-xl" /> },
  ];

  const benefits = [
    {
      title: "No ghosting",
      description: "Our nurses show up, or we find a backup fast",
      icon: <ClockCircleFilled className="text-2xl" />,
    },
    {
      title: "Clinically ready",
      description: "We test clinical skills before they ever reach you",
      icon: <SafetyCertificateFilled className="text-2xl" />,
    },
    {
      title: "Facility-fit matching",
      description: "Pre-screened to align with your unit's pace and population",
      icon: <TeamOutlined className="text-2xl" />,
    },
    {
      title: "24/7 Support",
      description: "We're one text or call away, anytime",
      icon: <PhoneFilled className="text-2xl" />,
    },
  ];

  const services = [
    {
      name: "Skilled Nursing Facilities (SNFs)",
      icon: <HeartFilled className="text-xl" />,
    },
    {
      name: "Rehabilitation centers",
      icon: <HeartFilled className="text-xl" />,
    },
    {
      name: "LTACs and behavioral health units",
      icon: <HeartFilled className="text-xl" />,
    },
    {
      name: "Home health & hospice (on request)",
      icon: <HeartFilled className="text-xl" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-primary to-primary/50 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-64 h-64 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center bg-white/20 rounded-full p-4 mb-6"
          >
            <TeamOutlined className="text-3xl" />
          </motion.div>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Trusted <span className="text-amber-300">Nurse Staffing</span> for
            Nurse Managers & DONs in Southern California
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            When your floor is short-staffed, everything falls on you. At
            C.E.N.M. Healthcare, we understand the pressure Nurse Managers and
            DONs face every day — the call-ins, the burnout, the endless
            schedule juggling.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/client-services">
              <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                Request Nurses Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-secondary text-primary rounded-full p-4 mb-6">
            <TeamOutlined className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Reliable Nurses.</span> Zero Drama.
          </h2>
          <Divider className="w-20 mx-auto border-primary" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need last-minute shift coverage or long-term travel
            contracts:
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { text: "Vetted clinically & culturally", icon: "🩺" },
            { text: "On-time and accountable", icon: "⏱️" },
            { text: "Ready to hit the ground running", icon: "🏃‍♀️" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-xl font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-2xl font-bold mt-16 text-primary bg-blue-50 py-4 px-6 rounded-full inline-block"
        >
          {" We don't just send a nurse. We send the "}
          <span className="text-amber-500">right</span> nurse.
        </motion.p>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center bg-primary text-white rounded-full p-4 mb-6">
              <SafetyCertificateFilled className="text-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-primary">DONs Choose</span> C.E.N.M.
              Healthcare
            </h2>
            <Divider className="w-20 mx-auto border-blue-400" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(37, 99, 235, 0.1), 0 10px 10px -5px rgba(37, 99, 235, 0.04)",
                }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-primary"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nurse Types & Settings */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-primary text-white rounded-full p-4 mb-6">
            <TeamOutlined className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Travel Nurses, CNAs, and LVNs</span>{" "}
            – When & Where You Need Them
          </h2>
          <Divider className="w-20 mx-auto border-blue-400" />
          <p className="text-xl ">C.E.N.M. proudly staffs:</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                backgroundColor: primaryColor,
                color: "white",
              }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary flex flex-col items-center text-center transition-all duration-300"
            >
              <p className="font-semibold text-lg">{service.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xl mt-16 bg-secondary text-primary py-4 px-8 rounded-full inline-block shadow-lg"
        >
          {"From a single shift to a full care team — we've got your back."}
        </motion.p>
      </section>

      {/* Mid-Page CTA */}
      <section className="relative py-24 bg-primary/40 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4 relative z-10"
        >
          <motion.div whileHover={{ rotate: 5 }} className="inline-block mb-8">
            <CalendarFilled className="text-5xl text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-primary">
            You Run the Floor. <br className="md:hidden" />
            <span className="text-amber-300">{"We'll Handle the Roster."}</span>
          </h2>
          <Divider className="w-20 mx-auto border-white/30" />
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/client-services">
                <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                  Request Nurses Now
                </button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/client-services">
                <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                  Schedule a Staffing Call
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-primary text-white rounded-full p-4 mb-6">
            <EnvironmentFilled className="text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving <span className="text-primary">Nurse Leaders</span> Across
            Southern California
          </h2>
          <Divider className="w-20 mx-auto border-primary" />
          <p className="text-xl ">We currently staff in:</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {coverageAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: `0 10px 15px -3px ${primaryLight}`,
              }}
              className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center"
            >
              <div className="text-blue-600 mb-3">{area.icon}</div>
              <p className="font-semibold text-lg">{area.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-lg mt-16 bg-blue-100 text-blue-800 py-3 px-6 rounded-full inline-block"
        >
          {
            "Out-of-state? No problem. We're expanding fast — with the same core values."
          }
        </motion.p>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center bg-primary text-white rounded-full p-4 mb-6">
              <MessageFilled className="text-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="text-primary">Nurse Leaders</span> Are
              Saying
            </h2>
            <Divider className="w-20 mx-auto border-primary" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg relative"
              >
                <div
                  className="absolute -top-6 -left-6 w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: testimonial.avatarColor }}
                >
                  <span className="text-xl font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div className="text-primary text-5xl absolute top-2 right-4 opacity-10"></div>
                <p className="text-lg italic mb-6 relative z-10">
                  {`"${testimonial.quote}"`}
                </p>
                <p className="font-semibold text-primary">
                  – {testimonial.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-4 bg-gradient-to-br from-primary to-primary/50 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="inline-block mb-8"
          >
            <PhoneFilled className="text-5xl text-amber-300" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {"Let's"} Make Your Next Call <br className="md:hidden" />
            <span className="text-amber-300">a Calm One</span>
          </h2>
          <Divider className="w-20 mx-auto border-white/30" />
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {
              "Staffing doesn't have to be chaos. With C.E.N.M. Healthcare, you get a reliable partner who gets it."
            }
          </p>
          <p className="mb-10 text-blue-200">
            Based in Southern California. Built for nurse leaders like you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/client-services">
              <button className="bg-[#E7F1F8] text-primary font-semibold cursor-pointer rounded-t-lg px-6 py-1 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                Start Staffing Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
