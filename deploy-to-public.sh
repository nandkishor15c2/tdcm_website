#!/bin/bash
# Deploy script to copy files to public_html via SSH

# SSH connection details
SSH_HOST="145.79.14.152"
SSH_PORT="65002"
SSH_USER="u364822476"

echo "Connecting to Hostinger and copying files to public_html..."

# Connect via SSH and copy files
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST << 'ENDSSH'
# Find where the git repository was cloned
cd ~
echo "Current directory contents:"
ls -la

# Look for the repository
if [ -d "tdcm_website" ]; then
    echo "Found repository in ~/tdcm_website"
    # Copy files to public_html
    cp -r ~/tdcm_website/*.html ~/public_html/
    cp -r ~/tdcm_website/assets ~/public_html/
    cp -r ~/tdcm_website/.htaccess ~/public_html/
    cp -r ~/tdcm_website/*.svg ~/public_html/
    cp -r ~/tdcm_website/*.jpg ~/public_html/
    echo "Files copied to public_html"
elif [ -d "repositories/tdcm_website" ]; then
    echo "Found repository in ~/repositories/tdcm_website"
    cp -r ~/repositories/tdcm_website/*.html ~/public_html/
    cp -r ~/repositories/tdcm_website/assets ~/public_html/
    cp -r ~/repositories/tdcm_website/.htaccess ~/public_html/
    cp -r ~/repositories/tdcm_website/*.svg ~/public_html/
    cp -r ~/repositories/tdcm_website/*.jpg ~/public_html/
    echo "Files copied to public_html"
else
    echo "Repository not found. Listing home directory:"
    ls -la ~/
fi

echo "Listing public_html contents:"
ls -la ~/public_html/
ENDSSH

echo "Deployment complete!"
