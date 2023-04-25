# Pokemon Battle
The Pokemon Battle app pits two random pokemon against each other then asks Chat GPT who they think the answer would be! Chat GPT then gives an educated guess based on a number of factors.

**Link to project:** http://pokemon.joecioffi.dev/

<a href="https://ibb.co/Qppk5Ck"><img src="https://i.ibb.co/Qppk5Ck/Screen-Shot-2023-04-25-at-3-33-25-PM.png" alt="Screen-Shot-2023-04-25-at-3-33-25-PM" border="0"></a>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

This project is an example of having APIs talk to each other. We have pokeapi.co, which pulls two random pokemon from their data and "pits" them against each other. It also pulls their name, stats, and the sprite of the pokemon to display. Once that information is pulled, the app asks the Chat GPT AI who it thinks would win if they were to go against each other in battle, then returns the result in the DOM.

## Optimizations

Some advancements to make for this app is to train the Chat GPT AI better so that the results are more accurate than they already are. The results usually tend to take too many things into account when deciding a victor, when the answer could be more difinitive if certain aspects like pokemon level and movesets were assumed. 

The AI also sometimes gets typing matchups wrong, so making sure it knows it's typing matchups would help significantly.

## Lessons Learned:

The biggest lessons learned were how to deal with APIs communicating with each other on the backend. Also the knowledge needed to get the apis to talk to each other via the cloudless server. 

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Sports Bar Website:** https://the-victory-lap.netlify.app/

**Hair Salon Website:** https://the-hair-salon-jc.netlify.app/
