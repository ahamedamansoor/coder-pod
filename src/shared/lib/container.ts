/**
 * Dependency Injection Container
 * 
 * Provides a simple dependency injection system for managing services
 * and their dependencies throughout the application.
 */

type ServiceFactory<T> = () => T;
type ServiceIdentifier = string | symbol;

interface ServiceRegistration<T = any> {
  factory: ServiceFactory<T>;
  singleton: boolean;
  instance?: T;
}

class DIContainer {
  private services = new Map<ServiceIdentifier, ServiceRegistration>();

  /**
   * Register a service with the container
   */
  register<T>(
    identifier: ServiceIdentifier,
    factory: ServiceFactory<T>,
    options: { singleton?: boolean } = {}
  ): void {
    const { singleton = true } = options;
    this.services.set(identifier, {
      factory,
      singleton,
    });
  }

  /**
   * Register a singleton service
   */
  registerSingleton<T>(
    identifier: ServiceIdentifier,
    factory: ServiceFactory<T>
  ): void {
    this.register(identifier, factory, { singleton: true });
  }

  /**
   * Register a transient service (new instance each time)
   */
  registerTransient<T>(
    identifier: ServiceIdentifier,
    factory: ServiceFactory<T>
  ): void {
    this.register(identifier, factory, { singleton: false });
  }

  /**
   * Register an instance directly
   */
  registerInstance<T>(identifier: ServiceIdentifier, instance: T): void {
    this.services.set(identifier, {
      factory: () => instance,
      singleton: true,
      instance,
    });
  }

  /**
   * Resolve a service from the container
   */
  resolve<T>(identifier: ServiceIdentifier): T {
    const registration = this.services.get(identifier);
    
    if (!registration) {
      throw new Error(`Service not registered: ${String(identifier)}`);
    }

    if (registration.singleton) {
      if (!registration.instance) {
        registration.instance = registration.factory();
      }
      return registration.instance as T;
    }

    return registration.factory() as T;
  }

  /**
   * Check if a service is registered
   */
  isRegistered(identifier: ServiceIdentifier): boolean {
    return this.services.has(identifier);
  }

  /**
   * Remove a service from the container
   */
  unregister(identifier: ServiceIdentifier): void {
    this.services.delete(identifier);
  }

  /**
   * Clear all services
   */
  clear(): void {
    this.services.clear();
  }

  /**
   * Get all registered service identifiers
   */
  getRegisteredServices(): ServiceIdentifier[] {
    return Array.from(this.services.keys());
  }
}

// Create and export the singleton container instance
export const container = new DIContainer();

// Export the container class for testing
export { DIContainer };

// Type-safe service resolver helper
export function resolve<T>(identifier: ServiceIdentifier): T {
  return container.resolve<T>(identifier);
}

// Service identifier symbols for type safety
export const SERVICE_IDENTIFIERS = {
  // Auth services
  AUTH_SERVICE: Symbol('AuthService'),
  USER_SERVICE: Symbol('UserService'),
  
  // Learning services
  PROGRESS_SERVICE: Symbol('ProgressService'),
  TOPIC_SERVICE: Symbol('TopicService'),
  LANGUAGE_SERVICE: Symbol('LanguageService'),
  
  // Collaborative services
  ROOM_SERVICE: Symbol('RoomService'),
  SESSION_SERVICE: Symbol('SessionService'),
  
  // Infrastructure services
  NOTIFICATION_SERVICE: Symbol('NotificationService'),
  ANALYTICS_SERVICE: Symbol('AnalyticsService'),
  STORAGE_SERVICE: Symbol('StorageService'),
  
  // Repositories
  USER_REPOSITORY: Symbol('UserRepository'),
  PROGRESS_REPOSITORY: Symbol('ProgressRepository'),
  TOPIC_REPOSITORY: Symbol('TopicRepository'),
  ROOM_REPOSITORY: Symbol('RoomRepository'),
} as const;
