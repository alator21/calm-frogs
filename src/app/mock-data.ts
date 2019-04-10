import {Post} from './models/post';
import {User} from './models/user';



export const USERS:User[]=[
	new User('Leonardo Payne'),
	new User('Carl Henson'),
	new User('Jensen Combs'),
	new User('Aubrey Guzman'),
	new User('Alissa Heath'),
	new User('Julius Patton'),
]



export const POSTS:Post[]=[
	new Post(`Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.`,USERS[0],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.`,USERS[0],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`,USERS[0],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`,USERS[0],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.`,USERS[1],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.`,USERS[1],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?`,USERS[1],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. `,USERS[1],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.`,USERS[2],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.`,USERS[2],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Together we can change the world, just one random act of kindness at a time.`,USERS[2],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.`,USERS[2],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`We live in an age when unnecessary things are our only necessities.`,USERS[3],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`If God had wanted us to vote, he would have given us candidates.`,USERS[3],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`There are worse things than looking stupid. Sleeping through life is one of them.`,USERS[3],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`This world is given as the prize for the men in earnest; and that which is true of this world, is truer still of the world to come.`,USERS[3],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Poor is the man whose pleasures depend on the permission of another.`,USERS[4],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Success usually comes to those who are too busy to be looking for it.`,USERS[4],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`There is no such thing as a moral or an immoral book. Books are well written or badly written.`,USERS[4],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`No human thing is of serious importance.`,USERS[4],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`People drain me, even the closest of friends, and I find loneliness to be the best state in the union to live in.`,USERS[5],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`The coward dies a thousand deaths, the brave man...only five hundred.`,USERS[5],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`I'm a born-again atheist.`,USERS[5],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
	new Post(`Parents were invented to make children happy by giving them something to ignore.`,USERS[5],new Date(+(new Date()) - Math.floor(Math.random()*10000000000))),
];

// console.log(POSTS);