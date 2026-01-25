'use client';

import React, { useState } from 'react';
import { CheckCircle, Code, Database, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react';
import { CodeSnippet } from '@/components/shared/code-snippet';

interface EntityMappingProps {
  onOpenEditor?: () => void;
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export const EntityMapping: React.FC<EntityMappingProps> = ({ onOpenEditor }) => {
  const [activeTab, setActiveTab] = useState<'basic' | 'relationships' | 'advanced'>('basic');

  const basicEntityCode = `import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String username;
    
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    
    @Column(name = "password_hash", nullable = false)
    private String passwordHash;
    
    @Column(name = "first_name", length = 100)
    private String firstName;
    
    @Column(name = "last_name", length = 100)
    private String lastName;
    
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    
    // Constructors, getters, and setters
    public User() {}
    
    public User(String username, String email, String passwordHash) {
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
    }
    
    // Getters and setters...
}`;

  const relationshipCode = `@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();
    
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id")
    private Payment payment;
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "order_tags",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags = new HashSet<>();
    
    @Column(name = "order_date", nullable = false)
    private LocalDateTime orderDate;
    
    @Column(name = "total_amount", nullable = false, precision = 10, scale = 2)
    private BigDecimal totalAmount;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private OrderStatus status;
    
    // Getters and setters...
}

@Entity
@Table(name = "order_items")
public class OrderItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
    
    @Column(name = "quantity", nullable = false)
    private Integer quantity;
    
    @Column(name = "unit_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal unitPrice;
    
    // Getters and setters...
}`;

  const advancedMappingCode = `@Entity
@Table(name = "products")
@NamedQueries({
    @NamedQuery(
        name = "Product.findByName",
        query = "SELECT p FROM Product p WHERE p.name = :name"
    ),
    @NamedQuery(
        name = "Product.findByCategory",
        query = "SELECT p FROM Product p WHERE p.category = :category ORDER BY p.price DESC"
    )
})
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_seq")
    @SequenceGenerator(name = "product_seq", sequenceName = "product_sequence", allocationSize = 1)
    private Long id;
    
    @Column(name = "name", nullable = false, length = 200)
    private String name;
    
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Embedded
    private ProductDimensions dimensions;
    
    @ElementCollection
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @MapKeyColumn(name = "image_type")
    @Column(name = "image_url")
    private Map<String, String> images = new HashMap<>();
    
    @Transient
    private boolean discounted;
    
    @Lob
    @Column(name = "specifications")
    private String specifications;
    
    @Version
    private Long version;
    
    // Getters and setters...
}

@Embeddable
public class ProductDimensions {
    
    @Column(name = "length", precision = 8, scale = 2)
    private Double length;
    
    @Column(name = "width", precision = 8, scale = 2)
    private Double width;
    
    @Column(name = "height", precision = 8, scale = 2)
    private Double height;
    
    @Column(name = "weight", precision = 8, scale = 2)
    private Double weight;
    
    // Getters and setters...
}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            <Database className="w-8 h-8 text-blue-600 dark:text-blue-300" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Entity Mapping with JPA
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 w-full px-4">
          Master JPA entity mapping to create robust data models with proper relationships, 
          constraints, and database integration.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1">
          {[
            { id: 'basic', label: 'Basic Mapping', icon: Code },
            { id: 'relationships', label: 'Relationships', icon: ArrowRight },
            { id: 'advanced', label: 'Advanced Features', icon: Lightbulb }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Code */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Code className="w-5 h-5" />
                {activeTab === 'basic' && 'Basic Entity Mapping'}
                {activeTab === 'relationships' && 'Entity Relationships'}
                {activeTab === 'advanced' && 'Advanced Mapping Features'}
              </h3>
            </div>
            <div className="p-6">
              <CodeSnippet
                code={
                  activeTab === 'basic' ? basicEntityCode :
                  activeTab === 'relationships' ? relationshipCode :
                  advancedMappingCode
                }
                language="javascript"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Explanation */}
        <div className="space-y-6">
          {activeTab === 'basic' && (
            <>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  Core JPA Annotations
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle, text: '@Entity - Marks class as JPA entity', color: 'text-blue-600' },
                    { icon: CheckCircle, text: '@Table - Specifies database table name', color: 'text-blue-600' },
                    { icon: CheckCircle, text: '@Id - Defines primary key field', color: 'text-blue-600' },
                    { icon: CheckCircle, text: '@GeneratedValue - Auto-generation strategy', color: 'text-blue-600' },
                    { icon: CheckCircle, text: '@Column - Customizes column properties', color: 'text-blue-600' },
                    { icon: CheckCircle, text: '@PrePersist/@PreUpdate - Lifecycle callbacks', color: 'text-blue-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Best Practices
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Always include a no-argument constructor</li>
                  <li>• Use appropriate column constraints (nullable, unique, length)</li>
                  <li>• Implement proper equals() and hashCode() methods</li>
                  <li>• Consider using DTOs for API responses</li>
                  <li>• Add validation annotations for data integrity</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'relationships' && (
            <>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Relationship Types
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: ArrowRight, text: '@OneToOne - One-to-one relationship', color: 'text-green-600' },
                    { icon: ArrowRight, text: '@OneToMany - One-to-many relationship', color: 'text-green-600' },
                    { icon: ArrowRight, text: '@ManyToOne - Many-to-one relationship', color: 'text-green-600' },
                    { icon: ArrowRight, text: '@ManyToMany - Many-to-many relationship', color: 'text-green-600' },
                    { icon: ArrowRight, text: 'cascade - Operations propagation', color: 'text-green-600' },
                    { icon: ArrowRight, text: 'fetchType - LAZY vs EAGER loading', color: 'text-green-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Relationship Best Practices
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Use LAZY fetching for collections to avoid N+1 queries</li>
                  <li>• Consider owning side of bidirectional relationships</li>
                  <li>• Use @JoinTable for many-to-many relationships</li>
                  <li>• Implement proper hashCode/equals for entity collections</li>
                  <li>• Use DTOs to break infinite recursion in JSON serialization</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === 'advanced' && (
            <>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                  Advanced Features
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Lightbulb, text: '@Embedded - Component mapping', color: 'text-purple-600' },
                    { icon: Lightbulb, text: '@ElementCollection - Collection of basic types', color: 'text-purple-600' },
                    { icon: Lightbulb, text: '@NamedQuery - Named queries at entity level', color: 'text-purple-600' },
                    { icon: Lightbulb, text: '@Transient - Non-persistent fields', color: 'text-purple-600' },
                    { icon: Lightbulb, text: '@Version - Optimistic locking', color: 'text-purple-600' },
                    { icon: Lightbulb, text: '@Lob - Large object support', color: 'text-purple-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
                  Performance Considerations
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Use batch processing for bulk operations</li>
                  <li>• Consider second-level caching for read-heavy entities</li>
                  <li>• Use pagination for large result sets</li>
                  <li>• Monitor and optimize SQL queries generated by JPA</li>
                  <li>• Use appropriate fetch strategies to avoid lazy loading exceptions</li>
                </ul>
              </div>
            </>
          )}

          {/* Interactive Elements */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Common Entity Patterns
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Base Entity Pattern</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Create an abstract base class with common fields like id, createdAt, updatedAt.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Soft Delete Pattern</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Add deletedAt field and use @Where annotation to filter deleted records.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Audit Trail Pattern</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Track created by, modified by with @PrePersist and @PreUpdate callbacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          Ready to implement these entity mapping concepts in your Spring Boot application?
        </p>
        {onOpenEditor && (
          <button
            onClick={onOpenEditor}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Code className="w-5 h-5" />
            Open Code Editor
          </button>
        )}
      </div>
    </div>
  );
};

export default EntityMapping;
