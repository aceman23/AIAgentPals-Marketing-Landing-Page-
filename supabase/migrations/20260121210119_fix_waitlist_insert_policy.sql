/*
  # Fix Waitlist Insert Policy

  1. Changes
    - Drop the existing restrictive insert policy for anonymous users
    - Create a new policy that allows anonymous users to insert all necessary fields
    - Validates email format and length
    - Allows referral_source and metadata fields to be set during signup

  2. Security
    - Still restricts anonymous users to INSERT only
    - Validates email is present and not empty
    - Limits email length to prevent abuse
*/

DROP POLICY IF EXISTS "Anonymous users can sign up with email only" ON waitlist;

CREATE POLICY "Anonymous users can sign up for waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email <> '' 
    AND length(email) <= 254
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );
