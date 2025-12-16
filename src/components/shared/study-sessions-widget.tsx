
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Calendar, Clock, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScheduleStudyModal } from './schedule-study-modal';
import { useUser } from '@/hooks/use-auth-compat';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

export function StudySessionsWidget() {
  const { user } = useUser();
  const isGuestUser = !user;
  
  // TODO: Implement Supabase study sessions
  const upcomingSessions: any[] = [];
  const isLoading = false;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Upcoming Study Sessions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
            Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4 p-3">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                    </div>
                </div>
            ))
        ) : upcomingSessions && upcomingSessions.length > 0 ? (
          upcomingSessions.map((session) => (
            <div key={session.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold">{session.topic}</p>
                <p className="text-xs text-muted-foreground">
                  {formatSessionTime(session.dateTime)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4">
            {isGuestUser ? (
              <>
                <p className="text-muted-foreground">Sign up to schedule study sessions</p>
                <p className="text-sm text-muted-foreground mt-1">Track your learning progress with personalized scheduling!</p>
              </>
            ) : (
              <>
                <p className="text-muted-foreground">No upcoming sessions.</p>
                <p className="text-sm text-muted-foreground mt-1">Schedule one to stay on track!</p>
              </>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <ScheduleStudyModal>
            <Button className="w-full" disabled={isGuestUser}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Schedule New Session
            </Button>
        </ScheduleStudyModal>
      </CardFooter>
    </Card>
  );
}
