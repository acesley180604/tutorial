'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getUser } from '@/lib/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const [user, setUser] = useState<{ username: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const loggedInUser = getUser()
    setUser(loggedInUser)
  }, [])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
      setUser(null)
      router.push('/login')
    }
  }

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Tutorial Matcher
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm">Welcome, {user.username}</span>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
              <Link href="/add-tutorial">
                <Button>Add Tutorial</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
