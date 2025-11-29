
import type { Language } from './types';

export const spring: Language = {
  slug: 'spring',
  name: 'Spring Framework',
  topics: [
    {
      slug: 'learning-plan',
      title: 'Learning Plan',
      explanation: 'A structured roadmap for learning the Spring Framework from scratch.'
    },
    {
      slug: 'spring-modules-overview',
      title: 'Spring Modules Overview',
      explanation: 'An introduction to the various modules that make up the Spring ecosystem.'
    },
    {
        slug: 'ioc-container-and-beans',
        title: 'IoC Container and Beans',
        explanation: 'Understanding the core of Spring: Inversion of Control and how objects (Beans) are managed.'
    },
    {
        slug: 'dependency-injection-overview',
        title: 'Dependency Injection Overview',
        explanation: 'Learn how Spring automatically provides dependencies to your objects.'
    },
    {
        slug: 'constructor-injection',
        title: 'Constructor Injection',
        explanation: 'The recommended way to inject dependencies for mandatory components.'
    },
    {
        slug: 'setter-injection',
        title: 'Setter Injection',
        explanation: 'Injecting dependencies through setter methods, ideal for optional components.'
    },
    {
        slug: 'injecting-collections',
        title: 'Injecting Collections',
        explanation: 'How to inject lists, sets, and maps of beans.'
    },
    {
        slug: 'bean-scopes',
        title: 'Bean Scopes',
        explanation: 'Understanding bean lifecycles, such as singleton (default) and prototype.'
    },
    {
        slug: 'bean-lifecycle-and-inheritance',
        title: 'Bean Lifecycle & Inheritance',
        explanation: 'Exploring how beans are created, initialized, and destroyed, and how configurations can be inherited.'
    }
  ]
};
