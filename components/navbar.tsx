'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { isLoggedIn, removeUser } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setLoggedIn(isLoggedIn())
  }, [])

  const handleLogout = () => {
    removeUser()
    setLoggedIn(false)
    router.push('/')
  }

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Tutorial Matcher
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/add-tutorial">
              <Button variant="ghost">Add Tutorial Now</Button>
            </Link>
            {loggedIn ? (
              <Button variant="ghost" onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button variant="ghost">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

