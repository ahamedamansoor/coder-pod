'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Package, Zap, Shield, Code } from 'lucide-react';

export default function FormLibrariesIntegration() {
  const formLibraryPreviewCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #eef2ff 0%, #e0f2fe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.library-panel {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
  width: min(480px, 90vw);
  text-align: center;
}

.library-panel h2 {
  color: #312e81;
  margin-bottom: 12px;
}

.library-panel small {
  display: block;
  color: #475569;
  margin-bottom: 20px;
}

.library-panel input[type="text"] {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 2px solid #c7d2fe;
  margin-bottom: 16px;
}

.library-panel label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #312e81;
}

.library-panel .inline-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.library-panel .status {
  margin-top: 16px;
  font-size: 0.9rem;
  color: #475569;
}`;

  const formLibraryPreviewJs = `const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function FormLibraryDemo() {
    const [values, setValues] = useState({ username: '', agree: false });

    const register = (name, type = 'text') => ({
      name,
      value: type === 'checkbox' ? undefined : values[name],
      checked: type === 'checkbox' ? values[name] : undefined,
      onChange: (e) => {
        const next = type === 'checkbox' ? e.target.checked : e.target.value;
        setValues(prev => ({ ...prev, [name]: next }));
      }
    });

    return h('div', { className: 'library-panel' },
      h('h2', null, 'Form Library Preview'),
      h('small', null, 'register() abstracts onChange/checked handling'),
      h('label', null, 'Username'),
      h('input', register('username')),
      h('div', { className: 'inline-row' },
        h('label', null,
          h('input', { type: 'checkbox', ...register('agree', 'checkbox') }),
          ' '
        ),
        h('span', null, 'Agree to terms')
      ),
      h('div', { className: 'status' },
        JSON.stringify(values)
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(FormLibraryDemo));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`;
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Package}
        category="React · Form Details"
        title="Form Libraries Integration"
        description="Learn about popular form libraries like React Hook Form, Formik, and Yup for powerful form management and validation."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Overview */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Why Use Form Libraries?"
              description="Simplify complex form handling"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Form libraries handle the <strong>repetitive and complex tasks</strong> of form management: validation, error handling, submission, touched fields, and more!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Zap className="w-6 h-6 text-green-500 mb-2" />
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">React Hook Form</h4>
                <Badge className="bg-green-500 mb-2">Most Popular</Badge>
                <p className="text-xs text-gray-600 dark:text-gray-400">Minimal re-renders, great performance</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Code className="w-6 h-6 text-blue-500 mb-2" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Formik</h4>
                <Badge className="bg-blue-500 mb-2">Feature Rich</Badge>
                <p className="text-xs text-gray-600 dark:text-gray-400">Comprehensive, easy to learn</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Shield className="w-6 h-6 text-purple-500 mb-2" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Yup</h4>
                <Badge className="bg-purple-500 mb-2">Validation</Badge>
                <p className="text-xs text-gray-600 dark:text-gray-400">Schema-based validation library</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Save Time!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Form libraries reduce boilerplate by 70%+ and handle edge cases you might miss!
              </AlertDescription>
            </Alert>
        </CardContent>
      </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Lightbulb className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Preview: Registration Helpers"
            description="See how a register helper abstracts controlled inputs"
            size="lg"
          />
          <FrontendCodePreview
            title="Simple Form Library Emulation"
            description="register() handles value, checked, and onChange"
            colorTheme="cyan"
            html={`<div id="root"></div>`}
            css={formLibraryPreviewCss}
            js={formLibraryPreviewJs}
          />
        </div>

        {/* React Hook Form */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="React Hook Form"
              description="Performant, flexible, and extensible"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ Advantages</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span><span><strong>Minimal re-renders</strong> - Uncontrolled components with refs</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span><span><strong>Tiny bundle size</strong> - ~9KB (gzipped)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span><span><strong>TypeScript support</strong> - Excellent type inference</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span><span><strong>Easy validation</strong> - Integrates with Yup, Zod, Joi</span></li>
                </ul>
              </div>

              <CodeSnippetWithOutput
                title="React Hook Form Example"
                description="Install: npm install react-hook-form"
                language="javascript"
                colorTheme="green"
                code={`import { useForm } from 'react-hook-form';

function MyForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Register input with validation */}
      <input 
        {...register('username', { 
          required: 'Username is required',
          minLength: { value: 3, message: 'Min 3 characters' }
        })} 
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input 
        {...register('email', { 
          required: 'Email is required',
          pattern: { 
            value: /^\\S+@\\S+$/i, 
            message: 'Invalid email' 
          }
        })} 
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}`}
                output={[
                  '✅ Minimal re-renders',
                  '✅ Automatic validation',
                  '✅ Clean error handling',
                  '',
                  '// No useState needed!',
                  '// No onChange handlers!',
                  '// Just ...register()'
                ]}
              />
            </div>
          </CardContent>
        </Card>

        {/* Formik */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Formik"
              description="Build forms in React without tears"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">✅ Advantages</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><span><strong>Easy to learn</strong> - Intuitive API</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><span><strong>Feature complete</strong> - Handles everything</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><span><strong>Great docs</strong> - Comprehensive examples</span></li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><span><strong>Field-level validation</strong> - Validate as you type</span></li>
                </ul>
              </div>

              <CodeSnippetWithOutput
                title="Formik Example"
                description="Install: npm install formik"
                language="javascript"
                colorTheme="blue"
                code={`import { useFormik } from 'formik';

function MyForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: values => {
      const errors = {};
      
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^\\S+@\\S+$/i.test(values.email)) {
        errors.email = 'Invalid email';
      }
      
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Must be 8+ characters';
      }
      
      return errors;
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <p>{formik.errors.email}</p>
      )}

      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && (
        <p>{formik.errors.password}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}`}
                output={[
                  '✅ All form state managed',
                  '✅ Validation on blur',
                  '✅ Error messages',
                  '✅ Touched field tracking',
                  '',
                  '// formik.values, formik.errors',
                  '// formik.touched, formik.isSubmitting'
                ]}
              />
            </div>
          </CardContent>
        </Card>

        {/* Yup Validation */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Yup Validation"
              description="Schema-based validation"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">Yup</code> lets you define validation schemas declaratively. Works perfectly with both React Hook Form and Formik!
            </p>

            <CodeSnippetWithOutput
              title="Yup with React Hook Form"
              description="Install: npm install yup @hookform/resolvers"
              language="javascript"
              colorTheme="purple"
              code={`import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define validation schema
const schema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Must be at least 3 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  
  age: yup
    .number()
    .required('Age is required')
    .positive('Must be positive')
    .integer('Must be an integer')
    .min(18, 'Must be 18 or older'),
  
  website: yup
    .string()
    .url('Must be a valid URL')
    .nullable(),
  
  acceptTerms: yup
    .boolean()
    .oneOf([true], 'Must accept terms')
});

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} />
      {errors.username && <p>{errors.username.message}</p>}

      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="number" {...register('age')} />
      {errors.age && <p>{errors.age.message}</p>}

      <input {...register('website')} />
      {errors.website && <p>{errors.website.message}</p>}

      <input type="checkbox" {...register('acceptTerms')} />
      {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}`}
              output={[
                '✅ Declarative validation',
                '✅ Type checking',
                '✅ Custom error messages',
                '✅ Complex validations',
                '',
                '// Schema defines all rules',
                '// Automatic error handling',
                '// Reusable across forms'
              ]}
            />
          </CardContent>
        </Card>

        {/* Comparison */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Which Should You Choose?"
              description="Quick comparison guide"
              size="lg"
            />

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                    <th className="text-left p-3 text-gray-700 dark:text-gray-300">Feature</th>
                    <th className="text-left p-3 text-green-600 dark:text-green-400">React Hook Form</th>
                    <th className="text-left p-3 text-blue-600 dark:text-blue-400">Formik</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Bundle Size</td>
                    <td className="p-3 text-green-600">~9KB ✅</td>
                    <td className="p-3">~13KB</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Performance</td>
                    <td className="p-3 text-green-600">Excellent ✅</td>
                    <td className="p-3">Good</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Learning Curve</td>
                    <td className="p-3">Medium</td>
                    <td className="p-3 text-blue-600">Easy ✅</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">Re-renders</td>
                    <td className="p-3 text-green-600">Minimal ✅</td>
                    <td className="p-3">More frequent</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-3 font-semibold">TypeScript</td>
                    <td className="p-3 text-green-600">Excellent ✅</td>
                    <td className="p-3 text-blue-600">Excellent ✅</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Best For</td>
                    <td className="p-3">Large forms, performance-critical</td>
                    <td className="p-3">Beginners, rapid development</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Recommendation</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Choose <strong>React Hook Form</strong> for best performance and modern apps. Choose <strong>Formik</strong> for easier learning curve and simpler setup!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">React Hook Form</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Best performance, minimal re-renders, TypeScript-friendly</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Formik</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Easy to learn, feature-rich, great for beginners</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Yup Validation</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Schema-based validation works with both libraries</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Save Time</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Reduce boilerplate by 70%+ compared to manual forms</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
