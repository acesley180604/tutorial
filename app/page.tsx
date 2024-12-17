'use client'

import { useState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { matchTutorials } from './actions'
import { TutorialList } from '@/app/components/tutorial-list'
import { Navbar } from './components/navbar'
import { Tutorial, locations } from '@/lib/tutorials'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getUser } from '@/lib/auth'
import Link from 'next/link'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Matching...' : 'Find Tutorials'}
    </Button>
  )
}

export default function Home() {
  const [matchedTutorials, setMatchedTutorials] = useState<Tutorial[]>([])
  const [user, setUser] = useState<{ username: string } | null>(null)

  useEffect(() => {
    const loggedInUser = getUser()
    setUser(loggedInUser)
  }, [])

  async function handleSubmit(formData: FormData) {
    if (!user) return
    const matched = await matchTutorials(formData)
    setMatchedTutorials(matched)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Tutorial Matcher</h1>
        {user && (
          <p className="text-center mb-4">Welcome, {user.username}!</p>
        )}
        <Card className="max-w-md mx-auto mb-8">
          <CardHeader>
            <CardTitle>Find Temporary Tutor Immediately!</CardTitle>
            <CardDescription>Select your preferences to get matched with tutorials.</CardDescription>
          </CardHeader>
          <CardContent>
            {user ? (
              <form action={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Primary Student">Primary Student</SelectItem>
                      <SelectItem value="Secondary Student">Secondary Student</SelectItem>
                      <SelectItem value="Tertiary Student">Tertiary Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select name="location" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <SubmitButton />
              </form>
            ) : (
              <div className="text-center">
                <p className="mb-4">Please log in or sign up to use the Tutorial Matcher.</p>
                <div className="space-x-4">
                  <Link href="/login">
                    <Button variant="outline">Log In</Button>
                  </Link>
                  <Link href="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <TutorialList tutorials={matchedTutorials} />
      </main>
    </div>
  )
}
