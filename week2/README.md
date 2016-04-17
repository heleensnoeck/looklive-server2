# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).


# service Worker Implemented
Results without Service Worker:
![alt tag](https://github.com/heleensnoeck/looklive-server2/blob/serviceWorker/heleen/week2/public/screenshots/zonder_ww.png)

Results with Service Worker first time:
![alt tag](https://github.com/heleensnoeck/looklive-server2/blob/serviceWorker/heleen/week2/public/screenshots/me_ww_1x.png)

Results with Service Worker second time:
![alt tag](https://github.com/heleensnoeck/looklive-server2/blob/serviceWorker/heleen/week2/public/screenshots/met_ww_2x%20.png)

Conclusie
Maakt in dit geval geen verschil alleen voor offline gebruik erg handig blijft met en zonder web worker op 3.8 seconde hangen. 

# Progressive web app
Om de vraag te beantwoorden wat is een progressive web app moet je eerst weten wat een native app is.

Een native app is voor een bepaald besturingssysteem ontwikkeld en daardoor enkel buitkbaar op toestellen met dat besturingssyteem. Denk aan: IOS(Apple) Android(Google) enz.

Het nadeel van een native app is dat het ontwikkelen ervan erg duus is (stel dat je een app wil hebben die op alle platformen draait).

#####Maar wat is dan een web app?
Als we het over een web app hebben hebben we het over apps die ontwikkeld zijn voor browsers (chrome, firefox, safari enz). Je hebt hier dus alleen een internet verbinding nodig om de app te gebruiken. 

Maar dat is toch hetzelfde als een website?
 
Dit is ook eigenlijk zo er zijn echter een aantal grote verschillen.

Een webapp: 
Offline te gebruiken (mits service worker is geinstalleerd)
Beveiligd (omdat hij alleen via https werkt)
Kunnen push notificaties geven 

#####Wat heb je nodig voor een Progressive Web App
Server Worker
Beveiligde https-verbinding
Geldige SSL-certificaat

##### Bronnen
* https://developers.google.com/web/progressive-web-apps?hl=en
* http://istoireservices.be/wat-is-het-verschil-tussen-een-native-app-en-een-web-app/
* http://www.emerce.nl/achtergrond/progressive-web-apps-de-toekomst-van-mobiele-apps

# Digital ocean (works only when i set in on)
http://server.spotitshopit.com:3000/