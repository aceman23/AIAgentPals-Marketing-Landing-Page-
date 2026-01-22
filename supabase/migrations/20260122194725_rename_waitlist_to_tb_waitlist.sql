/*
  # Rename waitlist table to tb_waitlist

  1. Changes
    - Rename waitlist table to tb_waitlist to match naming convention
    - All indexes, constraints, and policies are automatically renamed

  2. Security
    - Maintains all existing RLS policies
    - Preserves data integrity
*/

ALTER TABLE IF EXISTS waitlist RENAME TO tb_waitlist;
