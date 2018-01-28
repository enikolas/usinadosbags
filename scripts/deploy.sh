#!/bin/bash
set -e

cd build

echo $CI

export PUBLIC_URL=http://www.usinadosbags.com.br/

find . -type f -exec curl --ftp-create-dirs -T {} -u $FTP_USER:$FTP_PASSWORD ftp://$FTP_URL/{} \;

cd -