'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, MapPin, Lightbulb, Shield, CheckCircle } from 'lucide-react';
import React from 'react';

export default function GeolocationApi({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {

    const playgroundCode = {
        html: `<h2>Geolocation API Demo</h2>
<p>Click the button to get your coordinates. You will be asked for permission.</p>
<button id="find-me">Show my location</button>
<p id="status"></p>
<div id="map-link"></div>`,
        css: `#status {
  font-weight: bold;
  margin-top: 1rem;
}`,
        js: `const status = document.getElementById('status');
const mapLink = document.getElementById('map-link');

function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = \`Latitude: \${latitude}°, Longitude: \${longitude}°\`;
  mapLink.innerHTML = \`<a href="https://www.openstreetmap.org/#map=18/\${latitude}/\${longitude}" target="_blank">See on a map</a>\`;
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

document.getElementById('find-me').addEventListener('click', () => {
  mapLink.innerHTML = '';
  status.textContent = 'Locating…';
  
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
`
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
                <MapPin className="w-10 h-10 text-primary" />
                <h1 className="text-4xl font-bold text-foreground">Geolocation API</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Accessing the user's geographical location.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>What is the Geolocation API?</CardTitle>
                <CardDescription>The Geolocation API provides access to geographical location data associated with a user's device. This can be determined using GPS, Wi-Fi, cell towers, or IP address.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>It is accessed via the `navigator.geolocation` object.</p>
            </CardContent>
        </Card>
        
        <Card className="border-primary bg-primary/5">
            <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2"><Shield className="w-5 h-5"/>Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">For privacy reasons, the user is asked for permission to report location information. Your application must handle the case where the user denies permission.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Core Method: `getCurrentPosition()`</CardTitle>
                <CardDescription>This is the main method you will use. It attempts to get the current position of the device.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="bg-muted rounded-md p-4 mb-4">
                    <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{`navigator.geolocation.getCurrentPosition(successCallback, errorCallback, [options]);`}</pre>
                </div>
                 <ul className="list-disc list-inside space-y-2">
                    <li>`successCallback`: A function that is executed when the location is successfully found. It receives a `Position` object as an argument.</li>
                    <li>`errorCallback`: An optional function that is executed if an error occurs.</li>
                    <li>`options`: Optional position options.</li>
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>See It In Action</CardTitle>
                <CardDescription>
                    Open this example in the Web Playground. Click the button and your browser will ask for permission to access your location.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => onOpenWebPlayground(playgroundCode.html, playgroundCode.css, playgroundCode.js)}>
                    <Play className="mr-2 h-4 w-4" /> Open Example in Playground
                </Button>
            </CardContent>
        </Card>
        
      </div>
    );
}
