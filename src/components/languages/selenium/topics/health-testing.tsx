'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RefreshCw, Code, Users, Calendar, Clock, Video, FileText, Heart, Activity, Shield, Stethoscope, Pill, Phone, Mail, User, Settings, LogOut, Search, Filter, Plus, Edit, Trash2, ChevronRight, Menu, X, Camera, Download, Upload, Eye, EyeOff, Bell, CheckCircle, AlertCircle, TrendingUp, BarChart3, PieChart, LineChart, Zap, Database, Cloud, Cpu, HardDrive, Wifi, MapPin, Star, Award, Target, Package, Building, CreditCard, DollarSign, TrendingDown, Thermometer, Brain, Bone, Lock, Mic } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { toast } from 'sonner';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  bloodType: string;
  allergies: string[];
  conditions: string[];
  medications: string[];
  lastVisit: string;
  status: 'active' | 'inactive' | 'critical';
  assignedDoctor: string;
}

interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  type: 'in-person' | 'telemedicine' | 'follow-up' | 'emergency';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes: string;
}

interface Prescription {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
  date: string;
  status: 'active' | 'completed' | 'expired';
}

interface HealthMetrics {
  totalPatients: number;
  activePatients: number;
  totalAppointments: number;
  todayAppointments: number;
  telemedicineSessions: number;
  prescriptionsIssued: number;
  criticalCases: number;
  patientSatisfaction: number;
  revenue: number;
}

interface HealthState {
  currentView: 'login' | 'role-selection' | 'dashboard' | 'patients' | 'appointments' | 'telemedicine' | 'prescriptions' | 'analytics' | 'settings';
  selectedRole: 'doctor' | 'patient' | 'admin' | 'nurse';
  patients: Patient[];
  appointments: Appointment[];
  prescriptions: Prescription[];
  metrics: HealthMetrics;
  loginEmail: string;
  loginPassword: string;
  isLoggedIn: boolean;
  currentUser: any;
  searchQuery: string;
  selectedPatient: Patient | null;
  selectedAppointment: Appointment | null;
}

export default function HealthTesting() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);
  const [liveVariables, setLiveVariables] = useState<Record<string, any>>({});
  const [speed, setSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [selectedPlatform, setSelectedPlatform] = useState<'epic'>('epic');
  const [selectedLanguage, setSelectedLanguage] = useState<'playwright' | 'python' | 'java' | 'javascript'>('playwright');

  const [healthState, setHealthState] = useState<HealthState>({
    currentView: 'login',
    selectedRole: 'doctor',
    patients: [],
    appointments: [],
    prescriptions: [],
    metrics: {
      totalPatients: 0,
      activePatients: 0,
      totalAppointments: 0,
      todayAppointments: 0,
      telemedicineSessions: 0,
      prescriptionsIssued: 0,
      criticalCases: 0,
      patientSatisfaction: 0,
      revenue: 0
    },
    loginEmail: '',
    loginPassword: '',
    isLoggedIn: false,
    currentUser: null,
    searchQuery: '',
    selectedPatient: null,
    selectedAppointment: null
  });

  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 2;
      case 'medium': return 1;
      case 'fast': return 0.5;
      default: return 1;
    }
  };

  const getPatients = (): Patient[] => [
    {
      id: 'patient1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1985-03-15',
      gender: 'female',
      bloodType: 'O+',
      allergies: ['Penicillin', 'Peanuts'],
      conditions: ['Hypertension', 'Diabetes Type 2'],
      medications: ['Metformin', 'Lisinopril'],
      lastVisit: '2024-01-18',
      status: 'active',
      assignedDoctor: 'Dr. Michael Chen'
    },
    {
      id: 'patient2',
      name: 'Robert Williams',
      email: 'robert.williams@email.com',
      phone: '+1 (555) 234-5678',
      dateOfBirth: '1978-07-22',
      gender: 'male',
      bloodType: 'A+',
      allergies: ['Shellfish'],
      conditions: ['Asthma', 'Allergic Rhinitis'],
      medications: ['Albuterol', 'Fluticasone'],
      lastVisit: '2024-01-19',
      status: 'active',
      assignedDoctor: 'Dr. Emily Davis'
    },
    {
      id: 'patient3',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 345-6789',
      dateOfBirth: '1992-11-08',
      gender: 'female',
      bloodType: 'B+',
      allergies: [],
      conditions: ['Migraine'],
      medications: ['Sumatriptan'],
      lastVisit: '2024-01-20',
      status: 'critical',
      assignedDoctor: 'Dr. Michael Chen'
    },
    {
      id: 'patient4',
      name: 'James Thompson',
      email: 'james.thompson@email.com',
      phone: '+1 (555) 456-7890',
      dateOfBirth: '1965-05-30',
      gender: 'male',
      bloodType: 'AB+',
      allergies: ['Latex'],
      conditions: ['Arthritis', 'High Cholesterol'],
      medications: ['Ibuprofen', 'Atorvastatin'],
      lastVisit: '2024-01-17',
      status: 'active',
      assignedDoctor: 'Dr. Emily Davis'
    },
    {
      id: 'patient5',
      name: 'Jennifer Lee',
      email: 'jennifer.lee@email.com',
      phone: '+1 (555) 567-8901',
      dateOfBirth: '1988-09-12',
      gender: 'female',
      bloodType: 'O-',
      allergies: ['Sulfa drugs'],
      conditions: ['Anxiety', 'Insomnia'],
      medications: ['Sertraline', 'Zolpidem'],
      lastVisit: '2024-01-16',
      status: 'active',
      assignedDoctor: 'Dr. Michael Chen'
    }
  ];

  const getAppointments = (): Appointment[] => [
    {
      id: 'apt1',
      patientId: 'patient1',
      patientName: 'Sarah Johnson',
      doctorId: 'doctor1',
      doctorName: 'Dr. Michael Chen',
      date: '2024-01-22',
      time: '09:00 AM',
      type: 'in-person',
      status: 'scheduled',
      notes: 'Regular checkup for diabetes management'
    },
    {
      id: 'apt2',
      patientId: 'patient2',
      patientName: 'Robert Williams',
      doctorId: 'doctor2',
      doctorName: 'Dr. Emily Davis',
      date: '2024-01-22',
      time: '10:30 AM',
      type: 'telemedicine',
      status: 'scheduled',
      notes: 'Follow-up for asthma treatment'
    },
    {
      id: 'apt3',
      patientId: 'patient3',
      patientName: 'Maria Garcia',
      doctorId: 'doctor1',
      doctorName: 'Dr. Michael Chen',
      date: '2024-01-22',
      time: '02:00 PM',
      type: 'emergency',
      status: 'in-progress',
      notes: 'Severe migraine attack'
    },
    {
      id: 'apt4',
      patientId: 'patient4',
      patientName: 'James Thompson',
      doctorId: 'doctor2',
      doctorName: 'Dr. Emily Davis',
      date: '2024-01-22',
      time: '03:30 PM',
      type: 'follow-up',
      status: 'scheduled',
      notes: 'Arthritis pain management review'
    },
    {
      id: 'apt5',
      patientId: 'patient5',
      patientName: 'Jennifer Lee',
      doctorId: 'doctor1',
      doctorName: 'Dr. Michael Chen',
      date: '2024-01-23',
      time: '11:00 AM',
      type: 'telemedicine',
      status: 'scheduled',
      notes: 'Anxiety treatment evaluation'
    }
  ];

  const getPrescriptions = (): Prescription[] => [
    {
      id: 'rx1',
      patientId: 'patient1',
      patientName: 'Sarah Johnson',
      doctorId: 'doctor1',
      doctorName: 'Dr. Michael Chen',
      medication: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      duration: '30 days',
      instructions: 'Take with meals to reduce stomach upset',
      date: '2024-01-18',
      status: 'active'
    },
    {
      id: 'rx2',
      patientId: 'patient2',
      patientName: 'Robert Williams',
      doctorId: 'doctor2',
      doctorName: 'Dr. Emily Davis',
      medication: 'Albuterol',
      dosage: '90mcg',
      frequency: 'As needed',
      duration: '60 days',
      instructions: 'Use 1-2 puffs every 4-6 hours as needed for breathing difficulties',
      date: '2024-01-19',
      status: 'active'
    },
    {
      id: 'rx3',
      patientId: 'patient3',
      patientName: 'Maria Garcia',
      doctorId: 'doctor1',
      doctorName: 'Dr. Michael Chen',
      medication: 'Sumatriptan',
      dosage: '100mg',
      frequency: 'As needed',
      duration: '30 days',
      instructions: 'Take at onset of migraine symptoms, maximum 2 doses per day',
      date: '2024-01-20',
      status: 'active'
    },
    {
      id: 'rx4',
      patientId: 'patient4',
      patientName: 'James Thompson',
      doctorId: 'doctor2',
      doctorName: 'Dr. Emily Davis',
      medication: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      duration: '90 days',
      instructions: 'Take in the evening with or without food',
      date: '2024-01-17',
      status: 'active'
    }
  ];

  const getHealthMetrics = (): HealthMetrics => ({
    totalPatients: 1247,
    activePatients: 1189,
    totalAppointments: 856,
    todayAppointments: 24,
    telemedicineSessions: 342,
    prescriptionsIssued: 523,
    criticalCases: 8,
    patientSatisfaction: 4.6,
    revenue: 125000
  });

  const login = (email: string, password: string) => {
    const sessionToken = 'HEALTH_TOKEN_' + Math.random().toString(36).substr(2, 9);
    
    setHealthState(prev => ({
      ...prev,
      isLoggedIn: true,
      currentUser: {
        id: 'user1',
        name: healthState.selectedRole === 'doctor' ? 'Dr. Michael Chen' : 
              healthState.selectedRole === 'patient' ? 'Sarah Johnson' : 
              healthState.selectedRole === 'admin' ? 'Admin User' : 'Nurse Jane Smith',
        email: email,
        role: healthState.selectedRole
      },
      patients: getPatients(),
      appointments: getAppointments(),
      prescriptions: getPrescriptions(),
      metrics: getHealthMetrics(),
      currentView: 'dashboard'
    }));
    toast.success(`Successfully logged in as ${healthState.selectedRole}`);
  };

  const selectRole = (role: 'doctor' | 'patient' | 'admin' | 'nurse') => {
    setHealthState(prev => ({ ...prev, selectedRole: role }));
    toast.success(`Role selected: ${role}`);
  };

  const logout = () => {
    setHealthState(prev => ({
      ...prev,
      isLoggedIn: false,
      currentUser: null,
      patients: [],
      appointments: [],
      prescriptions: [],
      currentView: 'login',
      loginEmail: '',
      loginPassword: ''
    }));
    toast.success('Successfully logged out');
  };

  const scheduleAppointment = (patientId: string, doctorId: string, date: string, time: string, type: string) => {
    const newAppointment: Appointment = {
      id: 'apt_new_' + Date.now(),
      patientId: patientId,
      patientName: healthState.patients.find(p => p.id === patientId)?.name || 'Unknown',
      doctorId: doctorId,
      doctorName: 'Dr. Michael Chen',
      date: date,
      time: time,
      type: type as any,
      status: 'scheduled',
      notes: 'New appointment scheduled'
    };

    setHealthState(prev => ({
      ...prev,
      appointments: [...prev.appointments, newAppointment]
    }));
    toast.success('Appointment scheduled successfully');
  };

  const issuePrescription = (patientId: string, medication: string, dosage: string, instructions: string) => {
    const newPrescription: Prescription = {
      id: 'rx_new_' + Date.now(),
      patientId: patientId,
      patientName: healthState.patients.find(p => p.id === patientId)?.name || 'Unknown',
      doctorId: 'doctor1',
      doctorName: 'Dr. Michael Chen',
      medication: medication,
      dosage: dosage,
      frequency: 'Twice daily',
      duration: '30 days',
      instructions: instructions,
      date: new Date().toISOString().split('T')[0],
      status: 'active'
    };

    setHealthState(prev => ({
      ...prev,
      prescriptions: [...prev.prescriptions, newPrescription]
    }));
    toast.success('Prescription issued successfully');
  };

  const getHealthCode = (language: 'python' | 'java' | 'javascript' | 'playwright' = selectedLanguage) => {
    if (selectedPlatform === 'epic') {
      if (language === 'playwright') {
        return [
          'import { test, expect } from "@playwright/test";',
          '',
          'test.describe("Epic Health System Testing", () => {',
          '  test("Complete Epic workflow", async ({ page }) => {',
          '    // Navigate to Epic',
          '    await page.goto("https://epic.com/login");',
          '',
          '    // Enter credentials',
          '    await page.fill("#username", "doctor@hospital.com");',
          '    await page.fill("#password", "SecurePassword123");',
          '    await page.click("#login-button");',
          '',
          '    // Wait for dashboard',
          '    await page.waitForSelector(".patient-portal");',
          '',
          '    // Navigate to patient records',
          '    await page.click("a[href=\'/patients\']");',
          '    await page.waitForSelector(".patient-list");',
          '',
          '    // Search for patient',
          '    await page.fill("#patient-search", "Sarah Johnson");',
          '    await page.click(".search-button");',
          '',
          '    // View patient details',
          '    await page.click(".patient-row:first-child");',
          '    await expect(page.locator(".patient-details")).toBeVisible();',
          '',
          '    // Schedule appointment',
          '    await page.click(".schedule-appointment");',
          '    await page.selectOption("#appointment-type", "in-person");',
          '    await page.click("#confirm-appointment");',
          '',
          '    console.log("Epic test completed successfully!");',
          '  });',
          '});'
        ];
      } else if (language === 'python') {
        return [
          'from selenium import webdriver',
          'from selenium.webdriver.common.by import By',
          'from selenium.webdriver.support.ui import WebDriverWait',
          'from selenium.webdriver.support import expected_conditions as EC',
          '',
          '# Epic Health System Testing',
          'driver = webdriver.Chrome()',
          '',
          '# Navigate to Epic',
          'driver.get("https://epic.com/login")',
          '',
          '# Enter credentials',
          'username_field = driver.find_element(By.ID, "username")',
          'password_field = driver.find_element(By.ID, "password")',
          'username_field.send_keys("doctor@hospital.com")',
          'password_field.send_keys("SecurePassword123")',
          'login_button = driver.find_element(By.ID, "login-button")',
          'login_button.click()',
          '',
          '# Wait for dashboard',
          'WebDriverWait(driver, 10).until(',
          '    EC.presence_of_element_located((By.CLASS_NAME, "patient-portal"))',
          ')',
          '',
          'print("Epic test completed successfully!")',
          'driver.quit()'
        ];
      } else if (language === 'java') {
        return [
          'import org.openqa.selenium.By;',
          'import org.openqa.selenium.WebDriver;',
          'import org.openqa.selenium.WebElement;',
          'import org.openqa.selenium.chrome.ChromeDriver;',
          'import org.openqa.selenium.support.ui.ExpectedConditions;',
          'import org.openqa.selenium.support.ui.WebDriverWait;',
          'import org.openqa.selenium.support.ui.Select;',
          'import org.testng.Assert;',
          'import org.testng.annotations.Test;',
          '',
          'public class EpicHealthSystemTest {',
          '    ',
          '    @Test',
          '    public void testEpicHealthSystem() {',
          '        WebDriver driver = new ChromeDriver();',
          '        try {',
          '            // Navigate to Epic',
          '            driver.get("https://epic.com/login");',
          '            ',
          '            // Enter credentials',
          '            WebElement usernameField = driver.findElement(By.id("username"));',
          '            WebElement passwordField = driver.findElement(By.id("password"));',
          '            usernameField.sendKeys("doctor@hospital.com");',
          '            passwordField.sendKeys("SecurePassword123");',
          '            driver.findElement(By.id("login-button")).click();',
          '            ',
          '            // Wait for dashboard',
          '            WebDriverWait wait = new WebDriverWait(driver, 10);',
          '            wait.until(ExpectedConditions.presenceOfElementLocated(By.className("patient-portal")));',
          '            ',
          '            // Navigate to patient records',
          '            driver.findElement(By.cssSelector("a[href=\'/patients\']")).click();',
          '            wait.until(ExpectedConditions.presenceOfElementLocated(By.className("patient-list")));',
          '            ',
          '            // Search for patient',
          '            WebElement searchField = driver.findElement(By.id("patient-search"));',
          '            searchField.sendKeys("Sarah Johnson");',
          '            driver.findElement(By.className("search-button")).click();',
          '            ',
          '            // View patient details',
          '            driver.findElement(By.cssSelector(".patient-row:first-child")).click();',
          '            WebElement patientDetails = wait.until(',
          '                ExpectedConditions.presenceOfElementLocated(By.className("patient-details"))',
          '            );',
          '            Assert.assertTrue(patientDetails.isDisplayed(), "Patient details not displayed");',
          '            ',
          '            // Schedule appointment',
          '            driver.findElement(By.className("schedule-appointment")).click();',
          '            Select appointmentType = new Select(driver.findElement(By.id("appointment-type")));',
          '            appointmentType.selectByVisibleText("in-person");',
          '            driver.findElement(By.id("confirm-appointment")).click();',
          '            ',
          '            System.out.println("Epic test completed successfully!");',
          '            ',
          '        } finally {',
          '            driver.quit();',
          '        }',
          '    }',
          '}',
          '',
          '// Run the test',
          'public class Main {',
          '    public static void main(String[] args) {',
          '        EpicHealthSystemTest test = new EpicHealthSystemTest();',
          '        test.testEpicHealthSystem();',
          '    }',
          '}'
        ];
      } else if (language === 'javascript') {
        return [
          'const { Builder, By, until, Key } = require(\'selenium-webdriver\');',
          'const assert = require(\'assert\');',
          '',
          'async function testEpicHealthSystem() {',
          '    let driver = await new Builder().forBrowser(\'chrome\').build();',
          '    try {',
          '        // Navigate to Epic',
          '        await driver.get(\'https://epic.com/login\');',
          '        ',
          '        // Enter credentials',
          '        await driver.findElement(By.id(\'username\')).sendKeys(\'doctor@hospital.com\');',
          '        await driver.findElement(By.id(\'password\')).sendKeys(\'SecurePassword123\');',
          '        await driver.findElement(By.id(\'login-button\')).click();',
          '        ',
          '        // Wait for dashboard',
          '        await driver.wait(until.elementLocated(By.className(\'patient-portal\')), 10000);',
          '        ',
          '        // Navigate to patient records',
          '        await driver.findElement(By.cssSelector(\'a[href="/patients"]\')).click();',
          '        await driver.wait(until.elementLocated(By.className(\'patient-list\')), 10000);',
          '        ',
          '        // Search for patient',
          '        await driver.findElement(By.id(\'patient-search\')).sendKeys(\'Sarah Johnson\');',
          '        await driver.findElement(By.className(\'search-button\')).click();',
          '        ',
          '        // View patient details',
          '        await driver.findElement(By.cssSelector(\'.patient-row:first-child\')).click();',
          '        let patientDetails = await driver.wait(until.elementLocated(By.className(\'patient-details\')), 10000);',
          '        assert(await patientDetails.isDisplayed(), \'Patient details not displayed\');',
          '        ',
          '        // Schedule appointment',
          '        await driver.findElement(By.className(\'schedule-appointment\')).click();',
          '        await driver.findElement(By.id(\'appointment-type\')).sendKeys(\'in-person\');',
          '        await driver.findElement(By.id(\'confirm-appointment\')).click();',
          '        ',
          '        console.log(\'Epic test completed successfully!\');',
          '        ',
          '    } finally {',
          '        await driver.quit();',
          '    }',
          '}',
          '',
          '// Run the test',
          'testEpicHealthSystem().catch(console.error);'
        ];
      }
    }
    return ['// Select a platform and language to see code examples'];
  };

  const healthExample = {
    title: `${selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)} Health System Test`,
    description: `Complete automation testing for ${selectedPlatform} health system`,
    code: Array.isArray(getHealthCode()) ? getHealthCode().join('\n') : String(getHealthCode())
  };

  const simulateHealthAppTest = async () => {
    setIsRunning(true);
    setExecutionLogs([]);
    setCurrentStep(0);
    setLiveVariables({});
    
    // Clear health state
    setHealthState({ 
      currentView: 'login',
      selectedRole: 'doctor',
      patients: [],
      appointments: [],
      prescriptions: [],
      metrics: {
        totalPatients: 0,
        activePatients: 0,
        totalAppointments: 0,
        todayAppointments: 0,
        telemedicineSessions: 0,
        prescriptionsIssued: 0,
        criticalCases: 0,
        patientSatisfaction: 0,
        revenue: 0
      },
      loginEmail: '',
      loginPassword: '',
      isLoggedIn: false,
      currentUser: null,
      searchQuery: '',
      selectedPatient: null,
      selectedAppointment: null
    });

    const multiplier = getSpeedMultiplier();
    const firstPatient = getPatients()[0]; // Sarah Johnson
    
    const steps = [
      { step: 0, log: '🏥 Starting Health Application Test...', delay: 500 * multiplier, codeLine: 0 },
      { step: 1, log: '🩺 Health Portal loaded - showing role selection', delay: 800 * multiplier, codeLine: 0 },
      { step: 2, log: '👤 Selecting role: Doctor', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          selectRole('doctor');
          setLiveVariables({ role: 'doctor', access_level: 'clinical' });
        }
      },
      { step: 3, log: '🔐 Entering email: dr.michael.chen@hospital.com', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setHealthState(prev => ({ ...prev, loginEmail: 'dr.michael.chen@hospital.com' }));
          setLiveVariables({ email: 'dr.michael.chen@hospital.com', step: 'entering_credentials' });
        }
      },
      { step: 4, log: '🔑 Entering password: ••••••••', delay: 1000 * multiplier, codeLine: 0, 
        action: () => {
          setHealthState(prev => ({ ...prev, loginPassword: 'SecurePassword123' }));
          setLiveVariables({ password: 'entered', step: 'credentials_ready' });
        }
      },
      { step: 5, log: '🔐 Logging into Health Portal...', delay: 800 * multiplier, codeLine: 0, 
        action: () => {
          login('dr.michael.chen@hospital.com', 'SecurePassword123');
          setLiveVariables({ user: 'Dr. Michael Chen', status: 'authenticated' });
        }
      },
      { step: 6, log: '✅ Successfully logged into Health System!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ user: 'Dr. Michael Chen', status: 'authenticated', session: 'active' });
        }
      },
      { step: 7, log: '📊 Loading Medical Dashboard with patient metrics...', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ totalPatients: '1,247', activePatients: '1,189', todayAppointments: '24' });
        }
      },
      { step: 8, log: '👥 Navigating to Patient Management...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, currentView: 'patients' }));
          setLiveVariables({ action: 'navigating', section: 'patient_management' });
        }
      },
      { step: 9, log: '📋 Managing 5 patient records with medical histories', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ patients_managed: '5', records: 'complete', conditions: 'tracked' });
        }
      },
      { step: 10, log: '🔍 Viewing Sarah Johnson\'s medical record...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, selectedPatient: firstPatient }));
          setLiveVariables({ patient: 'Sarah Johnson', conditions: 'Diabetes, Hypertension', medications: '2' });
        }
      },
      { step: 11, log: '📅 Navigating to Appointment Scheduler...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, currentView: 'appointments' }));
          setLiveVariables({ action: 'navigating', section: 'appointment_scheduler' });
        }
      },
      { step: 12, log: '📞 Managing 5 appointments (2 telemedicine sessions)', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ appointments: '5', telemedicine: '2', emergency: '1' });
        }
      },
      { step: 13, log: '➕ Scheduling new appointment for Sarah Johnson...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          scheduleAppointment('patient1', 'doctor1', '2024-01-24', '10:00 AM', 'in-person');
          setLiveVariables({ action: 'scheduling', patient: 'Sarah Johnson', type: 'in-person' });
        }
      },
      { step: 14, log: '✅ Appointment scheduled successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 15, log: '💊 Navigating to Prescription Management...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, currentView: 'prescriptions' }));
          setLiveVariables({ action: 'navigating', section: 'prescription_management' });
        }
      },
      { step: 16, log: '💉 Managing 4 active prescriptions', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ prescriptions: '4', active: '4', medications: 'tracked' });
        }
      },
      { step: 17, log: '📝 Issuing new prescription for Maria Garcia...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          issuePrescription('patient3', 'Ibuprofen', '400mg', 'Take for pain as needed');
          setLiveVariables({ action: 'prescribing', patient: 'Maria Garcia', medication: 'Ibuprofen' });
        }
      },
      { step: 18, log: '✅ Prescription issued successfully!', delay: 600 * multiplier, codeLine: 0 },
      { step: 19, log: '📹 Starting telemedicine session...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, currentView: 'telemedicine' }));
          setLiveVariables({ action: 'starting_telemedicine', session: 'video_call' });
        }
      },
      { step: 20, log: '🎥 Video consultation established with patient...', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ telemedicine: 'active', video: 'connected', patient: 'Robert Williams' });
        }
      },
      { step: 21, log: '📊 Viewing Health Analytics Dashboard...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, currentView: 'analytics' }));
          setLiveVariables({ action: 'viewing_analytics', metrics: 'comprehensive' });
        }
      },
      { step: 22, log: '📈 Performance Metrics: 4.6/5 satisfaction, $125K revenue', delay: 1000 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ satisfaction: '4.6/5', revenue: '$125,000', telemedicine_sessions: '342' });
        }
      },
      { step: 23, log: '⚙️ Accessing system settings...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, currentView: 'settings' }));
          setLiveVariables({ action: 'accessing_settings', configuration: 'medical_system' });
        }
      },
      { step: 24, log: '🔧 Configuring Health System settings...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ settings: 'configured', hipaa: 'compliant', security: 'enabled' });
        }
      },
      { step: 25, log: '🏠 Returning to main dashboard...', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setHealthState(prev => ({ ...prev, currentView: 'dashboard' }));
          setLiveVariables({ status: 'returned_to_dashboard', patients_tested: '5', features_tested: '7' });
        }
      },
      { step: 26, log: '🎉 Health Application test completed successfully - Medical platform active!', delay: 800 * multiplier, codeLine: 0,
        action: () => {
          setLiveVariables({ status: 'test_completed', patients_tested: '5', features_tested: '7', final_view: 'dashboard' });
        }
      }
    ];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      setCurrentStep(i);
      setExecutionLogs(prev => [...prev, step.log]);
      
      if (step.action) {
        step.action();
      }
      
      if (step.codeLine !== undefined) {
        // setCurrentCodeLine(step.codeLine);
      }
      
      await new Promise(resolve => setTimeout(resolve, step.delay));
    }

    setIsRunning(false);
    // setCurrentCodeLine(-1);
  };

  const copyToClipboard = (text: string, description: string = 'Code') => {
    navigator.clipboard.writeText(text);
    toast.success(`${description} copied to clipboard`);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Healthcare Application Testing"
        description="Master automated testing for healthcare systems with realistic medical workflows, patient management, appointment scheduling, and HIPAA-compliant clinical operations."
        icon={Stethoscope}
        category="Selenium · Domain Testing"
      />

      {/* Health Application Testing Features Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5" />
            Health Application Testing Features
          </CardTitle>
          <CardDescription>
            Core capabilities for automated healthcare application testing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-blue-100 dark:bg-blue-900">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Patient Management</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Medical records & histories</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-green-100 dark:bg-green-900">
                <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Appointment Scheduling</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Booking & calendar management</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-purple-100 dark:bg-purple-900">
                <Video className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Telemedicine</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Video consultations</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-orange-100 dark:bg-orange-900">
                <Pill className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Prescription Management</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Medication tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-cyan-100 dark:bg-cyan-900">
                <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">HIPAA Compliance</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Data protection & privacy</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="p-2 rounded bg-pink-100 dark:bg-pink-900">
                <Activity className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Health Analytics</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Patient outcomes & metrics</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Code Examples
          </CardTitle>
          <CardDescription>
            Multi-language implementations of health application testing workflows. 
            <span className="text-green-600 dark:text-green-400 font-medium"> Practice on real health systems like Epic to master these skills!</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Platform Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Health Platform:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['epic'] as const).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedPlatform === platform
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    Epic
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Select Programming Language:</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['playwright', 'python', 'java', 'javascript'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                      selectedLanguage === lang
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {lang === 'playwright' ? 'Playwright' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {healthExample.title}
                </h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(healthExample.code)}
                >
                  Copy Code
                </Button>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{healthExample.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Health App Demo */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Interactive Health App Demo
              </CardTitle>
              {/* Speed Control */}
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-500" />
                <div className="flex gap-1">
                  {(['slow', 'medium', 'fast'] as const).map((speedOption) => (
                    <button
                      key={speedOption}
                      onClick={() => setSpeed(speedOption)}
                      disabled={isRunning}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                        speed === speedOption
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                    >
                      {speedOption.charAt(0).toUpperCase() + speedOption.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button
              onClick={simulateHealthAppTest}
              disabled={isRunning}
              className="flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Demo
                </>
              )}
            </Button>
          </div>
          <CardDescription>
            Experience a complete healthcare workflow simulation with patient management, appointments, telemedicine, and prescriptions. 
            <span className="text-amber-600 dark:text-amber-400 font-medium"> (This is a dummy health application for educational purposes only)</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Progress Bar */}
            {isRunning && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Progress</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">
                    Step {currentStep + 1} of 27
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / 27) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Dummy Health Application UI */}
            {isRunning && (
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">MediCare+ Health Platform</h4>
                  <Badge variant="outline" className="text-xs">HIPAA Compliant</Badge>
                </div>

              {/* Login Screen */}
              {healthState.currentView === 'login' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">MediCare+</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Healthcare Management System</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          value={healthState.loginEmail}
                          onChange={(e) => setHealthState(prev => ({ ...prev, loginEmail: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="password"
                          value={healthState.loginPassword}
                          onChange={(e) => setHealthState(prev => ({ ...prev, loginPassword: e.target.value }))}
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                      Sign In
                    </Button>
                  </div>
                </div>
              )}

              {/* Dashboard */}
              {healthState.currentView === 'dashboard' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-4">
                      <Stethoscope className="w-8 h-8 text-blue-500" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">MediCare+ Dashboard</h3>
                        <p className="text-sm text-slate-500">Dr. Michael Chen</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm">
                        <Bell className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <LogOut className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Metrics Cards */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-blue-600 dark:text-blue-400">+5%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{healthState.metrics.totalPatients.toLocaleString()}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Total Patients</p>
                        </div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
                          <span className="text-sm text-green-600 dark:text-green-400">+12%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{healthState.metrics.todayAppointments}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Today's Appointments</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <Video className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                          <span className="text-sm text-purple-600 dark:text-purple-400">+18%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{healthState.metrics.telemedicineSessions}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Telemedicine Sessions</p>
                        </div>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <Pill className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                          <span className="text-sm text-orange-600 dark:text-orange-400">+8%</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{healthState.metrics.prescriptionsIssued}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Prescriptions Issued</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">Patient Records</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm">Appointments</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <Video className="w-5 h-5" />
                        <span className="text-sm">Telemedicine</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col gap-2">
                        <Pill className="w-5 h-5" />
                        <span className="text-sm">Prescriptions</span>
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Patients */}
              {healthState.currentView === 'patients' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Patient Records</h3>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Patient
                      </Button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Patient</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Contact</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Blood Type</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Conditions</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Last Visit</th>
                          <th className="text-left p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {healthState.patients.map((patient) => (
                          <tr key={patient.id} className="border-t border-slate-200 dark:border-slate-600">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center">
                                  <User className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                                </div>
                                <div>
                                  <p className="font-medium text-slate-900 dark:text-slate-100">{patient.name}</p>
                                  <p className="text-sm text-slate-500">{patient.gender} • {patient.dateOfBirth}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                              <div>{patient.email}</div>
                              <div>{patient.phone}</div>
                            </td>
                            <td className="p-4">
                              <Badge variant="outline">{patient.bloodType}</Badge>
                            </td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                              {patient.conditions.join(', ')}
                            </td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{patient.lastVisit}</td>
                            <td className="p-4">
                              <Badge variant={patient.status === 'critical' ? 'destructive' : patient.status === 'active' ? 'default' : 'outline'}>
                                {patient.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Appointments */}
              {healthState.currentView === 'appointments' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Appointment Schedule</h3>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Schedule Appointment
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {healthState.appointments.map((appointment) => (
                        <div key={appointment.id} className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                              </div>
                              <div>
                                <p className="font-medium text-slate-900 dark:text-slate-100">{appointment.patientName}</p>
                                <p className="text-sm text-slate-500">with {appointment.doctorName}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-slate-900 dark:text-slate-100">{appointment.date}</p>
                              <p className="text-sm text-slate-500">{appointment.time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={appointment.type === 'telemedicine' ? 'secondary' : appointment.type === 'emergency' ? 'destructive' : 'outline'}>
                                {appointment.type}
                              </Badge>
                              <Badge variant={appointment.status === 'in-progress' ? 'default' : appointment.status === 'completed' ? 'secondary' : 'outline'}>
                                {appointment.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            {appointment.notes}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Prescriptions */}
              {healthState.currentView === 'prescriptions' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Prescription Management</h3>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Issue Prescription
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {healthState.prescriptions.map((prescription) => (
                        <div key={prescription.id} className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center">
                                <Pill className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                              </div>
                              <div>
                                <p className="font-medium text-slate-900 dark:text-slate-100">{prescription.medication}</p>
                                <p className="text-sm text-slate-500">for {prescription.patientName}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-slate-900 dark:text-slate-100">{prescription.dosage}</p>
                              <p className="text-sm text-slate-500">{prescription.frequency}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={prescription.status === 'active' ? 'default' : 'outline'}>
                                {prescription.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            <p><strong>Instructions:</strong> {prescription.instructions}</p>
                            <p><strong>Duration:</strong> {prescription.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Telemedicine */}
              {healthState.currentView === 'telemedicine' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Telemedicine Consultation</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Video Call Interface */}
                      <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-8 text-center">
                        <Video className="w-16 h-16 text-white mx-auto mb-4" />
                        <h4 className="text-white text-lg font-semibold mb-2">Video Consultation Active</h4>
                        <p className="text-slate-400 mb-4">Connected with Robert Williams</p>
                        <div className="flex justify-center gap-4">
                          <Button variant="secondary" className="bg-red-600 hover:bg-red-700">
                            End Call
                          </Button>
                          <Button variant="secondary">
                            <Camera className="w-4 h-4 mr-2" />
                            Camera Off
                          </Button>
                          <Button variant="secondary">
                            <Mic className="w-4 h-4 mr-2" />
                            Mute
                          </Button>
                        </div>
                      </div>

                      {/* Consultation Notes */}
                      <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Consultation Notes</h4>
                        <textarea
                          className="w-full h-32 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 resize-none"
                          placeholder="Enter consultation notes..."
                        />
                        <div className="flex justify-end gap-2 mt-4">
                          <Button variant="outline">Save Draft</Button>
                          <Button>Complete Consultation</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics */}
              {healthState.currentView === 'analytics' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-6xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Health Analytics Dashboard</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Key Metrics */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Key Performance Indicators</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Patient Satisfaction</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">4.6/5.0</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Telemedicine Adoption</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">34.2%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Critical Cases</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">8</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Monthly Revenue</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-100">$125,000</span>
                          </div>
                        </div>
                      </div>

                      {/* Health Trends */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Health Trends</h4>
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Diabetes Cases</span>
                              <span>↑ 12%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Hypertension</span>
                              <span>↑ 8%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Respiratory Issues</span>
                              <span>↓ 5%</span>
                            </div>
                            <div className="flex justify-between text-sm font-semibold">
                              <span>Overall Health Score</span>
                              <span>87/100</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings */}
              {healthState.currentView === 'settings' && (
                <div className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">System Settings</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">HIPAA Compliance</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Data Encryption</span>
                            <Badge variant="default">Enabled</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Audit Logging</span>
                            <Badge variant="default">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Access Controls</span>
                            <Badge variant="default">Configured</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">System Integration</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Lab Systems</span>
                            <Badge variant="default">Connected</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Pharmacy Integration</span>
                            <Badge variant="default">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">Insurance Billing</span>
                            <Badge variant="default">Configured</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            )}

            {/* Execution Logs */}
            {executionLogs.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Execution Logs</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 rounded-lg text-sm font-mono max-h-48 overflow-y-auto">
                  {executionLogs.map((log, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-slate-500">[{String(index + 1).padStart(2, '0')}]</span>
                      <span className={index === executionLogs.length - 1 ? 'text-green-400' : 'text-slate-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
