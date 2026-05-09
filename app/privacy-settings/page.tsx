'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Shield, Download, Trash2, Eye, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function PrivacySettings() {
  const [minimalDataMode, setMinimalDataMode] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [thirdParty, setThirdParty] = useState(false);

  const dataCollected = [
    { label: 'Full Name', required: true, used: 'Booking & Identity' },
    { label: 'Email Address', required: true, used: 'Booking & Communication' },
    { label: 'Phone Number', required: true, used: 'Booking & Support' },
    { label: 'Booking History', required: false, used: 'Service Improvement' },
    { label: 'Usage Analytics', required: false, used: 'Analytics & Improvement' },
  ];

  const retention = [
    { category: 'Booking Data', duration: '2 years after last booking', deletable: true },
    { category: 'Payment Records', duration: '7 years (Tax Compliance)', deletable: false },
    { category: 'Usage Analytics', duration: '1 year', deletable: true },
    { category: 'Support Communications', duration: '1 year', deletable: true },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Privacy & Data Settings</h1>
            </div>
            <p className="text-muted-foreground">
              Manage your personal data, privacy preferences, and control what information CourtBook collects about you.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="consent">Consent</TabsTrigger>
              <TabsTrigger value="data">My Data</TabsTrigger>
              <TabsTrigger value="retention">Retention</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Privacy Summary</CardTitle>
                  <CardDescription>
                    Here&apos;s what we collect and how we protect your information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Privacy Principles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold mb-2">Minimal Data Collection</h4>
                      <p className="text-sm text-muted-foreground">
                        We only ask for information essential to complete your booking and provide customer support.
                      </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold mb-2">Transparent Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        You always know what data we collect and exactly how we use it.
                      </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold mb-2">Your Control</h4>
                      <p className="text-sm text-muted-foreground">
                        Download, correct, delete, or port your data anytime. No questions asked.
                      </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold mb-2">Secure Storage</h4>
                      <p className="text-sm text-muted-foreground">
                        Your data is encrypted and stored on secure servers with industry-standard protection.
                      </p>
                    </div>
                  </div>

                  {/* Minimal Data Mode */}
                  <div className="border-t border-border pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="minimal-mode" className="text-base font-semibold cursor-pointer">
                            Minimal Data Mode
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">When enabled, we collect only the minimum required for bookings and won&apos;t store any optional data like booking history or analytics.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          We collect only name, email, and phone. No optional data storage.
                        </p>
                      </div>
                      <Switch
                        id="minimal-mode"
                        checked={minimalDataMode}
                        onCheckedChange={setMinimalDataMode}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Consent Tab */}
            <TabsContent value="consent" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cookie & Tracking Preferences</CardTitle>
                  <CardDescription>
                    Control what types of cookies and tracking we use
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Essential */}
                  <div className="flex items-start justify-between p-4 bg-secondary/20 rounded-lg border border-secondary">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Essential Cookies</h4>
                      <p className="text-sm text-muted-foreground">
                        Required for the website to function. Cannot be disabled.
                      </p>
                    </div>
                    <Switch checked={true} disabled />
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how you use CourtBook to make improvements. No personal identification.
                      </p>
                    </div>
                    <Switch
                      checked={analytics}
                      onCheckedChange={setAnalytics}
                    />
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Marketing</h4>
                      <p className="text-sm text-muted-foreground">
                        Personalized promotional content and special offers. Opt-in only.
                      </p>
                    </div>
                    <Switch
                      checked={marketing}
                      onCheckedChange={setMarketing}
                    />
                  </div>

                  {/* Third Party */}
                  <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Third-Party Sharing</h4>
                      <p className="text-sm text-muted-foreground">
                        Allow analytics and service partners to track your activity. We never sell data.
                      </p>
                    </div>
                    <Switch
                      checked={thirdParty}
                      onCheckedChange={setThirdParty}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Data Tab */}
            <TabsContent value="data" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What Data We Collect</CardTitle>
                  <CardDescription>
                    Complete list of all personal data we collect and how it&apos;s used
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dataCollected.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{item.label}</span>
                            {item.required && (
                              <span className="text-xs bg-destructive text-destructive-foreground px-2 py-0.5 rounded">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Used for: {item.used}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Retention Tab */}
            <TabsContent value="retention" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Retention Policy</CardTitle>
                  <CardDescription>
                    How long we keep your data and when it&apos;s deleted
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {retention.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.category}</h4>
                        <p className="text-sm text-muted-foreground">Kept for {item.duration}</p>
                      </div>
                      {item.deletable && (
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          Delete Now
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* User Rights Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
              <CardDescription>
                You have the following rights under GDPR/CCPA regarding your personal data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4 flex flex-col items-start">
                  <Download className="w-5 h-5 mb-2" />
                  <span className="font-semibold">Download My Data</span>
                  <span className="text-xs text-muted-foreground">Export all your personal data in JSON format</span>
                </Button>

                <Button variant="outline" className="justify-start h-auto p-4 flex flex-col items-start">
                  <Eye className="w-5 h-5 mb-2" />
                  <span className="font-semibold">Access Request</span>
                  <span className="text-xs text-muted-foreground">View exactly what data we have about you</span>
                </Button>

                <Button variant="outline" className="justify-start h-auto p-4 flex flex-col items-start">
                  <Trash2 className="w-5 h-5 mb-2" />
                  <span className="font-semibold">Delete My Data</span>
                  <span className="text-xs text-muted-foreground">Permanently delete all personal data</span>
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="justify-start h-auto p-4 flex flex-col items-start">
                      <Shield className="w-5 h-5 mb-2" />
                      <span className="font-semibold">Object to Processing</span>
                      <span className="text-xs text-muted-foreground">Opt out of specific data processing</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle>Object to Data Processing</AlertDialogTitle>
                    <AlertDialogDescription>
                      You can object to certain types of data processing. This may limit some features of CourtBook.
                    </AlertDialogDescription>
                    <div className="flex justify-end gap-2">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Privacy Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you have any concerns about your privacy or how we handle your data, please contact our Data Protection Officer.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> privacy@courtbook.id</p>
                <p><strong>Response time:</strong> Within 30 days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
