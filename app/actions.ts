'use server'

import { tutorials, Tutorial } from '@/lib/tutorials'

export async function matchTutorials(formData: FormData): Promise<Tutorial[]> {
  const category = formData.get('category') as 'Primary Student' | 'Secondary Student' | 'Tertiary Student'
  const location = formData.get('location') as string

  // Simulate a delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return tutorials.filter(
    tutorial => tutorial.category === category && tutorial.location === location
  )
}

export async function addTutorial(formData: FormData) {
  // In a real application, you would save this data to a database
  const newTutorial = {
    id: (tutorials.length + 1).toString(),
    title: `Tutorial by ${formData.get('name')}`,
    description: `${formData.get('category')} tutorial in ${formData.get('location')}`,
    category: formData.get('category') as 'Primary Student' | 'Secondary Student' | 'Tertiary Student',
    location: formData.get('location') as string,
    time: formData.get('time') as string,
    date: formData.get('date') as string,
    wages: formData.get('wages') as string,
  }

  // Simulate adding to database
  tutorials.push(newTutorial)

  // Simulate a delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true }
}

export async function login(username: string, password: string) {
  // Simulate a delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // For demo purposes, accept any non-empty username/password
  // In a real application, you would validate against a database
  if (!username || !password) {
    throw new Error('Invalid credentials')
  }

  // Store user info in localStorage (in a real app, you'd use sessions/JWT)
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify({ username }))
  }

  return { success: true }
}
