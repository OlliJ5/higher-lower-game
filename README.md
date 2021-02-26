# HIGHER OR LOWER GAME

Higher or lower game NBA edition. Inspired by the google higher lower game

## TODO

* [x] INITIALIZE PROJECT
* [] START PAGE (MOBILE)
* [x] PLAYING PAGE WITH RANDOM DATA (MOBILE)
* [] GAME OVER PAGE (MOBILE)
* [x] PLUG IN NBA DATA
* [] RESPONSIVE


## Problems

NBA API is very restrictive and undocumented. You are not able to make many 
calls before being timed out. My app doesn't make many call in a row so it 
works fine locally. Trying to host the app on Heroku did not work 
since the API has blacklisted many hosting sites :( 

## Deploy

```
pip freeze > requirements.txt
```

```
npm run build
```

```
git subtree push --prefix server heroku master
```
