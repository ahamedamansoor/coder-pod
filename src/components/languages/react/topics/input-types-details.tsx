'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Type, CheckSquare, Circle, FileUp } from 'lucide-react';

export default function InputTypesDetails() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Type}
        category="React · Form Details"
        title="Input Types"
        description="Master all HTML input types in React - text, textarea, select, checkbox, radio, and file inputs with proper handling techniques."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Overview */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Type className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Input Types in React"
              description="Handle different form inputs effectively"
              size="lg"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Type className="w-6 h-6 text-blue-500 mb-2" />
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-1">Text Inputs</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">input, textarea</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <CheckSquare className="w-6 h-6 text-green-500 mb-2" />
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-1">Selections</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">select, checkbox, radio</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <FileUp className="w-6 h-6 text-purple-500 mb-2" />
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-1">File Upload</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">file input</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Different Handling!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Each input type has its own way of accessing and updating values in React!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Type className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: All Input Types"
            description="Complete form showcasing every input type"
            size="lg"
          />

          <FrontendCodePreview
            title="Comprehensive Form Example"
            description="All input types with proper React handling"
            colorTheme="green"
            react={`function AllInputsForm() {
  const [formData, setFormData] = React.useState({
    // Text inputs
    username: '',
    email: '',
    bio: '',
    
    // Select
    country: '',
    
    // Checkboxes
    subscribe: false,
    terms: false,
    
    // Radio
    gender: '',
    
    // File
    avatar: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : 
              value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>📝 Complete Form</h2>

      {/* Text Input */}
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>

      {/* Email Input */}
      <div className="field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      {/* Textarea */}
      <div className="field">
        <label>Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          rows="3"
          placeholder="Tell us about yourself"
        />
      </div>

      {/* Select */}
      <div className="field">
        <label>Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>
      </div>

      {/* Radio Buttons */}
      <div className="field">
        <label>Gender</label>
        <div className="radio-group">
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
      </div>

      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          I agree to terms
        </label>
      </div>

      {/* File Input */}
      <div className="field">
        <label>Avatar</label>
        <input
          type="file"
          name="avatar"
          onChange={handleChange}
          accept="image/*"
        />
        {formData.avatar && (
          <small>Selected: {formData.avatar.name}</small>
        )}
      </div>

      <button type="submit" className="btn">
        Submit Form 🚀
      </button>

      {/* Display Values */}
      <div className="output">
        <strong>Current Values:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AllInputsForm />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  padding: 40px 20px;
}

#root {
  display: flex;
  justify-content: center;
}

.form {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

h2 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 1.8rem;
  text-align: center;
}

.field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
textarea,
select {
  width: 100%;
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  transition: border 0.3s;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #10b981;
}

.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 8px;
}

.radio,
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

input[type="file"] {
  padding: 8px;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  width: 100%;
}

small {
  display: block;
  margin-top: 6px;
  color: #6b7280;
  font-size: 12px;
}

.btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: transform 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.output {
  margin-top: 30px;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.output strong {
  display: block;
  margin-bottom: 10px;
  color: #374151;
}

pre {
  font-size: 12px;
  color: #6b7280;
  overflow-x: auto;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .form {
    background: #1f2937;
  }

  h2 {
    color: #6ee7b7;
  }

  label {
    color: #e5e7eb;
  }

  input[type="text"],
  input[type="email"],
  textarea,
  select {
    background: #111827;
    border-color: #374151;
    color: #f3f4f6;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: #6ee7b7;
  }

  input[type="file"] {
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .output {
    background: #111827;
    border-color: #374151;
  }

  .output strong {
    color: #e5e7eb;
  }

  pre {
    color: #9ca3af;
  }
}`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function AllInputsForm() {
    const [formData, setFormData] = useState({
      username: '', email: '', bio: '', country: '',
      subscribe: false, terms: false, gender: '', avatar: null
    });

    const handleChange = (e) => {
      const { name, value, type, checked, files } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
    };

    const displayData = {...formData};
    if (displayData.avatar) {
      displayData.avatar = displayData.avatar.name;
    }

    return h('form', { onSubmit: handleSubmit, className: 'form' },
      h('h2', null, '📝 Complete Form'),
      
      h('div', { className: 'field' },
        h('label', null, 'Username'),
        h('input', { type: 'text', name: 'username', value: formData.username, onChange: handleChange, placeholder: 'Enter username' })
      ),
      
      h('div', { className: 'field' },
        h('label', null, 'Email'),
        h('input', { type: 'email', name: 'email', value: formData.email, onChange: handleChange, placeholder: 'you@example.com' })
      ),
      
      h('div', { className: 'field' },
        h('label', null, 'Bio'),
        h('textarea', { name: 'bio', value: formData.bio, onChange: handleChange, rows: 3, placeholder: 'Tell us about yourself' })
      ),
      
      h('div', { className: 'field' },
        h('label', null, 'Country'),
        h('select', { name: 'country', value: formData.country, onChange: handleChange },
          h('option', { value: '' }, 'Select country'),
          h('option', { value: 'us' }, 'United States'),
          h('option', { value: 'uk' }, 'United Kingdom'),
          h('option', { value: 'ca' }, 'Canada'),
          h('option', { value: 'au' }, 'Australia')
        )
      ),
      
      h('div', { className: 'field' },
        h('label', null, 'Gender'),
        h('div', { className: 'radio-group' },
          h('label', { className: 'radio' },
            h('input', { type: 'radio', name: 'gender', value: 'male', checked: formData.gender === 'male', onChange: handleChange }),
            'Male'
          ),
          h('label', { className: 'radio' },
            h('input', { type: 'radio', name: 'gender', value: 'female', checked: formData.gender === 'female', onChange: handleChange }),
            'Female'
          ),
          h('label', { className: 'radio' },
            h('input', { type: 'radio', name: 'gender', value: 'other', checked: formData.gender === 'other', onChange: handleChange }),
            'Other'
          )
        )
      ),
      
      h('div', { className: 'field' },
        h('label', { className: 'checkbox' },
          h('input', { type: 'checkbox', name: 'subscribe', checked: formData.subscribe, onChange: handleChange }),
          'Subscribe to newsletter'
        )
      ),
      
      h('div', { className: 'field' },
        h('label', { className: 'checkbox' },
          h('input', { type: 'checkbox', name: 'terms', checked: formData.terms, onChange: handleChange }),
          'I agree to terms'
        )
      ),
      
      h('div', { className: 'field' },
        h('label', null, 'Avatar'),
        h('input', { type: 'file', name: 'avatar', onChange: handleChange, accept: 'image/*' }),
        formData.avatar && h('small', null, 'Selected: ' + formData.avatar.name)
      ),
      
      h('button', { type: 'submit', className: 'btn' }, 'Submit Form 🚀'),
      
      h('div', { className: 'output' },
        h('strong', null, 'Current Values:'),
        h('pre', null, JSON.stringify(displayData, null, 2))
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(AllInputsForm));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
          />
        </div>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Text: value prop</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Use value + onChange for text, email, textarea</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Checkbox: checked prop</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Use checked + onChange, access e.target.checked</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Radio: checked + value</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Same name, different values, check if matches state</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">File: e.target.files</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Access files[0] for single file uploads</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
