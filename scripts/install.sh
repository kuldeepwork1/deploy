#!/bin/bash
set -e
echo "Installing Nginx..."
apt-get update -y
apt-get install -y nginx
systemctl enable nginx
systemctl start nginx
echo "Nginx installed."
