# Quick Start Guide - CI/CD Setup

## 🚀 Your CI/CD Pipeline is Ready!

I've set up automated deployment to Hostinger. Follow these simple steps:

## Step 1: Choose Your Deployment Method

**Option A: FTP Deployment (Easiest - Recommended)**
- Works with all Hostinger shared hosting plans
- No SSH access needed

**Option B: SSH Deployment**
- For VPS or plans with SSH access
- More secure and faster

## Step 2: Set Up GitHub Secrets

### For FTP Deployment:

1. Go to: https://github.com/nandkishor15c2/tdcm_website/settings/secrets/actions
2. Click "New repository secret"
3. Add these 3 secrets:

```
Name: FTP_SERVER
Value: Your FTP hostname from Hostinger (e.g., ftp.yourdomain.com)

Name: FTP_USERNAME
Value: Your FTP username

Name: FTP_PASSWORD
Value: Your FTP password
```

### For SSH Deployment:

1. Generate SSH key on your computer:
```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/hostinger
```

2. Add public key to Hostinger SSH authorized_keys

3. Add these secrets to GitHub:
```
SSH_PRIVATE_KEY: Contents of ~/.ssh/hostinger file
SSH_HOST: Your Hostinger SSH hostname
SSH_USERNAME: Your SSH username
SSH_PORT: 22 (usually)
REMOTE_TARGET: /home/username/public_html
```

## Step 3: Disable the Unused Workflow

**If using FTP**, run:
```bash
git mv .github/workflows/deploy-ssh.yml .github/workflows/deploy-ssh.yml.disabled
git commit -m "Disable SSH deployment"
git push
```

**If using SSH**, run:
```bash
git mv .github/workflows/deploy.yml .github/workflows/deploy.yml.disabled
git commit -m "Disable FTP deployment"
git push
```

## Step 4: Test the Deployment

Push any change to `main` branch:
```bash
git add .
git commit -m "Test deployment"
git push origin main
```

Or manually trigger from GitHub:
1. Go to Actions tab
2. Select the active workflow
3. Click "Run workflow"

## Step 5: Monitor Deployment

- Go to Actions tab: https://github.com/nandkishor15c2/tdcm_website/actions
- Watch the deployment progress
- ✅ Green = Success!
- ❌ Red = Check logs for errors

## 📁 What Was Created

```
.github/
  workflows/
    deploy.yml          # FTP deployment workflow
    deploy-ssh.yml      # SSH deployment workflow

tdcm-frontend/
  public/
    .htaccess          # Apache configuration for SPA routing

DEPLOYMENT.md          # Detailed documentation
QUICK_START.md        # This file
```

## 🔧 Configuration

### Change Deployment Path

Edit the workflow file and change:
- **FTP**: `server-dir: /public_html/`
- **SSH**: Update `REMOTE_TARGET` secret

### Adjust Build Settings

If your build output is different, update:
- `working-directory` in the workflow
- `local-dir` or `SOURCE` path

## 📚 Need More Help?

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions and troubleshooting.

## 🎉 That's It!

Every push to `main` will now automatically:
1. Install dependencies
2. Build your Vite app
3. Deploy to Hostinger
4. Your site is live!

---

**Questions?** Check DEPLOYMENT.md or GitHub Actions logs.
