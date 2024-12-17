'use client'

import { useState } from 'react'
import { Tutorial } from '@/lib/tutorials'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TutorialDetails } from './tutorial-details'
import { PaymentStep } from './payment-step'

interface TutorialListProps {
  tutorials: Tutorial[]
}

export function TutorialList({ tutorials }: TutorialListProps) {
  const [acceptedTutorials, setAcceptedTutorials] = useState<string[]>([])
  const [paidTutorials, setPaidTutorials] = useState<string[]>([])
  const [showCommissionMessage, setShowCommissionMessage] = useState(false)

  if (tutorials.length === 0) {
    return <p className="text-center text-gray-500">No matching tutorials found.</p>
  }

  const handleAccept = (tutorialId: string) => {
    setShowCommissionMessage(true)
    setTimeout(() => {
      setShowCommissionMessage(false)
      setAcceptedTutorials([...acceptedTutorials, tutorialId])
    }, 3000)
  }

  const handlePaymentComplete = (tutorialId: string) => {
    setPaidTutorials([...paidTutorials, tutorialId])
  }

  return (
    <div className="space-y-4">
      {showCommissionMessage && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p className="font-bold">Commission Charge</p>
          <p>A commission of 10 HKD will be charged for this match.</p>
        </div>
      )}
      {tutorials.map((tutorial) => (
        <Card key={tutorial.id}>
          <CardHeader>
            <CardTitle>{tutorial.title}</CardTitle>
            <CardDescription>{tutorial.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Location: {tutorial.location}</p>
            <p className="text-sm text-muted-foreground">Category: {tutorial.category}</p>
            <p className="text-sm text-muted-foreground">Time: {tutorial.time}</p>
            <p className="text-sm text-muted-foreground">Date: {tutorial.date}</p>
            <p className="text-sm text-muted-foreground">Wages: HKD {tutorial.wages}</p>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            {!acceptedTutorials.includes(tutorial.id) && (
              <>
                <Button variant="outline">Reject</Button>
                <Button onClick={() => handleAccept(tutorial.id)}>Accept</Button>
              </>
            )}
          </CardFooter>
          {acceptedTutorials.includes(tutorial.id) && !paidTutorials.includes(tutorial.id) && (
            <PaymentStep onPaymentComplete={() => handlePaymentComplete(tutorial.id)} />
          )}
          {paidTutorials.includes(tutorial.id) && (
            <TutorialDetails tutorial={tutorial} />
          )}
        </Card>
      ))}
    </div>
  )
}

