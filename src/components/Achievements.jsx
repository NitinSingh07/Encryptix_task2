import React from "react";
import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center  text-4xl"
      >
        Achievements
      </motion.h1>
      <div>
        {ACHIEVEMENTS.map((achievement, index) => (
          <div key={index} className="flex mb-8 flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-200">
                {achievement.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lh:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {achievement.achieve} -{" "}
                <span className="text-sm text-purple-100">
                  {achievement.venue}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{achievement.description}</p>
              {achievement.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-600 px-2 py-1 text-sm font-medium text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Achievements;
