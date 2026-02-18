# NeedeeSync HRMS Mobile App

A starter Expo React Native mobile app for **Employee Self Service (ESS)** aligned to your existing web HRMS at [www.needeesync.com](https://www.needeesync.com).

## Included ESS modules

- Login (company code + work email + password)
- Home dashboard (attendance, leave balance, pending approvals, payslip status)
- Attendance history
- Leave management
- Payslip list
- Employee profile

## API integration baseline

`src/api/client.ts` includes a typed API helper configured to:

- Base URL: `https://www.needeesync.com/api`
- Bearer token support
- JSON request/response handling

You can now wire each screen to your existing backend endpoints from NeedeeSync web software.

## Run locally

```bash
npm install
npm run start
```

Then use Expo Go on Android/iOS or run a simulator.

## Suggested next steps

1. Connect login to your real authentication endpoint.
2. Store auth token securely (e.g., expo-secure-store).
3. Replace mocked attendance/leave/payslip data with live API data.
4. Add push notifications for approvals, leave status, and payroll.
5. Add role-based access (employee vs manager self-service).
