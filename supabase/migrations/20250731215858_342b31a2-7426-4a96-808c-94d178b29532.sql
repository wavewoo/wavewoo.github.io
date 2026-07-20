-- Force confirm all users and clean up any existing unconfirmed accounts
UPDATE auth.users 
SET email_confirmed_at = NOW(), 
    confirmed_at = NOW()
WHERE email_confirmed_at IS NULL OR confirmed_at IS NULL;