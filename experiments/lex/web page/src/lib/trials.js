var practice_trials = [
  {
    audio: require('../assets/sounds/main/111_sentence1.mp3'),
    images: [
      require('../assets/images/main/fish.png'),
      require('../assets/images/main/funnel.png'),
      require('../assets/images/main/giraffe.png'),
      require('../assets/images/main/lollipop.png')
    ],
    compatibility: 'practice'
  },

  {
    audio: require('../assets/sounds/main/110_sentence1.mp3'),
    images: [
      require('../assets/images/main/clip.png'),
      require('../assets/images/main/elephant.png'),
      require('../assets/images/main/pen.png'),
      require('../assets/images/main/whale.png')
    ],
    compatibility: 'practice'
  },

  {
    audio: require('../assets/sounds/main/109_sentence1.mp3'),
    images: [
      require('../assets/images/main/bear.png'),
      require('../assets/images/main/dolphin.png'),
      require('../assets/images/main/fork.png'),
      require('../assets/images/main/microphone.png')
    ],
    compatibility: 'practice'
  }
]

var trials1 = [
  /* Trial 1 */
  {
    audio: require('../assets/sounds/main/strike_the_bear_with_the_necklace.mp3'),
    images: [
      require("../assets/images/main/bear_necklace.png"),
      require("../assets/images/main/necklace.png"),
      require("../assets/images/main/umbrella.png"),
      require("../assets/images/main/elephant_umbrella.png")
    ],
    verb: 'strike',
    compatibility: 'instrument',
    target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1',
  },

  {
    audio: require('../assets/sounds/main/strike_the_elephant_with_the_umbrella.mp3'),
    images: [require('../assets/images/main/necklace.png'),
      require('../assets/images/main/umbrella.png'),
      require('../assets/images/main/bear_necklace.png'),
      require('../assets/images/main/elephant_umbrella.png')],
    verb: 'strike', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  /* Trial 2 */
  {
    audio: require('../assets/sounds/main/whack_the_ladybug_with_the_fan.mp3'),
    images: [require('../assets/images/main/cow_pencil.png'),
      require('../assets/images/main/pencil.png'),
      require('../assets/images/main/fan.png'),
      require('../assets/images/main/ladybug_fan.png')],
    verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-2'
  },

//   {
//     audio: require('../assets/sounds/main/whack_the_cow_with_the_pencil.mp3'),
//     images: [require('../assets/images/main/cow_pencil.png'),
//       require('../assets/images/main/pencil.png'),
//       require('../assets/images/main/fan.png'),
//       require('../assets/images/main/ladybug_fan.png')],
//     verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 3 */
//   {
//     audio: 
//       require('../assets/sounds/main/hit_the_mouse_with_the_cup.mp3'),
//     images: [require('../assets/images/main/cup.png'),
//       require('../assets/images/main/mouse_cup.png'),
//       require('../assets/images/main/frog_tube.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-1',
//     target_object: '#jspsych-free-sort-draggable-0'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/hit_the_frog_with_the_tube.mp3'),
//     images: [require('../assets/images/main/cup.png'),
//       require('../assets/images/main/mouse_cup.png'),
//       require('../assets/images/main/frog_tube.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /* Trial 4 */
//   {
//     audio: 
//       require('../assets/sounds/main/rub_the_butterfly_with_the_violin.mp3'),
//     images: [require('../assets/images/main/crayon.png'),
//       require('../assets/images/main/butterfly_violin.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/panda_crayon.png')],
//     verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-1',
//     target_object: '#jspsych-free-sort-draggable-2'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/rub_the_panda_with_the_crayon.mp3'),
//     images: [require('../assets/images/main/butterfly_violin.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/crayon.png'),
//       require('../assets/images/main/panda_crayon.png')],
//     verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
//     target_object: '#jspsych-free-sort-draggable-2'
//   },

//   /* Trial 5 */
//   {
//     audio: 
//       require('../assets/sounds/main/poke_the_pig_with_the_violin.mp3'),
//     images: [require('../assets/images/main/bunny_spoon.png'),
//       require('../assets/images/main/spoon.png'),
//       require('../assets/images/main/pig_violin.png'),
//       require('../assets/images/main/violin.png')],
//     verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/poke_the_bunny_with_the_spoon.mp3'),
//     images: [require('../assets/images/main/bunny_spoon.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/pig_violin.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /* Trial 6 */
//   {
//     audio: 
//       require('../assets/sounds/main/bop_the_panda_with_the_spoon.mp3'),
//     images: [require('../assets/images/main/elephant_napkin.png'),
//       require('../assets/images/main/napkin.png'),
//       require('../assets/images/main/panda_spoon.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/bop_the_elephant_with_the_napkin.mp3'),
//     images: [require('../assets/images/main/elephant_napkin.png'),
//       require('../assets/images/main/panda_spoon.png'),
//       require('../assets/images/main/napkin.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-2'
//   },

//   /* Trial 7 */
//   {
//     audio: 
//       require('../assets/sounds/main/smack_the_dog_with_the_hat.mp3'),
//     images: [require('../assets/images/main/dog_hat.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/flute.png'),
//       require('../assets/images/main/leopard_flute.png')],
//     verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/smack_the_leopard_with_the_flute.mp3'),
//     images: [require('../assets/images/main/hat.png'),
//       require('../assets/images/main/flute.png'),
//       require('../assets/images/main/dog_hat.png'),
//       require('../assets/images/main/leopard_flute.png')],
//     verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 8 */
//   {
//     audio: 
//       require('../assets/sounds/main/clean_the_turtle_with_the_leaf.mp3'),
//     images: [require('../assets/images/main/dog_violin.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/turtle_leaf.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/clean_the_dog_with_the_violin.mp3'),
//     images: [require('../assets/images/main/dog_violin.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/turtle_leaf.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 9 */
//   {
//     audio: 
//       require('../assets/sounds/main/tease_the_leopard_with_the_crayon.mp3'),
//     images: [require('../assets/images/main/dog_lollipop.png'),
//       require('../assets/images/main/lollipop.png'),
//       require('../assets/images/main/leopard_crayon.png'),
//       require('../assets/images/main/crayon.png')],
//     verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/tease_the_dog_with_the_lolipop.mp3'),
//     images: [require('../assets/images/main/crayon.png'),
//       require('../assets/images/main/dog_lollipop.png'),
//       require('../assets/images/main/leopard_crayon.png'),
//       require('../assets/images/main/lollipop.png')],
//     verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-1',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /* Trial 10 */
//   {
//     audio: 
//       require('../assets/sounds/main/feed_the_duckling_with_the_book.mp3'),
//     images: [require('../assets/images/main/duckling_book.png'),
//       require('../assets/images/main/book.png'),
//       require('../assets/images/main/zebra_lollipop.png'),
//       require('../assets/images/main/lollipop.png')],
//     verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/feed_the_zebra_with_the_lollipop.mp3'),
//     images: [
//       require('../assets/images/main/book.png'),
//       require('../assets/images/main/zebra_lollipop.png'),
//       require('../assets/images/main/duckling_book.png'),
//       require('../assets/images/main/lollipop.png')],
//     verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-1',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /* Trial 11 */
//   {
//     audio: 
//       require('../assets/sounds/main/scuff_the_pig_with_the_flower.mp3'),
//     images: [require('../assets/images/main/chicken_cup.png'),
//       require('../assets/images/main/cup.png'),
//       require('../assets/images/main/pig_flower.png'),
//       require('../assets/images/main/flower.png')],
//     verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/scuff_the_chicken_the_cup.mp3'),
//     images: [require('../assets/images/main/chicken_cup.png'),
//       require('../assets/images/main/pig_flower.png'),
//       require('../assets/images/main/cup.png'),
//       require('../assets/images/main/flower.png')],
//     verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-2'
//   },

//   /* Trial 12 */
//   {
//     audio: 
//       require('../assets/sounds/main/pinch_the_leopard_with_the_hat.mp3'),
//     images: [require('../assets/images/main/leopard_hat.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/panda_toothbrush.png'),
//       require('../assets/images/main/toothbrush.png')],
//     verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pinch_the_panda_with_the_toothbrush.mp3'),
//     images: [
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/leopard_hat.png'),
//       require('../assets/images/main/panda_toothbrush.png'),
//       require('../assets/images/main/toothbrush.png')],
//     verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /* Trial 13 */
//   {
//     audio: 
//       require('../assets/sounds/main/knock_on_the_frog_with_the_sponge.mp3'),
//     images: [require('../assets/images/main/bunny_feather.png'),
//       require('../assets/images/main/feather.png'),
//       require('../assets/images/main/sponge.png'),
//       require('../assets/images/main/frog_sponge.png')],
//     verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-3',
//     target_object: '#jspsych-free-sort-draggable-2'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/knock_on_the_bunny_with_the_feather.mp3'),
//     images: [require('../assets/images/main/bunny_feather.png'),
//       require('../assets/images/main/feather.png'),
//       require('../assets/images/main/sponge.png'),
//       require('../assets/images/main/frog_sponge.png')],
//     verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 14 */
//   {
//     audio: 
//       require('../assets/sounds/main/pat_the_dog_with_the_flower.mp3'),
//     images: [require('../assets/images/main/dog_flower.png'),
//       require('../assets/images/main/flower.png'),
//       require('../assets/images/main/leopard_pencil.png'),
//       require('../assets/images/main/pencil.png')],
//     verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pat_the_leopard_with_the_pencil.mp3'),
//     images: [require('../assets/images/main/dog_flower.png'),
//       require('../assets/images/main/flower.png'),
//       require('../assets/images/main/leopard_pencil.png'),
//       require('../assets/images/main/pencil.png')],
//     verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /* Trial 15 */
//   {
//     audio: 
//       require('../assets/sounds/main/locate_the_penguin_with_the_tube.mp3'),
//     images: [require('../assets/images/main/camel_straw.png'),
//       require('../assets/images/main/straw.png'),
//       require('../assets/images/main/penguin_tube.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/locate_the_camel_with_the_straw.mp3'),
//     images: [require('../assets/images/main/camel_straw.png'),
//       require('../assets/images/main/straw.png'),
//       require('../assets/images/main/penguin_tube.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },


//   /* Trial 16 */
//   {
//     audio: 
//       require('../assets/sounds/main/feel_the_leopard_with_the_pen.mp3'),
//     images: [require('../assets/images/main/bear_candle.png'),
//       require('../assets/images/main/candle.png'),
//       require('../assets/images/main/leopard_pen.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'feel', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/feel_the_bear_with_the_candle.mp3'),
//     images: [
//       require('../assets/images/main/candle.png'),
//       require('../assets/images/main/leopard_pen.png'),
//       require('../assets/images/main/bear_candle.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'feel', compatibility: 'equibiased',
//     target_animal: '#jspsych-free-sort-draggable-2', target_object: '#jspsych-free-sort-draggable-0'
//   },

//   /* Trial 17 */
//   {
//     audio: 
//       require('../assets/sounds/main/spot_the_lion_with_the_straw.mp3'),
//     images: [require('../assets/images/main/bird_pencil.png'),
//       require('../assets/images/main/pencil.png'),
//       require('../assets/images/main/straw.png'),
//       require('../assets/images/main/lion_straw.png')
//     ],
//     verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-3',
//     target_object: '#jspsych-free-sort-draggable-2'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/spot_the_bird_with_the_pencil.mp3'),
//     images: [
//       require('../assets/images/main/pencil.png'),
//       require('../assets/images/main/bird_pencil.png'),
//       require('../assets/images/main/lion_straw.png'),
//       require('../assets/images/main/straw.png')],
//     verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-1',
//     target_object: '#jspsych-free-sort-draggable-0'
//   },


//   /* Trial 18 */
//   {
//     audio: 
//       require('../assets/sounds/main/point_to_the_penguin_with_the_leaf.mp3'),
//     images: [require('../assets/images/main/fish_funnel.png'),
//       require('../assets/images/main/funnel.png'),
//       require('../assets/images/main/penguin_leaf.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/point_to_the_fish_with_the_funnel.mp3'),
//     images: [require('../assets/images/main/fish_funnel.png'),
//       require('../assets/images/main/funnel.png'),
//       require('../assets/images/main/penguin_leaf.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 19 */
//   {
//     audio: 
//       require('../assets/sounds/main/pet_the_lion_with_the_tongs.mp3'),
//     images: [require('../assets/images/main/dolphin_sponge.png'),
//       require('../assets/images/main/sponge.png'),
//       require('../assets/images/main/lion_tongs.png'),
//       require('../assets/images/main/tongs.png')],
//     verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pet_the_dolphin_with_the_sponge.mp3'),
//     images: [require('../assets/images/main/lion_tongs.png'),
//       require('../assets/images/main/sponge.png'),
//       require('../assets/images/main/dolphin_sponge.png'),
//       require('../assets/images/main/tongs.png')],
//     verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 20 */
//   {
//     audio: 
//       require('../assets/sounds/main/look_at_the_chicken_with_the_leaf.mp3'),
//     images: [require('../assets/images/main/chicken_leaf.png'),
//       require('../assets/images/main/leaf.png'),
//       require('../assets/images/main/horse_spoon.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/look_at_the_horse_with_the_spoon.mp3'),
//     images: [require('../assets/images/main/chicken_leaf.png'),
//       require('../assets/images/main/spoon.png'),
//       require('../assets/images/main/horse_spoon.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 21 */
//   {
//     audio: 
//       require('../assets/sounds/main/squeeze_the_bunny_with_the_hat.mp3'),
//     images: [require('../assets/images/main/bunny_hat.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/zebra_microphone.png'),
//       require('../assets/images/main/microphone.png')],
//     verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/squeeze_the_zebra_with_the_microphone.mp3'),
//     images: [require('../assets/images/main/bunny_hat.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/zebra_microphone.png'),
//       require('../assets/images/main/microphone.png')],
//     verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },


//   /* Trial 22 */
//   {
//     audio: 
//       require('../assets/sounds/main/pick_out_the_ladybug_with_a_straw.mp3'),
//     images: [require('../assets/images/main/duckling_net.png'),
//       require('../assets/images/main/net.png'),
//       require('../assets/images/main/ladybug_straw.png'),
//       require('../assets/images/main/straw.png')],
//     verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pickout_the_duckling_with_the_net.mp3'),
//     images: [require('../assets/images/main/duckling_net.png'),
//       require('../assets/images/main/net.png'),
//       require('../assets/images/main/ladybug_straw.png'),
//       require('../assets/images/main/straw.png')],
//     verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 23 */
//   {
//     audio: 
//       require('../assets/sounds/main/cuddle_the_whale_with_the_pen.mp3'),
//     images: [require('../assets/images/main/dolphin_microphone.png'),
//       require('../assets/images/main/microphone.png'),
//       require('../assets/images/main/whale_pen.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/cuddle_dolphin_with_the_microphone.mp3'),
//     images: [require('../assets/images/main/dolphin_microphone.png'),
//       require('../assets/images/main/microphone.png'),
//       require('../assets/images/main/whale_pen.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   /* Trial 24 */
//   {
//     audio: 
//       require('../assets/sounds/main/find_the_bird_with_the_mitten.mp3'),
//     images: [require('../assets/images/main/bird_mitten.png'),
//       require('../assets/images/main/mitten.png'),
//       require('../assets/images/main/lion_towel.png'),
//       require('../assets/images/main/towel.png')],
//     verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/find_the_lion_with_the_towel.mp3'),
//     images: [require('../assets/images/main/bird_mitten.png'),
//       require('../assets/images/main/mitten.png'),
//       require('../assets/images/main/lion_towel.png'),
//       require('../assets/images/main/towel.png')],
//     verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },


//   /* Trial 25 */
//   {
//     audio: 
//       require('../assets/sounds/main/hug_the_panda_with_the_umbrella.mp3'),
//     images: [require('../assets/images/main/giraffe_partyhat.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/panda_umbrella.png'),
//       require('../assets/images/main/umbrella.png')],
//     verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/hug_the_giraffe_with_the_partyhat.mp3'),
//     images: [require('../assets/images/main/giraffe_partyhat.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/panda_umbrella.png'),
//       require('../assets/images/main/umbrella.png')],
//     verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },


//   /* Trial 26 */
//   {
//     audio: 
//       require('../assets/sounds/main/select_the_squirrel_with_the_partyhat.mp3'),
//     images: [require('../assets/images/main/squirrel_partyhat.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/zebra_towel.png'),
//       require('../assets/images/main/towel.png')],
//     verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/select_the_zebra_with_a_towel.mp3'),
//     images: [require('../assets/images/main/squirrel_partyhat.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/zebra_towel.png'),
//       require('../assets/images/main/towel.png')],
//     verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /* Trial 27 */
//   {
//     audio: 
//       require('../assets/sounds/main/choose_the_cow_with_the_barrette.mp3'),
//     images: [require('../assets/images/main/cow_barrette.png'),
//       require('../assets/images/main/barrette.png'),
//       require('../assets/images/main/squirrel_pen.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
//     target_object: '#jspsych-free-sort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/choose_the_squirrel_with_the_pen.mp3'),
//     images: [require('../assets/images/main/cow_barrette.png'),
//       require('../assets/images/main/barrette.png'),
//       require('../assets/images/main/squirrel_pen.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
//     target_object: '#jspsych-free-sort-draggable-3'
//   },

//   /*Filler Trials */

//   {
//     audio: require('../assets/sounds/main/135_sentence1.mp3'),
//     images: [require('../assets/images/main/butterfly.png'),
//       require('../assets/images/main/frog_shell.png'),
//       require('../assets/images/main/shell.png'),
//       require('../assets/images/main/towel.png')],
//     compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/134_sentence1.mp3'),
//     images: [require('../assets/images/main/camel.png'),
//       require('../assets/images/main/fish.png'),
//       require('../assets/images/main/flag.png'),
//       require('../assets/images/main/hat.png')],
//     compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/133_sentence1.mp3'),
//     images: [require('../assets/images/main/bird.png'), require('../assets/images/main/chicken.png'), require('../assets/images/main/mitten.png'),
//       require('../assets/images/main/net.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/132_sentence1.mp3'),
//     images: [require('../assets/images/main/net.png'), require('../assets/images/main/duckling.png'), require('../assets/images/main/giraffe.png'),
//       require('../assets/images/main/umbrella.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/131_sentence1.mp3'),
//     images: [require('../assets/images/main/net.png'), require('../assets/images/main/cup.png'), require('../assets/images/main/dolphin.png'),
//       require('../assets/images/main/frog.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/130_sentence1.mp3'),
//     images: [require('../assets/images/main/dog_funnel.png'), require('../assets/images/main/fork.png'), require('../assets/images/main/funnel.png'),
//       require('../assets/images/main/panda.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/129_sentence1.mp3'),
//     images: [require('../assets/images/main/bear.png'), require('../assets/images/main/cow.png'), require('../assets/images/main/flute.png'),
//       require('../assets/images/main/stick.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/128_sentence1.mp3'),
//     images: [require('../assets/images/main/camel.png'), require('../assets/images/main/flute.png'), require('../assets/images/main/hat.png'),
//       require('../assets/images/main/whale.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/127_sentence1.mp3'),
//     images: [require('../assets/images/main/butterfly.png'), require('../assets/images/main/fork.png'), require('../assets/images/main/towel.png'),
//       require('../assets/images/main/hippo.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/126_sentence1.mp3'),
//     images: [require('../assets/images/main/brush.png'), require('../assets/images/main/bunny.png'), require('../assets/images/main/camel.png'),
//       require('../assets/images/main/tube.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/125_sentence1.mp3'),
//     images: [require('../assets/images/main/clip.png'), require('../assets/images/main/stick.png'), require('../assets/images/main/elephant.png'),
//       require('../assets/images/main/zebra.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/124_sentence1.mp3'),
//     images: [require('../assets/images/main/zebra.png'), require('../assets/images/main/leaf.png'), require('../assets/images/main/penguin.png'),
//       require('../assets/images/main/train.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/123_sentence1.mp3'),
//     images: [require('../assets/images/main/book.png'), require('../assets/images/main/flute.png'), require('../assets/images/main/whale.png'),
//       require('../assets/images/main/zebra.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/122_sentence1.mp3'),
//     images: [require('../assets/images/main/bird.png'), require('../assets/images/main/flower.png'), require('../assets/images/main/toy.png'),
//       require('../assets/images/main/turtle.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/121_sentence1.mp3'),
//     images: [require('../assets/images/main/tube.png'), require('../assets/images/main/turtle.png'), require('../assets/images/main/mouse.png'),
//       require('../assets/images/main/partyhat.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/120_sentence1.mp3'),
//     images: [require('../assets/images/main/bear.png'), require('../assets/images/main/stick.png'), require('../assets/images/main/pen.png'),
//       require('../assets/images/main/squirrel.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/119_sentence1.mp3'),
//     images: [require('../assets/images/main/chopsticks.png'), require('../assets/images/main/hippo.png'), require('../assets/images/main/squirrel.png'),
//       require('../assets/images/main/sponge.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/118_sentence1.mp3'),
//     images: [require('../assets/images/main/net.png'), require('../assets/images/main/ladybug_net.png'), require('../assets/images/main/pig.png'),
//       require('../assets/images/main/straw.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/117_sentence1.mp3'),
//     images: [require('../assets/images/main/bird.png'), require('../assets/images/main/fork.png'), require('../assets/images/main/panda.png'),
//       require('../assets/images/main/pencil.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/116_sentence1.mp3'),
//     images: [require('../assets/images/main/panda.png'), require('../assets/images/main/towel.png'), require('../assets/images/main/leopard.png'),
//       require('../assets/images/main/lollipop.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/115_sentence1.mp3'),
//     images: [require('../assets/images/main/panda.png'), require('../assets/images/main/fan.png'), require('../assets/images/main/lion.png'),
//       require('../assets/images/main/napkin.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/114_sentence1.mp3'),
//     images: [require('../assets/images/main/chicken.png'), require('../assets/images/main/funnel.png'), require('../assets/images/main/leaf.png'),
//       require('../assets/images/main/leopard_funnel.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/113_sentence1.mp3'),
//     images: [require('../assets/images/main/fan.png'), require('../assets/images/main/turtle.png'), require('../assets/images/main/horse.png'),
//       require('../assets/images/main/toothbrush.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/112_sentence1.mp3'),
//     images: [require('../assets/images/main/book.png'), require('../assets/images/main/hippo.png'), require('../assets/images/main/penguin.png'),
//       require('../assets/images/main/straw.png')], compatibility: 'filler'
//   }
]



var trials2 = [
  /* Trial 1 */
  {
    audio: 
      require('../assets/sounds/main/strike_the_bear_with_the_umbrella.mp3'),
    images: [require('../assets/images/main/bear_umbrella.png'),
      require('../assets/images/main/umbrella.png'),
      require('../assets/images/main/necklace.png'),
      require('../assets/images/main/elephant_necklace.png')],
    verb: 'strike', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      require('../assets/sounds/main/strike_the_elephant_with_the_necklace.mp3'),
    images: [require('../assets/images/main/bear_umbrella.png'),
      require('../assets/images/main/umbrella.png'),
      require('../assets/images/main/necklace.png'),
      require('../assets/images/main/elephant_necklace.png')],
    verb: 'strike', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
    target_object: '#jspsych-freesort-draggable-2'
  },

  /* Trial 2 */
  {
    audio: 
      require('../assets/sounds/main/wack_the_cow_with_the_fan.mp3'),
    images: [require('../assets/images/main/cow_fan.png'),
      require('../assets/images/main/pencil.png'),
      require('../assets/images/main/ladybug_pencil.png'),
      require('../assets/images/main/fan.png')
    ],
    verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

//   {
//     audio: 
//       require('../assets/sounds/main/wack_the_ladybug_with_the_pencil.mp3'),
//     images: [require('../assets/images/main/cow_fan.png'),
//       require('../assets/images/main/pencil.png'),
//       require('../assets/images/main/fan.png'),
//       require('../assets/images/main/ladybug_pencil.png')],
//     verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Trial 3 */
//   {
//     audio: 
//       require('../assets/sounds/main/hit_the_frog_with_the_cup.mp3'),
//     images: [require('../assets/images/main/cup.png'),
//       require('../assets/images/main/mouse_tube.png'),
//       require('../assets/images/main/frog_cup.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-0'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/hit_the_mouse_with_the_tube.mp3'),
//     images: [require('../assets/images/main/cup.png'),
//       require('../assets/images/main/frog_cup.png'),
//       require('../assets/images/main/mouse_tube.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 4 */
//   {
//     audio: 
//       require('../assets/sounds/main/rub_the_butterfly_with_the_crayon.mp3'),
//     images: [require('../assets/images/main/butterfly_crayon.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/crayon.png'),
//       require('../assets/images/main/panda_violin.png')],
//     verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-2'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/rub_the_panda_with_the_violin.mp3'),
//     images: [require('../assets/images/main/butterfly_crayon.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/crayon.png'),
//       require('../assets/images/main/panda_violin.png')],
//     verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
//     target_object: '#jspsych-freesort-draggable-1'
//   },


//   /* Trial 5 */
//   {
//     audio: 
//       require('../assets/sounds/main/poke_the_pig_with_the_spoon.mp3'),
//     images: [require('../assets/images/main/bunny_violin.png'),
//       require('../assets/images/main/spoon.png'),
//       require('../assets/images/main/pig_spoon.png'),
//       require('../assets/images/main/violin.png')],
//     verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/poke_the_bunny_with_the_violin.mp3'),
//     images: [require('../assets/images/main/bunny_violin.png'),
//       require('../assets/images/main/spoon.png'),
//       require('../assets/images/main/pig_spoon.png'),
//       require('../assets/images/main/violin.png')],
//     verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 6 */
//   {
//     audio: 
//       require('../assets/sounds/main/bop_the_panda_with_the_napkin.mp3'),
//     images: [require('../assets/images/main/elephant_spoon.png'),
//       require('../assets/images/main/napkin.png'),
//       require('../assets/images/main/panda_napkin.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/bop_the_elephant_with_the_spoon.mp3'),
//     images: [require('../assets/images/main/elephant_spoon.png'),
//       require('../assets/images/main/napkin.png'),
//       require('../assets/images/main/panda_napkin.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 7 */
//   {
//     audio: 
//       require('../assets/sounds/main/smack_the_dog_with_the_flute.mp3'),
//     images: [require('../assets/images/main/dog_flute.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/flute.png'),
//       require('../assets/images/main/leopard_hat.png')],
//     verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-2'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/smack_the_leopard_with_the_hat.mp3'),
//     images: [require('../assets/images/main/dog_flute.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/flute.png'),
//       require('../assets/images/main/leopard_hat.png')],
//     verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Trial 8 */
//   {
//     audio: 
//       require('../assets/sounds/main/clean_the_turtle_with_the_violin.mp3'),
//     images: [require('../assets/images/main/dog_leaf.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/turtle_violin.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/clean_the_dog_with_the_leaf.mp3'),
//     images: [require('../assets/images/main/dog_leaf.png'),
//       require('../assets/images/main/violin.png'),
//       require('../assets/images/main/turtle_violin.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 9 */
//   {
//     audio: 
//       require('../assets/sounds/main/tease_the_leopard_with_the_lollipop.mp3'),
//     images: [require('../assets/images/main/dog_crayon.png'),
//       require('../assets/images/main/lollipop.png'),
//       require('../assets/images/main/leopard_lollipop.png'),
//       require('../assets/images/main/crayon.png')],
//     verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/tease_the_dog_with_the_crayon.mp3'),
//     images: [require('../assets/images/main/dog_crayon.png'),
//       require('../assets/images/main/lollipop.png'),
//       require('../assets/images/main/leopard_lollipop.png'),
//       require('../assets/images/main/crayon.png')],
//     verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },


//   /* Trial 10 */
//   {
//     audio: 
//       require('../assets/sounds/main/feed_the_zebra_with_the_book.mp3'),
//     images: [require('../assets/images/main/duckling_lollipop.png'),
//       require('../assets/images/main/book.png'),
//       require('../assets/images/main/zebra_book.png'),
//       require('../assets/images/main/lollipop.png')],
//     verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/feed_the_duckling_with_the_lollipop.mp3'),
//     images: [require('../assets/images/main/duckling_lollipop.png'),
//       require('../assets/images/main/book.png'),
//       require('../assets/images/main/zebra_book.png'),
//       require('../assets/images/main/lollipop.png')],
//     verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 11 */
//   {
//     audio: 
//       require('../assets/sounds/main/scuff_the_pig_with_the_cup.mp3'),
//     images: [require('../assets/images/main/chicken_flower.png'),
//       require('../assets/images/main/cup.png'),
//       require('../assets/images/main/pig_cup.png'),
//       require('../assets/images/main/flower.png')],
//     verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/scuff_the_chicken_with_the_flower.mp3'),
//     images: [require('../assets/images/main/chicken_flower.png'),
//       require('../assets/images/main/cup.png'),
//       require('../assets/images/main/pig_cup.png'),
//       require('../assets/images/main/flower.png')],
//     verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 12 */
//   {
//     audio: 
//       require('../assets/sounds/main/pinch_the_panda_with_the_hat.mp3'),
//     images: [require('../assets/images/main/leopard_toothbrush.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/panda_hat.png'),
//       require('../assets/images/main/toothbrush.png')],
//     verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pinch_the_leopard_with_the_toothbrush.mp3'),
//     images: [require('../assets/images/main/leopard_toothbrush.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/panda_hat.png'),
//       require('../assets/images/main/toothbrush.png')],
//     verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 13 */
//   {
//     audio: 
//       require('../assets/sounds/main/knock_on_the_bunny_with_the_sponge.mp3'),
//     images: [require('../assets/images/main/bunny_sponge.png'),
//       require('../assets/images/main/feather.png'),
//       require('../assets/images/main/sponge.png'),
//       require('../assets/images/main/frog_feather.png')],
//     verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-2'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/knock_on_the_frog_with_the_feather.mp3'),
//     images: [require('../assets/images/main/bunny_sponge.png'),
//       require('../assets/images/main/feather.png'),
//       require('../assets/images/main/sponge.png'),
//       require('../assets/images/main/frog_feather.png')],
//     verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-3',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Trial 14 */
//   {
//     audio: 
//       require('../assets/sounds/main/pat_the_leopard_with_the_flower.mp3'),
//     images: [require('../assets/images/main/dog_pencil.png'),
//       require('../assets/images/main/flower.png'),
//       require('../assets/images/main/leopard_flower.png'),
//       require('../assets/images/main/pencil.png')],
//     verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pat_the_dog_with_the_pencil.mp3'),
//     images: [require('../assets/images/main/dog_pencil.png'),
//       require('../assets/images/main/flower.png'),
//       require('../assets/images/main/leopard_flower.png'),
//       require('../assets/images/main/pencil.png')],
//     verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 15 */
//   {
//     audio: 
//       require('../assets/sounds/main/locate_the_camel_with_the_tube.mp3'),
//     images: [require('../assets/images/main/camel_tube.png'),
//       require('../assets/images/main/straw.png'),
//       require('../assets/images/main/penguin_straw.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/locate_the_penguin_with_the_straw.mp3'),
//     images: [require('../assets/images/main/camel_tube.png'),
//       require('../assets/images/main/straw.png'),
//       require('../assets/images/main/penguin_straw.png'),
//       require('../assets/images/main/tube.png')],
//     verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Trial 16 */
//   {
//     audio: 
//       require('../assets/sounds/main/feel_the_bear_with_the_pen.mp3'),
//     images: [require('../assets/images/main/bear_pen.png'),
//       require('../assets/images/main/candle.png'),
//       require('../assets/images/main/leopard_candle.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'feel', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/feel_the_leopard_with_the_candle.mp3'),
//     images: [require('../assets/images/main/bear_pen.png'),
//       require('../assets/images/main/candle.png'),
//       require('../assets/images/main/leopard_candle.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'feel', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Trial 17 */
//   {
//     audio: 
//       require('../assets/sounds/main/spot_the_bird_with_the_straw.mp3'),
//     images: [require('../assets/images/main/bird_straw.png'),
//       require('../assets/images/main/pencil.png'),
//       require('../assets/images/main/lion_pencil.png'),
//       require('../assets/images/main/straw.png')],
//     verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/spot_the_lion_with_the_pencil.mp3'),
//     images: [require('../assets/images/main/bird_straw.png'),
//       require('../assets/images/main/pencil.png'),
//       require('../assets/images/main/lion_pencil.png'),
//       require('../assets/images/main/straw.png')],
//     verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },


//   /* Trial 18 */
//   {
//     audio: 
//       require('../assets/sounds/main/point_to_the_penguin_with_the_funnel.mp3'),
//     images: [require('../assets/images/main/fish_leaf.png'),
//       require('../assets/images/main/funnel.png'),
//       require('../assets/images/main/penguin_funnel.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/point_to_the_fish_with_the_leaf.mp3'),
//     images: [require('../assets/images/main/fish_leaf.png'),
//       require('../assets/images/main/funnel.png'),
//       require('../assets/images/main/penguin_funnel.png'),
//       require('../assets/images/main/leaf.png')],
//     verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 19 */
//   {
//     audio: 
//       require('../assets/sounds/main/pet_the_lion_with_the_sponge.mp3'),
//     images: [require('../assets/images/main/dolphin_tongs.png'),
//       require('../assets/images/main/tongs.png'),
//       require('../assets/images/main/lion_sponge.png'),
//       require('../assets/images/main/sponge.png')],
//     verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pet_the_dolphin_with_the_tongs.mp3'),
//     images: [require('../assets/images/main/dolphin_tongs.png'),
//       require('../assets/images/main/sponge.png'),
//       require('../assets/images/main/lion_sponge.png'),
//       require('../assets/images/main/tongs.png')],
//     verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 20 */
//   {
//     audio: 
//       require('../assets/sounds/main/look_at_the_chicken_with_the_spoon.mp3'),
//     images: [require('../assets/images/main/chicken_spoon.png'),
//       require('../assets/images/main/leaf.png'),
//       require('../assets/images/main/horse_leaf.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/look_at_horse_with_the_leaf.mp3'),
//     images: [require('../assets/images/main/chicken_spoon.png'),
//       require('../assets/images/main/leaf.png'),
//       require('../assets/images/main/horse_leaf.png'),
//       require('../assets/images/main/spoon.png')],
//     verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Trial 21 */
//   {
//     audio: 
//       require('../assets/sounds/main/squeeze_zebra_with_the_hat.mp3'),
//     images: [require('../assets/images/main/bunny_microphone.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/zebra_hat.png'),
//       require('../assets/images/main/microphone.png')],
//     verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/squeeze_the_bunny_with_the_microphone.mp3'),
//     images: [require('../assets/images/main/bunny_microphone.png'),
//       require('../assets/images/main/hat.png'),
//       require('../assets/images/main/zebra_hat.png'),
//       require('../assets/images/main/microphone.png')],
//     verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },


//   /* Trial 22 */
//   {
//     audio: 
//       require('../assets/sounds/main/pick_out_the_duckling_with_a_straw.mp3'),
//     images: [require('../assets/images/main/duckling_straw.png'),
//       require('../assets/images/main/net.png'),
//       require('../assets/images/main/ladybug_net.png'),
//       require('../assets/images/main/straw.png')],
//     verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/pickout_the_ladybug_with_the_net.mp3'),
//     images: [require('../assets/images/main/duckling_straw.png'),
//       require('../assets/images/main/net.png'),
//       require('../assets/images/main/ladybug_net.png'),
//       require('../assets/images/main/straw.png')],
//     verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },


//   /* Trial 23 */
//   {
//     audio: 
//       require('../assets/sounds/main/cuddle_the_dolphin_with_the_pen.mp3'),
//     images: [require('../assets/images/main/dolphin_pen.png'),
//       require('../assets/images/main/microphone.png'),
//       require('../assets/images/main/whale_microphone.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/cuddle_the_whale_with_the_microphone.mp3'),
//     images: [require('../assets/images/main/dolphin_pen.png'),
//       require('../assets/images/main/microphone.png'),
//       require('../assets/images/main/whale_microphone.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },


//   /* Trial 24 */
//   {
//     audio: 
//       require('../assets/sounds/main/find_the_bird_with_the_towel.mp3'),
//     images: [require('../assets/images/main/bird_towel.png'),
//       require('../assets/images/main/mitten.png'),
//       require('../assets/images/main/lion_mitten.png'),
//       require('../assets/images/main/towel.png')],
//     verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/find_the_lion_with_the_mitten.mp3'),
//     images: [require('../assets/images/main/bird_towel.png'),
//       require('../assets/images/main/mitten.png'),
//       require('../assets/images/main/lion_mitten.png'),
//       require('../assets/images/main/towel.png')],
//     verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },


//   /* Trial 25 */
//   {
//     audio: 
//       require('../assets/sounds/main/hug_the_giraffe_with_the_umbrella.mp3'),
//     images: [require('../assets/images/main/giraffe_umbrella.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/panda_partyhat.png'),
//       require('../assets/images/main/umbrella.png')],
//     verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/hug_the_panda_with_the_partyhat.mp3'),
//     images: [require('../assets/images/main/giraffe_umbrella.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/panda_partyhat.png'),
//       require('../assets/images/main/umbrella.png')],
//     verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Trial 26 */
//   {
//     audio: 
//       require('../assets/sounds/main/select_the_zebra_with_the_partyhat.mp3'),
//     images: [require('../assets/images/main/squirrel_towel.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/towel.png'),
//       require('../assets/images/main/zebra_partyhat.png')
//     ],
//     verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-3',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/select_the_squirrel_with_the_towel.mp3'),
//     images: [require('../assets/images/main/squirrel_towel.png'),
//       require('../assets/images/main/partyhat.png'),
//       require('../assets/images/main/zebra_partyhat.png'),
//       require('../assets/images/main/towel.png')],
//     verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   /* Trial 27 */
//   {
//     audio: 
//       require('../assets/sounds/main/choose_the_cow_with_the_pen.mp3'),
//     images: [require('../assets/images/main/cow_pen.png'),
//       require('../assets/images/main/barrette.png'),
//       require('../assets/images/main/squirrel_barrette.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
//     target_object: '#jspsych-freesort-draggable-3'
//   },

//   {
//     audio: 
//       require('../assets/sounds/main/choose_the_squirrel_with_the_barrette.mp3'),
//     images: [require('../assets/images/main/cow_pen.png'),
//       require('../assets/images/main/barrette.png'),
//       require('../assets/images/main/squirrel_barrette.png'),
//       require('../assets/images/main/pen.png')],
//     verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
//     target_object: '#jspsych-freesort-draggable-1'
//   },

//   /* Filler trials */

//   {
//     audio: require('../assets/sounds/main/135_sentence1.mp3'),
//     images: [require('../assets/images/main/butterfly.png'),
//       require('../assets/images/main/frog_shell.png'),
//       require('../assets/images/main/shell.png'),
//       require('../assets/images/main/towel.png')],
//     compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/134_sentence1.mp3'),
//     images: [require('../assets/images/main/camel.png'),
//       require('../assets/images/main/fish.png'),
//       require('../assets/images/main/flag.png'),
//       require('../assets/images/main/hat.png')],
//     compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/133_sentence1.mp3'),
//     images: [require('../assets/images/main/bird.png'), require('../assets/images/main/chicken.png'), require('../assets/images/main/mitten.png'),
//       require('../assets/images/main/net.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/132_sentence1.mp3'),
//     images: [require('../assets/images/main/net.png'), require('../assets/images/main/duckling.png'), require('../assets/images/main/giraffe.png'),
//       require('../assets/images/main/umbrella.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/131_sentence1.mp3'),
//     images: [require('../assets/images/main/net.png'), require('../assets/images/main/cup.png'), require('../assets/images/main/dolphin.png'),
//       require('../assets/images/main/frog.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/130_sentence1.mp3'),
//     images: [require('../assets/images/main/dog_funnel.png'), require('../assets/images/main/fork.png'), require('../assets/images/main/funnel.png'),
//       require('../assets/images/main/panda.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/129_sentence1.mp3'),
//     images: [require('../assets/images/main/bear.png'), require('../assets/images/main/cow.png'), require('../assets/images/main/flute.png'),
//       require('../assets/images/main/stick.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/128_sentence1.mp3'),
//     images: [require('../assets/images/main/camel.png'), require('../assets/images/main/flute.png'), require('../assets/images/main/hat.png'),
//       require('../assets/images/main/whale.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/127_sentence1.mp3'),
//     images: [require('../assets/images/main/butterfly.png'), require('../assets/images/main/fork.png'), require('../assets/images/main/towel.png'),
//       require('../assets/images/main/hippo.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/126_sentence1.mp3'),
//     images: [require('../assets/images/main/brush.png'), require('../assets/images/main/bunny.png'), require('../assets/images/main/camel.png'),
//       require('../assets/images/main/tube.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/125_sentence1.mp3'),
//     images: [require('../assets/images/main/clip.png'), require('../assets/images/main/stick.png'), require('../assets/images/main/elephant.png'),
//       require('../assets/images/main/zebra.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/124_sentence1.mp3'),
//     images: [require('../assets/images/main/zebra.png'), require('../assets/images/main/leaf.png'), require('../assets/images/main/penguin.png'),
//       require('../assets/images/main/train.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/123_sentence1.mp3'),
//     images: [require('../assets/images/main/book.png'), require('../assets/images/main/flute.png'), require('../assets/images/main/whale.png'),
//       require('../assets/images/main/zebra.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/122_sentence1.mp3'),
//     images: [require('../assets/images/main/bird.png'), require('../assets/images/main/flower.png'), require('../assets/images/main/toy.png'),
//       require('../assets/images/main/turtle.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/121_sentence1.mp3'),
//     images: [require('../assets/images/main/tube.png'), require('../assets/images/main/turtle.png'), require('../assets/images/main/mouse.png'),
//       require('../assets/images/main/partyhat.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/120_sentence1.mp3'),
//     images: [require('../assets/images/main/bear.png'), require('../assets/images/main/stick.png'), require('../assets/images/main/pen.png'),
//       require('../assets/images/main/squirrel.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/119_sentence1.mp3'),
//     images: [require('../assets/images/main/chopsticks.png'), require('../assets/images/main/hippo.png'), require('../assets/images/main/squirrel.png'),
//       require('../assets/images/main/sponge.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/118_sentence1.mp3'),
//     images: [require('../assets/images/main/net.png'), require('../assets/images/main/ladybug_net.png'), require('../assets/images/main/pig.png'),
//       require('../assets/images/main/straw.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/117_sentence1.mp3'),
//     images: [require('../assets/images/main/bird.png'), require('../assets/images/main/fork.png'), require('../assets/images/main/panda.png'),
//       require('../assets/images/main/pencil.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/116_sentence1.mp3'),
//     images: [require('../assets/images/main/panda.png'), require('../assets/images/main/towel.png'), require('../assets/images/main/leopard.png'),
//       require('../assets/images/main/lollipop.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/115_sentence1.mp3'),
//     images: [require('../assets/images/main/panda.png'), require('../assets/images/main/fan.png'), require('../assets/images/main/lion.png'),
//       require('../assets/images/main/napkin.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/114_sentence1.mp3'),
//     images: [require('../assets/images/main/chicken.png'), require('../assets/images/main/funnel.png'), require('../assets/images/main/leaf.png'),
//       require('../assets/images/main/leopard_funnel.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/113_sentence1.mp3'),
//     images: [require('../assets/images/main/fan.png'), require('../assets/images/main/turtle.png'), require('../assets/images/main/horse.png'),
//       require('../assets/images/main/toothbrush.png')], compatibility: 'filler'
//   },

//   {
//     audio: require('../assets/sounds/main/112_sentence1.mp3'),
//     images: [require('../assets/images/main/book.png'), require('../assets/images/main/hippo.png'), require('../assets/images/main/penguin.png'),
//       require('../assets/images/main/straw.png')], compatibility: 'filler'
//   }
]

export {
  trials1,
  trials2,
  practice_trials
}