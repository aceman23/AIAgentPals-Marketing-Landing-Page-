/*
  # Create tb_waitlist Table

  1. New Tables
    - `tb_waitlist`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, not null) - User's email address
      - `created_at` (timestamptz) - Timestamp of signup
      - `referral_source` (text) - Tracking of where signup came from
      - `metadata` (jsonb) - Additional data (device info, user agent, etc.)

  2. Security
    - Enable RLS on `tb_waitlist` table
    - Add policy for anonymous users to sign up (INSERT only)
    - Add policy for authenticated users to view waitlist (SELECT)
    - Restrict UPDATE and DELETE to prevent data modification

  3. Constraints
    - Email format validation using regex
    - Unique constraint on email to prevent duplicates

  4. Indexes
    - Index on created_at for efficient sorting
*/

-- Create the tb_waitlist table
CREATE TABLE IF NOT EXISTS tb_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  referral_source text DEFAULT 'website',
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Create index on created_at for efficient queries
CREATE INDEX IF NOT EXISTS idx_tb_waitlist_created_at 
ON tb_waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE tb_waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert with validation
CREATE POLICY "Anonymous users can sign up for waitlist"
  ON tb_waitlist
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email <> '' 
    AND length(email) <= 254
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Policy: Only authenticated users can view waitlist
CREATE POLICY "Only authenticated users can view waitlist"
  ON tb_waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: No public updates allowed
CREATE POLICY "No public updates to waitlist"
  ON tb_waitlist
  FOR UPDATE
  TO authenticated
  USING (false)
  WITH CHECK (false);

-- Policy: No public deletes allowed
CREATE POLICY "No public deletes from waitlist"
  ON tb_waitlist
  FOR DELETE
  TO authenticated
  USING (false);
