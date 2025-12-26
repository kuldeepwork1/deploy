#!/bin/bash
set -e

echo "===== AfterInstall: Installing Nginx ====="

sudo apt-get update -y
sudo apt-get install -y nginx

sudo systemctl enable nginx
sudo systemctl start nginx

echo "===== Nginx installed & started ====="
