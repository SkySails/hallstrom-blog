---
title: Jeppesen Visit
date: September 27th, 2019 3:37pm

authorName: "Navigraph Team"
authorImage: "https://navigraph.com/assets/images/navigraph_logo_only.svg"
---
#
This week Magnus and Pontus flew to Frankfurt to meet with Jeppesen, a subsidiary of Boeing, to discuss data availability for the future VFR Charts product. While in Frankfurt, or Neu-Isenburg more precisely, Magnus and Pontus also visited the production line and the Digital Aviation & Analytics Lab.  

\[\[MORE\]\]

**Boeing Experience Center** 
Elrey Borge Jeppesen, an American aviation pioneer, whose parents were immigrants from Denmark, made significant contributions to the field of air navigation in that he developed manuals and charts that allowed pilots to fly much more safely. In 1934 he founded a company that bears his name. In 2000 the company was acquired by Boeing.

Jeppesen, based out of Denver, Colorado, has a local office in Neu-Isenburg just south of Frankfurt in Germany. Next to the office building a statue of Mr. Jeppesen features a plaque which reads “I didn’t develop the charts to get famous, I did it to stay alive”. This is where Magnus and Pontus from Navigraph went to visit to discuss data availability for the future VFR Charts product.

The camera was left outside, but we did get some shots from the Boeing Experience Center right next to the lobby. It features many artifacts from the history of air navigation. The center also features a flight simulator which is jokingly referred to as an “A737”.

**Production Line Tour** 
We were taken on a guided tour through the production line. First we were shown the station where large amounts of semi-structured data is entered into an Electronic Source Library such that all colleagues further down the line have easy access to the source data. Sometimes when the data is illegible Jeppesen has to connect back to the aviation authority in a certain country to ask for clarifications. Next we were taken to a workstation where a person flipped between the old AIP (Aeronautical Information Publication) chart and the new one. By flipping between versions changes appear as a subtle flicker. The data changes are entered into a database which serves as the digital source for the rest of the production line. At least two people do the same operation. This is called the “four eye principle”. It’s a way to prevent errors from being introduced in the data entry step. In fact, all changes are done in a blind double key fashion which means that two people have to key in the same value or else the entered data is not considered verified. If the two persons enter contradicting information the piece of data is sent back to the previous step in the process to ensure it is read correctly. We also visited a workstation where Jeppesen produces the AMDB (Airport Mapping Database) by scanning satellite photos and turning those pixels into vectorized geometries which can be manipulated by GIS (Geographical Information System) software. Last but not least we also met with Jeppesen coworkers who handled the obstacle database and terrain.

Throughout the tour we were struck by the large amount of data which was handled. The workstations we visited only dealt with data from Cell 12, a geographical subdivision of the world internal to Jeppesen, which corresponds to African countries and some countries in the Indian subcontinent. Other parts of the world are managed by other parts of the Neu-Isenburg office and other offices around the world.

Another lasting impression was the discipline and rigor in which the data was treated. The “four eye principle” with blind double keying certainly catches many possible human errors.

**Smart Airports in the Lab** 
We were also given a demo of something Jeppesen calls Smart Airports. In essence the charts are aware of the airframe you are piloting and adapts the contextual information accordingly. See this [video](https://www.youtube.com/watch?v=CuvTiKR3BT0) for more information. This concept is developed by the Digital Aviation & Analytics Lab where we were also invited for a visit. The lab was a very different environment compared to the production floor.

![image](https://64.media.tumblr.com/a491ee392cd6818cf64d5fa8e8a4fbad/1bd2ae98b374d258-60/s540x810/bfdf55773a7b4454acccb962958671b0445f83b6.jpg)

**Data for VFR Charts** 
We also discussed which data that would be suitable for our future VFR Charts product. In addition to VFR airport charts we are also looking for data to render Sectionals. For this we need VFR waypoints, but we also investigated the possibility for routes, holding patterns and obstacles and other items. We found at least two sources of data which may fit, but there are some tradeoffs between them which we need to consider, for instance, how to deal with very long waypoint names.