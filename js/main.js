Main = function() {
    score = 0,
    scoreText,
    ballTrackCooldown = 0,
    ballTrackCooldownText,
    couchBot,
    couchTop,
    chairBottom,
    chairTop,
    couchScratch,
    couchScratchCooldown = 0,
    couchScratchCooldownText,
    coffeeTable,
    ballTrack,
    interact,
    isRickPlaying,
    rickLooking,
    catTree1,
    catTree2,
    catTree3,
    lampTopCooldown = 0,
    lampTopCooldownText,
    lampTop,
    lampBottom,
    catDancer,
    catDancerCooldown = 0,
    catDancerCooldownText,
    camSpeed = 2,
    cabinetLeft,
    cabinetRight,
    cabinetTop,
    fridge,
    ledge,
    rickBoxBack,
    rickBoxFront,
    mixer,
    treats,
    treatsCooldown = 0,
    treatsCooldownText,
    catGrass,
    catGrassCooldown = 0,
    catGrassCooldownText,
    hud,
    lives,
    livesText,
    fountain,
    fountainCooldown = 0,
    fountainCooldownText,
    scratchTree,
    scratchTreeCooldown = 0,
    scratchTreeCooldownText,
    poop,
    poopCooldown = 0,
    poopCooldownText,
    feeder,
    feederCooldown = 0,
    feederCooldownText,
    RICK_FRAME_LOOK_LEFT = 2,
    RICK_FRAME_LOOK_RIGHT = 3,
    rickHead},

  Main.prototype {
  preload : function () {
    game.load.image('platform', 'assets/livingroom/hardwoodd.png');
    game.load.image('ground', 'assets/livingroom/hardwoodd.png');
    game.load.image('wallArt', 'assets/livingroom/wall-art.png');
    game.load.spritesheet('rick', 'assets/rick-spritee.png', 76, 44, 6);
    game.load.image('couchBottom', 'assets/livingroom/couch-bottom.png');
    game.load.spritesheet('couchScratch', 'assets/livingroom/couch-scratch.png', 28, 42, 2);
    game.load.image('couchTop', 'assets/livingroom/couch-top.png');
    game.load.image('gudetama', 'assets/livingroom/gudetama.png');
    game.load.image('coffeeTable', 'assets/livingroom/coffee-table.png');
    game.load.image('map', 'assets/livingroom/map.png');
    game.load.spritesheet('ballTrack', 'assets/livingroom/ball-track.png', 56, 24, 11);
    game.load.image('catTree', 'assets/livingroom/cat-tree.png');
    game.load.image('catTree1', 'assets/livingroom/platform-1.png');
    game.load.image('catTree2', 'assets/livingroom/platform-2.png');
    game.load.image('catTree3', 'assets/livingroom/platform-1.png');
    game.load.spritesheet('lampTop', 'assets/livingroom/lamp-top.png', 42, 118, 3);
    game.load.image('lampBottom', 'assets/livingroom/lamp-bottom.png');
    game.load.image('chairTop', 'assets/livingroom/chair-top.png');
    game.load.image('chairBottom', 'assets/livingroom/chair-bottom.png');
    game.load.image('tv', 'assets/livingroom/tv.png');
    game.load.spritesheet('catDancer', 'assets/livingroom/cat-dancer.png', 42, 40, 3);
    game.load.image('recordCabinet', 'assets/livingroom/record-cabinet.png');
    game.load.image('cabinetLeft', 'assets/livingroom/cabinet-l.png');
    game.load.image('cabinetRight', 'assets/livingroom/cabinet-r.png');
    game.load.image('cabinetTop', 'assets/livingroom/cabinet-top.png');
    game.load.image('fridge', 'assets/livingroom/fridge.png');
    game.load.image('window', 'assets/livingroom/window.png');
    game.load.image('ledge', 'assets/livingroom/ledge.png');
    game.load.image('rickBoxBack', 'assets/livingroom/rick-box-back.png');
    game.load.image('rickBoxFront', 'assets/livingroom/rick-box-front.png');
    game.load.image('mixer', 'assets/livingroom/mixer.png');
    game.load.image('treats', 'assets/livingroom/treats.png');
    game.load.image('hud', 'assets/livingroom/hud.png');
    game.load.image('lives', 'assets/livingroom/lives.png');
    game.load.image('livesText', 'assets/livingroom/lives-text.png');
    game.load.spritesheet('fountain', 'assets/livingroom/fountain.png', 38, 22, 3);
    game.load.spritesheet('catGrass', 'assets/livingroom/catgrass.png', 50, 22, 3);
    game.load.spritesheet('scratchTree', 'assets/livingroom/scratch-tree.png', 40, 54, 3);
    game.load.spritesheet('poop', 'assets/livingroom/poop.png', 62, 60, 3);
    game.load.spritesheet('feeder', 'assets/livingroom/feeder.png', 50, 64, 4);
    game.load.spritesheet('rickHead', 'assets/livingroom/rick-head.png', 146, 118, 4);
  },

  preload : function () {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.world.setBounds(0,0, 2200, 600);

    isRickPlaying = false;

    interact = game.input.keyboard.addKey(Phaser.Keyboard.E);

    game.stage.backgroundColor = '#f8f8f8';

    //  The platforms group contains the ground
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(1, 1);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    game.add.sprite(912, 200, 'wallArt');

    // Add couch bottom
    couchBot = game.add.sprite(1200, 490, 'couchBottom');
    couchBot.name = 'couchBottom';
    game.physics.enable(couchBot, Phaser.Physics.ARCADE);
    couchBot.body.collideWorldBounds = true;
    couchBot.body.checkCollision.up = true;
    couchBot.body.checkCollision.left = false;
    couchBot.body.checkCollision.right = false;
    couchBot.body.checkCollision.down = false;
    couchBot.body.immovable = true;

    // Add couch top
    couchTop = game.add.sprite(1200, 428, 'couchTop');
    couchTop.name = 'couchTop';
    game.physics.enable(couchTop, Phaser.Physics.ARCADE);
    couchTop.body.collideWorldBounds = true;
    couchTop.body.checkCollision.up = true;
    couchTop.body.checkCollision.left = false;
    couchTop.body.checkCollision.right = false;
    couchTop.body.checkCollision.down = false;
    couchTop.body.immovable = true;

    // Add. 
    couchScratch = game.add.sprite(1200, 494, 'couchScratch', 0);
    game.physics.enable(couchScratch, Phaser.Physics.ARCADE);
    couchScratch.animations.add('loop');

    // Add chair bottom
    chairBottom = game.add.sprite(1580, 490, 'chairBottom');
    chairBottom.name = 'chairBottom';
    game.physics.enable(chairBottom, Phaser.Physics.ARCADE);
    chairBottom.body.collideWorldBounds = true;
    chairBottom.body.checkCollision.up = true;
    chairBottom.body.checkCollision.left = false;
    chairBottom.body.checkCollision.right = false;
    chairBottom.body.checkCollision.down = false;
    chairBottom.body.immovable = true;

    // Add chair top
    chairTop = game.add.sprite(1580, 428, 'chairTop');
    chairTop.name = 'couchTop';
    game.physics.enable(chairTop, Phaser.Physics.ARCADE);
    chairTop.body.collideWorldBounds = true;
    chairTop.body.checkCollision.up = true;
    chairTop.body.checkCollision.left = false;
    chairTop.body.checkCollision.right = false;
    chairTop.body.checkCollision.down = false;
    chairTop.body.immovable = true;

    // kitchen stuff
    cabinetLeft = game.add.sprite(50, 434, 'cabinetLeft');
    cabinetLeft.name = 'cabinetLeft';
    game.physics.enable(cabinetLeft, Phaser.Physics.ARCADE);
    cabinetLeft.body.collideWorldBounds = true;
    cabinetLeft.body.checkCollision.up = true;
    cabinetLeft.body.checkCollision.left = false;
    cabinetLeft.body.checkCollision.right = false;
    cabinetLeft.body.checkCollision.down = false;
    cabinetLeft.body.immovable = true;

    mixer = game.add.sprite(100, 398, 'mixer');
    mixer.name = 'mixer';
    game.physics.enable(mixer, Phaser.Physics.ARCADE);
    mixer.body.collideWorldBounds = true;
    mixer.body.checkCollision.up = true;
    mixer.body.checkCollision.left = false;
    mixer.body.checkCollision.right = false;
    mixer.body.checkCollision.down = false;
    mixer.body.immovable = true;

    game.add.sprite(0, 218, 'window');

    ledge = game.add.sprite(8, 472, 'ledge');
    ledge.name = 'ledge';
    game.physics.enable(ledge, Phaser.Physics.ARCADE);
    ledge.body.collideWorldBounds = true;
    ledge.body.checkCollision.up = true;
    ledge.body.checkCollision.left = true;
    ledge.body.checkCollision.right = true;
    ledge.body.checkCollision.down = false;
    ledge.body.immovable = true;
    
    cabinetRight = game.add.sprite(248, 434, 'cabinetRight');
    cabinetRight.name = 'cabinetRight';
    game.physics.enable(cabinetRight, Phaser.Physics.ARCADE);
    cabinetRight.body.collideWorldBounds = true;
    cabinetRight.body.checkCollision.up = true;
    cabinetRight.body.checkCollision.left = false;
    cabinetRight.body.checkCollision.right = false;
    cabinetRight.body.checkCollision.down = false;
    cabinetRight.body.immovable = true;

    cabinetTop = game.add.sprite(54, 300, 'cabinetTop');
    cabinetTop.name = 'cabinetTop';
    game.physics.enable(cabinetTop, Phaser.Physics.ARCADE);
    cabinetTop.body.collideWorldBounds = true;
    cabinetTop.body.checkCollision.up = true;
    cabinetTop.body.checkCollision.left = false;
    cabinetTop.body.checkCollision.right = false;
    cabinetTop.body.checkCollision.down = false;
    cabinetTop.body.immovable = true;

    fridge = game.add.sprite(138, 352, 'fridge');
    fridge.name = 'fridge';
    game.physics.enable(fridge, Phaser.Physics.ARCADE);
    fridge.body.collideWorldBounds = true;
    fridge.body.checkCollision.up = true;
    fridge.body.checkCollision.left = false;
    fridge.body.checkCollision.right = false;
    fridge.body.checkCollision.down = false;
    fridge.body.immovable = true;

    feeder = game.add.sprite(560, 476, 'feeder', 0);
    game.physics.enable(feeder, Phaser.Physics.ARCADE);
    feeder.animations.add('loop');

    // Add lamp
    lampTop = game.add.sprite(1520, 370, 'lampTop', 0);
    game.physics.enable(lampTop, Phaser.Physics.ARCADE);
    lampTop.animations.add('loop');

    lampBottom = game.add.sprite(1520, 488, 'lampBottom');
    lampBottom.name = 'lampBottom';
    game.physics.enable(lampBottom, Phaser.Physics.ARCADE);
    lampBottom.body.collideWorldBounds = true;
    lampBottom.body.checkCollision.up = true;
    lampBottom.body.checkCollision.left = false;
    lampBottom.body.checkCollision.right = false;
    lampBottom.body.checkCollision.down = false;
    lampBottom.body.immovable = true;

    // Add all cat tree platforms
    catTree1 = game.add.sprite(1109, 466, 'catTree1');
    catTree1.name = 'catTree1';
    game.physics.enable(catTree1, Phaser.Physics.ARCADE);
    catTree1.body.collideWorldBounds = true;
    catTree1.body.checkCollision.up = true;
    catTree1.body.checkCollision.left = false;
    catTree1.body.checkCollision.right = false;
    catTree1.body.checkCollision.down = false;
    catTree1.body.immovable = true;

    catTree2 = game.add.sprite(1095, 436, 'catTree2');
    catTree2.name = 'catTree2';
    game.physics.enable(catTree2, Phaser.Physics.ARCADE);
    catTree2.body.collideWorldBounds = true;
    catTree2.body.checkCollision.up = true;
    catTree2.body.checkCollision.left = false;
    catTree2.body.checkCollision.right = false;
    catTree2.body.checkCollision.down = false;
    catTree2.body.immovable = true;

    catTree3 = game.add.sprite(1109, 404, 'catTree3');
    catTree3.name = 'catTree3';
    game.physics.enable(catTree3, Phaser.Physics.ARCADE);
    catTree3.body.collideWorldBounds = true;
    catTree3.body.checkCollision.up = true;
    catTree3.body.checkCollision.left = false;
    catTree3.body.checkCollision.right = false;
    catTree3.body.checkCollision.down = false;
    catTree3.body.immovable = true;

    // Add lamp
    scratchTree = game.add.sprite(1094, 474, 'scratchTree', 0);
    game.physics.enable(scratchTree, Phaser.Physics.ARCADE);
    scratchTree.animations.add('loop');

    // Add couch bottom
    recordCabinet = game.add.sprite(1870, 476, 'recordCabinet');
    recordCabinet.name = 'recordCabinet';
    game.physics.enable(recordCabinet, Phaser.Physics.ARCADE);
    recordCabinet.body.collideWorldBounds = true;
    recordCabinet.body.checkCollision.up = true;
    recordCabinet.body.checkCollision.left = false;
    recordCabinet.body.checkCollision.right = false;
    recordCabinet.body.checkCollision.down = false;
    recordCabinet.body.immovable = true;

    // non-collision decorative sprites
    game.add.sprite(1450, 400, 'gudetama');
    game.add.sprite(1225, 230, 'map');
    game.add.sprite(1095, 342, 'catTree');
    game.add.sprite(727, 516, 'rickBoxBack');

    treats = game.add.sprite(254, 394, 'treats');
    game.physics.enable(treats, Phaser.Physics.ARCADE);
    treats.body.collideWorldBounds = true;
    treats.body.checkCollision.up = true;
    treats.body.checkCollision.left = false;
    treats.body.checkCollision.right = false;
    treats.body.checkCollision.down = false;
    treats.body.immovable = true;


    // The player and its settings
    player = game.add.sprite(52, game.world.height - 150, 'rick');

    // Add sprites that rick goes behind here. 
    ballTrack = game.add.sprite(990, 520, 'ballTrack', 1);
    game.physics.enable(ballTrack, Phaser.Physics.ARCADE);
    ballTrack.animations.add('loop');

    poop = game.add.sprite(2100, 480, 'poop', 0);
    game.physics.enable(poop, Phaser.Physics.ARCADE);
    poop.animations.add('loop');

    // Add sprites that rick goes behind here. 
    fountain = game.add.sprite(440, 520, 'fountain', 1);
    game.physics.enable(fountain, Phaser.Physics.ARCADE);
    fountain.animations.add('loop');

    // Add sprites that rick goes behind here. 
    catGrass = game.add.sprite(370, 278, 'catGrass', 1);
    game.physics.enable(catGrass, Phaser.Physics.ARCADE);
    catGrass.animations.add('loop');

    rickBoxFront = game.add.sprite(725, 516, 'rickBoxFront');
    rickBoxFront.name = 'rickBoxFront';
    game.physics.enable(rickBoxFront, Phaser.Physics.ARCADE);
    rickBoxFront.body.collideWorldBounds = true;
    rickBoxFront.body.checkCollision.up = false;
    rickBoxFront.body.checkCollision.left = false;
    rickBoxFront.body.checkCollision.right = false;
    rickBoxFront.body.checkCollision.down = false;
    rickBoxFront.body.immovable = true;

    catDancer = game.add.sprite(1790, 500, 'catDancer', 0);
    game.physics.enable(catDancer, Phaser.Physics.ARCADE);
    catDancer.animations.add('loop');

    game.add.sprite(1874, 396, 'tv');

    // Add coffee table
    coffeeTable = game.add.sprite(1240, 510, 'coffeeTable');
    coffeeTable.name = 'coffeeTable';
    game.physics.enable(coffeeTable, Phaser.Physics.ARCADE);
    coffeeTable.body.collideWorldBounds = true;
    coffeeTable.body.checkCollision.up = true;
    coffeeTable.body.checkCollision.left = false;
    coffeeTable.body.checkCollision.right = false;
    coffeeTable.body.checkCollision.down = false;
    coffeeTable.body.immovable = true;

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 800;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1], 8, true);
    player.animations.add('right', [4, 5], 8, true);

    cursors = game.input.keyboard.createCursorKeys();

    hud = game.add.sprite(1, 1, 'hud');
    hud.fixedToCamera = true;

    // Add sprites that rick goes behind here. 
    rickHead = game.add.sprite(320, 4, 'rickHead', 0);
    game.physics.enable(rickHead, Phaser.Physics.ARCADE);
    rickHead.animations.add('loop');
    rickHead.fixedToCamera = true;

    lives = game.add.sprite(650, 41, 'lives');
    lives.fixedToCamera = true;
    
    livesText = game.add.sprite(684, 18, 'livesText');
    livesText.fixedToCamera = true;

    scoreText = game.add.text(16, 16, 'score: 0', { font: 'bold 18px BubbleButts', fill: '#fff', });
    scoreText.fixedToCamera = true;
    
    ballTrackCooldownText = game.add.text(980, 480, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    lampTopCooldownText = game.add.text(1510, 400, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    couchScratchCooldownText = game.add.text(1140, 475, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    catDancerCooldownText = game.add.text(1790, 475, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    treatsCooldownText = game.add.text(254, 376, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    catGrassCooldownText = game.add.text(350, 240, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    fountainCooldownText = game.add.text(430, 480, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    scratchTreeCooldownText = game.add.text(1090, 446, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    poopCooldownText = game.add.text(2080, 446, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
    feederCooldownText = game.add.text(550, 446, '', { font: 'Normal 12px Magic Forest', fill: '#000', });
  },

  update : function () {

    fountain.animations.play('loop', 3, true);
    rickHead.animations.play('loop', 4, true); 

    //  Collide Rick with sprites
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, couchBot);
    game.physics.arcade.collide(player, couchTop);
    game.physics.arcade.collide(player, catTree1);
    game.physics.arcade.collide(player, catTree2);
    game.physics.arcade.collide(player, catTree3);
    game.physics.arcade.collide(player, lampBottom);
    game.physics.arcade.collide(player, chairTop);
    game.physics.arcade.collide(player, chairBottom);
    game.physics.arcade.collide(player, recordCabinet);
    game.physics.arcade.collide(player, cabinetLeft);
    game.physics.arcade.collide(player, ledge);
    game.physics.arcade.collide(player, fridge);
    game.physics.arcade.collide(player, cabinetRight);
    game.physics.arcade.collide(player, cabinetTop);
    game.physics.arcade.collide(player, rickBoxFront);
    game.physics.arcade.collide(player, mixer);
    game.physics.arcade.collide(player, treats);
    

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    // Handle cooldowns.
    if (ballTrackCooldown > 0) {
      ballTrackCooldown -= 1;
      ballTrackCooldownText.text = 'cooldown: ' + Math.round(ballTrackCooldown / 60);
    }
    else if (ballTrackCooldown == 0) {
      ballTrackCooldownText.text = '';
    }

    if (lampTopCooldown > 0) {
      lampTopCooldown -= 1;
      lampTopCooldownText.text = 'cooldown: ' + Math.round(lampTopCooldown / 60);
    }
    else if (lampTopCooldown == 0) {
      lampTopCooldownText.text = '';
    }

    if (couchScratchCooldown > 0) {
      couchScratchCooldown -= 1;
      couchScratchCooldownText.text = 'cooldown: ' + Math.round(couchScratchCooldown / 60);
    }
    else if (couchScratchCooldown == 0) {
      couchScratchCooldownText.text = '';
    }

    if (catDancerCooldown > 0) {
      catDancerCooldown -= 1;
      catDancerCooldownText.text = 'cooldown: ' + Math.round(catDancerCooldown / 60);
    }
    else if (catDancerCooldown == 0) {
      catDancerCooldownText.text = '';
    }

    if (treatsCooldown > 0) {
      treatsCooldown -= 1;
      treatsCooldownText.text = 'cooldown: ' + Math.round(treatsCooldown / 60);
    }
    else if (treatsCooldown == 0) {
      treatsCooldownText.text = '';
    }

    if (catGrassCooldown > 0) {
      catGrassCooldown -= 1;
      catGrassCooldownText.text = 'cooldown: ' + Math.round(catGrassCooldown / 60);
    }
    else if (catGrassCooldown == 0) {
      catGrassCooldownText.text = '';
    }

    if (fountainCooldown > 0) {
      fountainCooldown -= 1;
      fountainCooldownText.text = 'cooldown: ' + Math.round(fountainCooldown / 60);
    }
    else if (fountainCooldown == 0) {
      fountainCooldownText.text = '';
    }

    if (scratchTreeCooldown > 0) {
      scratchTreeCooldown -= 1;
      scratchTreeCooldownText.text = 'cooldown: ' + Math.round(scratchTreeCooldown / 60);
    }
    else if (scratchTreeCooldown == 0) {
      scratchTreeCooldownText.text = '';
    }

    if (poopCooldown > 0) {
      poopCooldown -= 1;
      poopCooldownText.text = 'cooldown: ' + Math.round(poopCooldown / 60);
    }
    else if (poopCooldown == 0) {
      poopCooldownText.text = '';
    }

    if (feederCooldown > 0) {
      feederCooldown -= 1;
      feederCooldownText.text = 'cooldown: ' + Math.round(feederCooldown / 60);
    }
    else if (feederCooldown == 0) {
      feederCooldownText.text = '';
    }

    if (isRickPlaying == false) {
      if (cursors.left.isDown)
      {
        game.camera.x -= camSpeed;
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
        rickLooking = 'left';
      }
      else if (cursors.right.isDown)
      {
        game.camera.x += camSpeed;
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
        rickLooking = 'right';
      }
      else
      {
        //  Stand still
        player.animations.stop();

        if (rickLooking == 'left') {
          player.frame = RICK_FRAME_LOOK_LEFT;
        } else {
          player.frame = RICK_FRAME_LOOK_RIGHT;
        }
      }

      if (ballTrackCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, ballTrack, trackPlay, null, this);
      }

      if (lampTopCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, lampTop, lampPlay, null, this);
      }

      if (couchScratchCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, couchScratch, couchScratchPlay, null, this);
      }

      if (catDancerCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, catDancer, catDancerPlay, null, this);
      }

      if (treatsCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, treats, treatsPlay, null, this);
      }

      if (catGrassCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, catGrass, catGrassPlay, null, this);
      }

      if (fountainCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, fountain, fountainPlay, null, this);
      }

      if (scratchTreeCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, scratchTree, scratchTreePlay, null, this);
      }

      if (poopCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, poop, poopPlay, null, this);
      }

      if (feederCooldown == 0) {
        // Check for Rick to overlap with sprite and make something happen
        game.physics.arcade.overlap(player, feeder, feederPlay, null, this);
      }

      //  Allow the player to jump if they are touching the ground.
      if (cursors.up.isDown && player.body.touching.down)
      {
        player.body.velocity.y = -350;
      }

    }

    function trackPlay(player, ballTrack) {
      if (interact.isDown && interact.repeats == 1)
      {
        ballTrack.animations.play('loop', 11, true);
        ballTrackCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        ballTrackCooldownText.text = 'cooldown: ' + (ballTrackCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          ballTrack.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function lampPlay(player, lampTop) {
      if (interact.isDown && interact.repeats == 1)
      {
        lampTop.animations.play('loop', 3, true);
        lampTopCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        lampTopCooldownText.text = 'cooldown: ' + (lampTopCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          lampTop.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function couchScratchPlay(player, couchScratch) {
      if (interact.isDown && interact.repeats == 1)
      {
        couchScratch.animations.play('loop', 2, true);
        couchScratchCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        couchScratchCooldownText.text = 'cooldown: ' + (couchScratchCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          couchScratch.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function catDancerPlay(player, catDancer) {
      if (interact.isDown && interact.repeats == 1)
      {
        catDancer.animations.play('loop', 2, true);
        catDancerCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        catDancerCooldownText.text = 'cooldown: ' + (catDancerCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          catDancer.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function treatsPlay(player, treats) {
      if (interact.isDown && interact.repeats == 1)
      {
        treatsCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        treatsCooldownText.text = 'cooldown: ' + (treatsCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function catGrassPlay(player, catGrass) {
      if (interact.isDown && interact.repeats == 1)
      {
        catGrass.animations.play('loop', 3, true);
        catGrassCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        catGrassCooldownText.text = 'cooldown: ' + (catGrassCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          catGrass.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function fountainPlay(player, fountain) {
      if (interact.isDown && interact.repeats == 1)
      {
        fountainCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        fountainCooldownText.text = 'cooldown: ' + (fountainCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function scratchTreePlay(player, scratchTree) {
      if (interact.isDown && interact.repeats == 1)
      {
        scratchTree.animations.play('loop', 3, true);
        scratchTreeCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        scratchTreeCooldownText.text = 'cooldown: ' + (scratchTreeCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          scratchTree.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function poopPlay(player, poop) {
      if (interact.isDown && interact.repeats == 1)
      {
        poop.animations.play('loop', 3, true);
        poopCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        poopCooldownText.text = 'cooldown: ' + (poopCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          poop.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }

    function feederPlay(player, feeder) {
      if (interact.isDown && interact.repeats == 1)
      {
        feeder.animations.play('loop', 4, true);
        feederCooldown = 30 * 60; // 60fps, 30 seconds
        score += 50;
        scoreText.text = 'Score: ' + score;
        feederCooldownText.text = 'cooldown: ' + (feederCooldown / 60);
        isRickPlaying = true;
        player.animations.play('left');
        setTimeout(function() {
          player.animations.stop();
          feeder.animations.stop();
          isRickPlaying = false;
        }, 3000);
      }
    }
  }
}
}