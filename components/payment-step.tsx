import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PaymentStepProps {
  onPaymentComplete: () => void
}

export function PaymentStep({ onPaymentComplete }: PaymentStepProps) {
  return (
    <Card className="mt-4 bg-blue-50">
      <CardHeader>
        <CardTitle className="text-blue-700">Payment Required</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-blue-700">Please scan the QR code to pay HKD 10 referral fee</p>
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/WhatsApp Image 2024-12-17 at 11.32.53 AM.jpeg"
              alt="Payment QR Code"
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* In a real app, this would be connected to a payment verification system */}
        <div className="text-center">
          <Button onClick={onPaymentComplete} variant="outline">
            I have completed the payment
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

