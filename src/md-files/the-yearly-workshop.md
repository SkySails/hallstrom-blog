---
title: "The Yearly Workshop"
date: "September 20th, 2019 12:07pm"
authorName: "Navigraph Team"
authorImage: "https://navigraph.com/assets/images/navigraph_logo_only.svg"
---
#
Every year, sometime in fall, the Navigraph team huddles up in something we call the yearly workshop. This year we met a little earlier than previous years, because we wanted the meeting to serve also as a kickoff into our new projects. Now that version 7 of Navigraph Charts is released\* we are ready to take on new projects.

The workshop this year was preceded by many individual meetings trying to organize and prioritize our goals for the future. For the coming year, we have decided to focus on the following development.

\[\[MORE\]\]

**VFR Charts** 
In addition to the existing IFR and CAO charts our Charts product will get VFR charts. We will also render a special version of the enroute chart which is referred to as “sectionals” or Sectional Aeronautical Charts. To achieve this we need to gather a lot of geographical data and run this through a version of our rendering pipeline which currently produces the enroute chart tiles.

The VFR charts have been on our radar since the 2016 survey as you can see in this post from the [2017 annual workshop](https://blog.navigraph.com/post/166464426021/new-ideas).

**FMS Data Manager**  
Navdata (or Flight Management System Data as we originally called it) is a very important part of the flightsim community. We support more than 100 different formats and deliver it to your flightsim computers using the FMS Data Manager. Being such an important part we must make sure that it works perfectly. We are going to revisit the FMS Data Manager and make some necessary changes to ensure that we keep delivering the data with the same high standard our users have come to expect from Navigraph.  
  
**New Website**  
During the fall and winter we will also redesign our website to make it easier to use. We are going to introduce a few simplifications; move manual installers further down into the navigation structure to try to promote the use of the FMS Data Manager; and further decouple our servers so that we can make all parts of the system redundant which will improve our already very good up time.

**Developer Website**  
As a part of the new website we will also create a developer website where we will offer sample datasets; APIs and documentation so that programmers in our community can get started right away developing on ideas without having to wait in line to discuss the project with us. This should increase the throughput of great ideas and ultimately favor the entire community as we will see more (and hopefully even better) products being developed.  
  
**Weather in Charts** 
The Charts product will also get weather. At first METAR and TAF, but we hope to be able to include rasterized weather systems into the enroute chart too. Perhaps we will be able to make the route calculator aware of winds aloft too. The main challenge ahead is to determine what is the chicken and what is the egg: Do you want a real time data source for weather; historical weather; or do you want to read the weather from the simulator - which may be the case if you injected the weather from another source.   
  
**Change logs**  
You may have noticed that Charts requests to be restarted quite frequently now. It’s because we are releasing improvements to Charts in a much more rapid pace than before. However, it is not always clear to our users which parts that have been improved and why Charts is restarting. Therefore we will start working with change logs. To make sure we don’t miss anything, and to reduce the manual work going into keeping track of changes, we are going to automate the change logs. This means that our developers will have to take care when writing their final commit message in Git because this will eventually end up in the change log.  
  
**YouTube**  
While not development, strictly speaking, it still addresses some of the requests that our development team has received in the past - namely help files and documentation. Under the coming year we will product video tutorials on how to use our products. As the Chinese philosopher Confucius supposedly said: “I hear and I forget. I see and I remember. I do and I understand.” Videos where you can follow along ought to be a good method, we also think.

**Closing Notes**  
After having read this list revealing our development focus for the year you are hopefully feeling just as excited as we are. You may be missing things from the list and this is only natural because our resources are limited and we have to make some sort of prioritization. However, it may be worth mentioning that we have agreed to fill the development backlog only to 70% with these development goals. The remaining 30% should be spent on bug fixing and maintenance. Provided that we write good code there will hopefully be very few bugs and a low maintenance requirement - which may(…!) leave some room for additional development requests. We are in particular thinking of the annotation tool which we did promise but may not be able to deliver on as soon as some of you guys expected. Maybe, just maybe, we can include this along with VFR or Weather. We will report back with another post later on to give you guys an update on how things are progressing.  
  
All for now,  
  
The Navigraph Development Team

\*) Windows and Mac desktop is out, and so is Android and the web version. Missing is the iOS app which will be released any day now - before end of September at the latest. 