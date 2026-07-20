-- Delete unconfirmed users so they can sign up fresh with email confirmation disabled
DELETE FROM auth.users WHERE email_confirmed_at IS NULL;