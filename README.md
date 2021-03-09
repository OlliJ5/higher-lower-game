# HIGHER OR LOWER GAME

Higher or lower game NBA edition.
The game can be found [here](https://higher-lower-nba.herokuapp.com/) 


Heavily inspired by this [game](http://www.higherlowergame.com/).

## Running the app locally

clone the repository

For the server:


For the client:


## TODO

* [x] INITIALIZE PROJECT
* [x] PLAYING PAGE WITH RANDOM DATA (MOBILE)
* [x] GAME OVER PAGE (MOBILE)
* [x] PLUG IN NBA DATA
* [x] RESPONSIVE


## Problems

NBA API is very restrictive and undocumented. You are not able to make many 
calls before being timed out. My app doesn't make many call in a row so it 
works fine locally. Trying to host the app on Heroku however did not work 
since the API has blacklisted many hosting sites :(

Now my server scrapes the needed information instead of calling the API. Ugly 
but works. 

## Deploy

do this in server directory
```
pip freeze > requirements.txt
```

do this in client directory
```
npm run build
```

do this in client directory
```
mv build ../server
```

do this at the top level directory
```
git subtree push --prefix server heroku master
```
