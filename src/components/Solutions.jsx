import React from 'react';
import Container from './container';
import FeaturesCol from './FeaturesCol';

const SolutionsSection = () => {
  return (
    <div className="py-20">
      <Container>
        <div>
          <h2 className="text-primary-strong text-center text-3xl md:text-5xl font-bold">
            Our Solutions
          </h2>
          <p className="text-center text-primary-strong font-medium text-lg leading-snug max-w-4xl mx-auto mt-6">
            Our solutions are designed to empower your business with actionable insights and tailored tools.
            From custom datasets and real-time analytics to seamless API integrations and data visualization, we provide everything you need to make informed decisions and drive success.
            With scalable, compliant, and expert-backed services, we help your business grow efficiently and confidently.
          </p>
        </div>
        <div className="mt-20">
          <FeaturesCol />
        </div>
      </Container>
    </div>
  );
};

export default SolutionsSection;