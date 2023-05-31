import { Accounts } from 'meteor/accounts-base';

Accounts.config({
    loginExpirationInDays: 90, // Defaults to 90
    passwordResetTokenExpirationInDays: 5, // Defaults to 5 Days
    passwordEnrollTokenExpirationInDays: 30, // Defaults to 30
});