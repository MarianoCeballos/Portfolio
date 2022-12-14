import self from '../img/self.png';
import mock1 from '../img/mock1.gif';
import mock2 from '../img/mock2.gif';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Mariano ',
  lastName: 'Ceballos Torres',
  initials: 'MCT', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'Fueled by coffee',
    },
    {
      emoji: '🌎',
      text: 'Based in Argentina',
    },
    {
      emoji: '💼',
      text: 'Ready to work!',
    },
    {
      emoji: '📧',
      text: 'nanoceballostorres@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://github.com/MarianoCeballos',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/mariano-ceballos',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'mailto:nanoceballostorres@gmail.com',
      icon: 'fa fa-envelope-o',
      label: 'gmail',
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "hello! I'm Mariano, a full stack developer recently graduated and eager to work in the IT field. I invite you to see my portfolio. Thank you!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'HTML5',
      'redux',
      'node.js',
      'express',
    ],
    exposedTo: ['nodejs', 'postgreSQL, express'],
  },
  hobbies: [
    {
      label: 'learning',
      emoji: '📖',
    },
    {
      label: 'videogames',
      emoji: '🎮',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    {
      title: 'Bookstore',
      live: 'https://bookstore-rose.vercel.app',
      source: 'https://github.com/MarianoCeballos/Henry-PF',
      image: mock1,
    },
    {
      title: 'Pokédex',
      live: 'https://pokedex-ceballos.vercel.app',
      source: 'https://github.com/MarianoCeballos/Pokedex-Ceballos',
      image: mock2,
    },
  ],
};
