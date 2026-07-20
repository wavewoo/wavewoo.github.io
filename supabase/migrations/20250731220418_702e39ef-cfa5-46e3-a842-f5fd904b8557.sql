-- Delete all test users so we can start fresh
DELETE FROM auth.users WHERE email LIKE '%@gmail.com';