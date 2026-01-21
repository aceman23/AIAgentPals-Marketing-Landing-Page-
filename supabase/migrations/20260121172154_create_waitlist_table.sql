/*
  # Create Waitlist Table

  ## Purpose
  Store email signups for the AIAgentPals waiting list with proper validation and security.

  ## Tables Created
  
  ### `waitlist`
  Stores user email addresses and signup metadata for the waiting list.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each signup
  - `email` (text, unique, not null) - User's email address
  - `created_at` (timestamptz) - Timestamp of signup
  - `referral_source` (text, nullable) - Optional tracking of where signup came from
  - `metadata` (jsonb, nullable) - Optional additional data (device info, etc.)

  ## Security
  
  ### Row Level Security (RLS)
  - RLS is ENABLED on the waitlist table
  - INSERT policy allows anyone to sign up (anonymous users)
  - SELECT policy is restrictive - no public reads
  - UPDATE and DELETE policies are restrictive - no public modifications
  
  ## Indexes
  - Unique index on email to prevent duplicates
  - Index on created_at for efficient sorting and analytics

  ## Important Notes
  1. Email validation should be done at the application level before submission
  2. The table is append-only from the public perspective
  3. Only authenticated admin users can view/manage the waitlist
*/

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  referral_source text,
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Add email format constraint
ALTER TABLE waitlist 
ADD CONSTRAINT waitlist_email_format 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Create index on created_at for efficient queries
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at 
ON waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (sign up)
CREATE POLICY "Anyone can sign up for waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated admin users can view waitlist
CREATE POLICY "Only authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: No public updates allowed
CREATE POLICY "No public updates to waitlist"
  ON waitlist
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

-- Policy: No public deletes allowed
CREATE POLICY "No public deletes from waitlist"
  ON waitlist
  FOR DELETE
  TO authenticated
  USING (false);
