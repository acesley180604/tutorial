'use client'

import { Tutorial } from '@/lib/tutorials'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface TutorialListProps {
  tutorials: Tutorial[]
}

export function TutorialList({ tutorials }: TutorialListProps) {
  if (tutorials.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No tutorials found. Try different search criteria.
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tutorials.map((tutorial) => (
        <Card key={tutorial.id}>
          <CardHeader>
            <CardTitle>{tutorial.title}</CardTitle>
            <CardDescription>{tutorial.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>{tutorial.description}</p>
              <p className="text-sm">
                <strong>Location:</strong> {tutorial.location}
              </p>
              {tutorial.time && (
                <p className="text-sm">
                  <strong>Time:</strong> {tutorial.time}
                </p>
              )}
              {tutorial.date && (
                <p className="text-sm">
                  <strong>Date:</strong> {tutorial.date}
                </p>
              )}
              {tutorial.wages && (
                <p className="text-sm">
                  <strong>Wages:</strong> HKD {tutorial.wages}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
