#! /usr/bin/bash

cd /var/www/app/
git pull origin serverfile --ff-only

npm i
