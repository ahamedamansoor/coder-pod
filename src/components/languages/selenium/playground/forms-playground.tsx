'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { FormInput, CheckCircle } from 'lucide-react';

export function FormsPlayground() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    newsletter: false,
    terms: false,
    gender: '',
    country: '',
    hobbies: [] as string[],
    age: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (hobby: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      hobbies: checked 
        ? [...prev.hobbies, hobby]
        : prev.hobbies.filter(h => h !== hobby)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Forms Playground</h3>
        <p className="text-sm text-muted-foreground">
          Practice form interactions including text inputs, checkboxes, radio buttons, dropdowns, and more
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Elements */}
        <Card className="p-4">
          <Label className="mb-4 block flex items-center gap-2">
            <FormInput className="w-4 h-4" />
            Interactive Form
          </Label>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Text Inputs */}
            <div className="space-y-3">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Textarea */}
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Radio Buttons */}
            <div>
              <Label>Gender</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => handleInputChange('gender', value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Select Dropdown */}
            <div>
              <Label htmlFor="country">Country</Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Multiple Checkboxes */}
            <div>
              <Label>Hobbies</Label>
              <div className="mt-2 space-y-2">
                {['Reading', 'Sports', 'Music', 'Travel', 'Cooking'].map((hobby) => (
                  <div key={hobby} className="flex items-center space-x-2">
                    <Checkbox
                      id={hobby.toLowerCase()}
                      checked={formData.hobbies.includes(hobby)}
                      onCheckedChange={(checked) => handleCheckboxChange(hobby, checked as boolean)}
                    />
                    <Label htmlFor={hobby.toLowerCase()}>{hobby}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Single Checkboxes */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange('newsletter', checked)}
                />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) => handleInputChange('terms', checked)}
                />
                <Label htmlFor="terms">I agree to the terms and conditions</Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Submit Form
            </Button>
          </form>
        </Card>

        {/* Form Info & Code Examples */}
        <div className="space-y-4">
          <Card className="p-4">
            <Label className="mb-3 block">Form Data Preview</Label>
            <div className="space-y-2 text-sm">
              <div><strong>Username:</strong> {formData.username || 'Not filled'}</div>
              <div><strong>Email:</strong> {formData.email || 'Not filled'}</div>
              <div><strong>Password:</strong> {formData.password ? '••••••••' : 'Not filled'}</div>
              <div><strong>Bio:</strong> {formData.bio || 'Not filled'}</div>
              <div><strong>Gender:</strong> {formData.gender || 'Not selected'}</div>
              <div><strong>Country:</strong> {formData.country || 'Not selected'}</div>
              <div><strong>Hobbies:</strong> {formData.hobbies.length > 0 ? formData.hobbies.join(', ') : 'None selected'}</div>
              <div><strong>Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}</div>
              <div><strong>Terms:</strong> {formData.terms ? 'Accepted' : 'Not accepted'}</div>
            </div>
          </Card>

          {submitted && (
            <Card className="p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-green-600">Form Submitted Successfully!</p>
                  <p className="text-sm text-green-600/80">All form data has been processed</p>
                </div>
              </div>
            </Card>
          )}

          <Card className="p-4 space-y-3">
            <Label>Selenium Code Examples</Label>
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground">Fill Text Inputs</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`# Python
username = driver.find_element(By.ID, "username")
username.send_keys("testuser")

email = driver.find_element(By.ID, "email")
email.send_keys("test@example.com")`}</code>
              </pre>
              
              <div className="text-xs font-semibold text-muted-foreground">Handle Checkboxes</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`# Check checkbox
newsletter = driver.find_element(By.ID, "newsletter")
newsletter.click()

# Uncheck checkbox
terms = driver.find_element(By.ID, "terms")
terms.click()`}</code>
              </pre>
              
              <div className="text-xs font-semibold text-muted-foreground">Select Dropdown</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`from selenium.webdriver.support.ui import Select

country_select = Select(driver.find_element(By.ID, "country"))
country_select.select_by_visible_text("United States")
country_select.select_by_value("usa")`}</code>
              </pre>
              
              <div className="text-xs font-semibold text-muted-foreground">Radio Buttons</div>
              <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
                <code>{`# Select radio button
male_radio = driver.find_element(By.ID, "male")
male_radio.click()`}</code>
              </pre>
            </div>
          </Card>

          <Card className="p-4 space-y-3">
            <Label>Form Testing Tips</Label>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">1</Badge>
                <span>Always wait for form elements to be visible before interacting</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">2</Badge>
                <span>Use explicit waits for dynamic form validation</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">3</Badge>
                <span>Test form validation with both valid and invalid data</span>
              </div>
              <div className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">4</Badge>
                <span>Clear input fields before entering new data</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
