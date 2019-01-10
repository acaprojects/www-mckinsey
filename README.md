# https://bitbucket.org/aca/www-template
Is a base www directory which can be forked for each new deployment/client. Generally placed in /home/aca-apps/www on prod and uat web servers and contains minified final production builds of:
- backoffice/
- meeting/
- bookings/
- staff/
- catering/
and any other client-branded/custom frontends for this particular client

When pushing, please ensure that any environment related settings (e.g. staff/assets/settings.json) match the actual production setting that is required. UAT settings can go into a `uat` branch

# Usage
* Treat `master` branch as the one to deploy to the UAT (or POC) server(s), including having any settings.json values up match the UAT environment requirements.
* Treat `prod` branch as the one to deploy to the PROD server(s), including having any settings.json values up match the PROD environment requirements.


### Updating forks from this repo ###
In your fork:
```
git remote add www-template https://bitbucket.org/aca/www-template
git remote set-url --push www-template no-pushing-allowed  #Just to ensure you don't push your private fork to www-template
git pull -X theirs www-template master
git push origin master
```

## Auto login

Auto login page requires that the username and password be set as query parameters  
  
For example:  
`
https://yourdomain.com/auto_login.html?username=blah&password=1234&continue=/your-ui
`  