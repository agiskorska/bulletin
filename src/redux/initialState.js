export const initialState = {
  posts: {
    data:
      [
        {
          id: 2342342346,
          date: 'Sun Sep 12 2021 11:00:49 GMT+0100',
          phoneNumber: 700000000,
          price: 40,
          avatar: 'https://pickaface.net/gallery/avatar/20150828_003518_4928_Username.png',
          imageUrl: '/static/images/cards/paella.jpg',
          imageTitle:'Paella dish',
          shortDescription: 'paella is a perfect party dish and a fun meal to cook together with your guests.',
          status: 'published' ,
          description: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.<br/> Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. <br />Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)',
        },
        {
          id: 2342342348,
          date: 'Sun Aug 29 2021 11:00:49 GMT+0100',
          phoneNumber: 700000000,
          price: 40,
          avatar: 'https://pickaface.net/gallery/avatar/20150828_003518_4928_Username.png',
          imageUrl: 'https://images.pexels.com/photos/3693789/pexels-photo-3693789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          imageTitle:'blablablalba',
          shortDescription: 'This impressivparty dish and a fun meal to cook together with your guests.',
          status: 'draft' ,
          description: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.<br/> Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. <br />Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)',
        },
        {
          id: 2342342343,
          date: 'Sun Sep 5 2021 11:00:49 GMT+0100',
          phoneNumber: 700000000,
          price: 40,
          avatar: 'https://pickaface.net/gallery/avatar/20150828_003518_4928_Username.png',
          imageUrl: 'https://images.pexels.com/photos/6850740/pexels-photo-6850740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          imageTitle:'Obrabobora',
          shortDescription: 'This impressive paella sh and a fun meal t togethguests.',
          status: 'published' ,
          description: 'Heat 1/2 cup of tt open.)',
        },
        {
          id: 2342342342,
          date: 'Sun Sep 19 2021 11:00:49 GMT+0100',
          phoneNumber: 700000000,
          price: 40,
          avatar: 'https://pickaface.net/gallery/avatar/20150828_003518_4928_Username.png',
          imageUrl: 'https://images.pexels.com/photos/6850740/pexels-photo-6850740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          imageTitle:'AUUAUAUAUAUAUUA',
          shortDescription: 'Nothing to see here',
          status: 'closed' ,
          description: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.<br/> Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. <br />Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)',
        },
      ]
    ,
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    isLogged: true,
    name: 'John',
    surname: 'Doe',
    image: 'https://pickaface.net/gallery/avatar/20150828_003518_4928_Username.png',
  },
};