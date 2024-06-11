import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaGit,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiPrisma,
  SiC,
  SiMantine,
  SiJupyter,
  // SiMatlab,
} from "react-icons/si";
import { BsLightningCharge } from "react-icons/bs";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiTailwindcss className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <FaPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <FaBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiExpress className="text-7xl text-gray-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiMongoose className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <FaGithub className="text-7xl text-black" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <FaGit className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiPostman className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiMantine className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiPrisma className="text-7xl text-black" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiC className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <SiJupyter className="text-7xl text-orange-500" />
        </motion.div>
        {/* <div className="rounded-2xl border-4 p-4 border-neutral-800">
          <SiMatlab className="text-7xl text-blue-500" />
        </div> */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-800"
        >
          <BsLightningCharge className="text-7xl text-yellow-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
