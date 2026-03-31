# CI/CD Deployment to Hostinger

This project includes automated CI/CD pipelines to deploy your TDCM website to Hostinger.

## Available Deployment Methods

We provide two deployment workflows:

1. **FTP Deployment** (`deploy.yml`) - Recommended for shared hosting
2. **SSH Deployment** (`deploy-ssh.yml`) - For VPS or hosting with SSH access

Choose ONE method based on your Hostinger hosting plan.

---

## Method 1: FTP Deployment (Recommended)

### Step 1: Get FTP Credentials from Hostinger

1. Log in to your Hostinger control panel (hPanel)
2. Go to **Files** → **FTP Accounts**
3. Note down:
   - FTP hostname (e.g., `ftp.yourdomain.com`)
   - FTP username
   - FTP password (or create a new FTP account)

### Step 2: Configure GitHub Secrets

Go to your GitHub repository: `https://github.com/nandkishor15c2/tdcm_website`

1. Navigate to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add these secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `FTP_SERVER` | Your Hostinger FTP hostname | `ftp.yourdomain.com` |
| `FTP_USERNAME` | Your FTP username | `username@yourdomain.com` |
| `FTP_PASSWORD` | Your FTP password | `your-secure-password` |

### Step 3: Disable SSH Workflow

To avoid conflicts, disable the SSH deployment workflow:

```bash
# Rename the SSH workflow to disable it
mv .github/workflows/deploy-ssh.yml .github/workflows/deploy-ssh.yml.disabled
```

---

## Method 2: SSH Deployment (For VPS/SSH Access)

### Step 1: Generate SSH Key Pair

On your local machine, generate an SSH key:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/hostinger_deploy
```

This creates two files:
- `hostinger_deploy` (private key) - Keep this SECRET
- `hostinger_deploy.pub` (public key)

### Step 2: Add Public Key to Hostinger

1. Log in to your Hostinger control panel
2. Go to **Advanced** → **SSH Access**
3. Enable SSH access if not already enabled
4. Add the contents of `hostinger_deploy.pub` to authorized keys:

```bash
# Copy the public key
cat ~/.ssh/hostinger_deploy.pub

# SSH into your Hostinger server and add it
echo "your-public-key-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Step 3: Configure GitHub Secrets

Add these secrets in your GitHub repository:

| Secret Name | Description | How to Get |
|------------|-------------|------------|
| `SSH_PRIVATE_KEY` | Your private SSH key | Contents of `hostinger_deploy` file |
| `SSH_HOST` | Hostinger SSH hostname | From Hostinger SSH Access page |
| `SSH_USERNAME` | SSH username | Usually your hosting username |
| `SSH_PORT` | SSH port (usually 22) | From Hostinger SSH Access page |
| `REMOTE_TARGET` | Target directory path | `/home/username/public_html` |

### Step 4: Disable FTP Workflow

```bash
# Rename the FTP workflow to disable it
mv .github/workflows/deploy.yml .github/workflows/deploy.yml.disabled
```

---

## Deployment Configuration

### Adjusting the Deploy Path

Both workflows deploy to `/public_html/` by default. If your Hostinger setup is different:

**For FTP:**
Edit [.github/workflows/deploy.yml](.github/workflows/deploy.yml):
```yaml
server-dir: /public_html/  # Change this to your path
```

**For SSH:**
Edit [.github/workflows/deploy-ssh.yml](.github/workflows/deploy-ssh.yml) or set the `REMOTE_TARGET` secret.

### Build Configuration

The build process runs in `tdcm-frontend/` directory. If your structure is different:

1. Update the `working-directory` in the workflow
2. Update the `local-dir` or `SOURCE` path

---

## Testing the Deployment

### Option 1: Automatic Deploy on Push

Simply push to the `main` branch:

```bash
git add .
git commit -m "Test deployment"
git push origin main
```

The deployment will start automatically.

### Option 2: Manual Deploy

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select the workflow (Deploy to Hostinger or Deploy to Hostinger SSH)
4. Click **Run workflow** → **Run workflow**

---

## Monitoring Deployments

1. Go to **Actions** tab in your GitHub repository
2. Click on the latest workflow run
3. View logs to see build and deployment progress
4. Green checkmark ✅ = successful deployment
5. Red X ❌ = failed deployment (check logs for errors)

---

## Important Notes for Hostinger

### For Node.js Applications

If you're running a Node.js backend (not just static files):

1. Your Hostinger plan must support Node.js applications
2. After deployment, you may need to:
   - Set up Node.js version in hPanel
   - Configure the application entry point
   - Install dependencies on the server
   - Set environment variables

### Static Site Deployment

For Vite builds (current setup), the workflow builds and deploys static files from `dist/` folder. This works perfectly for:
- Hostinger shared hosting
- Hostinger cloud hosting
- Any plan with file hosting

---

## Troubleshooting

### FTP Deployment Issues

**Error: "Connection refused"**
- Check FTP_SERVER hostname is correct
- Verify FTP is enabled in Hostinger

**Error: "Login authentication failed"**
- Verify FTP_USERNAME and FTP_PASSWORD
- Check if IP restrictions are set in Hostinger

**Error: "Permission denied"**
- Check the target directory exists
- Verify FTP account has write permissions

### SSH Deployment Issues

**Error: "Permission denied (publickey)"**
- Verify SSH_PRIVATE_KEY is the full private key (including BEGIN/END lines)
- Check public key is added to `~/.ssh/authorized_keys` on server
- Verify SSH is enabled in Hostinger

**Error: "Host key verification failed"**
- The workflow disables strict host key checking by default
- If needed, add the host to known_hosts

---

## Security Best Practices

1. ✅ Never commit credentials to your repository
2. ✅ Use GitHub Secrets for all sensitive data
3. ✅ Use FTP over TLS if available
4. ✅ Regularly rotate passwords and SSH keys
5. ✅ Limit FTP/SSH access to specific IPs if possible
6. ✅ Use read-only credentials where possible

---

## Next Steps

1. Choose your deployment method (FTP or SSH)
2. Configure GitHub Secrets
3. Disable the unused workflow
4. Push to `main` branch to trigger first deployment
5. Visit your Hostinger domain to verify deployment

---

## Support

For Hostinger-specific issues:
- Hostinger Knowledge Base: https://support.hostinger.com
- Contact Hostinger Support

For GitHub Actions issues:
- Check the Actions logs in your repository
- Review the workflow file syntax
- Verify all secrets are set correctly

---

## Workflow Files

- FTP Deployment: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- SSH Deployment: [.github/workflows/deploy-ssh.yml](.github/workflows/deploy-ssh.yml)
