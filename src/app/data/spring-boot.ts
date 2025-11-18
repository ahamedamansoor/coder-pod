
import type { Language } from './types';

export const springBoot: Language = {
  slug: 'spring-boot',
  name: 'Spring Boot',
  topics: [
      {
          slug: 'learning-plan',
          title: 'Learning Plan',
          explanation: 'A structured roadmap for learning Spring Boot.'
      },
      {
          slug: 'spring-boot-basics',
          title: 'Spring Boot Basics',
          explanation: 'Getting started with Spring Boot for rapid application development.'
      },
      {
          slug: 'autoconfiguration',
          title: 'Autoconfiguration',
          explanation: 'Understanding how Spring Boot automatically configures your application.'
      },
      {
          slug: 'spring-boot-starters',
          title: 'Spring Boot Starters',
          explanation: 'Learn how starters simplify your dependency management.'
      },
      {
          slug: 'spring-boot-properties',
          title: 'Application Properties',
          explanation: 'Configuring your application using application.properties or application.yml.'
      },
      {
          slug: 'spring-boot-profiles',
          title: 'Profiles',
          explanation: 'Managing different configurations for different environments (dev, prod).'
      },
      {
          slug: 'spring-boot-testing',
          title: 'Testing in Spring Boot',
          explanation: 'Learn how to test your Spring Boot applications with @SpringBootTest.'
      },
      {
          slug: 'spring-boot-actuator',
          title: 'Spring Boot Actuator',
          explanation: 'Monitoring and managing your application in production.'
      },
      {
          slug: 'spring-boot-webflux',
          title: 'Spring WebFlux',
          explanation: 'Building reactive web applications with Spring Boot.'
      },
  ]
};
