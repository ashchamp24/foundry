import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68d8f0dcf4c0dff2cdf1d240", 
  requiresAuth: true // Ensure authentication is required for all operations
});
