test deploy heroku with mlab

notes:

environment variable setting syntax:
export varName = varValue

environment variable delete:

unset varName

to check environment variables in terminal:

printenv
env

.bash_profile is a good solution to storing local environment variables for longer than a single terminal session.

MONGODB_URI seems to work over MONGOLAB_URI, at least in this example.
