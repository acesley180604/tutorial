import { Tutorial } from '@/lib/tutorials'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TutorialDetailsProps {
  tutorial: Tutorial
}

export function TutorialDetails({ tutorial }: TutorialDetailsProps) {
  return (
    <Card className="mt-4 bg-green-50">
      <CardHeader>
        <CardTitle className="text-green-700">Payment Confirmed - Tutorial Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-green-700 font-semibold">Contact Information:</p>
            <p className="text-green-700">Phone: {tutorial.contactNumber}</p>
          </div>
          <div>
            <p className="text-green-700 font-semibold">Tutorial Details:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>Date: {tutorial.date}</li>
              <li>Time: {tutorial.time}</li>
              <li>Location: {tutorial.location}</li>
              <li>Category: {tutorial.category}</li>
              <li>Wages: HKD {tutorial.wages}</li>
            </ul>
          </div>
          <div>
            <p className="text-green-700 font-semibold">Next Steps:</p>
            <ul className="list-disc list-inside text-green-700">
              <li>Contact the tutor using the phone number above</li>
              <li>Confirm the meeting location and time</li>
              <li>Prepare any necessary materials for the {tutorial.category} tutorial</li>
              <li>Have the agreed payment of HKD {tutorial.wages} ready</li>
            </ul>
          </div>
          <p className="text-green-700 mt-4 font-semibold">
            Thank you for using our service! Enjoy your learning experience!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

