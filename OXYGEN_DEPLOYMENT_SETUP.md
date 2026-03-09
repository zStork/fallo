# Shopify Oxygen Deployment Setup Guide

## Current Status
- ✅ GitHub repo: https://github.com/zStork/fallo.git
- ✅ Oxygen workflow file exists: `.github/workflows/oxygen-deployment-1000013955.yml`
- ❌ Missing: `OXYGEN_DEPLOYMENT_TOKEN_1000013955` secret in GitHub

## Steps to Enable Oxygen Deployments

### 1. Link Your Shopify Store to Oxygen

1. Go to your Shopify Admin
2. Navigate to **Settings** → **Apps and sales channels**
3. Click **Develop apps** (or go to your Partner Dashboard)
4. Find or create your Hydrogen app
5. Go to the **Oxygen** section

### 2. Get Your Oxygen Deployment Token

**Option A: Via Shopify CLI (Easiest)**
```bash
cd /Users/zacstork/Fallo/fallo
npx shopify hydrogen link
```
This will:
- Link your local project to your Shopify store
- Generate the deployment token
- Create a GitHub secret automatically (if you authorize it)

**Option B: Manual Setup**
1. Run: `npx shopify hydrogen env pull`
2. This creates a `.env` file with your Oxygen credentials
3. Look for the deployment token in the output

### 3. Add GitHub Secret

1. Go to: https://github.com/zStork/fallo/settings/secrets/actions
2. Click **New repository secret**
3. Name: `OXYGEN_DEPLOYMENT_TOKEN_1000013955`
4. Value: Your deployment token from step 2
5. Click **Add secret**

### 4. Test Deployment

Once the secret is added:

```bash
git add .
git commit -m "Fix homepage route and enable Oxygen deployment"
git push origin main
```

The GitHub Action will automatically:
- Install dependencies
- Build your Hydrogen app
- Deploy to Shopify Oxygen
- Run end-to-end tests

### 5. Access Your Deployed Site

After successful deployment, your site will be available at:
- **Oxygen URL**: `https://your-storefront-id.oxygen.shopifypreview.com`
- You can find the exact URL in the GitHub Actions logs

## Current Homepage Fix

I've updated the route structure so your Fallo homepage displays correctly:
- ✅ Replaced `($locale)._index.tsx` with your custom Fallo homepage
- ✅ All 6 sections now load properly
- ✅ Shopify credentials connected

## Troubleshooting

### If deployments still fail:

1. **Check GitHub Actions logs**:
   - Go to: https://github.com/zStork/fallo/actions
   - Click on the latest workflow run
   - Check the error messages

2. **Verify Shopify connection**:
   ```bash
   npx shopify hydrogen check
   ```

3. **Manual deployment test**:
   ```bash
   npx shopify hydrogen deploy
   ```

4. **Check Oxygen storefront ID**:
   - The workflow uses storefront ID: `1000013955`
   - Verify this matches your actual Oxygen storefront

## Next Steps After Deployment Works

1. **Set up custom domain** (optional)
2. **Configure environment variables** in Oxygen dashboard
3. **Enable production mode** when ready
4. **Set up monitoring** and analytics

## Local Development

Your local dev server is running at: http://localhost:3000

The homepage now shows all 6 Fallo sections with proper styling.
