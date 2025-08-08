// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Always use environment variables for sensitive data
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vjrlzvharbapdffpkund.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcmx6dmhhcmJhcGRmZnBrdW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTI4NDksImV4cCI6MjA2ODE2ODg0OX0.sk30E0qF4-Fa3Ul3ykAgT3ve8gISwkBfsNUoE1k9ph8' 

// Validate required configuration
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key must be provided')
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)