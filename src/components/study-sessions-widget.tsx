'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Calendar, Clock, PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import { ScheduleStudyModal } from './schedule-study-modal';

const upcomingSessions = [
  { topic: 'React Hooks Deep Dive', date: 'Tomorrow', time: '10:00 AM' },
  { topic: 'Java Inheritance', date: 'In 3 days', time: '2:00 PM' },
];

export function StudySessionsWidget() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Upcoming Study Sessions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingSessions.map((session, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold">{session.topic}</p>
              <p className="text-xs text-muted-foreground">
                {session.date} at {session.time}
              </p>
            </div>
          </div>
        ))}
        {upcomingSessions.length === 0 && (
          <div className="text-center py-4">
            <p className="text-muted-foreground">No upcoming sessions.</p>
            <p className="text-sm text-muted-foreground mt-1">Schedule one to stay on track!</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <ScheduleStudyModal>
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Schedule New Session
            </Button>
        </ScheduleStudyModal>
      </CardFooter>
    </Card>
  );
}
