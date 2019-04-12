import {
  Post
} from './models/post';
import {
  User
} from './models/user';



export const USERS: User[] = [
  new User({
    'realName': 'Leonardo Payne',
    'username': 'icefallshampoo',
    'email': 'brainless@att.net'
  }),
  new User({
    'realName': 'Carl Henson',
    'username': 'FluffyPug',
    'email': 'psharpe@msn.com'
  }),
  new User({
    'realName': 'Jensen Combs',
    'username': 'curvymachine',
    'email': 'pappp@optonline.net'
  }),
  new User({
    'realName': 'Aubrey Guzman',
    'username': 'jobless_star',
    'email': 'cgcra@hotmail.com'
  }),
  new User({
    'realName': 'Alissa Heath',
    'username': 'understood-ring',
    'email': 'sartak@yahoo.ca'
  }),
  new User({
    'realName': 'Julius Patton',
    'username': 'fragile_advertisement',
    'email': 'sisyphus@att.net'
  }),
  new User({
    'realName': 'Lara Hinton',
    'username': 'adorable-ticket',
    'email': 'danzigism@att.net'
  }),
  new User({
    'realName': 'Katie Baker',
    'username': 'futuristic_canvas',
    'email': 'lukka@aol.com'
  }),
  new User({
    'realName': 'Bethany Yates',
    'username': 'exotic-cakes',
    'email': 'kmself@verizon.net'
  }),
  new User({
    'realName': 'Damarion Dean',
    'username': 'regular_crime',
    'email': 'dinther@me.com'
  })
]



export const POSTS: Post[] = [
  new Post({
    'content': `Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.`,
    'author': USERS[0],
    'created_at': getRandomDate(),
    '_id': 1
  }),
  new Post({
    'content': `The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.`,
    'author': USERS[0],
    'created_at': getRandomDate(),
    '_id': 2
  }),
  new Post({
    'content': `Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?`,
    'author': USERS[0],
    'created_at': getRandomDate(),
    '_id': 3
  }),
  new Post({
    'content': `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`,
    'author': USERS[0],
    'created_at': getRandomDate(),
    '_id': 4
  }),
  new Post({
    'content': `Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.`,
    'author': USERS[1],
    'created_at': getRandomDate(),
    '_id': 4
  }),
  new Post({
    'content': `Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.`,
    'author': USERS[1],
    'created_at': getRandomDate(),
    '_id': 5
  }),
  new Post({
    'content': `My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?`,
    'author': USERS[1],
    'created_at': getRandomDate(),
    '_id': 6
  }),
  new Post({
    'content': `Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. `,
    'author': USERS[1],
    'created_at': getRandomDate(),
    '_id': 7
  }),
  new Post({
    'content': `You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.`,
    'author': USERS[2],
    'created_at': getRandomDate(),
    '_id': 8
  }),
  new Post({
    'content': `Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.`,
    'author': USERS[2],
    'created_at': getRandomDate(),
    '_id': 9
  }),
  new Post({
    'content': `Together we can change the world, just one random act of kindness at a time.`,
    'author': USERS[2],
    'created_at': getRandomDate(),
    '_id': 10
  }),
  new Post({
    'content': `Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.`,
    'author': USERS[2],
    'created_at': getRandomDate(),
    '_id': 11
  }),
  new Post({
    'content': `We live in an age when unnecessary things are our only necessities.`,
    'author': USERS[3],
    'created_at': getRandomDate(),
    '_id': 12
  }),
  new Post({
    'content': `If God had wanted us to vote, he would have given us candidates.`,
    'author': USERS[3],
    'created_at': getRandomDate(),
    '_id': 13
  }),
  new Post({
    'content': `There are worse things than looking stupid. Sleeping through life is one of them.`,
    'author': USERS[3],
    'created_at': getRandomDate(),
    '_id': 14
  }),
  new Post({
    'content': `This world is given as the prize for the men in earnest; and that which is true of this world, is truer still of the world to come.`,
    'author': USERS[3],
    'created_at': getRandomDate(),
    '_id': 15
  }),
  new Post({
    'content': `Poor is the man whose pleasures depend on the permission of another.`,
    'author': USERS[4],
    'created_at': getRandomDate(),
    '_id': 16
  }),
  new Post({
    'content': `Success usually comes to those who are too busy to be looking for it.`,
    'author': USERS[4],
    'created_at': getRandomDate(),
    '_id': 17
  }),
  new Post({
    'content': `There is no such thing as a moral or an immoral book. Books are well written or badly written.`,
    'author': USERS[4],
    'created_at': getRandomDate(),
    '_id': 18
  }),
  new Post({
    'content': `No human thing is of serious importance.`,
    'author': USERS[4],
    'created_at': getRandomDate(),
    '_id': 19
  }),
  new Post({
    'content': `People drain me, even the closest of friends, and I find loneliness to be the best state in the union to live in.`,
    'author': USERS[5],
    'created_at': getRandomDate(),
    '_id': 20
  }),
  new Post({
    'content': `The coward dies a thousand deaths, the brave man...only five hundred.`,
    'author': USERS[5],
    'created_at': getRandomDate(),
    '_id': 21
  }),
  new Post({
    'content': `I'm a born-again atheist.`,
    'author': USERS[5],
    'created_at': getRandomDate(),
    '_id': 22
  }),
  new Post({
    'content': `Parents were invented to make children happy by giving them something to ignore.`,
    'author': USERS[5],
    'created_at': getRandomDate(),
    '_id': 23
  }),
];


function getRandomDate(): Date {
  return new Date(Math.floor(Math.random() * (1555004739544 - 345004739544 + 1)) + 345004739544);
}
