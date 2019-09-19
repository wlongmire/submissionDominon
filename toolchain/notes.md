So what are somethings we need to do/relearn here.
1) We have a clear setup for redux for our data here. Be good to get that up and running and connect it immediately to local storage.
2) There is styling obviously. Be great to get sass up and running at some point.
3) BIG priority is getting the router working. That is probably the top thing I can do. Once the router is up and running we can map out the entire flow of the site.

Having a working router is definately the first thing I need to do here. Let's get it in...

_______________________________
8/25/2019

So...here is a wrinkle!

We should run things through a router first if we have multiple items one route. 

_______________________________

OK. All the links are in places for this thing. We have representative pages for every stage of the wireframe.

Now what we need is to get indivisual elements in the rest of the pages.
1) Getting the search pages for all currently created items would be cool.
2) I'm on the edge of wanting to have data served to this thing through localStorage.
3) Edit makes sense as a next step there.
4) Then adding new...
5) Finally getting Stats and the general submission search pages working.

The other issues is whether I just want to rough in the html on all the pages first and then get into making it work or do it one page at a time....

I kind of like the idea of getting edit working.

_______________________________

Alright. So we have redux implemented.
Now we should hook up the remaining features needed to interact with the data.
I could also add in the remaining basic html for any other pages and then load in anything that shows or filters that data.
That would be a good use of time...that would also open the door to more fine tuning of the home page and even graphing there...
Let's do that..
_______________________________
So I didn't do any of that.
Strike that. I did put in a form for create.
In doing that, though, i realized that I would be better off with a seperate view route and a resourced based (remember that?) overall routing system. There is only on resource here, but it still makes since as poems and organizations could in the future be another. I wonder if there are any preset resource based routing packages for react. Really do need to take a look at gasby.

Anyway, I now have what I think is a better, more clean routing system.

I'm good on code for now, but I think the next step for me should be to create an overall component for listing submissions and store that within the common folder.

Now to find a poem or two to read.
_______________________________

So that was done, which is great, but the entire flow of the app is different now. I think I should go into xd and make this this look good. Be great to dig into the flow a bit more and make sure it matches our current routing.

OR I could hook up creation...

Let's do creation real quick...
_______________________________

Alright, so I have a plan for the redesign.
I've started to move that into the main design and it looks good.

Parts of my core front interface needs submission filtering. Thinking I should add an action that allows for filtering of the submissions. Let's do that...

_______________________________

Ok so I need to check out those selectors next.
They are clearly not giving me the values I want.
Once that is done, I have a choice between if I want to add in tests now that I have a more complex site structure or to proceed with styling of the home page.

(you should do tests.... you know you should do tests. It will make you feel better about life)

________________________________
We are going to do tests.
________________________________
ALl the submission data related tests are done!
components will probably be next...it's worth it though
totally worth it.....
________________________________
So next we test 
1. reducers
2. snapshot tests on components
  - rendering correctly based on parameters
  - rendering correctly based on user interaction

I'm thinking that I should not go to deep into this right now, the user interact is pretty bare bones right now.

I kind of just want to have tests for all my components and then add to them as I work on indivisual components.
_______________________________
Ok. So let's do a little styling on this thing and prepare to show it off!
_______________________________
Ok. I think this round of styling is over.
The most pertinant thing I can do is make sure that these filters are actually working.
Then I want to get login through google working so I can link everything to google docs.

I need to rest my head though. I feel like shit.
