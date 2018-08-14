# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.create([
  {
    name: 'Cole Larsen',
    body: "We were in the process of moving into a house we recently purchased when disaster struck - sewer line backing 
    up into the downstairs bathroom. Our home warranty company sent out Cameron bright and early, and he got the 
    drain cleared in no time. Now we can finish moving and settling into our new home. Cameron is super friendly, 
    fast, and I couldn't be happier with the experience. I hope we don't meet again under these circumstances, but
    I feel better knowing it will go well if it has to be done."
  },
  {
    name: 'Lindsay Adams',
    body: "Cameron was helping us move into our new home when he noticed a small drip from a pipe in the basement.
    It turned out our sewage pipe coming from one upstairs toilet was clogged, so he came back with his equipment 
    and fixed the clog in less than 30 minutes. No mess left behind and a fully functional bathroom since. Highly 
    recommend My Guy!!"
  },
  {
    name: 'David Bigelow',
    body: "We’ve had a drain backing up in the basement for months. It started when the city installed new sewer lines 
    in the street and so we thought it was the new connection. The city has been out and said there is no problem.
    Long story short we were introduced to Cameron through a Connect Utah interview. He came out this morning and 
    explained to us what the real problem was and had it fixed within minutes. He also gave us pointers for the future. 
    Great job Cameron. Exactly the kind of service we like to give our customers and expect from other service providers. 
    You will always be our Guy and the Guy we recommend!"
  },
  {
    name: 'Logan George',
    body: "I called Cameron to clear out what I thought was a clogged drain. Cameron listened to my problem and it didn't quite make 
    sense to him. Instead of going right for the drain he checked everything else out first and found the problem was actually 
    electrical. I tried to pay Cameron for his time but he insisted it was no problem and that he has happy he could help. 
    Great guy and very trustworthy."
  },
  {
    name: 'Brandi Bigelow',
    body: "My drain in the basement started backing up every time I did laundry. We called Cameron. He was great! He even put little booties
    on the wheels of the cart. After, he made sure the washer would drain and cleaned up the area around the drain."
  },
  {
    name: 'Alex Bennet',
    body: "Cameron helped me get my toilet unclogged. He was very fast and friendly. Great company if you want a quick solution that is effective 
    and a good deal. Thanks My Guy drain solutions!"
  },
  {
    name: 'Tyler Nielson',
    body: "We live in a small apartment and needed our sink fixed. Cameron contacted me and got right over that day to fix our problem. He was
    super friendly and courteous! Got the job done quickly and efficiently. I would highly recommend him to anyone!"
  },
  {
    name: 'David Lassig',
    body: "I can't say enough good things about My guy Drain Solutions. Cameron is very professional, friendly and does exceptional work! Would highly 
    recommend!!"
  },
  {
    name: 'Hannah Waiment Maizler',
    body: "Awesome service. The ceiling in the apartment we live in started to leak and the management called him, but very fast professional service. 
    If I had a house I would definitely call him! And will recommend Cameron to anyone."
  },
  {
    name: 'Apryl Field',
    body: "Cameron was very friendly and very knowledgeable, he unclogged the bath drain with no problem and was super fast. I would recommend his serivce 
    to friends and family."
  },
  {
    name: 'Amber Nixon',
    body: "Cameron was prompt and affordable. We will only use him for our drain issues in the future. I highly recommend him!"
  },
  {
    name: 'Chauntell Yvonne Cunningham',
    body: "Will definitely use my guy drain solutions again very friendly fast and affordable would highly recommend if you 
    need help with your drains"
  },
  {
    name: 'Billy Spears',
    body: "Cameron is fast, efficient, friendly and affordable! He's definitely our guy!"
  },
  {
    name: 'Kristin Fitzgerald Pritchard',
    body: "Fast and efficient."
  },
])

Service.create([
  { 
    name: 'Kitchen Sink', 
    description: 'Are you experienceing water flowing from one side of your sink to the other, or have stinky food smells coming 
    from your sink?
    My Guy has a solution!' 
  },
  { 
    name: 'Bathroom Sink', 
    description:  'Does your sink fill u after you wash your hands, brush your teeth, or just not draining at all?
    My Guy has a solution!'
  },
  { 
    name: 'Bathtub', 
    description:  'Are you taking a shower that turns into an ankle-deep bath?  Does it take your bathtub sereal minutes to drain?
    My Guy has a solution!'
  },
  { 
    name: 'Toilet', 
    description:  'Do you have to flush more than once or jiggle the handle that certain way?  Is your plunger getting more 
    use than normal?
    My Guy has a solution!'
  },
  { 
    name: 'Washer Line', 
    description:  'Does your washing machine overflow when it begins the spin cycle?  Do you have water coming up from your floor drain
    or nearby sink?
    My Guy has a solution!'
  },
  { 
    name: 'Floor Drain', 
    description:  'Take a pitcher of water and test your floor drains.  If you are experiencing pooling or if it drains slow.
    My Guy has a solution!'
  },
  { 
    name: 'Main Sewer', 
    description:  'Do you have a stinky smell coming from any of your drains, hear gurgling in your toilets, or finding puddles of 
    water by your floor drains?
    My Guy has a solution! Defective floor drains could cause thousands of dollars in repairs to your home.  Don'"'t wait until it'"'s too late.'
  },
])

