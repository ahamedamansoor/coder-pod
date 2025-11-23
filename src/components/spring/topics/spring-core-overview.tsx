'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Box, GitBranch, Share2, Lightbulb, Coffee, ShoppingCart, User } from 'lucide-react';
import React from 'react';

interface SpringCoreOverviewProps {
  onOpenEditor: (code: string) => void;
}

export default function SpringCoreOverview({ onOpenEditor }: SpringCoreOverviewProps) {

    const traditionalCode = `// Without Spring, you manage dependencies yourself
class CoffeeMaker {
    //...
}

class CoffeeShop {
    private CoffeeMaker coffeeMaker;

    public CoffeeShop() {
        this.coffeeMaker = new CoffeeMaker(); // The CoffeeShop creates its own dependency
    }

    public void serveCoffee() {
        // ... uses coffeeMaker
    }
}
`;
    
    const springCode = `// With Spring, the IoC Container provides the dependencies
@Component
class CoffeeMaker {
    //...
}

@Component
class CoffeeShop {
    private final CoffeeMaker coffeeMaker;

    @Autowired
    public CoffeeShop(CoffeeMaker coffeeMaker) { // Dependency is "injected" here
        this.coffeeMaker = coffeeMaker;
    }

    public void serveCoffee() {
        // ... uses coffeeMaker
    }
}
`;
    
    const beanExample = `// In a Spring Configuration file:
@Configuration
public class AppConfig {

    @Bean
    public CustomerService customerService() {
        return new CustomerService();
    }
}

// Later, in another component:
@Autowired
private CustomerService service; // Spring injects the bean
`;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Box className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Spring Core Overview</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Understanding the heart of the Spring Framework.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The Coffee Shop Analogy</CardTitle>
                    <CardDescription>
                       The core job of the Spring Framework is to make building large, complex applications easier. It does this through a principle called **Inversion of Control (IoC)**. Let's imagine a coffee shop.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-muted p-6 rounded-lg border">
                        <h3 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2"><User className="w-5 h-5"/>Traditional Approach (You do the work)</h3>
                        <p className="text-sm text-muted-foreground">You, the barista, have to do everything. You grab the beans, grind them, get the filter, and operate the coffee machine. You are responsible for creating and managing all your tools (`new CoffeeMaker()`, `new Grinder()`). This is "Control".</p>
                    </div>
                    <div className="bg-muted p-6 rounded-lg border">
                        <h3 className="font-bold text-lg text-primary mb-2 flex items-center gap-2"><Coffee className="w-5 h-5"/>Spring's IoC Approach (The Container does the work)</h3>
                        <p className="text-sm text-muted-foreground">You are a highly skilled barista. You just declare, "I need a coffee maker to do my job." The coffee shop manager (the **Spring IoC Container**) hears this and provides you with a ready-to-use coffee maker. The "control" of creating and providing the tool has been "inverted" from you to the manager.</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3"><Share2 className="w-6 h-6 text-primary"/>Inversion of Control (IoC) & Dependency Injection (DI)</CardTitle>
                    <CardDescription>IoC is the principle, and Dependency Injection is the pattern that makes it happen.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid md:grid-cols-2 gap-6 text-center">
                        <div className="bg-background p-4 rounded-lg border">
                           <h3 className="font-semibold text-foreground mb-2">Traditional Code</h3>
                           <p className="text-xs text-muted-foreground mb-2">The `CoffeeShop` is tightly coupled to the `CoffeeMaker`. It creates its own instance.</p>
                           <div className="bg-muted rounded-md p-4 text-left">
                                <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{traditionalCode}</pre>
                           </div>
                        </div>
                        <div className="bg-background p-4 rounded-lg border border-primary">
                           <h3 className="font-semibold text-primary mb-2">Spring (IoC/DI)</h3>
                           <p className="text-xs text-muted-foreground mb-2">The `CoffeeShop` just declares its dependency. Spring "injects" it via the constructor.</p>
                           <div className="bg-muted rounded-md p-4 text-left">
                                <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{springCode}</pre>
                           </div>
                        </div>
                     </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                       <ShoppingCart className="w-8 h-8 text-primary"/>
                       <CardTitle className="text-3xl">The IoC Container & Beans</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-bold text-lg">The IoC Container (or ApplicationContext)</h3>
                        <p className="text-sm text-muted-foreground">This is the manager of our coffee shop. It's the core of the Spring Framework. It constructs objects, wires them together, configures them, and manages their complete lifecycle.</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg">Spring Beans</h3>
                        <p className="text-sm text-muted-foreground">These are the objects that form the backbone of your application and that are managed by the Spring IoC container. In our analogy, the `CoffeeMaker` and `CoffeeShop` would both be beans. You tell Spring something is a bean, usually with annotations like `@Component`, `@Service`, or `@Bean`.</p>
                         <div className="bg-muted rounded-md p-4 mt-2">
                            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{beanExample}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
                 <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                        <Lightbulb className="w-6 h-6"/>
                        Key Benefits
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        <li>**Loose Coupling:** Components are not tightly bound to each other. You can easily swap the `CoffeeMaker` with a `FancyEspressoMachine` without changing the `CoffeeShop` code.</li>
                        <li>**Easier Testing:** When testing the `CoffeeShop`, you can easily give it a "mock" or fake `CoffeeMaker` to isolate its behavior.</li>
                        <li>**Centralized Configuration:** Managing how your objects are created and configured is done in one place, making large applications much easier to handle.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
