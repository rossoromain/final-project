#!/bin/bash

export CRON_ACTIV="false"
export NODE_ENV="development"
export MONGO_URL="mongodb+srv://epitechprojetfinal:HCMtCiahKJo001J2@epitech-final-project.lwwxwn6.mongodb.net/test?retryWrites=true&w=majority"
export TEST="true"

meteor run --exclude-archs web.browser.legacy