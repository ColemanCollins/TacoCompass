#Taco Compass

It's a taco compass. 

This is just a little weekend hack that uses the `navigator.geolocation` web API and the Yelp API to point you at the nearest tacos. Figured i'd plop this on github in case someone is interested in making a compass that points at their favorite late-nite foods and needed a starting place.

The index.html is one big file with the css and js inline because this was originally a codepen experiment (also why the JS is a little junky), but I needed to reliably serve as HTTPS from a consistent URL and get rid of the iframe that codepen puts your work into, [so it had to leave codepen and noe lives on heroku](https://tacocompass.herokuapp.com).

The only thing remotely nuanced about this implementation is because the Yelp API doesn't allow CORS requests, it makes the AJAX request to its own server, which then makes a pass-through request to Yelp.

Illustrations are copyright me, fonts and libraries are MIT-licensed from their respective license-holders.

Enjoy your tacos.