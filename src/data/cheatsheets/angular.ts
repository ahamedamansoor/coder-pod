import { Code } from 'lucide-react';

export const angularCheatsheet = {
  id: 'angular',
  name: 'Angular',
  description: 'Master Angular development from basics to advanced features (Angular 14-18+)',
  icon: Code,
  colorTheme: 'red' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Angular',
      commands: [
        {
          command: 'Installing Angular CLI',
          description: 'Install Angular CLI globally',
          usage: 'npm install -g @angular/cli',
          example: '# Install Angular CLI\nnpm install -g @angular/cli\n\n# Verify installation\nng version\n\n# Install specific version\nnpm install -g @angular/cli@17\n\n# Update to latest\nng update',
        },
        {
          command: 'Create New Angular App',
          description: 'Create a new Angular application',
          usage: 'ng new [project-name] [options]',
          example: '# Create new app with defaults\nng new my-app\n\n# Create with routing and SCSS\nng new my-app --routing --style=scss\n\n# Create standalone app (Angular 14+)\nng new my-app --standalone --routing\n\n# Create with SSR\nng new my-app --ssr\n\n# Skip Git initialization\nng new my-app --skip-git',
        },
        {
          command: 'Serve Application',
          description: 'Run development server',
          usage: 'ng serve [options]',
          example: '# Start dev server\nng serve\n\n# Serve on specific port\nng serve --port 4300\n\n# Open browser automatically\nng serve --open\n\n# Serve with SSL\nng serve --ssl\n\n# Enable live reload\nng serve --live-reload',
        },
        {
          command: 'Build Application',
          description: 'Build for production',
          usage: 'ng build [options]',
          example: '# Development build\nng build\n\n# Production build\nng build --configuration production\n\n# Build with specific output path\nng build --output-path dist/my-app\n\n# Build with base href\nng build --base-href /my-app/\n\n# Build stats\nng build --stats-json',
        },
        {
          command: 'Angular Project Structure',
          description: 'Understanding Angular folder structure',
          usage: 'src/app/, angular.json, package.json',
          example: 'my-app/\n├── src/\n│   ├── app/                    # Application code\n│   │   ├── app.component.ts     # Root component\n│   │   ├── app.component.html   # Component template\n│   │   ├── app.component.scss   # Component styles\n│   │   ├── app.config.ts        # App configuration\n│   │   └── main.ts              # Application entry point\n│   ├── assets/                  # Static assets\n│   ├── environments/            # Environment configs\n│   └── styles.scss              # Global styles\n├── angular.json                 # Angular configuration\n├── package.json                 # Dependencies\n├── tsconfig.json               # TypeScript config\n└── README.md',
        },
      ],
    },
    {
      title: 'Components Fundamentals',
      commands: [
        {
          command: 'Generate Component',
          description: 'Create a new component',
          usage: 'ng generate component [name]',
          example: '# Generate component\nng generate component user-profile\n\n# Generate with shorthand\nng g c user-profile\n\n# Generate standalone component\nng g c shared/button --standalone\n\n# Generate in specific module\nng g c admin/dashboard --module=admin\n\n# Skip tests\nng g c header --skip-tests',
        },
        {
          command: 'Component Decorator',
          description: 'Define component metadata',
          usage: '@Component({ selector, template, styles })',
          example: '@Component({\n  selector: "app-user",\n  templateUrl: "./user.component.html",\n  styleUrls: ["./user.component.scss"],\n  standalone: true,\n  imports: [CommonModule, FormsModule]\n})\nexport class UserComponent {\n  title = "User Profile";\n}',
        },
        {
          command: 'Component Template',
          description: 'Inline template vs external file',
          usage: 'template: "HTML" or templateUrl: "file.html"',
          example: '@Component({\n  selector: "app-hello",\n  template: `<h1>Hello {{name}}!</h1>\n           <p>{{description}}</p>`,\n  standalone: true,\n  imports: [CommonModule]\n})\nexport class HelloComponent {\n  name = "Angular";\n  description = "Welcome to Angular!";\n}',
        },
        {
          command: 'Component Styles',
          description: 'Component-specific styling',
          usage: 'styles: ["CSS"] or styleUrls: ["file.css"]',
          example: '@Component({\n  selector: "app-card",\n  template: `<div class="card">Content</div>`,\n  styles: [`\n    .card {\n      padding: 16px;\n      border: 1px solid #ccc;\n      border-radius: 8px;\n    }\n  `],\n  standalone: true\n})',
        },
        {
          command: 'Component Class',
          description: 'Component logic and data',
          usage: 'export class ComponentName { properties, methods }',
          example: '@Component({\n  selector: "app-counter",\n  template: `\n    <button (click)="decrement()">-</button>\n    <span>{{count}}</span>\n    <button (click)="increment()">+</button>\n  `,\n  standalone: true\n})\nexport class CounterComponent {\n  count = 0;\n\n  increment() {\n    this.count++;\n  }\n\n  decrement() {\n    this.count--;\n  }\n}',
        },
      ],
    },
    {
      title: 'Directives Fundamentals',
      commands: [
        {
          command: 'Structural Directives',
          description: 'Change DOM structure',
          usage: '*directive="expression"',
          example: '@Component({\n  selector: "app-demo",\n  template: `\\n    <!-- Conditional rendering -->\\n    <div *ngIf="isVisible">Show me</div>\\n    <div *ngIf="user; else noUser">Hello {{user.name}}</div>\\n    <ng-template #noUser>No user found</ng-template>\\n    \\n    <!-- Looping -->\\n    <div *ngFor="let item of items; let i = index; trackBy: trackByFn">\\n      {{i}}: {{item.name}}\\n    </div>\\n    \\n    <!-- Switch -->\\n    <div [ngSwitch]="status">\\n      <p *ngSwitchCase="active">Active</p>\\n      <p *ngSwitchCase="inactive">Inactive</p>\\n      <p *ngSwitchDefault>Unknown</p>\\n    </div>\\n  `,\\n  standalone: true,\\n  imports: [CommonModule]\\n})\\nexport class DemoComponent {\\n  isVisible = true;\\n  user = { name: "John" };\\n  items = [{ name: "Item 1" }, { name: "Item 2" }];\\n  status = "active";\\n  trackByFn(index: number, item: any) { return item.id; }\\n}',
        },
        {
          command: 'Attribute Directives',
          description: 'Change element appearance or behavior',
          usage: '[directive]="expression"',
          example: '@Component({\n  selector: "app-style-demo",\n  template: `<div [ngClass]="{ active: isActive, disabled: isDisabled }">Styled with ngClass</div><div [ngStyle]="{ color: textColor, fontSize: fontSize + \'px\' }">Styled with ngStyle</div><input [(ngModel)]="value" placeholder="Two-way binding">`,\n  standalone: true,\n  imports: [CommonModule, FormsModule]\n})\nexport class StyleDemoComponent {\n  isActive = true;\n  isDisabled = false;\n  textColor = "blue";\n  fontSize = 16;\n  value = "";\n}',
        },
        {
          command: 'Create Custom Directive',
          description: 'Build your own directive',
          usage: '@Directive({ selector })',
          example: '@Directive({\n  selector: "[appHighlight]",\n  standalone: true\n})\nexport class HighlightDirective {\n  @Input() appHighlight = "";\n  \n  constructor(private el: ElementRef, private renderer: Renderer2) {}\n  \n  @HostListener("mouseenter") onMouseEnter() {\n    this.renderer.setStyle(this.el.nativeElement, "background-color", this.appHighlight || "yellow");\n  }\n  \n  @HostListener("mouseleave") onMouseLeave() {\n    this.renderer.removeStyle(this.el.nativeElement, "background-color");\n  }\n}',
        },
        {
          command: 'ng-template and ng-container',
          description: 'Template containers for structural directives',
          usage: '<ng-template> and <ng-container>',
          example: '@Component({\n  selector: "app-template-demo",\n  template: `\n    <!-- ng-container - no DOM element -->\n    <ng-container *ngIf="showHeader">\n      <h1>Header</h1>\n      <p>Subtitle</p>\n    </ng-container>\n    \n    <!-- ng-template for deferred content -->\n    <ng-template #loadingTemplate>\n      <div>Loading...</div>\n    </ng-template>\n    \n    <!-- Template context -->\n    <ng-template let-item let-i="index" [ngForOf]="items">\n      <div>{{i}}: {{item.name}}</div>\n    </ng-template>\n  `,\n  standalone: true,\n  imports: [CommonModule]\n})\nexport class TemplateDemoComponent {\n  showHeader = true;\n  items = [{ name: "Item 1" }, { name: "Item 2" }];\n}',
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Services and Dependency Injection',
      commands: [
        {
          command: 'Create Service',
          description: 'Generate a service with CLI',
          usage: 'ng generate service [name]',
          example: '# Generate service\nng generate service auth\n\n# Generate with shorthand\nng g s services/user\n\n# Skip tests\nng g s logger --skip-tests\n\n# Generate in specific folder\nng g s services/api/api',
        },
        {
          command: '@Injectable Decorator',
          description: 'Make class injectable',
          usage: '@Injectable({ providedIn: "root" })',
          example: '@Injectable({\n  providedIn: "root"\n})\nexport class AuthService {\n  private currentUser = new BehaviorSubject<User | null>(null);\n  currentUser$ = this.currentUser.asObservable();\n  \n  login(credentials: LoginData) {\n    // Login logic\n  }\n  \n  logout() {\n    this.currentUser.next(null);\n  }\n}',
        },
        {
          command: 'Constructor Injection',
          description: 'Inject dependencies in constructor',
          usage: 'constructor(private service: Service) {}',
          example: '@Component({\n  selector: "app-user-profile",\n  template: `<div>{{user?.name}}</div>`,\n  standalone: true\n})\nexport class UserProfileComponent implements OnInit {\n  user: User | null = null;\n  \n  constructor(\n    private authService: AuthService,\n    private userService: UserService\n  ) {}\n  \n  ngOnInit() {\n    this.authService.currentUser$.subscribe(user => {\n      this.user = user;\n    });\n  }\n}',
        },
        {
          command: 'inject() Function',
          description: 'Inject dependencies using inject function',
          usage: 'const service = inject(Service)',
          example: '@Component({\n  selector: "app-data",\n  template: `<div *ngIf="data()">{{data()}}</div>`,\n  standalone: true\n})\nexport class DataComponent {\n  private dataService = inject(DataService);\n  data = signal<any>(null);\n  \n  constructor() {\n    this.loadData();\n  }\n  \n  loadData() {\n    this.dataService.getData().subscribe(data => {\n      this.data.set(data);\n    });\n  }\n}',
        },
        {
          command: 'Provider Configuration',
          description: 'Configure providers in app config',
          usage: 'provideService() or providers array',
          example: 'export const appConfig: ApplicationConfig = {\n  providers: [\n    provideRouter(routes),\n    provideHttpClient(),\n    { provide: API_URL, useValue: "https://api.example.com" },\n    { provide: AuthService, useClass: AuthService },\n    { provide: Logger, useFactory: () => new ConsoleLogger() }\n  ]\n};\n\nbootstrapApplication(AppComponent, appConfig);',
        },
        {
          command: 'Injection Tokens',
          description: 'Inject non-class dependencies',
          usage: 'new InjectionToken<T>("description")',
          example: 'export const API_URL = new InjectionToken<string>("api-url");\nexport const APP_CONFIG = new InjectionToken<AppConfig>("app-config");\n\n@Component({\n  selector: "app-api",\n  standalone: true,\n  providers: [\n    { provide: API_URL, useValue: "https://api.example.com" }\n  ]\n})\nexport class ApiComponent {\n  apiUrl = inject(API_URL);\n}',
        },
      ],
    },
    {
      title: 'Routing Fundamentals',
      commands: [
        {
          command: 'Setup Routing',
          description: 'Configure routing for Angular app',
          usage: 'const routes: Routes = [...]',
          example: 'const routes: Routes = [\n  { path: "", component: HomeComponent },\n  { path: "about", component: AboutComponent },\n  { path: "users/:id", component: UserDetailComponent },\n  { path: "admin", loadChildren: () => import("./admin/admin.routes").then(m => m.routes) },\n  { path: "**", redirectTo: "", pathMatch: "full" }\n];\n\nexport const appConfig: ApplicationConfig = {\n  providers: [provideRouter(routes)]\n};',
        },
        {
          command: 'Router Outlet',
          description: 'Display routed components',
          usage: '<router-outlet></router-outlet>',
          example: '@Component({\n  selector: "app-root",\n  template: `\n    <nav>\n      <a routerLink="/">Home</a>\n      <a routerLink="/about">About</a>\n    </nav>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  `,\n  standalone: true,\n  imports: [RouterOutlet, RouterLink]\n})\nexport class AppComponent {}',
        },
        {
          command: 'Router Navigation',
          description: 'Navigate programmatically',
          usage: 'router.navigate(["/path"])',
          example: '@Component({\n  selector: "app-nav",\n  template: `\n    <button (click)="goHome()">Home</button>\n    <button (click)="goToUser(1)">User 1</button>\n  `,\n  standalone: true\n})\nexport class NavComponent {\n  private router = inject(Router);\n  \n  goHome() {\n    this.router.navigate(["/"]);\n  }\n  \n  goToUser(id: number) {\n    this.router.navigate(["/users", id]);\n  }\n}',
        },
        {
          command: 'Route Parameters',
          description: 'Access route parameters',
          usage: 'ActivatedRoute.paramMap',
          example: '@Component({\n  selector: "app-user-detail",\n  template: `<h1>User {{userId}}</h1>`,\n  standalone: true\n})\nexport class UserDetailComponent implements OnInit {\n  userId: string | null = null;\n  private route = inject(ActivatedRoute);\n  \n  ngOnInit() {\n    this.userId = this.route.snapshot.paramMap.get("id");\n    \n    // Or subscribe to changes\n    this.route.paramMap.subscribe(params => {\n      this.userId = params.get("id");\n    });\n  }\n}',
        },
        {
          command: 'Query Parameters',
          description: 'Handle query parameters',
          usage: 'ActivatedRoute.queryParamMap',
          example: '@Component({\n  selector: "app-search",\n  template: `<input (input)="search($event)">`,\n  standalone: true\n})\nexport class SearchComponent {\n  private route = inject(ActivatedRoute);\n  private router = inject(Router);\n  \n  ngOnInit() {\n    this.route.queryParamMap.subscribe(params => {\n      const query = params.get("q");\n      if (query) this.performSearch(query);\n    });\n  }\n  \n  search(event: Event) {\n    const query = (event.target as HTMLInputElement).value;\n    this.router.navigate([], {\n      relativeTo: this.route,\n      queryParams: { q: query }\n    });\n  }\n}',
        },
        {
          command: 'Route Guards',
          description: 'Protect routes with guards',
          usage: 'CanActivate, CanDeactivate functional guards',
          example: 'export const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  if (authService.isLoggedIn()) {\n    return true;\n  }\n  return inject(Router).createUrlTree(["/login"]);\n};\n\nconst routes: Routes = [\n  { \n    path: "admin", \n    component: AdminComponent,\n    canActivate: [authGuard] \n  }\n];',
        },
      ],
    },
    {
      title: 'Forms Fundamentals',
      commands: [
        {
          command: 'Template-Driven Forms',
          description: 'Simple forms with ngModel',
          usage: 'FormsModule and ngModel',
          example: '@Component({\n  selector: "app-user-form",\n  template: `\n    <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)">\n      <input name="name" \n             ngModel \n             required \n             placeholder="Name">\n      <input name="email" \n             ngModel \n             email \n             placeholder="Email">\n      <button type="submit" \n              [disabled]="!userForm.valid">\n        Submit\n      </button>\n    </form>\n  `,\n  standalone: true,\n  imports: [FormsModule]\n})\nexport class UserFormComponent {\n  onSubmit(formData: any) {\n    console.log("Form submitted:", formData);\n  }\n}',
        },
        {
          command: 'Reactive Forms Setup',
          description: 'Build forms with FormControl and FormGroup',
          usage: 'ReactiveFormsModule, FormBuilder',
          example: '@Component({\n  selector: "app-profile-form",\n  template: `\n    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">\n      <input formControlName="name" placeholder="Name">\n      <input formControlName="email" placeholder="Email">\n      <div formGroupName="address">\n        <input formControlName="street" placeholder="Street">\n        <input formControlName="city" placeholder="City">\n      </div>\n      <button type="submit" [disabled]="!profileForm.valid">\n        Submit\n      </button>\n    </form>\n  `,\n  standalone: true,\n  imports: [ReactiveFormsModule]\n})\nexport class ProfileFormComponent {\n  profileForm = this.fb.group({\n    name: ["", Validators.required],\n    email: ["", [Validators.required, Validators.email]],\n    address: this.fb.group({\n      street: [""],\n      city: [""]\n    })\n  });\n  \n  constructor(private fb: FormBuilder) {}\n  \n  onSubmit() {\n    if (this.profileForm.valid) {\n      console.log(this.profileForm.value);\n    }\n  }\n}',
        },
        {
          command: 'Form Validation',
          description: 'Add validation to form controls',
          usage: 'Validators and custom validators',
          example: 'export class CustomValidators {\n  static passwordStrength(control: AbstractControl): ValidationErrors | null {\n    const value = control.value;\n    if (!value) return null;\n    \n    const hasUpperCase = /[A-Z]/.test(value);\n    const hasLowerCase = /[a-z]/.test(value);\n    const hasNumber = /\\d/.test(value);\n    \n    if (hasUpperCase && hasLowerCase && hasNumber) {\n      return null;\n    }\n    \n    return { passwordStrength: true };\n  }\n}\n\n// Usage\npasswordControl = new FormControl("", [\n  Validators.required,\n  Validators.minLength(8),\n  CustomValidators.passwordStrength\n]);',
        },
        {
          command: 'FormArray',
          description: 'Dynamic form fields array',
          usage: 'FormArray for dynamic lists',
          example: '@Component({\n  selector: "app-dynamic-form",\n  template: `\n    <form [formGroup]="form">\n      <div formArrayName="phones">\n        <div *ngFor="let phone of phones.controls; let i = index">\n          <input [formControlName]="i" placeholder="Phone">\n          <button type="button" (click)="removePhone(i)">Remove</button>\n        </div>\n      </div>\n      <button type="button" (click)="addPhone()">Add Phone</button>\n    </form>\n  `,\n  standalone: true,\n  imports: [ReactiveFormsModule, CommonModule]\n})\nexport class DynamicFormComponent {\n  form = this.fb.group({\n    phones: this.fb.array([this.fb.control("")])\n  });\n  \n  get phones(): FormArray {\n    return this.form.get("phones") as FormArray;\n  }\n  \n  addPhone() {\n    this.phones.push(this.fb.control(""));\n  }\n  \n  removePhone(index: number) {\n    this.phones.removeAt(index);\n  }\n}',
        },
      ],
    },
        // ADVANCED LEVEL
    {
      title: 'HTTP Client and RxJS',
      commands: [
        {
          command: 'HTTP Client Setup',
          description: 'Configure HTTP client for API calls',
          usage: 'provideHttpClient() and HttpClient',
          example: 'export const appConfig: ApplicationConfig = {\n  providers: [provideHttpClient()]\n};\n\n@Injectable({ providedIn: "root" })\nexport class ApiService {\n  constructor(private http: HttpClient) {}\n  \n  getUsers(): Observable<User[]> {\n    return this.http.get<User[]>("/api/users");\n  }\n}',
        },
        {
          command: 'HTTP Methods',
          description: 'Make different HTTP requests',
          usage: 'GET, POST, PUT, DELETE, PATCH',
          example: '@Injectable({ providedIn: "root" })\nexport class UserService {\n  constructor(private http: HttpClient) {}\n  \n  // GET request\n  getUser(id: number): Observable<User> {\n    return this.http.get<User>(`/api/users/${id}`);\n  }\n  \n  // POST request\n  createUser(user: User): Observable<User> {\n    return this.http.post<User>("/api/users", user);\n  }\n  \n  // PUT request\n  updateUser(id: number, user: User): Observable<User> {\n    return this.http.put<User>(`/api/users/${id}`, user);\n  }\n  \n  // DELETE request\n  deleteUser(id: number): Observable<void> {\n    return this.http.delete<void>(`/api/users/${id}`);\n  }\n}',
        },
        {
          command: 'HTTP Headers and Options',
          description: 'Configure request headers and options',
          usage: 'HttpHeaders and HttpRequest options',
          example: 'getUsersWithAuth(): Observable<User[]> {\n    const headers = new HttpHeaders({\n      "Authorization": `Bearer ${this.getToken()}`,\n      "Content-Type": "application/json"\n    });\n    \n    return this.http.get<User[]>("/api/users", { headers });\n  }\n  \n  uploadFile(file: File): Observable<any> {\n    const formData = new FormData();\n    formData.append("file", file);\n    \n    return this.http.post("/api/upload", formData, {\n      reportProgress: true,\n      observe: "events"\n    });\n  }',
        },
        {
          command: 'RxJS Operators',
          description: 'Transform and combine observables',
          usage: 'pipe() with RxJS operators',
          example: '@Component({\n  selector: "app-search",\n  template: `<input (input)="search($event)">`,\n  standalone: true\n})\nexport class SearchComponent {\n  private searchService = inject(SearchService);\n  results$ = new BehaviorSubject<SearchResult[]>([]);\n  \n  search(event: Event) {\n    const query = (event.target as HTMLInputElement).value;\n    \n    of(query).pipe(\n      debounceTime(300),\n      distinctUntilChanged(),\n      filter(q => q.length > 2),\n      switchMap(q => this.searchService.search(q)),\n      map(results => results.slice(0, 10)),\n      catchError(error => {\n        console.error("Search error:", error);\n        return of([]);\n      })\n    ).subscribe(results => this.results$.next(results));\n  }\n}',
        },
        {
          command: 'HTTP Interceptors',
          description: 'Intercept HTTP requests and responses',
          usage: 'HttpInterceptorFn functional interceptors',
          example: 'export const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const authToken = inject(AuthService).getToken();\n  \n  if (authToken) {\n    const authReq = req.clone({\n      headers: req.headers.set("Authorization", `Bearer ${authToken}`)\n    });\n    return next(authReq);\n  }\n  \n  return next(req);\n};\n\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideHttpClient(withInterceptors([authInterceptor]))\n  ]\n};',
        },
      ],
    },
    {
      title: 'Testing Fundamentals',
      commands: [
        {
          command: 'Component Testing Setup',
          description: 'Set up component test environment',
          usage: 'TestBed and ComponentFixture',
          example: 'import { ComponentFixture, TestBed } from "@angular/core/testing";\nimport { By } from "@angular/platform-browser";\n\ndescribe("UserComponent", () => {\n  let component: UserComponent;\n  let fixture: ComponentFixture<UserComponent>;\n  \n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      imports: [UserComponent]\n    }).compileComponents();\n    \n    fixture = TestBed.createComponent(UserComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n  \n  it("should create", () => {\n    expect(component).toBeTruthy();\n  });\n});',
        },
        {
          command: 'Testing Component Properties',
          description: 'Test component properties and methods',
          usage: 'expect(component.property).toBe()',
          example: 'it("should have initial count of 0", () => {\n  expect(component.count).toBe(0);\n});\n\nit("should increment count", () => {\n  component.increment();\n  expect(component.count).toBe(1);\n});\n\nit("should emit event on increment", () => {\n  spyOn(component.countChange, "emit");\n  component.increment();\n  expect(component.countChange.emit).toHaveBeenCalledWith(1);\n});',
        },
        {
          command: 'Testing DOM Interactions',
          description: 'Test template rendering and user interactions',
          usage: 'fixture.nativeElement and querySelector',
          example: 'it("should display user name", () => {\n  component.user = { name: "John" };\n  fixture.detectChanges();\n  \n  const element = fixture.nativeElement;\n  expect(element.textContent).toContain("John");\n});\n\nit("should call increment when button clicked", () => {\n  spyOn(component, "increment");\n  const button = fixture.debugElement.query(By.css("button"));\n  button.triggerEventHandler("click", null);\n  expect(component.increment).toHaveBeenCalled();\n});',
        },
        {
          command: 'HTTP Testing',
          description: 'Test HTTP client calls',
          usage: 'HttpTestingController',
          example: 'import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";\n\ndescribe("ApiService", () => {\n  let service: ApiService;\n  let httpMock: HttpTestingController;\n  \n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      providers: [\n        ApiService,\n        provideHttpClientTesting()\n      ]\n    });\n    service = TestBed.inject(ApiService);\n    httpMock = TestBed.inject(HttpTestingController);\n  });\n  \n  it("should fetch users", () => {\n    const mockUsers = [{ id: 1, name: "John" }];\n    service.getUsers().subscribe(users => {\n      expect(users).toEqual(mockUsers);\n    });\n    \n    const req = httpMock.expectOne("/api/users");\n    expect(req.request.method).toBe("GET");\n    req.flush(mockUsers);\n  });\n});',
        },
        {
          command: 'Service Testing',
          description: 'Test services with dependencies',
          usage: 'TestBed with providers',
          example: 'describe("AuthService", () => {\n  let service: AuthService;\n  let httpClientSpy: jasmine.SpyObj<HttpClient>;\n  \n  beforeEach(() => {\n    const spy = jasmine.createSpyObj("HttpClient", ["get", "post"]);\n    TestBed.configureTestingModule({\n      providers: [\n        AuthService,\n        { provide: HttpClient, useValue: spy }\n      ]\n    });\n    service = TestBed.inject(AuthService);\n    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;\n  });\n  \n  it("should login user", () => {\n    const mockResponse = { token: "abc123" };\n    httpClientSpy.post.and.returnValue(of(mockResponse));\n    \n    service.login("user", "pass").subscribe(result => {\n      expect(result).toEqual(mockResponse);\n    });\n    \n    expect(httpClientSpy.post).toHaveBeenCalledWith("/api/login", {\n      username: "user",\n      password: "pass"\n    });\n  });\n});',
        },
      ],
    },
        // EXPERT LEVEL
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Change Detection Strategy',
          description: 'Optimize change detection performance',
          usage: 'ChangeDetectionStrategy.OnPush',
          example: '@Component({\n  selector: "app-user-card",\n  template: `<div>{{user.name}}</div>`,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  standalone: true\n})\nexport class UserCardComponent {\n  @Input() user: User;\n  \n  constructor(private cdr: ChangeDetectorRef) {}\n  \n  updateUser() {\n    this.user = { ...this.user, name: "Updated" };\n    this.cdr.markForCheck(); // Trigger change detection\n  }\n}',
        },
        {
          command: 'TrackBy Function',
          description: 'Optimize *ngFor performance',
          usage: 'trackBy: trackByFunction',
          example: '@Component({\n  selector: "app-list",\n  template: `\n    <div *ngFor="let item of items; trackBy: trackById">\n      {{item.name}}\n    </div>\n  `,\n  standalone: true,\n  imports: [CommonModule]\n})\nexport class ListComponent {\n  items = [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }];\n  \n  trackById(index: number, item: any) {\n    return item.id; // Track by unique identifier\n  }\n}',
        },
        {
          command: 'Lazy Loading Modules',
          description: 'Load modules on demand',
          usage: 'loadChildren() with dynamic imports',
          example: 'const routes: Routes = [\n  { path: "", component: HomeComponent },\n  { \n    path: "admin", \n    loadChildren: () => import("./admin/admin.routes").then(m => m.routes)\n  },\n  {\n    path: "reports",\n    loadComponent: () => import("./reports/reports.component").then(m => m.ReportsComponent)\n  }\n];',
        },
        {
          command: 'Memory Management',
          description: 'Prevent memory leaks',
          usage: 'takeUntil() and ngOnDestroy',
          example: '@Component({\n  selector: "app-data",\n  template: `<div>{{data}}</div>`,\n  standalone: true\n})\nexport class DataComponent implements OnDestroy {\n  data = "";\n  private destroy$ = new Subject<void>();\n  \n  constructor(private dataService: DataService) {\n    this.dataService.getData()\n      .pipe(takeUntil(this.destroy$))\n      .subscribe(data => this.data = data);\n  }\n  \n  ngOnDestroy() {\n    this.destroy$.next();\n    this.destroy$.complete();\n  }\n}',
        },
      ],
    },
    {
      title: 'Security Best Practices',
      commands: [
        {
          command: 'XSS Prevention',
          description: 'Prevent Cross-Site Scripting attacks',
          usage: 'DomSanitizer and bypassSecurityTrust',
          example: '@Component({\n  selector: "app-safe-html",\n  template: `<div [innerHTML]="safeHtml"></div>`,\n  standalone: true\n})\nexport class SafeHtmlComponent {\n  safeHtml: SafeHtml;\n  \n  constructor(private sanitizer: DomSanitizer) {\n    // Sanitize HTML\n    this.safeHtml = this.sanitizer.sanitize(SecurityContext.HTML, "<script>alert("xss")</script>");\n    \n    // Bypass security (use with caution)\n    const trustedHtml = this.sanitizer.bypassSecurityTrustHtml("<div>Trusted content</div>");\n  }\n}',
        },
        {
          command: 'CSRF Protection',
          description: 'Prevent Cross-Site Request Forgery',
          usage: 'CSRF tokens and HTTP interceptors',
          example: 'export const csrfInterceptor: HttpInterceptorFn = (req, next) => {\n  if (["POST", "PUT", "DELETE"].includes(req.method)) {\n    const csrfToken = getCsrfToken(); // Get token from cookie or storage\n    const csrfReq = req.clone({\n      headers: req.headers.set("X-CSRF-Token", csrfToken)\n    });\n    return next(csrfReq);\n  }\n  return next(req);\n};',
        },
        {
          command: 'Content Security Policy',
          description: 'Implement CSP headers',
          usage: 'CSP configuration and meta tags',
          example: '// In index.html or server configuration\n<meta http-equiv="Content-Security-Policy" \n      content="default-src \'self\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\'">\n\n// Angular CSP configuration\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    {\n      provide: CSP_NONCE,\n      useValue: "your-nonce-value"\n    }\n  ]\n};',
        },
        {
          command: 'Authentication & Authorization',
          description: 'Implement secure auth flows',
          usage: 'Route guards and token management',
          example: 'export const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n  \n  if (!authService.isLoggedIn()) {\n    return router.createUrlTree(["/login"], {\n      queryParams: { returnUrl: state.url }\n    });\n  }\n  \n  // Check role-based access\n  const requiredRoles = route.data?.["roles"] as string[];\n  if (requiredRoles && !authService.hasRoles(requiredRoles)) {\n    return router.createUrlTree(["/unauthorized"]);\n  }\n  \n  return true;\n};\n\n// Usage in routes\n{ \n  path: "admin", \n  component: AdminComponent,\n  canActivate: [authGuard],\n  data: { roles: ["admin"] }\n}',
        },
      ],
    },
    {
      title: 'Angular 17+ Latest Features',
      commands: [
        {
          command: 'New Control Flow Syntax',
          description: 'Use @if, @for, @switch instead of *ngIf, *ngFor',
          usage: '@if, @for, @switch (Angular 17+)',
          example: '@Component({\n  selector: "app-new-syntax",\n  template: `\n    @if (isLoading) {\n      <p>Loading...</p>\n    } @else {\n      <p>Content loaded</p>\n    }\n    \n    @for (item of items; track item.id) {\n      <div>{{item.name}}</div>\n    } @empty {\n      <p>No items found</p>\n    }\n    \n    @switch (status) {\n      @case ("active") {\n        <p>Active status</p>\n      }\n      @default {\n        <p>Unknown status</p>\n      }\n    }\n  `,\n  standalone: true\n})\nexport class NewSyntaxComponent {\n  isLoading = false;\n  items = [];\n  status = "active";\n}',
        },
        {
          command: 'Signals (Angular 16+)',
          description: 'Reactive primitive for state management',
          usage: 'signal(), computed(), effect()',
          example: '@Component({\n  selector: "app-signals",\n  template: `\n    <p>Count: {{count()}}</p>\n    <p>Double: {{doubleCount()}}</p>\n    <button (click)="increment()">+</button>\n  `,\n  standalone: true\n})\nexport class SignalsComponent {\n  count = signal(0);\n  doubleCount = computed(() => this.count() * 2);\n  \n  constructor() {\n    effect(() => {\n      console.log("Count changed:", this.count());\n    });\n  }\n  \n  increment() {\n    this.count.update(c => c + 1);\n  }\n}',
        },
        {
          command: 'Deferred Loading',
          description: 'Lazy load content with placeholders',
          usage: '@defer block (Angular 17+)',
          example: '@Component({\n  selector: "app-deferred",\n  template: `\n    @defer (on viewport) {\n      <app-heavy-component></app-heavy-component>\n    } @loading {\n      <p>Loading heavy component...</p>\n    } @error {\n      <p>Failed to load component</p>\n    } @placeholder {\n      <p>Component will load when visible</p>\n    }\n  `,\n  standalone: true\n})\nexport class DeferredComponent {}',
        },
        {
          command: 'Hydration Support',
          description: 'Server-side rendering hydration',
          usage: 'provideClientHydration()',
          example: 'export const appConfig: ApplicationConfig = {\n  providers: [\n    provideRouter(routes),\n    provideClientHydration() // Enable hydration\n  ]\n};\n\n// In main.ts\nbootstrapApplication(AppComponent, appConfig);',
        },
      ],
    },
    {
      title: 'Advanced Patterns & Architecture',
      commands: [
        {
          command: 'Micro-Frontends',
          description: 'Build micro-frontend architecture',
          usage: 'Module Federation and Webpack',
          example: '// webpack.config.js\nconst ModuleFederationPlugin = require("@module-federation/webpack");\n\nmodule.exports = {\n  plugins: [\n    new ModuleFederationPlugin({\n      name: "shell",\n      remotes: {\n        mfe1: "mfe1@http://localhost:3001/remoteEntry.js",\n        mfe2: "mfe2@http://localhost:3002/remoteEntry.js"\n      },\n      shared: ["@angular/core", "@angular/common"]\n    })\n  ]\n};',
        },
        {
          command: 'Component Libraries',
          description: 'Create reusable component libraries',
          usage: 'ng generate library',
          example: '# Generate library\nng generate library my-ui-lib\n\n# Build library\nng build my-ui-lib\n\n# Publish to npm\ncd dist/my-ui-lib\nnpm publish\n\n# Use in other projects\nnpm install my-ui-lib\nimport { MyComponent } from "my-ui-lib";',
        },
        {
          command: 'Progressive Web App',
          description: 'Convert Angular app to PWA',
          usage: '@angular/pwa and service workers',
          example: '# Add PWA support\nng add @angular/pwa\n\n# Service worker configuration\n// ngsw-config.json\n{\n  "index": "/index.html",\n  "assetGroups": [\n    {\n      "name": "app",\n      "installMode": "prefetch",\n      "resources": {\n        "files": ["/index.html", "/*.css", "/*.js"]\n      }\n    }\n  ]\n}',
        },
        {
          command: 'Server-Side Rendering',
          description: 'Implement SSR with Angular Universal',
          usage: '@angular/ssr and Express',
          example: '# Add SSR\nng add @angular/ssr\n\n# Server configuration\n// server.ts\nimport { AngularAppEngine, createRequestHandler } from "@angular/ssr";\n\nconst server = express();\nserver.use("**", express.static(distFolder, { maxAge: "1y" }));\nserver.use("**", createRequestHandler({ bootstrap, appEngine }));\n\n# Build and run\nng build\nng run my-app:server\nnode dist/my-app/server/main.js',
        },
      ],
    },
    {
      title: 'Functional Interceptor (v15+)',
      commands: [
        {
          command: 'Functional Interceptor (v15+)',
          description: 'Interceptor as function',
          usage: 'export const interceptor: HttpInterceptorFn = () => { }',
          example: 'export const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).getToken();\n  const authReq = req.clone({\n    setHeaders: { Authorization: `Bearer ${token}` }\n  });\n  return next(authReq);\n};',
        },
      ],
    },
    {
      title: 'RxJS Operators',
      commands: [
        {
          command: 'map',
          description: 'Transform emitted values',
          usage: 'observable.pipe(map(value => newValue))',
          example: 'this.users$.pipe(\n  map(users => users.map(u => u.name))\n).subscribe();',
        },
        {
          command: 'filter',
          description: 'Filter emitted values',
          usage: 'observable.pipe(filter(value => condition))',
          example: 'this.users$.pipe(\n  filter(users => users.length > 0)\n).subscribe();',
        },
        {
          command: 'tap',
          description: 'Side effects without modifying stream',
          usage: 'observable.pipe(tap(value => { }))',
          example: 'this.users$.pipe(\n  tap(users => console.log("Users:", users))\n).subscribe();',
        },
        {
          command: 'switchMap',
          description: 'Switch to new observable',
          usage: 'observable.pipe(switchMap(value => newObservable))',
          example: 'this.searchTerm$.pipe(\n  debounceTime(300),\n  switchMap(term => this.http.get(`/api/search?q=${term}`))\n).subscribe();',
        },
        {
          command: 'mergeMap / flatMap',
          description: 'Merge multiple observables',
          usage: 'observable.pipe(mergeMap(value => observable))',
          example: 'this.userIds$.pipe(\n  mergeMap(id => this.http.get(`/api/users/${id}`))\n).subscribe();',
        },
        {
          command: 'concatMap',
          description: 'Concatenate observables in order',
          usage: 'observable.pipe(concatMap(value => observable))',
          example: 'this.requests$.pipe(\n  concatMap(req => this.http.post("/api/data", req))\n).subscribe();',
        },
        {
          command: 'debounceTime',
          description: 'Delay emissions',
          usage: 'observable.pipe(debounceTime(ms))',
          example: 'this.searchInput.valueChanges.pipe(\n  debounceTime(300),\n  switchMap(term => this.search(term))\n).subscribe();',
        },
        {
          command: 'takeUntil',
          description: 'Complete when notifier emits',
          usage: 'observable.pipe(takeUntil(notifier$))',
          example: 'private destroy$ = new Subject<void>();\n\nngOnInit() {\n  this.data$.pipe(takeUntil(this.destroy$)).subscribe();\n}\n\nngOnDestroy() {\n  this.destroy$.next();\n}',
        },
        {
          command: 'combineLatest',
          description: 'Combine latest values',
          usage: 'combineLatest([obs1, obs2])',
          example: 'combineLatest([this.users$, this.settings$]).pipe(\n  map(([users, settings]) => ({ users, settings }))\n).subscribe();',
        },
        {
          command: 'forkJoin',
          description: 'Wait for all observables to complete',
          usage: 'forkJoin({ key: observable })',
          example: 'forkJoin({\n  users: this.http.get("/api/users"),\n  posts: this.http.get("/api/posts")\n}).subscribe();',
        },
      ],
    },
    {
      title: 'Pipes',
      commands: [
        {
          command: 'date',
          description: 'Format date values',
          usage: '{{ value | date:format }}',
          example: '{{ today | date }}\n{{ today | date:"short" }}\n{{ today | date:"dd/MM/yyyy" }}',
        },
        {
          command: 'currency',
          description: 'Format currency',
          usage: '{{ value | currency:code }}',
          example: '{{ price | currency }}\n{{ price | currency:"EUR" }}',
        },
        {
          command: 'number / decimal',
          description: 'Format numbers',
          usage: '{{ value | number:digitInfo }}',
          example: '{{ value | number }}\n{{ value | number:"1.2-2" }}',
        },
        {
          command: 'uppercase / lowercase',
          description: 'Transform text case',
          usage: '{{ value | uppercase }}',
          example: '{{ name | uppercase }}\n{{ title | lowercase }}',
        },
        {
          command: 'async',
          description: 'Unwrap observable/promise',
          usage: '{{ observable$ | async }}',
          example: '<div *ngIf="users$ | async as users">\n  <p *ngFor="let user of users">{{user.name}}</p>\n</div>',
        },
        {
          command: 'Custom Pipe',
          description: 'Create custom pipe',
          usage: '@Pipe({ name: "pipeName" })',
          example: '@Pipe({ name: "truncate", standalone: true })\nexport class TruncatePipe implements PipeTransform {\n  transform(value: string, limit = 50) {\n    return value.length > limit \n      ? value.substring(0, limit) + "..."\n      : value;\n  }\n}',
        },
      ],
    },
    {
      title: 'Testing',
      commands: [
        {
          command: 'Component Test Setup',
          description: 'Configure component testing',
          usage: 'TestBed.configureTestingModule({ })',
          example: 'beforeEach(() => {\n  TestBed.configureTestingModule({\n    imports: [UserComponent]\n  });\n  fixture = TestBed.createComponent(UserComponent);\n  component = fixture.componentInstance;\n});',
        },
        {
          command: 'Basic Test',
          description: 'Write component test',
          usage: 'it("should...", () => { expect(...).toBe(...) })',
          example: 'it("should create", () => {\n  expect(component).toBeTruthy();\n});\n\nit("should have title", () => {\n  expect(component.title).toBe("My App");\n});',
        },
        {
          command: 'HTTP Testing',
          description: 'Test HTTP requests',
          usage: 'HttpTestingController',
          example: 'it("should get users", () => {\n  service.getUsers().subscribe(users => {\n    expect(users.length).toBe(2);\n  });\n\n  const req = httpMock.expectOne("/api/users");\n  req.flush([{ id: 1 }, { id: 2 }]);\n});',
        },
        {
          command: 'Spy On',
          description: 'Mock method calls',
          usage: 'spyOn(object, "method")',
          example: 'it("should call service", () => {\n  const spy = spyOn(service, "getUser")\n    .and.returnValue(of({ id: 1 }));\n  component.loadUser(1);\n  expect(spy).toHaveBeenCalledWith(1);\n});',
        },
      ],
    },
    {
      title: 'Build & Deployment',
      commands: [
        {
          command: 'Production Build',
          description: 'Build for production',
          usage: 'ng build --configuration production',
          example: 'ng build --configuration production\nng build --prod\nng build --base-href /app/',
        },
        {
          command: 'Test',
          description: 'Run unit tests',
          usage: 'ng test [options]',
          example: 'ng test\nng test --watch=false\nng test --code-coverage',
        },
        {
          command: 'Lint',
          description: 'Lint code',
          usage: 'ng lint',
          example: 'ng lint\nng lint --fix',
        },
        {
          command: 'Analyze Bundle',
          description: 'Analyze bundle size',
          usage: 'ng build --stats-json',
          example: 'ng build --stats-json\n# Then: webpack-bundle-analyzer dist/stats.json',
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Lazy Loading',
          description: 'Load modules on demand',
          usage: 'loadChildren: () => import(...)',
          example: '{\n  path: "admin",\n  loadChildren: () => import("./admin/admin.module")\n    .then(m => m.AdminModule)\n}',
        },
        {
          command: 'TrackBy Function',
          description: 'Optimize ngFor rendering',
          usage: 'trackBy: trackByFn',
          example: 'trackById(index: number, item: any) {\n  return item.id;\n}\n\n// Template\n<div *ngFor="let item of items; trackBy: trackById">',
        },
        {
          command: 'OnPush Change Detection',
          description: 'Reduce change detection cycles',
          usage: 'changeDetection: ChangeDetectionStrategy.OnPush',
          example: '@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})',
        },
        {
          command: 'Defer Loading (v17+)',
          description: 'Defer component loading',
          usage: '@defer (on viewport) { }',
          example: '@defer (on viewport) {\n  <app-heavy-component />\n} @placeholder {\n  <p>Loading...</p>\n}',
        },
      ],
    },
    {
      title: 'Angular Material',
      commands: [
        {
          command: 'Add Material',
          description: 'Add Angular Material',
          usage: 'ng add @angular/material',
          example: 'ng add @angular/material\n# Choose theme, typography, animations',
        },
        {
          command: 'Material Button',
          description: 'Use Material button',
          usage: '<button mat-button>',
          example: '<button mat-button>Basic</button>\n<button mat-raised-button color="primary">Raised</button>',
        },
        {
          command: 'Material Form Field',
          description: 'Material input with label',
          usage: '<mat-form-field>',
          example: '<mat-form-field>\n  <mat-label>Email</mat-label>\n  <input matInput [(ngModel)]="email">\n</mat-form-field>',
        },
        {
          command: 'Material Dialog',
          description: 'Open modal dialog',
          usage: 'dialog.open(Component, config)',
          example: 'openDialog() {\n  const dialogRef = this.dialog.open(UserDialogComponent, {\n    width: "400px",\n    data: { userId: 1 }\n  });\n}',
        },
      ],
    },
    {
      title: 'RxJS Operators',
      commands: [
        {
          command: 'combineLatest',
          description: 'Combine latest values',
          usage: 'combineLatest([obs1, obs2])',
          example: 'combineLatest([this.users$, this.settings$]).pipe(\n  map(([users, settings]) => ({ users, settings }))\n).subscribe();',
        },
        {
          command: 'forkJoin',
          description: 'Wait for all observables to complete',
          usage: 'forkJoin({ key: observable })',
          example: 'forkJoin({\n  users: this.http.get("/api/users"),\n  posts: this.http.get("/api/posts")\n}).subscribe();',
        },
      ],
    },
    {
      title: 'Pipes',
      commands: [
        {
          command: 'date',
          description: 'Format date values',
          usage: '{{ value | date:format }}',
          example: '{{ today | date }}\n{{ today | date:"short" }}\n{{ today | date:"dd/MM/yyyy" }}',
        },
        {
          command: 'currency',
          description: 'Format currency',
          usage: '{{ value | currency:code }}',
          example: '{{ price | currency }}\n{{ price | currency:"EUR" }}',
        },
        {
          command: 'number / decimal',
          description: 'Format numbers',
          usage: '{{ value | number:digitInfo }}',
          example: '{{ value | number }}\n{{ value | number:"1.2-2" }}',
        },
        {
          command: 'uppercase / lowercase',
          description: 'Transform text case',
          usage: '{{ value | uppercase }}',
          example: '{{ name | uppercase }}\n{{ title | lowercase }}',
        },
        {
          command: 'async',
          description: 'Unwrap observable/promise',
          usage: '{{ observable$ | async }}',
          example: '<div *ngIf="users$ | async as users">\n  <p *ngFor="let user of users">{{user.name}}</p>\n</div>',
        },
        {
          command: 'Custom Pipe',
          description: 'Create custom pipe',
          usage: '@Pipe({ name: "pipeName" })',
          example: '@Pipe({ name: "truncate", standalone: true })\nexport class TruncatePipe implements PipeTransform {\n  transform(value: string, limit = 50) {\n    return value.length > limit \n      ? value.substring(0, limit) + "..."\n      : value;\n  }\n}',
        },
      ],
    },
    {
      title: 'Testing',
      commands: [
        {
          command: 'Component Test Setup',
          description: 'Configure component testing',
          usage: 'TestBed.configureTestingModule({ })',
          example: 'beforeEach(() => {\n  TestBed.configureTestingModule({\n    imports: [UserComponent]\n  });\n  fixture = TestBed.createComponent(UserComponent);\n  component = fixture.componentInstance;\n});',
        },
        {
          command: 'Basic Test',
          description: 'Write component test',
          usage: 'it("should...", () => { expect(...).toBe(...) })',
          example: 'it("should create", () => {\n  expect(component).toBeTruthy();\n});\n\nit("should have title", () => {\n  expect(component.title).toBe("My App");\n});',
        },
        {
          command: 'HTTP Testing',
          description: 'Test HTTP requests',
          usage: 'HttpTestingController',
          example: 'it("should get users", () => {\n  service.getUsers().subscribe(users => {\n    expect(users.length).toBe(2);\n  });\n\n  const req = httpMock.expectOne("/api/users");\n  req.flush([{ id: 1 }, { id: 2 }]);\n});',
        },
        {
          command: 'Spy On',
          description: 'Mock method calls',
          usage: 'spyOn(object, "method")',
          example: 'it("should call service", () => {\n  const spy = spyOn(service, "getUser")\n    .and.returnValue(of({ id: 1 }));\n  component.loadUser(1);\n  expect(spy).toHaveBeenCalledWith(1);\n});',
        },
      ],
    },
    {
      title: 'Build & Deployment',
      commands: [
        {
          command: 'Production Build',
          description: 'Build for production',
          usage: 'ng build --configuration production',
          example: 'ng build --configuration production\nng build --prod\nng build --base-href /app/',
        },
        {
          command: 'Test',
          description: 'Run unit tests',
          usage: 'ng test [options]',
          example: 'ng test\nng test --watch=false\nng test --code-coverage',
        },
        {
          command: 'Lint',
          description: 'Lint code',
          usage: 'ng lint',
          example: 'ng lint\nng lint --fix',
        },
        {
          command: 'Analyze Bundle',
          description: 'Analyze bundle size',
          usage: 'ng build --stats-json',
          example: 'ng build --stats-json\n# Then: webpack-bundle-analyzer dist/stats.json',
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Lazy Loading',
          description: 'Load modules on demand',
          usage: 'loadChildren: () => import(...)',
          example: '{\n  path: "admin",\n  loadChildren: () => import("./admin/admin.module")\n    .then(m => m.AdminModule)\n}',
        },
        {
          command: 'TrackBy Function',
          description: 'Optimize ngFor rendering',
          usage: 'trackBy: trackByFn',
          example: 'trackById(index: number, item: any) {\n  return item.id;\n}\n\n// Template\n<div *ngFor="let item of items; trackBy: trackById">',
        },
        {
          command: 'OnPush Change Detection',
          description: 'Reduce change detection cycles',
          usage: 'changeDetection: ChangeDetectionStrategy.OnPush',
          example: '@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush\n})',
        },
        {
          command: 'Defer Loading (v17+)',
          description: 'Defer component loading',
          usage: '@defer (on viewport) { }',
          example: '@defer (on viewport) {\n  <app-heavy-component />\n} @placeholder {\n  <p>Loading...</p>\n}',
        },
      ],
    },
  ]
};
