'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { isUserAdmin } from '@/lib/admin';
import { InnovativeHeader } from '@/components/shared/layout/innovative-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Shield, 
  Users, 
  Activity, 
  Clock, 
  Trash2, 
  Lock,
  AlertCircle,
  UserX,
  TrendingUp,
  Database
} from 'lucide-react';
import { collection, getDocs, doc, deleteDoc, updateDoc, getFirestore, writeBatch } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UserData {
  id: string;
  email: string;
  displayName?: string;
  createdAt?: any;
  lastLoginAt?: any;
  totalSessionTime?: number; // in minutes
  completedTopics?: Record<string, string[]>;
  isActive?: boolean;
}

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);

  // Check admin access
  useEffect(() => {
    if (!isUserLoading && !isUserAdmin(user)) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
      router.push('/');
    }
  }, [user, isUserLoading, router, toast]);

  // Fetch all users
  useEffect(() => {
    if (!isUserAdmin(user)) return;

    const fetchUsers = async () => {
      try {
        const firestore = getFirestore();
        const usersCollection = collection(firestore, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        
        const usersData: UserData[] = [];
        usersSnapshot.forEach((doc) => {
          const data = doc.data();
          usersData.push({
            id: doc.id,
            email: data.email || '',
            displayName: data.displayName || '',
            createdAt: data.createdAt,
            lastLoginAt: data.lastLoginAt,
            totalSessionTime: data.totalSessionTime || 0,
            completedTopics: data.completedTopics || {},
            isActive: data.isActive !== false, // default to true
          });
        });

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast({
          title: "Error",
          description: "Failed to fetch users data.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user, toast]);

  // Delete user
  const handleDeleteUser = async (userId: string) => {
    try {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, 'users', userId));
      
      setUsers(users.filter(u => u.id !== userId));
      toast({
        title: "Success",
        description: "User has been deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      toast({
        title: "Error",
        description: "Failed to delete user.",
        variant: "destructive",
      });
    } finally {
      setDeleteUserId(null);
    }
  };
  
  // Delete all users
  const handleDeleteAllUsers = async () => {
    try {
      const firestore = getFirestore();
      const usersCollection = collection(firestore, 'users');
      const usersSnapshot = await getDocs(usersCollection);

      const batch = writeBatch(firestore);
      usersSnapshot.forEach((doc) => {
        if (doc.id !== user?.uid) { // Don't delete the current admin
          batch.delete(doc.ref);
        }
      });

      await batch.commit();

      setUsers(users.filter(u => u.id === user?.uid));
      toast({
        title: "Success",
        description: "All other users have been deleted.",
      });
    } catch (error) {
      console.error('Error deleting all users:', error);
      toast({
        title: "Error",
        description: "Failed to delete all users.",
        variant: "destructive",
      });
    } finally {
      setShowDeleteAllDialog(false);
    }
  };

  // Terminate user (set inactive)
  const handleTerminateUser = async (userId: string) => {
    try {
      const firestore = getFirestore();
      await updateDoc(doc(firestore, 'users', userId), {
        isActive: false,
        terminatedAt: new Date().toISOString(),
      });
      
      setUsers(users.map(u => u.id === userId ? { ...u, isActive: false } : u));
      toast({
        title: "Success",
        description: "User has been terminated.",
      });
    } catch (error) {
      console.error('Error terminating user:', error);
      toast({
        title: "Error",
        description: "Failed to terminate user.",
        variant: "destructive",
      });
    }
  };

  // Reactivate user
  const handleReactivateUser = async (userId: string) => {
    try {
      const firestore = getFirestore();
      await updateDoc(doc(firestore, 'users', userId), {
        isActive: true,
        reactivatedAt: new Date().toISOString(),
      });
      
      setUsers(users.map(u => u.id === userId ? { ...u, isActive: true } : u));
      toast({
        title: "Success",
        description: "User has been reactivated.",
      });
    } catch (error) {
      console.error('Error reactivating user:', error);
      toast({
        title: "Error",
        description: "Failed to reactivate user.",
        variant: "destructive",
      });
    }
  };

  // Change password
  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }

    setPasswordLoading(true);
    try {
      // Import Firebase Auth functions
      const { getAuth, updatePassword } = await import('firebase/auth');
      const auth = getAuth();
      
      if (auth.currentUser) {
        await updatePassword(auth.currentUser, newPassword);
        toast({
          title: "Success",
          description: "Password has been updated successfully.",
        });
        setShowPasswordDialog(false);
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (error: any) {
      console.error('Error changing password:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to change password.",
        variant: "destructive",
      });
    } finally {
      setPasswordLoading(false);
    }
  };

  // Calculate stats
  const stats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.isActive).length,
    inactiveUsers: users.filter(u => !u.isActive).length,
    totalSessionTime: users.reduce((acc, u) => acc + (u.totalSessionTime || 0), 0),
    avgSessionTime: users.length > 0 
      ? Math.round(users.reduce((acc, u) => acc + (u.totalSessionTime || 0), 0) / users.length) 
      : 0,
  };

  // Format time
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  // Format date
  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch {
      return 'N/A';
    }
  };

  if (!isUserAdmin(user) || isUserLoading) {
    return (
      <div className="min-h-screen bg-background">
        <InnovativeHeader currentPage="dashboard" user={user} />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">Checking permissions...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <InnovativeHeader currentPage="dashboard" user={user} />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            </div>
            <p className="text-muted-foreground">Manage users and monitor platform activity</p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => setShowPasswordDialog(true)}
              variant="outline"
              className="gap-2"
            >
              <Lock className="w-4 h-4" />
              Change Password
            </Button>
            <Button 
              onClick={() => setShowDeleteAllDialog(true)}
              variant="destructive"
              className="gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete All Users
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <Skeleton className="h-4 w-20" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16 mb-2" />
                  <Skeleton className="h-3 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Total Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalUsers}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.activeUsers} active, {stats.inactiveUsers} inactive
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Active Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {stats.activeUsers}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.totalUsers > 0 ? Math.round((stats.activeUsers / stats.totalUsers) * 100) : 0}% of total
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Total Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(stats.totalSessionTime)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across all users
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Avg. Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatTime(stats.avgSessionTime)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Per user
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              All Users
            </CardTitle>
            <CardDescription>
              Manage user accounts and view activity statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-48 mb-2" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                    <Skeleton className="h-9 w-24" />
                  </div>
                ))}
              </div>
            ) : users.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">No users found</p>
              </div>
            ) : (
              <div className="space-y-3">
                {users.map((userData) => {
                  const totalCompleted = Object.values(userData.completedTopics || {})
                    .reduce((acc, topics) => acc + topics.length, 0);

                  return (
                    <div 
                      key={userData.id} 
                      className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                        {userData.displayName?.[0]?.toUpperCase() || userData.email[0].toUpperCase()}
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium truncate">
                            {userData.displayName || userData.email.split('@')[0]}
                          </p>
                          {!userData.isActive && (
                            <Badge variant="destructive" className="text-xs">Terminated</Badge>
                          )}
                          {userData.email === user?.email && (
                            <Badge variant="default" className="text-xs">You</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{userData.email}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatTime(userData.totalSessionTime || 0)}
                          </span>
                          <span>
                            {totalCompleted} topics completed
                          </span>
                          <span>
                            Last login: {formatDate(userData.lastLoginAt)}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      {userData.email !== user?.email && (
                        <div className="flex items-center gap-2">
                          {userData.isActive ? (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleTerminateUser(userData.id)}
                                className="gap-2"
                              >
                                <UserX className="w-4 h-4" />
                                Terminate
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => setDeleteUserId(userData.id)}
                                className="gap-2"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                size="sm"
                                variant="default"
                                onClick={() => handleReactivateUser(userData.id)}
                                className="gap-2"
                              >
                                <Activity className="w-4 h-4" />
                                Reactivate
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => setDeleteUserId(userData.id)}
                                className="gap-2"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </Button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteUserId} onOpenChange={() => setDeleteUserId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the user account
              and remove all their data from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteUserId && handleDeleteUser(deleteUserId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete User
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete All Users Confirmation Dialog */}
      <AlertDialog open={showDeleteAllDialog} onOpenChange={setShowDeleteAllDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Delete All Users?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action will permanently delete all users except for your own account.
              This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAllUsers}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete All Users
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Password Change Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Change Admin Password
            </DialogTitle>
            <DialogDescription>
              Enter your new password below. Make sure it's strong and secure.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowPasswordDialog(false);
                setNewPassword('');
                setConfirmPassword('');
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleChangePassword}
              disabled={passwordLoading || !newPassword || !confirmPassword}
            >
              {passwordLoading ? 'Changing...' : 'Change Password'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
