#!/bin/bash
set -e

cd build

find . -type f -exec curl --ftp-create-dirs -T {} -u $FTP_USER:$FTP_PASSWORD ftp://$FTP_URL/{} \;
