---
title: "November"
date: "December 7th, 2017 2:00pm"
authorName: "Navigraph Team"
authorImage: "https://navigraph.com/assets/images/navigraph_logo_only.svg"
---

November has been a busy month for Navigraph. It included a [workshop ](http://blog.navigraph.com/post/166464426021/new-ideas)and a customer [survey](http://blog.navigraph.com/post/167492052421/survey-results-prepar3d-x-plane-up-fsx-down) with the subsequent post processing of ideas and data. We are set with great development ideas for several months to come. Planning for the longer perspective takes resources, and as such it is an investment in a way, but we were of course also able to complete some of our planned development for this month as well. However, another topic that has consumed a lot of our efforts this month is the investigation and remedy of the November 1st incident when our login servers started to perform inconsistently. The primary reason is growth - compared to two years ago we are now serving 50% more users.  

![](/media/168288102716_0.png)

\[\[MORE\]\]

**Login Server Issues Resolved** 
Since over a year back, we have started a process of eliminating all single points of failure and decentralizing the server architecture to Amazon Web Services. This means that there are now several servers that need to talk to each other in order to serve the software and websites we maintain. On November 1st the server responsible for maintaining the user accounts could not deliver responses fast enough to the server responsible for the login procedure which resulted in timeout errors. The user account server was so busy that they sometimes stopped responding, which resulted in more people trying to log in, which resulted in a behavior where some users could sometimes log in and sometimes other users would get an error or no response at all. However, as soon as a user had passed this bottleneck and was logged in, all other servers were behaving normally. In short, we were facing the same problem typical to big sports arenas - a narrow entrance, but once your are in there is plenty of space.

We solved this issue by removing old logins from a table that had grown too large to be queried quickly enough. We also revised some database indexes which now permits us to search the tables faster (with the expense that creating an account might take a fraction of a second longer). Lastly, we also implemented so called “health checks” so that our load balancers, i.e. the security guards in the entrance of the sports arena, can direct visitors/users to entrances which we know are up and running and have capacity.

Since these changes were put in place, the login procedure has been working without any problems.

**Coordinate GPS Waypoints**  
We are also continuously working on improving the Flight interface in Charts. By entering a route string you can currently visualize the route on the enroute chart. Up until recently, you could only let the route pass over known waypoints. However, now we are offering the option of using arbitrary geographical waypoints. 

Here is an example of a route string which uses this new type of waypoints:

> CYVR VR G1 YAZ TR15 DOLFF DCT _41N140W 32N150W_ DCT APACK DCT _20N160W 14N165W 08N170W 00N176W_ DCT BOILS B580 TAVER B580 TABAL DCT MARLN YSSY  

The waypoint can be entered both 32N150W and N32W150\. (Since there has been no user request, we have not included support for decimals.) The keen eye may notice that the waypoint ident reads “32N50″ and this is by convention to keep waypoint idents length to five characters. 32N050W would be “3250N”, so it’s the position of the N which lets us know if its 150 or 50 west. In this case, we want the first alternative which locates us north of Hawaii in the Pacific, and not the latter which would put this waypoint between Sydney and Vancouver in the Atlantic.

  
![](/media/168288102716_1.png)

**Little Navmap**  
During November, we have also collaborated with Alexander Barthel to provide a database format to his Little Navmap software. We believe this will make it easier to develop future functions in Little Navmap as it will no longer depend on the more intricate BGL file format. You can see a little example of selecting data sources in this video on the Navigraph [Instagram](https://www.instagram.com/p/BcKUgkFBtP-) account.

**SID/STAR Visualization**  
During November we have also been able to parse and decode all leg types for SIDs and STARs and have started to visualize them. There is a little proof of concept on [Instagram](https://www.instagram.com/p/BcHrVwFhWji). This will eventually (January or February?) be included into Charts for pilots to easily see which procedures that are available for a particular airport. This will also open up the possibility of validating route strings which contain SID and STAR waypoints.