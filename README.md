test deploy heroku with mlab

notes:

MONGODB:

MONGOOSE:

DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead:
Workaround is to "npm remove mongoose" then "npm install mongoose@4.10.8 --save", until they fix 4.11.x.


NODE:

EXPRESS:

HEROKU:

to check logs in heroku:

heroku logs
heroku logs --trail

helpful hint: To avoid the potential trouble of having to debug a lot of deployment issues, deploy early on while your app is very simple and root case of issues will be limited and easier to resolve. In my case I set up a very bare bones node app, got express server running, created and deployed the app to heroku, and then implemented the connection to mlab database. From this point problems deploying to heroku will be minimal and more transparent.

OTHER:

environment variable setting syntax:
export varName = varValue

environment variable delete:

unset varName

to check environment variables in terminal:

printenv
env

.bash_profile is a good solution to storing local environment variables for longer than a single terminal session.

MONGODB_URI seems to work over MONGOLAB_URI, at least in this example.
