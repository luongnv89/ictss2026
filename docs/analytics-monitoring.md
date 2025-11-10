# Analytics & Monitoring Setup

This document describes the analytics and error monitoring setup for the CloudCom 2026 website.

## Overview

The site uses:

- **Google Analytics 4 (GA4)** - For website analytics and user behavior tracking
- **Sentry** - For client-side error tracking and monitoring
- **Netlify Analytics** (optional) - For server-side analytics (GDPR-compliant)

All analytics and monitoring respect **GDPR cookie consent** and only load after user approval.

## Google Analytics 4 (GA4)

### Setup

1. **Create GA4 Property**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property for cloudcom2026.org
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Configure Environment Variables**:

   ```bash
   # In .env.production or Netlify environment variables
   VITE_GA_ID=G-XXXXXXXXXX
   ```

3. **Features**:
   - ✅ Only loads after analytics cookie consent
   - ✅ Anonymizes IP addresses (GDPR compliant)
   - ✅ Secure cookies (SameSite=Strict)
   - ✅ Automatic page view tracking on route changes
   - ✅ Custom event tracking available

### Usage

The analytics utility (`src/utils/analytics.ts`) provides these functions:

```typescript
// Automatically set up on app initialization
setupAnalytics()

// Track custom events
trackEvent('Category', 'Action', 'Label', value)

// Track form submissions
trackFormSubmission('registration')

// Track external links
trackExternalLink('https://ieee.org')

// Track file downloads
trackDownload('program.pdf')
```

### Testing

1. **Development**: GA4 won't initialize in development mode by default
2. **Production**: Check browser console for "Google Analytics 4 initialized" message
3. **Real-time reports**: Visit GA4 real-time dashboard to see live traffic

## Sentry Error Monitoring

### Setup

1. **Create Sentry Project**:
   - Go to [Sentry.io](https://sentry.io/)
   - Create new project (select React)
   - Get your DSN (Data Source Name)

2. **Configure Environment Variables**:

   ```bash
   # In .env.production or Netlify environment variables
   VITE_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
   ```

3. **Features**:
   - ✅ Only loads after analytics cookie consent
   - ✅ Captures unhandled errors automatically
   - ✅ Session replay (with privacy: masks text, blocks media)
   - ✅ Performance monitoring (10% sample rate in production)
   - ✅ Filters sensitive data (passwords, tokens, cookies)
   - ✅ Error boundary with user-friendly fallback UI

### Usage

The monitoring utility (`src/utils/monitoring.ts`) provides these functions:

```typescript
// Automatically set up on app initialization
setupMonitoring()

// Manually capture exceptions
captureException(error, { context: 'additional data' })

// Capture messages
captureMessage('Something happened', 'warning')

// Set user context
setUser({ id: '123', email: 'user@example.com' })

// Add breadcrumbs for debugging
addBreadcrumb('User clicked submit button', 'user-action', 'info')
```

### Error Boundary

The app is wrapped with Sentry's ErrorBoundary that:

- Catches React render errors
- Shows user-friendly error message
- Reports error to Sentry automatically
- Allows user to retry (resets error boundary)

### Privacy & GDPR

Sentry configuration includes:

- **Masked text** in session replays
- **Blocked media** in session replays
- **Filtered sensitive data** (tokens, passwords, cookies removed)
- **Ignored errors** (browser extensions, benign errors)

## Netlify Analytics (Optional)

Netlify Analytics is server-side, so it's **automatically GDPR-compliant** (no cookies).

### Setup

1. **Enable in Netlify Dashboard**:
   - Go to Site Settings > Analytics
   - Enable Netlify Analytics ($9/month)

2. **Benefits**:
   - Server-side tracking (no client JavaScript required)
   - No cookie consent needed (GDPR-compliant)
   - Not affected by ad blockers
   - Shows accurate traffic including bots

## Cookie Consent Integration

Both GA4 and Sentry respect the cookie consent banner:

1. **On first visit**: Cookie banner shows
2. **User accepts "Analytics"**: GA4 and Sentry initialize
3. **User declines**: Services never load
4. **User changes preferences**: Services initialize dynamically

The integration uses a custom event:

```typescript
window.addEventListener('cookieConsentUpdated', (event) => {
  const preferences = event.detail
  if (preferences.analytics) {
    // Initialize analytics and monitoring
  }
})
```

## Testing Cookie Consent

1. **Clear localStorage**: `localStorage.clear()` in browser console
2. **Reload page**: Cookie banner should appear
3. **Accept analytics**: Check console for initialization messages
4. **Verify tracking**: Check browser Network tab for GA4/Sentry requests

## Monitoring Dashboard

### Google Analytics 4

Access at: https://analytics.google.com/

**Key Reports**:

- **Real-time**: See current active users
- **Acquisition**: Traffic sources
- **Engagement**: Pages and screens
- **Events**: Custom event tracking

### Sentry

Access at: https://sentry.io/

**Key Features**:

- **Issues**: All captured errors with stack traces
- **Performance**: Transaction monitoring
- **Releases**: Track errors by deployment
- **Alerts**: Configure email/Slack notifications

## Deployment Checklist

Before deploying to production:

- [ ] GA4 property created and Measurement ID obtained
- [ ] Sentry project created and DSN obtained
- [ ] Environment variables set in Netlify:
  - `VITE_GA_ID`
  - `VITE_SENTRY_DSN`
- [ ] Cookie consent banner tested
- [ ] Analytics initialization verified
- [ ] Sentry error capturing tested
- [ ] Error boundary UI tested

## Troubleshooting

### GA4 not tracking

1. Check `VITE_GA_ID` is set correctly
2. Verify analytics cookies are accepted
3. Check browser console for initialization message
4. Ensure ad blocker is disabled (for testing)
5. Check GA4 real-time reports (5-10 min delay)

### Sentry not capturing errors

1. Check `VITE_SENTRY_DSN` is set correctly
2. Verify analytics cookies are accepted
3. Check browser console for initialization message
4. Ensure environment is not 'development' (Sentry disabled in dev)
5. Test with a deliberate error (throw new Error('test'))

### Cookie consent not working

1. Clear localStorage and reload
2. Check browser console for errors
3. Verify CookieConsent component is rendered
4. Test with different browsers

## Performance Impact

- **GA4**: ~45 KB (loaded only after consent)
- **Sentry**: ~60 KB (loaded only after consent)
- **Total**: ~105 KB deferred load after user consent
- **Lighthouse impact**: Minimal (scripts load after page interactive)

## Privacy Compliance

This setup complies with:

- ✅ **GDPR** (EU General Data Protection Regulation)
- ✅ **CCPA** (California Consumer Privacy Act)
- ✅ **ePrivacy Directive** (EU Cookie Law)

**Key compliance features**:

- Opt-in cookie consent required
- IP anonymization enabled
- Sensitive data filtering
- User right to decline tracking
- Clear privacy policy disclosures

## Resources

- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [react-ga4 Library](https://github.com/codler/react-ga4)
- [Sentry React Documentation](https://docs.sentry.io/platforms/javascript/guides/react/)
- [Netlify Analytics](https://docs.netlify.com/monitor-sites/analytics/)
- [GDPR Compliance Guide](https://gdpr.eu/)

## Support

For questions or issues:

- Open a GitHub issue
- Contact: info@cloudcom2026.org
