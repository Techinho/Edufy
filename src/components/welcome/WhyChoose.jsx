
import { motion } from "framer-motion";
import { CheckCircle, Gem, Layers, Users, BookOpen, Globe, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function WhyChoose() {
  const features = [
    {
      icon: Gem,
      title: "100% Free Courses",
      description: "Access all our premium content without any cost. Learn at your own pace, completely free.",
      benefits: [
        "No hidden fees or subscriptions",
        "Lifetime access to course materials",
        "Regular updates to keep content current",
      ],
    },
    {
      icon: Layers,
      title: "Industry-Relevant Skills",
      description: "Our curriculum is designed to match the current tech industry needs and trends.",
      benefits: [
        "Courses aligned with job market demands",
        "Hands-on projects mimicking real-world scenarios",
        "Continuous updates to reflect industry changes",
      ],
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from professionals with years of experience in their respective fields.",
      benefits: [
        "Industry veterans as course instructors",
        "Insights from real-world experiences",
        "Mentorship opportunities with experts",
      ],
    },
  ];

  const stats = [
    { value: "50+", label: "Free Courses", icon: BookOpen },
    { value: "25K+", label: "Active Students", icon: Users },
    { value: "15+", label: "Countries Reached", icon: Globe },
    { value: "100%", label: "Satisfaction Rate", icon: Award },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden w-full bg-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl opacity-70" />

      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Removed text-gradient class */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-blue-600">
  Why Choose EDUFY?
</h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              We're committed to providing the highest quality tech education, completely free of charge.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-3 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full border-none shadow-lg md:shadow-xl bg-white hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-16 md:mt-24 p-6 md:p-10 bg-white rounded-2xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to start your learning journey? Join thousands of students already benefiting from our platform.
          </p>
          <Link to="/courses" className="px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
            Explore Our Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}