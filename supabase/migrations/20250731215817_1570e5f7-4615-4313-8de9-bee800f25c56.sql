-- Delete unconfirmed users and also update auth settings
DELETE FROM auth.users WHERE email_confirmed_at IS NULL;

-- Also check if there are any auth configuration issues
UPDATE auth.users SET email_confirmed_at = NOW() WHERE email_confirmed_at IS NULL;