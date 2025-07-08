# UPDATE 7/8/2025 - STILL ALIVE
- Migrated the game off of Glitch
- Updated the server's redirect to be automatic instead of that weird button
# UPDATE 5/21/2025 - we didnt name this one for some reason
- Added Defeatist, a doubled Streamliner whose barrel count decreases based on health
- Taurus portals no longer collide with rocks but intersecting with one will prevent the portal from releasing bullets
- Fixed the firing pattern of all Submachines
- Massively overhauled the Discord bot
- Disconnected players can randomly return as bots
- Invisible tanks can no longer cloak while in spawn invincibility
- Made leaderboard placement based purely on score
- Allowed Basic bots to spawn
- Bots spawn in an temporary idle state like players
- Bots avoid spawning near players
- Bots wander around outside of combat
- Bots can randomly decide not to flee at low health
- Bots can randomly use altfire
- Optimized Switcheroo and let bots use its variants
- Made all Boomer projectiles' movement less awkward
- Updated Bulward's design and mechanics to be more accurate
- Redesigned Bastion and renamed it to Apiary
- Redesigned Tri-Trapper and Hexa Trapper
- Fixed some branching and tier errors
- Made the upgrade tree root from Basic by default
- Removed Revolver
- Removed Surroundsound
- Removed Bent Sniper
- Removed Dismantler
- Removed Scouter
- Removed Nightowl
- Removed Nightingale
- Removed Motor
- Removed Possum
- Removed Aardvark
- Removed Straightshot
- Removed Combatant
- Removed Pummeler
- Removed Cannonry
- Removed Cannonade
- Removed Raider
- Removed Barge
- Removed Kukri
- Removed Duelist
- Removed Hardhat
- Removed Spreadstower
- Removed Superspreader
- Removed Flank Blaster
- Removed Birdseeder
- Removed Flank Pelleter
- Removed Pillar
- Removed Column
- Removed Lightflank
- Removed Cranked Pounder
- Removed Cranked Sniper
- Removed Cranked Hybrid
- Removed BC88
- Removed Vanish
- Removed Rainfall
- Removed Emissary
- Removed Flank Sniper
- Removed Hexa-Sniper
- Removed Hewn Pelleter
- Removed Hangar
- Removed Performer
- Removed Castbrid
- Removed Screecher
- Removed Hawkeye
- Removed Cardinal
- Removed Shorebird
- Removed Auto-Trapper
- Removed Auto-Pelletbrid
- Removed Scratcher
- Removed Scratchbrid
- Removed Masher
- Removed Auto-2
- Removed Twin-2
- Removed Pelleter-2
- Removed Mega-2
- Removed Giga-2
- Removed Shatter-2
- Removed Sniper-2
- Removed Assassin-2
- Removed Trapper-2
- Removed Boomer-2
- Removed Builder-2
- Removed Schematicist
- Removed Trap Guard-2
- Removed Basebrid-2
# UPDATE 4/6/2025 - Complete Upgrade Tree
- Cleaned up client code for entity rendering.
- Improved formance of upgrade tree data building.
- Removed debug text from upgrade menu.
- Made upgrade messages appear as actual messages.
- Added a searh capability to the upgrade tree.
- Added button "Upgrade to Tank" on the upgrade tree sidebar.
- Added buttons for downloading tanks as images on the upgrade tree sidebar.
- Added a "root from tank" button, which generates the tree from your current tank.
- Shaders now scale with view ratio.
- Linear interpolation (smoothing) now accounts for framerate.
# UPDATE 4/4/2025 - Some more client stuff
- Messages won't send if the prompt is blank.
- Added back tips and lore.
- Added margin on changelog line entries.
- Added an upgrade tree browser, press U to view.
- Optimized gun rendering further.
- Improved debug config capatabilities.
- Fixed guns not having a firing animation.
- Fixed images not loading under certain circumstance.
- Fixed settings acting weird with version mismatches.
- Fixed the death screen causing a crash occasionally.
- Cleaned up formatting non-javascript files.
- Made errors more prominent.
# UPDATE 4/1/2025 - Happy April 1st / Hi from Jekyllean
- This is the official release of the /preview branch.
- Replaced the minified client with an easier-to-edit version.
- Refactored and rewrote most of the client to be more performant.
- Most of the client has been rewritten and optimized, but I only mentioned the major improvements. Most of the game UI has been rewritten.
- Split definitions into multiple files to make glitch.com stop breaking.
- Completely remade the HTML and CSS of the game, making it perform better, dynamically scale and (subjectively) look better.
- Added a comprehensive settings menu, accessible via the settings button on the left side of the screen.
- Added animations for some UI elements, including the main menu.
- Added a credits screen.
- Remade the logo to be of higher quality, still in spirit of the original.
- Added a proper webmanifest.
- Add a dynamic server selector.
- Entity drawing logic has been completely rewritten, some parts from Polymania.
- Text rendering is now handled directly.
- Implemented Polymania's color blending.
- The background and grid rendering has been optimized.
- The grid now scales to lign up with zones.
- Entities can now have images as body instead of just shapes and paths.
- Messages can now include colors.
- Implemented portions of Polymania's motion prediction algorithm (Firebird).
- Added support for invisible and transparent guns.
- Added support for custom gun shapes, including left/right triangles and a circular design as samples.
- Optimized when data is sent to the server.
- Significantly optimized the binary network protocol.
- Debugging has less of an impact on performance.
- Entity management uses a Map for faster lookups and deletions.
- Improved handling of canvas focus.
- Added more robust error checking and handling, making it possible for the game to save itself and report the errors more clearly.
- Kick messages from the server can now include a reason.
- Fixed multiple crash exploits on the server.
- Optimized a few small things in the server.
- Fixed some bugs with mockup scaling.
- This update also includes various improvements and fixes made in the past for the preview branch of the client that were not previously documented.
- Added Chute, a destroyer with a few extra barrels attached to the end of the barrel. Old tank idea from the original server.
- Added Funnel, an Annihilator Chute.
- Added Trough, a Hybrid Chute, with extra brid.
- Added Laser, a Minigun with more penetration.
- Added Highbeam, a Streamliner Laser.
- Added Heatray, a Hotshot Laser.
- Added Focuser, a Carbine Laser.
- Added Infrared, a Laser that can go invisible.
- Added Hardlight, Barricade Laser.
- Added Jewel, a Laser that on redirects the path of it's lasers halfway through their lifespan.
- Added Tractor Beam, a Laser that pulls targets closer on hit.
- Added Shrinkray. Do what you must.
- Added LED, a Laser that can deploy a laser pointer with RMB.
- Added Spectrometer, shoots a prism trap that shoots lasers.
- Added Photon, a miniature Laser.
- Added Capsule, a BC90 Laser. (The faster your lasers die the faster you shoot.)
- Added Capslock, A Hybrid that can transform into a Computer. Branches from both of its counterparts.
- Added Switchbox, a Duelement that can switch homing between homing flares or homing droplets on RMB. This idea was by The named BOSS.
- Added Splitter, a Shatter whose bullet splits into 3 Shatter bullets. This idea was by Earth-kun.
- Added Airburst, an Annihilator whose bullets split into 2 halves. This idea was by Vertex.
- Added Quantum Phaser, an Assassin that has a chance to phase out of corporeality after being hit. This idea was by AJ.
- Added Hangten, A Surfer but with frigate swarms and bee spawners.
- Added Forcestop, a Compounder with an Annihilator drone.
- Added Bulward. Bulward. Bulward. Idea by The named BOSS.
- Added Flamethrower, a Minigun Inferno.
- Added Firestream, a Streamliner Inferno.
- Added Fahrenheit, a Hotshot Flamethrower.
- Added Celsius, a Carbine Flamethrower.
- Added Huo-Long, an Inferno that periodically emits a radial burst of flares.
- Added Pyromaniac, a Flamethrower that can fire an airblast that deflects projectiles.
- Added Flamegun, a Blaster that focuses on knockback.
- Added Ionizer, a Hotshot Flamegun.
- Added Heatflash, a Flamegun that shoots flares.
- Added Vulcan Gun, a Volcano Flamegun. This idea was by Earth-kun.
- Added Singe & Sear, an Inferno/Flamegun combo.
- Added Aardvark, a Blaster Bird.
- Added Phoenix, a Bird Flamegun.
- Added Storm, a Flamegun that builds internal charge on dealing damage. SHIFT to release charge when full to release it as a shockwave. This idea was by AJ
- Added Swerver, a Twister that can steer its missile with LMB and RMB respectively.
- Added Tournament, a hybrid Duelement with elemental drones.
- Added Stresser, a Pounder Fracture.
- Added Hitmarker, an Obliterator Stresser.
- Added Overstresser, a Dispatcher Stresser.
- Added Depressurizer, a Stresser that can depressurize its bullets on RMB, making them emit more at the cost of range.
- Added Foxhound, an Assassin Hunter.
- Added Sighthound, a Ranger Hunter.
- Added Extinctioner, an Obliterator Foxhound.
- Added Matutine, a Foxhound with a complimentary swarm cannon.
- Added Fennec, a miniature Foxhound.
- Added Wolfpack, a hybrid Foxhound.
- Added Hotspring, a Machine Gun with a complimentary swarm cannon. This idea was by Earth-kun.
- Added Geyser, a Volcano Hotspring. This idea was by Earth-kun.
- Added Mineral Spring, a Blaster Hotspring. This idea was by Earth-kun.
- Added Hydrothermal, a Hotspring that can go invisible. This idea was by Earth-kun.
- Added Stalagmite, a Hotspring with a complimentary trap cannon.
- Added Nineiron, which deploys an invincible cue ball. Mainfire shoots a rock that pushes it around. Branches from Conqueror. This idea was by patronum.
- Added Periscope, a diver that gains FOV while going invisible. This idea was by 359.
- Added Heatship, a boss from the old server.
- Added Elite Sharpshot.
- Re-added Blossom.
- Invisible AI now have lower FOV when cloaked.
- Updated Engineer branch to destroy it's oldest pillboxes instead of being capped out.
- Some balancing changes
- Some bugfixes
- Map Layout has been changed slightly
- Removed Submachine-2 and its branches
- Removed Magebrid-2 and its branches
- Removed Machine-2 and its branches
- Removed Generator and its branches
- Removed Snipespawner and its branches
- Removed Autopocalypse
- Removed Annibrid
- Removed Virologist for rebalancing until further notice.
# UPDATE 12/24/2023 - one update per holiday is definitely a good look
- Added Armature, a hybrid Railgun whose drones can rush forward by right clicking. This tank was an idea by Rodrigo.
- Added Megabuster
- Added Stocking, a seasonal tank that places stockings which shoot exploding presents. Branches off of Buster.
- Removed Vampire
- Removed Pestle
- Removed Doublecheck
- Removed Backcheck
- Removed Checksum
- Removed Auto-6
- Removed Striker
- Removed Silencer
- Removed Guardhouse
- Removed Swarming Builder
- Removed Swarming Constructor
- Removed Swarming Boomer
- Removed Swarming Resonator
# UPDATE 10/31/2023 - Happy Halloween
- Added Vampire, a seasonal tank that steals health from tanks it damages. Branches off of Sniper.
# UPDATE 10/14/2023 - "beta clearing"
- Added ACME, a tank that fires high damage but gravity-affected anvils. Branches off of Annihilator.
- Nerfed Virologist
- Removed Collector
- Removed Inhibitor
- Removed Decorticator
- Removed Auto-Lancer
- Removed Auto-Triblade
- Removed Auto-Chasseur
- Removed Auto-Longsword
- Removed Auto-Flail
- Removed Overbliterator
- Removed Escort
- Removed Avenue
# UPDATE 9/12/2023 - Let's get cracking
- Balance changes to EK-1
- Removed Stockcheck
- Removed Vespid
- Removed Manadriver
- Removed Superdriver
# UPDATE 6/26/2023 - technically not legally dead
- Added Railgun, a tank that fires high-velocity slugs that leave bullet trails behind. Branches off of Assassin. This tank and its branches were by Rodrigo.
- Added Impactor, a Ranger variant of Railgun. Branches from both of the aforementioned tanks.
- Added Colossus, a larger-caliber Railgun. Branches from Railgun.
- Added Particle Accelerator, a Railgun whose main slug accelerates which is also accompanied by a burst of bullets. Branches from Railgun and Buckshot.
- Added Virologist, a Swarmer-like tank that fires bacteria which grow into spinning colonies. Branches from Mega Swarmer.
- Removed Single-2 and Single-3
- Removed Obliterator-2 and Obliterator-3
- Removed Flank Destroyer, Giga-3 and Departure
- Removed Tera-2
- Removed Launchceptioner
- Removed Swarmceptioner
- Removed Bentricator and Highwayman
- Removed Sheller and Bombardier
- Removed Auto-Minishot, Sureshot, Auto-Triplet and Accustrike
- Removed Dredger, Enlistant and Combatbrid
- Removed Inciter
- Removed Blockbrid, Overbuilder and Underbuilder
- Removed Boombrid and Underrang
- Removed Mega Tri-Trapper and Mega Hexa-Trapper
- Removed Munitioner
- Removed Assaultbrid
- Removed Spellblade
- Removed Baton
- Removed Outrigger
- Removed Ambystom
# UPDATE 5/17/2023 - out with the old, in with the new
- Replaced Auto-7 with TG1-2 and made it branch from Backcheck. This tank was an idea by Rodrigo.
- Added Pestle, a Mortar with a shortened Flail on the back of it. Branches from both of its components.
- Removed Scratcher-2, Scratcher-3 and Masher-2
- Removed Mega Trapbrid
- Removed Tera Guard
- Removed Corporation
- Removed Flank Frigate, Flanksman and Flank Diver
- Removed Bowtie and Cranked Double
- Removed Envoy
- Removed Auto-Motor, Auto-Drive, Auto-Augmenter
- Removed Militant
- Removed Spinbrid and Cycloid
- Removed Sheriff
- Removed Irrigator and Streamguard
- Removed Auto-Nestling, Logger and Landscaper
- Removed Blueprinter, Auto-Hexa Trapper and Auto-Tri Trapper
- Removed Inceptioner-2 and Inceptioner-3
- Removed Augmenter, Snipedrive and Subdrive
- Removed Megadrive
- Removed Nanoswarm, Vexation and Loadout
- Removed Speedloader
- Removed Packbrid
- Removed Auto-Subduer and Subliminal
# UPDATE 4/8/2023 - turbo cancer™
- Added Asterosaberu, a Longsword that can fire a rift that pulls enemies in on touch. Branches from Longsword.
- Added Ikakalaka, a Longsword-like tank with a nerfed lance but an extremely powerful tip blade. Branches from Longsword. This idea was by turt.
- Added Cysts, a sentry type that cannot move normally and instead pulls itself around with tentacles.
- Removed the "confirm" requirement from the /reset command.
- Fixed a bug with the Doubletrouble branch duplicating its upgrades, found by IvyX.
- Hopefully fixed a bug with /reset allowing invisibility properties to carry over to any tank, found by turt.
- Removed Merlin
- Removed Flank Assassin
- Removed Destination
- Removed Bent Trapbrid
- Removed Substrate
- Removed Sublet
- Removed Twisted Pair
- Removed Chrysalis
- Removed Morpeko
- Removed Blastbrid
- Removed Superheater
- Removed Stakeout
- Removed Burrower
- Removed Autospinner
- Removed Demaru
- Removed Seagull
- Removed Stork
- Removed Energizer
- Removed Queenbee
# UPDATE 4/5/2023 - FINALLY
- Made Entangler's hive prop spin.
- This took me long enough that it deserves a changelog.
- Renamed Scavenger to Sequencer
- Removed Malignance
- Removed Altimeter
- Removed Trial
- Removed Defeatist
- Removed Undersniper
- Removed Underbliterator
- Removed Brushfire
- Removed Necrosniper
- Removed Twin Snipebrid
- Removed Woodsprite
# UPDATE 3/10/2023 - memory issues again
- Removed Miniflank
- Removed Hotflank
- Removed Minigun-3
- Removed Minigun-2
- Removed Launchbrid
- Removed Skimbrid
- Removed Launcher-2
- Removed Launcher-3
- Removed Swarmer-2
- Removed Swarmer-3
- Removed Hewn-2
- Removed Hewn-3
# UPDATE 2/28/2023 - forgot feburary was short
- Added Fragmentation, a Taurus whose bullets' have reduced range but they fire 2 sub-bullets perpendicular to themselves upon natural expiration. This idea was by The named BOSS.
- Added Fraction, a Fragmentation whose main bullets explode into 4 sub-bullets instead. Branches from Fragmentation. This idea was by The named BOSS.
- Added Refragmentation. I will not grace you with a description THE NAMED BOSS. Branches from Fragmentation. This idea was by The named BOSS.
- Added Cluster, a Hybrid Taurus whose drone spawns a small portal upon being destroyed. Branches from Taurus. This idea was by The named BOSS.
- Added Constellation, a Hybrid Fragmentation whose drone spawns 3 small swarms on death that each spawn a mini portal upon being destroyed. Branches from Cluster.
- Added Webportal, a Computer Taurus whose drone can be transformed into a large portal with Computer drone properties upon right click. Branches from Cluster.
- Removed Auto-Ship
- Removed Auto-Lord
- Removed Auto-Boomer
- Removed Dedenne
- Removed Demaru-2
- Removed Chirisu
- Removed Ninevolt
- Removed Giga Trapbrid
- Removed Raven
- Removed Kestrel
- Removed Auto-Conqueror
- Reremoved Predaguard (for real this time)
# UPDATE 2/25/2023 - Defence +
- Added Elite Fortress as a spawnable boss.
# UPDATE 2/24/2023 - HOW DID IT GET THIS BAD
- Removed Overscratcher
- Removed Giga Tri-Trapper
- Removed Auto-Giga
- Removed Auto-Mega
- Removed Doduo
- Removed Dodrio
- Removed Auto-Dispatcher
- Removed Auto-Coordinator
- Removed AA
- Removed Couplet
- Removed Triplet-2
- Removed Twinceptionbrid
- Removed Cutter
- Removed Trimmer
- Removed Lumberjack
- Removed Deforester
- Removed Blueprinter-2
- Minor (possibly major) balance changes (definitely not to Taurus it was fine on release shut up)
# UPDATE 2/23/2023 - EVENTUALLY HAS COME
- Added Shield Volcano, a tank that is exactly what it sounds like. Branches from Machshield and Volcano. This idea was by Earth-kun.
- Added the beginnings of the Taurus branch (HOLY SHIT), a series of tanks that place intangible portals that explode into bullets after a short duration. All of the ones released so far were by The named BOSS.
- Added Taurus I, a Taurus whose portals explode into 4 bullets in the cardinal directions. Branches from Sniper.
- Added Taurus II, a Taurus whose portals explode into 8 bullets in a rotated octagonal pattern. Branches from Taurus I.
- Added Taurus III, a Taurus whose portals explode into a similar pattern to Taurus II, but with 4 larger bullets in the ordinal directions. Branches from Taurus II.
- Added LOIC, a Taurus whose portals do not explode but instead emit streams of lasers in the cardinal directions. Branches from Taurus II.
- Removed Gunshield
- Removed Overmega
- Removed Undermega
- Removed Scraper
- Removed Meteoroid
- Removed Sparrow
- Removed Windbrid
- Removed Jackdaw
- Removed Magpie
- Removed Pyromaniac
- Minor balance changes
# UPDATE 1/17/2023 - new year new tanks (Eventually™)
- Removed Avalanche (actually happened a while ago it just wasnt changelogged lmao)
- Removed Hatchling
- Removed Bateleur
- Removed Auto-Flank Cruiser
- Removed Auto-Arsenal
- Removed Auto-Engineer
- Removed Auto-Carrier
- Removed Auto-Fowl
- Removed Chipper
- Removed Minispawner
- Removed Spawnbrid
- Removed Omnium (just way too op and currently unbalanceable)
# UPDATE 12/23/2022 - Merry Christmas! (Almost)
- Added Avalanche, a winter-themed season tank available for a limited time. Upgrades from Predator.
# UPDATE 12/12/2022 - HOT STUFF COMING THROUGH
- Added Spreader, a Blaster variant of Sprayer. Upgrades from both of its components.
- Added Sprawler, a Brawler variant of Spreader. Upgrades from both of its components.
- Added Volcano, a Sprayer that replaces its central barrel with 3 smaller ones. Upgrades from Sprayer and Gunner. This idea was by Earth-Kun.
- Added Lavadome, a Spreader variant of Volcano. Upgrades from both of its components. This idea was by Earth-Kun.
- Added Igneous, a Caltropper variant of Volcano. Upgrades from both of its components. This idea was by Earth-Kun.
- Added Geyser, a version of Volcano that replaces its small barrels with small swarms. Upgrades from Volcano. This idea was by Earth-Kun.
- Added Supervolcano, a Minispray version of volcano with larger middle barrels. Upgrades from both of its components. This idea was by Earth-Kun.
- Added Krakatoa, a Mechagunner variant of volcano with 4 middle barrels. Upgrades from both of its components. This idea was by Earth-Kun.
- Added Extremophile, a Stork variant of Volcano. Upgrades from both of its components. This idea was by Earth-Kun.
- Added Fumarole, a Spraybrid variant of Volcano. Upgrades from both of its components. This idea was by Earth-Kun.
- Removed Lawbringer
- Removed Jayhawk
- Removed Capstone
- Removed Attritioner
- Removed Hewn Pelletbrid
- Removed Hewn Gunbrid
- Removed Mechabrid
- Removed Trimaran
- Removed Auto-Gunslinger
- Removed Scoutceptioner
- Spreadling no longer branches from Twin or Pounder
- Fixed F and Shift inputs being conflated in some cases
- Using /reset now properly resets kill count. This bug was found by IvyX
# UPDATE 12/9/2022 - things continue to happen
- Optimized Flail (it was a nightmare before trust me)
- Denamed Dynamo to Auto-Motor
# UPDATE 11/30/2022 - there is no thanksgiving in ba sing se
- Removed Pecker.
# UPDATE 11/24/2022 - Happy Thanksgiving everyone
- Temporarily added Pecker, a new seasonal tank that branches from Bird.
# UPDATE 11/22/2022 - we back, we ball
- Added Inflator, a Shatter whose sub-bullets grow. Branches from Shatter. This idea was by Earth-Kun.
- Added Sentience, a tank that places Sentinels. Branches from Sinarachna and Engineer. This idea was by AJPlayz7.
- Added Company, a Spawner that spawns Flank Guard minions. Branches from Spawner. This idea was by Polygon.
- Added Corporation, a Spawner that spawn Hexa Tank minions. Branches from Company. This idea was by Polygon.
# UPDATE 11/10/2022 - reject modernity
- Made Twister rotation controls act like Diep's original version instead
# UPDATE 11/9/2022 - no way actually adding tanks again
- Added Ensconcer, an Entrencher whose drones are propelled by Builders instead. Branches from Entrencher. This idea was by patronum213.
- Added Ragequit, a modified Computer that loses its front gun but fires its drones forward as its main attack. This idea was by Asterisco.
- Added AIM-9, a fusion of Sidewinder and AT. Branches from both of its components.
# UPDATE 11/8/2022 - Whoops there goes the hard drive again
- Removed Auto-Duo
- Removed Hex-Auto and Oct-Auto
- Removed Bent-Auto and Pent-Auto
- Removed Punt Gun and Hewn Punt Gun
- Removed Spreadguard
- Removed Overrunner
- Removed Hydroplane
- Removed Arrokoth
- Removed Skimmer-2, Twister-2, Sidewinder-2 and Contempt
- Removed Astarte
- Removed Barriguard 😔
- Removed Underpelleter, Necropelleter and Undermachine
- Removed Sprouter and Germinator
- Removed Overshooter
- Removed Talon
- Removed Pseudorandom
- Removed Cascader and Auto-Alkaline
- Removed Mechatrapper
- Removed ROV
- Removed Scorcer
- Removed Crester
- Removed Woodpecker
- Removed Auto-Canary, Auto-Cardinal, Auto-Seeder and Auto-Crow
- Removed Auto-Miniguard
- Removed Cruiseshield
- Removed Auto-Shield, Shieldbrid and Shieldkick
# UPDATE 11/5/2022 - Remember when existing would make the game lag?
- Optimized entities to reduce lag
# UPDATE 11/1/2022 - Dipping the hard drive into the bathtub real quick
- Removed Program, Spriter, CHESS, Intel, Blastprocess, Worldweb and Adblocker
- Removed Decompressor, Decompiler and Zipbomb
- Removed Solidstate, Spellchecker and Supertasker
- Removed Technomancer, Geoscanner and Technologist
- Removed Discdrive
- Removed Slipstream and Jetstream
- Removed Paramotor and Turbofan
- Removed Airship, Aerostat and Zeppelin
- Removed Pilot and ATC
- Removed Auto-Warfare
- Removed Auto-Artillery, Aphrodite and Auto-Swarmsman
- Removed Accelerant and Burnout
- Removed Corporal, Abrasivist and Arcanist
- Removed Macrobrid
- Gave Harddrive and Autocorrect autoturrets on the tanks themselves
- Minor background optimizations
# UPDATE 10/31/2022 - Thievery
- Renamed Battery to Duracell
- Redesigned Crumbler and Collapser
- Fixed Sailcloth spawning normal drones as found by someone in chat whose name I forgot
# UPDATE 10/23/2022 - oops forgot there was already an update today
- Added Cruisebrid, branching from Cruiser and Pelletbrid.
- Added Corvette, a Cruiser Sidekick. Branches from Cruisebrid and Particulator. This idea was by Polygon.
- Added ROV, a fusion of Cruisebrid and Auto-Cruiser. Branches from both of its components and Auto-Pelletbrid.
- Added Spawnbrid, branching from Spawner. This idea was by CrazyKevin22.
- Added Omnium, a Spawner Sidekick. Branches from Spawnbrid. This idea was by CrazyKevin22.
- Added BC270, a fusion of Miniflank and BC90. Branches from both of its components. This idea was by Earth-kun.
- Fixed an FOV bug with Sidekick tanks (I forgot who reported this initially)
- Minor balance changes
# UPDATE 10/23/2022 - Balancing Act; episode 2
- Removed Sapphire for balancing.
- Removed Guardian Of The Splitting Squares for balancing.
- Removed Blossom for balancing.
# UPDATE 10/19/2022 - why do we name these does anyone even read them
- Added Crumbler, a variant of Crusher whose bullet fires homing bullets. Upgrades from Crusher.
- Added Collapser, a variant of Shatter whose bullet fires homing bullets. Upgrades from Crumbler and Shatter. This idea was by Earth-kun.
- Added Galefront, a fusion of Galehorn and Stormfront. Branches from both of its components. This idea was by Polygon.
- Partially implemented Asterisco's Jellyfish trail redesign
# UPDATE 10/18/2022 - 3am balanc
- Added Nihilist, an even larger Annihilator with slightly increased stats. Branches from Annihilator.
- Added Tidal, a Trapper variant of BC90. Branches from BC90 and Barricade. This idea was by Droid.
- Added Wideload, a Mega Trapper variant of Package Bomb. Branches from Mega Trapper.
- Added Explosive Package, a Buster whose bullet bursts into explosions. Branches from Wideload and Buster. This idea was by AJPlayz7.
- Renamed Spawndrive to Augmenter
- Renamed Auto-Spawndrive to Auto-Augmenter
# UPDATE 10/17/2022 - not functioning
- Added Engine, a Basebrid that uses Motor drones. Upgrades from Basebrid.
- Added Performer, a Basebrid that uses Dispatcher drones. Upgrades from Basebrid.
- Minor branch fixes
# UPDATE 10/16/2022 - magikal
- Added Basebrid-2, an Auto-2 variant of Basebrid. Branches from Basebrid and Auto-2. This idea was by Polygon.
- Added Magebrid-2, an Auto-2 variant of Magebrid. Branches from Basebrid-2, Trapguard-2, and Magebrid.
- Added Vice, a Hybrid Lancer. Branches from Basebrid and Lancer.
- Added Spellblade, a Magebrid Lancer. Branches from Vice and Magebrid.
- Added Cursor, a Computer Lancer. Branches from Computer and Vice. This idea was by 359.
- Added Reserve, a Trap Guard with an Arsenal on the back instead of Trapper. Branches from Trap Guard. This idea was by Polygon.
- Added Magitek, a Magebrid with an Arsenal instead of a Trapper. Branches from Magebrid and Reserve. This idea was by Polygon.
- Added Hangar, a Basebrid that uses Navyist drones. Branches from Basebrid.
# UPDATE 10/15/2022 - finally out
- Added Kivaaritehdas, a Revolutionist that can throw its ring as a projectile. Branches from Revolutionist. This idea was by Clarise.
- Added Seppalankangas, a Kiva that can throw its ring as a controllable drone. Branches from Kiva.
- Added Rajahdys, an Orbitalist that can throw its ring as an explosion. Branches from Kiva and Orbitalist. This idea was by Legends.
- Added Laulujoutsen, a Migrationist variant of Kiva. Branches from both of its components.
- Removed Spreadlaunch
# UPDATE 10/13/2022 - help
- Added Dock, a Minigun variant of BC90. Branches from BC90 and Streamliner. This idea was by Droid.
# UPDATE 10/12/2022 - reanimation
- Added Gungnir, a Longsword variant of Akafuji that opens into a Ranger. Upgrades from all of the aforementioned tanks.
- Fixed a small visual bug with the entire Akafuji branch
# UPDATE 10/10/2022 - a renamed tank
- Renamed Stormwarning to Galehorn
- Renamed Klaxon to Snowfall
- Renamed Warhorn to Cryogen
- Added Macroburst, a fusion of Megahorn and Blowhorn. Branches from both of its components. This idea was by Polygon.
- Added Coldfront, a fusion of Cloudfront and Snowfall. Branches from both of its components. This idea was by Polygon.
- Added Downdraft, a Foghorn whose traps have Repressor guns on them. Branches from Blusterer. This idea was by Polygon.
- Made Entrencher branch not garbage, as suggested by CrazyKevin22
# UPDATE 10/4/2022 - the 4
- Added Vanish, a BC90 that can become invisible. Branches from BC90 and Striker.
- Added BC88, a BC90-2. Branches from BC90.
# UPDATE 10/1/2022 - OCTOBER FIIIIIIIIIIIIIIIIIIIRST
- Added Marabunta, a Sinarachna with an alternate form that lets it control its projectiles like drones. Branches from Sinarachna and Coordinator. This idea was by Legends.
# UPDATE 9/30/2022 - back online
- Added Ward, a Sniper variant of BC90. Branches from BC90 and Carbine. This idea was by Droid.
- Added Contra, a Pounder variant of BC90. Branches from BC90 and Hotshot. This idea was by Droid.
- Minor balance changes
# UPDATE 9/29/2022 - rip streak
- Added Vix, a Hybrid variant of BC90. Branches from BC90 and Cropduster. This idea was by Droid.
- Added Omni, an Auto variant of BC90. Branchies from BC90. This idea was by Droid.
- Added Crisis, a Trap Guard variant of BC90. Branches from BC90 and Miniguard.
- Added Warhorn, a Klaxon whose traps have Mega Trapper cannons on them. Branches from Blowhorn and Klaxon. This idea was by Polygon.
- Test Dummy
# UPDATE 9/27/2022 - daily streak real
- Added Whirlwind, a Foghorn with Triple Shots on its traps. Upgrades from Blusterer. This idea was by Polygon.
- Properly added Trapmix, a Bent Trapper with one Arsenal gun, one Package Bomb gun and one Foghorn gun. Branches from Bent Trapper, Twinhorn and Twin Arsenal.
- Added Shieldbrid, a fusion of Basebrid and Baseshield. Branches from both of its components.
- Added Shieldkick, a fusion of Basekick and Baseshield. Branches from Shieldbrid and Basekick.
# UPDATE 9/26/2022 - eureka!
- Rereleased and massively optimized the Club branch
- Optimized shields in the same way
# UPDATE 9/26/2022 - THE REMOVEANING 2: ELECTRIC BOOGALOO
- Removed the entire Club branch for maintenance
# UPDATE 9/25/2022 - revisions
- Added Brawler, a fusion of Destroyer and Blaster. Branches from both of its components.
- Added Altercator, an Annihilator variant of Brawler. Branches from both of the aforementioned tanks.
- Redesigned Resonator and Restitutioner
- Renamed Dissolver to Auto-Alkaline
# UPDATE 9/24/2022 - THE REMOVEANING
- Removed the entire Smasher branch (temporarily)
# UPDATE 9/23/2022 - daily update how
- Added Auto-Sniper, branching from Auto-Basic and Sniper. This idea was by 92756375736.
- Renamed Liaison (Twin Sidekick) to Tandem
- Minor branch fixes
# UPDATE 9/22/2022 - sick kicks
- Added Liaison, a Twin Sidekick. Branches from Basekick and Twinbrid.
- Added Quaternary, a Repressor Sidekick. Branches from Liaison and Subordinate. This idea was by Polygon.
- Added Doppelganger, a Hewn Twin Sidekick. Branches from Hewn Hybrid and Liaison. This idea was by Polygon.
- Added Dismantler, an Obliterator Sidekick. Branches from Spotter and Hybliterator. This idea was by Polygon.
# UPDATE 9/16/2022 - beta obliteration update
- Added Dispatcher, a Pounder variant of Director. Branches from both of its components.
- Added Mega Overseer, branching from Dispatcher and Overseer.
- Added Mega Overlord, branching from Mega Overseer and Overlord.
- Added Coordinator, a Destroyer variant of Director. Branches from Dispatcher and Destroyer.
- Added Cooperator, a Destroyer Overseer. Branches from Mega Overseer and Coordinator.
- Added Generator, a fusion of Dispatcher and Motor. Branches from both of its components, as well as Poundceptioner.
- Added Megadrive, a fusion of Mega Overseer and Overdrive. Branches from both of its components, as well as Generator.
- Added Powertrain, a fusion of Coordinator and Motor. Branches from Coordinator, Generator and Deceptioner.
- Added Orchestrator, an Annihilator variant of Director. Branches from Annihilator and Coordinator.
- Added Fume, an Arsonist that leaves a bullet trail behind its flares. Upgrades from Arsonist. This idea was by Polygon.
- Added Twin Assassin, branching from Twin Sniper and Assassin.
- Added Twin Ranger, branching from Twin Assassin and Ranger.
- Added Apocrita, a tank that fires Elite Gunners. Branches from Launcher. This idea was by Polygon.
- Added Polistes, a tank that fires homing Summoners. Branches from Apocrita. This idea was by Polygon.
- Added Syrphidae, a tank that places Defenders like blocks. Branches from Apocrita, Engineer and Klaxon. This idea was by 359.
- Added Chrysididae, a tank that fires accelerating Comet projectiles. Branches from Apocrita. This idea was by AJPlayz7.
- Added Scoliidae, a tank that fires Destroyers (the boss) that trail turreted segments behind them. This idea was by AJPlayz7.
- Sinarachna no longer branches from Launcher
- Minor branch fixes
# UPDATE 9/10/2022 - woomy dev moment
- Optimized the fuck out of the client, making it much much faster and easier to work with
- Added client minification
- Mockups now use a newer system and load in around ~20 seconds
- Adjusted the point at which bullets come out of the guns of tanks
- Various performance improvements to the server code
- Made many changes to make the client just overall smoother and nicer to play
- Fixed the player tank in FFA being red
- Fixed upgrades always showing as team color
- Fixed issues with tanks that have facing types other than "toTarget" not overriding local aim
- Fixed an issue with the chat where if you clicked cancel or send an empty message it would cause an unencodeable datatype error
- Fixed issues with the spawn command pushing entities into the main array twice
# UPDATE 9/1/2022 - SEPTEMBER FIIIIIIIIIIIIIIIIIIIRST
- Added U-Boat, a fusion of Diver and Frigate. Upgrades from both of its components.
- Added Cargoship, a fusion of Carrier and Battleship. Upgrades from both of its components.
- Added Superskimmer, a Skimmer whose missiles are propelled by 2 smaller Skimmer missiles that split off upon death. Branches from Skimmer.
- Added Trapguard-2, an Auto-2 with trap guns on its blank faces. Upgrades from Auto-2 and Trap Guard.
- Added Ludopath, a Spotlight that fires the ammunition of an Unboxer. Branches from both of the aformentioned tanks.
- Added Convener, a Spawner variant of Commander. Branches from Commander and Factory. This idea was by Legends.
- Added EML, a Frigate that fires heavy explosive swarms. Branches from Frigate. This idea was by AJPlayz7.
- Added MP5, an Assassin variant of Submachine. Branches from both of its components.
- Added Parabellum, a Ranger variant of Submachine. Branches from MP5 and Ranger.
- Added Skinwalker, a fusion of Supervisor and Banshee. Branches from both of its components.
- Added Chainlink, a Flail that can split its chain into multiple minions. Branches from Flail and Detacher.
- Added Twinversion, a Twinception where you play as the turret instead. Branches from Twinception.
- Slightly redesigned the Beegun branch and gave it the ability to lock its aiming like Cruiser
- Renamed Skylark (Sidewinder Bird) to Sparrow
- Renamed Nightingale (Scouter Bird) to Nightowl
- Added Nightingale, a Stalker Bird. Branches from Nightowl, Falcon and Stalker.
- Allowed bots to spawn as tanks lower than Tier 4
- Redesigned BC90 to closer resemble the original suggestion
- Removed Subatom
- Minor branch fixes and balance changes
# UPDATE 8/30/2022 - cutting edge
- Added Akafuji, a longer lancer that can open its blade to reveal a Basic gun. Branches from Chasseur. This idea was originally from Woomy.
- Added Nokideth, a modified Akafuji that opens into 4 swarmguns instead. Branches from Akafuji. This idea was originally by GENIE!.
- Added Derringer, a modified Akafuji that opens into 4 autoturrets instead. Branches from Akafuji. This idea was by 359.
- Added Katar, an Akafuji that opens up into a Lancer. Branches from Akafuji. This idea was by Polygon.
# UPDATE 8/29/2022 - still alive-ish
- Added Securer Gunner, a variant of Mechagunner that fires traps. Branches from Mechagunner.
- Added Companionship, a Battleship that loses its swarms in favor of spawning two Cruiser minions instead. Upgrades from Battleship.
- Added Machine Arsenal, branching from Machceptioner, Securer and Arsenal.
- Renamed Hexaferno to Emblazoner
- Minor branch fixes
# UPDATE 8/24/2022 - the Help Beta Immediately Filled Up Again™ update
- Renamed Machine Gunner to Mechagunner
- Added Mecha Alkaline, a Mechagunner with 2 more Machine Guns. Branches from Mechagunner and Alkaline.
- Added Blastgunner, a Blaster variant of Mechagunner. Branches from Mechagunner.
- Added Minigunner, a Minigun variant of Mechagunner. Branches from Mechagunner.
- Added Mechatrapper, a Mechagunner variant of Gunner Trapper. Branches from both of its components.
- Added Tera Guard, a Trap Guard with its rear gun upgraded to a Tera Trapper. Branches from Trap Guard.
- Minor balance changes
# UPDATE 8/22/2022 - the Help Beta Is Literally Full™ update
- Added Tatter, a Shatter that emits traps instead of bullets. Branches from Shatter. This idea was by AJPlayz7.
- Added Snipespawner, a Spawner that spawns Snipers. Branches from Spawner.
- Added Minispawner, a Spawner that spawns Miniguns. Branches from Snipespawner.
- Added Assassin Spawner, branching from Snipespawner.
- Added Snipedrive, a Sniper variant of Spawndrive. Branches from Snipespawner and Spawndrive.
- Added Autotomizer, an Auto-5 that can detach its turrets to reveal extra barrels. Branches from Auto-5 and Detacher.
- Added Regenerator, an Axolotl that has higher base Shield and Regeneration. Branches from Axolotl.
- Added Diver, a Cruiser that can go invisible. Upgrades from Cruiser and Manager.
- Added Submerger, a Battleship that can go invisible. Upgrades from Battleship, Supervisor and Diver.
- Added Flank Diver, a Flank Cruiser that can go invisible. Branches from Flank Cruiser and Diver.
- Added Tigerpit, a Blaster/Mega Trapper variant of Caltropper. Branches from Container and Caltropper.
- Added Overmega, a Mega Trapper variant of Overtrapper. Branches from Overtrapper, Overpounder and Mega Trapbrid.
- Added Undermega, a Mega Trapper variant of Undertrapper. Branches from Undertrapper, Underpounder and Mega Trapbrid.
- Added Swarming Mega, a Mega Trapper with a single Frigate gun. Branches from Mega Trapper and Swarming Trapper.
- Added Swarming Giga, a Giga Trapper with a single Dreadnought gun. Branches from Giga Trapper and Swarming Mega.
- Added Swarming Constructor, a Constructor variant of Swarming Mega. Branches from Swarming Mega, Swarming Builder and Constructor.
- Added Swarming Resonator, a Resonator variant of Swarming Mega. Branches from Swarming Mega, Swarming Boomer and Resonator.
- Renamed Megastructure (Giga Builder) to Superstructure
- Renamed Mixer (Machine Builder) to Machinist
- Minor balance changes
# UPDATE 8/19/2022 - the Shield™ update
- Added Baseshield, a Basic with a shield that can deflect projectiles mounted on its back. Branches from Flank Guard. This idea was by patronum213 based on Woomy's Back Shield.
- Added Twinshield, a Twin variant of Baseshield. Upgrades from Baseshield and Double Twin. This idea was by patronum213 based on Woomy's Attacker.
- Added Snipeshield, a Sniper variant of Baseshield. Upgrades from Baseshield and Flank Sniper. This idea was by patronum213.
- Added Machshield, a Machine Gun variant of Baseshield. Upgrades from Baseshield and Flank Machine. This idea was by patronum213.
- Added Poundshield, a Pounder variant of Baseshield. Upgrades from Baseshield and Flank Pounder. This idea was by patronum213.
- Added Trapshield, a Trapper variant of Baseshield. Upgrades from Baseshield and Tri-Trapper. This idea was by patronum213.
- Added Lanceshield, a Lancer variant of Baseshield. Upgrades from Baseshield and Triblade. This idea was by patronum213 based on Woomy's Slasher.
- Added Crossguard, a Lanceshield with two additional small shields. Upgrades from Lanceshield. This idea was by patronum213.
- Added Pelletshield, an Auto variant of Baseshield. Upgrades from Baseshield and Flank Pelleter. This idea was by patronum213.
- Added Incepshield, an Inceptioner variant of Baseshield. Upgrades from Baseshield and Flankceptioner. This idea was by patronum213.
- Added Autoshield, an Auto variant of Baseshield. Upgrades from Baseshield and Auto-Flank. This idea was by patronum213.
- Added Gunshield, a Gunner variant of Baseshield. Upgrades from Twinshield, Pelletshield and Pillar. This idea was by patronum213.
- Added Smotherer, a Streamliner with two more barrels. Upgrades from Streamliner. This idea was originally from Woomy.
- Added Database, a Megabyte variant of Server. Branches from both of its components.
- Added Tera-2, an Annihilator variant of Auto-2. Branches from Giga-2 and Annihilator. This idea was originally from Woomy.
- Added Mega Trapper-2, a Mega Trapper variant of Auto-2. Branches from Mega Trapper, Trapper-2 and Mega-2.
- Added Mega Trapper-3, a Mega Trapper variant of Auto-3. Branches from Mega Trapper-2, Trapper-3 and Mega-3.
- Renamed Chopper (Auto-Machine Gunner) to Cascader
- Renamed Auto-Builder to Blueprinter
- Added Blueprinter-2, branching from Scratcher-2 and Builder-2
- Removed Launchpad
- Removed quick upgrade hotkeys
- Minor balance changes and branch fixes
# UPDATE 8/10/2022 - the Normal™ update
- Added Northrop, a Bomber with all of its weapons upgraded to a higher caliber. Branches from Bomber, Tri-Mega Trapper and Mesa.
- Added Stratofort, a Bomber with its front gun replaced with a Trapper and 3 additional swarm guns. Branches from Bomber, Surfer and Fortress.
- Added Liberator, an Auto-Bomber that drops Arsenal traps. Branches from Bomber, Auto-Tri-Angle and Auto-Tri Trapper.
- Added Bent Sniper, a Triple Shot Sniper. Branches from Twin Sniper, Shootist and Triple Shot.
- Added Cranked Sniper, a Penta Shot Sniper. Branches from Bent Sniper and Penta Shot.
- Added Bent Pounder, a Triple Shot Pounder. Branches from Heavy Twin, Artillery and Triple Shot.
- Added Cranked Pounder, a Penta Shot Pounder. Branches from Bent Pounder, Mortar and Penta Shot.
- Poundlet now branches from Bent Pounder instead of Heavy Twin
- Renamed Chancetaker (Mixer Unboxer) to Slotmachine
- Renamed Nucleus (Auto-Comet) to Arrokoth
- Minor balance changes and branch fixes
# UPDATE ?/?/???? - The H̷̜͇̔̽̆͌́͆̕͘͠Ę̶̫͔̹̄̈L̷̢̡̿̾́̀́̒͜P̵̡̧͓͍̮̙͛̄͂̎̀̚͘™̶̹̖̹̠̞̭̼͒̿̃ Update
- F̵̼̳̒i̶̹͖͌̕ẍ̵͚́ed Blastc̶̢̋̍̀͜è̷͍̔͠ṗ̴͈̱̪̕t̴̢͇̰͑̀i̵̢̎͝ő̴̗̣̂ṅ̶̙̣̗͒̇er
- Added Duelement, a tank that fires Inferno flares and shrinking droplets. Branches from Sprayer and Inferno. This idea was originally from the old server.
- Added Eliminator, a high-caliber Duelement. Branches from Duelement and Immolator.
- Added Tripelement, a Duelement that regains its Sprayer cannon. Branches from Duelement.
- Added Condensator, a Flaregun whose missiles are propelled by Duelements. Branches from Duelement and Flaregun.
- Added Mixer, a Machine Builder. Branches from Builder, Blaster and Securer.
- Added Cementer, a Constructor variant of Mixer. Branches from both of its components, as well as Container.
- Added Strobelight, a Spotlight variant of Mixer. Branches from both of its components, as well as Fogmachine.
- Added Aggregator, an Engineer variant of Mixer. Branches from both of its components.
- Added Chancetaker, an Unboxer variant of Mixer. Branches from both of its components.
# UPDATE 8/7/2022 - the Gun Control™ update
- Removed the entire Rifle branch
- That's literally it
# UPDATE 8/6/2022 - the Mega™ update
- Added Mega Trapper, a combination of Pounder and Trapper. Branches from both of its components.
- Added Giga Trapper, a combination of Destroyer and Trapper. Branches from Destroyer and Mega Trapper. This idea was originally from Woomy.
- Added Tera Trapper, a combination of Annihilator and Trapper. Branches from Annihilator and Giga Trapper. This idea was originally from Woomy.
- Added Mega Arsenal, branching from Mega Trapper, Arsenal and Poundceptioner.
- Added Megahorn, branching from Mega Trapper and Foghorn.
- Added Outsize, a Giga Trapper Package Bomb. Branches from Giga Trapper.
- Added Container, a Machine Mega Trapper. Branches from Securer, Mega Trapper and Blaster.
- Added Protector, a Machine Giga Trapper. Branches from Container and Giga Trapper.
- Added Mega Tri-Trapper, branching from Mega Trapper, Tri-Trapper and Flank Pounder.
- Added Mega Hexa-Trapper, branching from Mega Tri-Trapper, Hexa-Trapper and Hexa Pounder.
- Added Giga Tri-Trapper, branching from Mega Tri-Trapper and Flank Destroyer.
- Added Mega Trapbrid, branching from Mega Trapper, Trapbrid and Poundbrid.
- Added Giga Trapbrid, branching from Giga Trapper, Mega Trapbrid and Hybrid.
- Added Lumberjack, a Mega Trapper variant of Logger. Branches from Logger, Mega Trapper and Crow.
- Added Deforester, a Giga Trapper variant of Logger. Branches from Lumberjack, Giga Trapper and Eagle.
- Added Megastructure, an even larger Constructor. Branches from Constructor, Giga Trapper and Annihilator.
- Made Buster branch from Mega Trapper instead of Builder.
- Added Grenadier, a Buster that explodes into more shrapnel. Branches from Buster.
- Added Combustor, a Buster that explodes into flares instead of bullets. Branches from Buster.
- Added PGE, a Buster that explodes into homing shrapnel. Branches from Buster. This idea was by Abyss and was named by patronum213.
- Added Crusher, a Pounder variant of Shatter. Branches from Pounder. This idea was by AJPlayz7.
- Added Compressor, an Obliterator variant of Shatter. Branches from Obliterator and Crusher. This idea was by AJPlayz7.
# UPDATE 8/5/2022 - stuff
- Added Spotlight, a Builder variant of Foghorn. Branches from both of its components.
- Added Searchlight, a Builder variant of Stormcloud. Branches from both of its components.
- Added Lighthouse, a Constructor variant of Spotlight. Branches from both of its components.
- Added Worklamp, an Engineer variant of Spotlight. Branches from both of its components, as well as Cloudfront.
- Added Subdrive, a combination of Subassembler and Spawndrive. Branches from both of its components.
- Renamed Mechatrapper to Securer and slightly adjusted its design
- Renamed Mechabrid to Securbrid
- Removed Faultline
- Minor balance changes
# UPDATE 8/4/2022 - little fixes
- Added Palace, Fortress with Mega Trappers. Branches from Fortress and Excursion.
- Added Bastion, a smaller Fortress that shoots bees instead of swarms. Branches from Fortress. This idea was by Legends.
- Added Disparager, a fusion of Scourn and Skimmer. Branches from both of its components.
- Added Subatom, an extremely small Subduer. Branches from Subduer.
- Added Hewn-2, branching from Hewn Twin and Twin-2.
- Added Hewn-3, branching from Hewn-2 and Twin-3.
- Renamed Auto-Motor to Dynamo
- Renamed Subspawner to Subassembler
- Fixed Triplet-2's excessive view range
- Made more upgrades consistent and fixed some branches
- Minor balance and optimization changes
# UPDATE 7/24/2022 - necros rise up
- Added Undertrapper, branching from Trapbrid and Underseer.
- Added Necrotrapper, branching from Undertrapper and Necromancer.
- Added Firefight, branching from Warfare and Undertrapper. This idea was by Polygon.
- Added Bioweapon, branching from Infection and Undertrapper. This idea was by Polygon.
- Added Fogseer, branching from Fogbrid and Undertrapper. This idea was by Polygon.
- Added Underrang, branching from Boombrid and Undertrapper.
- Added Giga-2, branching from Destroyer and Mega-2.
- Added Giga-3, branching from Flank Destroyer, Mega-3 and Giga-2.
- Added Boomer-2, branching from Boomer and Trapper-2.
- Added Boomer-3, branching from Boomer and Trapper-3.
- Added Scratcher-2, branching from Doublecheck and Scratcher.
- Added Scratcher-3, branching from Backcheck and Mega-3.
- Added Masher-2, branching from Scratcher-2, Giga-2 and Masher.
- Added Pergerine, a Falcon with Canary thrusters. Branches from Falcon.
- Added Ninevolt, an Energizer with Canary thrusters. Branches from Energizer.
- Added Hawkeye, a Screecher with Canary thrusters. Branches from Screecher or Hawk.
- Added Mega Barricade, a combination of Barricade and Hotshot. Branches from both of its components.
- Added Windfall, a combination of Foghorn and Barricade. Branches from Barricade and Fogmachine.
- Renamed Trapliner to Riot (name by Polygon)
- Reorganized some upgrades to be more consistent
- Minor bugfixes
# UPDATE 7/23/2022 - i was hired to make tanks not name updates
- Added Mega-2, branching from Pounder and Auto-2.
- Added Auto-Unboxer, branching from Unboxer and Auto-Builder.
- Added Giftwrapper, an Unboxer-2. Branches from Unboxer and Builder-2.
- Added Gunferno, branching from Machine Gunner and Twinferno.
- Added Ignition, a combination of Advent and Arsonist. Branches from both of its components.
- Major branch fixes
- Minor balance changes
# UPDATE 7/21/2022 - more tanks for your arsenal
- We have a new trial developer, patronum213!
- Added Sawblade, an Orbitalist that can speed up its ring on right-click, also causing it to cut through enemies. Branches from Orbitalist.
- Added Clothier, a Velveter with its drone spawners mounted on two flail-arms. Branches from Velveter and Flail. This idea was by Polygon(?).
- Added Blusterer, a Foghorn whose traps have Twin barrels arranged like Triple Twin. Branches from Foghorn and Twin Guard. This idea was by Polygon.
- Added Equalizer, a Pounder Submachine. Branches from Submachine, Obliterator and Macro.
- Added Tomislav, a Destroyer Submachine. Branches from Equalizer and Supra.
- Added Arsonist, an Assassin Inferno. Branches from both of its components.
- Added Incendiary, a Ranger Inferno. Branches from Ranger and Arsonist.
- Added Reigniter, a Hybrid Arsonist. Branches from Arsonist, Hybrid Assassin and Reheater.
- Added Overpounder, branching from Overseer and Poundbrid. This idea was by 4NAX the bad.
- Added Overscratcher, branching from Auto-Seer, Scratchbrid and Overpounder.
- Added Grainline, a Velveter with its rear gun upgraded to a Mega Trapper. Branches from Velveter. This idea was by AJPlayz7.
- Changed Buster's appearance to Abyss's updated design.
# UPDATE 7/12/2022 - the pain of using an alt
- Added Subspawner, a Spawner that spawns Subduers. Branches from Spawner.
- Added Garrison, an Arsenal variant of Barricade. Branches from Barricade and Algorithm.
- Added Blockade, a Builder variant of Barricade. Branches from Barricade.
- Added Trapper-2, branching from Auto-2 and Trapper.
- Added Trapper-3, branching from Auto-3, Tri-Trapper and Trapper-2.
- Added Textiler, a variant of Textilator with its Auto-4 guns swapped for Trapper turrets and vice versa. Branches from Trapper-3 and Velveter.
- Renamed Auto-Magebrid to Multiclasser.
- Minor branch fixes
# UPDATE 7/11/2022 - haha 7/11
- Added Dragonbreath, a Shotgun that shoots flares. Branches from Immolator and Buckshot.
- Minor miscellaneous fixes
# UPDATE 7/9/2022 - 9th of the j
- Added Bumpstock, a fusion of Minigun and Shotgun. Branches from Hotshot and Buckshot.
- Removed Patriot since it's been a few days.
# UPDATE 7/4/2022 - 4th of the j
- Added Patriot, a seasonal tank that shoots fireworks. Branches from Launcher. This idea was by Polygon.
- Added Endprocess, a Taskmanager that spawns a Tri-Angle. Branches from Taskmanager and Keylogger. This idea was by Polygon.
- Added Repressor, a Twin Subduer. Branches from both of its components.
- Added Hylaeus, a fusion of Supra and Sinarachna. Branches from both of its components.
- Added Underpelleter, a Pelleter Underbrid. Branches from Pelletbrid and Underseer.
- Added Necropelleter, an Underpelleter with more spawners. Branches from Underpelleter, Overpelleter and Necromancer.
- Added Undermachine, a Submachine Underbrid. branches from Crewman and Underpelleter.
- Renamed Sealclubber (Club Bird) to Rockhopper.
# UPDATE 7/1/2022 - companies after pride month be like
- Added Substrate, a Straightshot Subduer. Branches from Subjugator and Straightshot.
- Added Snipelet, branching from Triplet and Sharpshot.
- Added Sublet, branching from Triplet and Substrate.
- Removed Arcenciel
# UPDATE 6/26/2022 - ignore the previous update name
- Added R.A.M., a Computer that spawns a slow but controllable Smasher. Branches from Taskmanager.
- Added Wehrmacht, a fusion of Flaregun and Scourn. Branches from both of its components. This idea was by Polygon and AJPlayz7.
- Renamed Datastacker (Destroyer Computer) to Bruteforce.
# UPDATE 6/25/2022 - its an i not an l
- Added Stanza, a small Poacher. This idea was by 4NAX the bad and was based off of Clarise's Iamb.
- Added Swarmwark, a Bulwark with two additional swarmguns. Branches from Bulwark, Flank Cruiser and Infester.
- Minor balance changes and branch fixes
# UPDATE 6/24/2022 - legends isnt around to name these for me anymore help
- Added Solarized Dark theme by Road at the request of 4NAX the bad.
- Minor bugfixes
- Made Defender properly spawnable.
# UPDATE 6/21/2022 - it burns
- Replaced Septa Trapper with Octo Trapper.
- Reworked Bonfire into a Lv60 tank; it now branches from Immolator and Scourn.
- Removed Wildfire
# UPDATE 6/19/2022 - help
- Added Flankship, a fusion of Battleship and Flank Cruiser. Branches from both of its components.
- Added Seamripper, a Velveter that fires rapidly growing traps with heavy recoil. Branches from Velveter.
- Minor branch fixes
# UPDATE 6/18/2022 - minor branch fixes
- Added Podcaster, a Caster variant of Velveter. Branches from Overcast and Velveter. This idea was by Legends.
- Minor branch fixes
# UPDATE 6/16/2022 - thank god nobody actually checks the game this update had a really stupid name for most of the day
- Added Planck Length, a small Streamliner. Branches from Streamliner. This idea was by Polygon.
- Added Python, an Assassin Sidewinder. Branches from Sidewinder.
- Added Networker, a Computer that spawns an Auto-3 drone. Branches from Harddrive. This idea was by Legends.
- Added Rebounder, a fusion of Mechatrapper and Boomer. Branches from both of its components.
- Added Airship, a fusion of Spawner and Turbulence. Branches from both of its components. This idea was by Legends.
- Added Zeppelin, a fusion of Spawndrive and Turbulence. Branches from both of its components as well as Airship and Paramotor. This idea was by Legends.
- Added Aerostat, a fusion of Factory and Turbulence. Branches from Factory and Airship. This idea was by Legends.
- Added Lilith, a Spawner with a single powerful minion that can create a temporary clone of itself. Branches from Factory. This idea was by Ruwen.
- Added Shatter-2, branching from Shatter. This idea was by Earth-Kun.
- Connected the Foghorn branch to Trap Guard branch (i.e. Mesa branches to Blowhorn, Miniguard branches to Galeforce, etc)
- Made Twister branch missile rotation controllable.
- Minor balance changes and branch fixes
# UPDATE 6/15/2022 - clearing beta hopefully
- Added Castano, a tank that can swap between Constructor and Ranger. Branches from both of its constituent forms. This idea was by AJPlayz7.
- Added Redistriburang, an alternative to Redistributor that fires bigger and faster bullets at the risk of them killing you upon returning. Branches from Resonator.
- Added Nylonweaver, a Velveter that Legends touched. Branches from Velveter and Auto-Pellet Guard. This idea was by Legends.
- Added Reaper, a Taskmanager whose minion has a short trail behind it. Branches from Taskmanager. This idea was by Polygon.
- Added Multithread, a Velveter with two nerfed Computer drones. Branches from Velveter, Server and Program. This idea was by Polygon.
# UPDATE 6/??/2022 - why does this keep happening
- Made lance and trap type projectiles do less damage to bosses.
# UPDATE 6/14/2022 - a one man lightshow
- Added Lightflank, a fusion of Triple Twin and Pillar. Branches from both of its components.
- Rebalanced Pillar branch.
- Adjusted Beekeeper for performance reasons.
# UPDATE 6/13/2022 - get wrecked
- Made Wrecker's bullet burst into 5 bullets instead of 4.
- Made Lancer branch hitboxes more accurate to the visible lance.
# UPDATE 6/11/2022 - long overdue
- Added Hornet, a Swarmer Hybrid. Branches from Swarmer and Poundbrid. This idea was by AJPlayz7.
- Added Lykan, a Swarmer Underbrid. Branches from Underpounder and Hornet. This idea was by AJPlayz7.
- Added Locus, a Minigun Underbrid. Branches from Cropduster and Guardhouse. This idea was by AJPlayz7.
- Added Flankferno, branching from Inferno and Flank Machine. This idea was by AJPlayz7.
- Added Bigshot, a Destroyer Hotshot. Branches from Hotshot.
- Added Wavers, a Crasher that moves towards targets in a zigzag.
- Slightly modified Vipers' movement.
- Made Observers more observant.
# UPDATE 6/10/2022 - plague be upon ye
- Added Big Boy, a Swarmer with one giant bee cannon per bullet. Branches from Mega Swarmer. This idea was by Violin.
- Added Myriad, a fusion of Copius and Mega Swarmer. Branches from both of its components and Supra.
- Added Cartridge, a fusion of Ranger and Carbine. Branches from both of its components.
- Added Caliber, a fusion of Carbine and Hotshot. Branches from both of its components.
- Added Heatseeker, a fusion of Hotshot and Algorithm. Branches from both of its components.
- Removed Katar.
# UPDATE 6/9/2022 - under the radar
- Added Executive, a fusion of Supervisor and Overlord. Branches from both of its components.
- Added CEO, a fusion of Supervisor and Commander. Branches from both of its components.
- Added Nightingale, a Scouter Bird. Branches from Scouter and Owl.
- Added Chrysalis, a Pillar with the same ability as Doubletrouble. Branches from Doubletrouble and Pillar.
- Added Baton, a Club that automatically aims at targets. Branches from Club.
- Minor balance changes
- Minor background optimizations
- Minor branch fixes
# UPDATE 6/8/2022 - this entire branch brought to you by legends
- Readded a reworked Commander, now functioning as an Overseer with swarm spawners. Branches from Overseer, Caravan and Cruiser.
- Added Officiant, an Overlord variant of Commander. Branches from Overlord, Battleship, Expedition and Commander.
- Added Pilot, a Tradewind variant of Commander. Branches from both of its components.
- Added Delegate, an Overdrive variant of Commander. Branches from both of its components.
- Added Admiral, an Armsracer variant of Commander. Branches from both of its components.
- Added Command Block, a Necromancer variant of Commander. Branches from both of its components.
- Added Headmistress, a fusion of Commander and Fortress. Branches from both of its components and Overtrapper.
- Added Captain, a Frigate variant of Commander. Branches from both of its components, as well as Roadtrain.
- Added Auto-Commander, branching from Auto-Seer, Auto-Cruiser, Lookout and Commander.
# UPDATE 6/8/2022 - upd ate
- Added Scabbard, a Conqueror with a lance that slides between the front or back of the tank. Upgrades from Conqueror.
- Added Titanoboa, a Destroyer Sidewinder. Branches from Sidewinder.
- Added Cache, a Server with faster drones that also respawn faster. Branches from Server. This idea was by Legends.
- Made Hatchling minions normal Birds rather than Nestlings but increased its minion cap to 4.
- Lowered the health of Cloakers.
- Minor branch fixes
# UPDATE 6/6/2022 - whoops its tomorrow
- Added Detacher, a Flank Guard crossed with an Auto-3 that can split its turrets off into minions. Branches from Hexa Tank, Auto-3 and Spawner. This idea was by Abyss.
- Added Katkaista, a Revolutionist with a similar ability. Branches from Detacher and Orbitalist.
- Added Meteoroid, a Comet with a similar ability. Branches from Detacher and Comet.
- Added Decoupler, an upgraded Detacher additional turrets and guns. Branches from Octo Tank, Auto-4, Factory and Detacher.
- Added Wraparound, a Velveter with additional weapons mounted on a Revolutionist ring. Branches from Velveter and Orbitalist.
- Added Flanksman, a Flank Cruiser with its rear Cruiser upgraded to a Swarmsman. Branches from both of its components and Excursion.
- Added Communicator, a Computer that spawns a mini Messenger. Branches from Harddrive. This idea was by Legends.
- Added Plowshare, a Hybrid Carbine. Branches from Carbine, Cropduster and Hybrid Assassin. This idea was by Polygon.
- Added Rainfall, a Hybrid Algorithm. Branches from Algorithm and Cropduster. This idea was by Polygon.
- Added Hedgerow, a Hybrid Barricade. Branches from Barricade, Cropduster and Mechabrid. This idea was by Polygon.
- Renamed Chevron (Hybrid Hotshot) to Harvester.
- Removed Smasher-branch AIs.
# UPDATE 6/5/2022 - omg ege
- Added Excursion, a fusion of Flank Pounder and Caravan. Branches from both of its components.
- Added Departure, a Flank Destroyer variant of Excursion. Branches from both of its components.
- Fixed Egg Sanctuary.
- Buffed EK-1.
- Minor balance changes.
# UPDATE 6/3/2022 - endless, nameless
- Added Danmaku, an Alkaline with yet another set of guns. Branches from Alkaline and Triplet.
- Added Cloakers, an invisible crasher that moves slowly but has high damage.
- Minor branch fixes
# UPDATE ?/?/2022 - i have no idea how we forgot to mention this
- Reworked the entire Underseer branch to act more like Summoner
- Each individual square is weaker than before but can be spawned extremely fast
# UPDATE 6/2/2022 - and then it happened
- Nerfed the spawn rate of Sentinels to match Sentries.
- Added Arcenciel, a Pride Month exclusive tank that shoots an arc of bullets. Branches from Shotgun and Spreadshot.
# UPDATE 5/30/2022 - story of undertale
- Added Underpounder, branching from Underseer and Poundbrid.
- Added Underbrid, branching from Underpounder and Hybrid.
- Added Underbliterator, branching from Underpounder and Hybliterator.
- Added Underbuilder, branching from Underpounder and Blockbrid.
# UPDATE 5/29/2022 - the Pillar™ Update
- Added Pillar, a fusion of Gunner and Double Twin. Branches from both of its components, as well as Flank Pelleter.
- Added AA, an Alkaline variant of Pillar. Branches from both of its components.
- Added Twinferno, branching from Twin Sniper and Inferno.
# UPDATE 5/28/2022 - back in business again
- Added Packbrid, a Package Bomb hybrid. Branches from Trapbrid.
- Added Blastprocess, a combination of Package Bomb an Program. Branches from both of its components.
- Added Omniscient, a Ranger with even more view range. Branches from Ranger.
# UPDATE 5/26/2022 - you have no idea what's coming
- Added Roadtrain, a Frigate Caravan. Branches from Caravan.
- Added Explorer, a Frigate Expedition. Branches from Roadtrain or Expedition.
- Added Longhaul, a Dreadnought Caravan. Branches from Roadtrain.
- Removed Albatross, Pelican and Crane.
- Removed Master.
- Temporarily removed Commander.
# UPDATE 5/22/2022 - go listen to credits song for my death
- Added Tiedown, a Package Bomb Velveter. Branches from Velveter.
- Added Tyrian, a Velveter with a Submachine turret. Branches from Velveter or Crewman. This idea was by AJPlayz7.
# UPDATE 5/21/2022 - Press enter to start
- Added Moment as a spawnable boss.
- Added Blossom as a spawnable boss.
- Fixed Warmonger's missiles not autofiring.
# UPDATE 5/18/2022 - stiiiiiill trying
- Added Backstrap, a Velveter with its trapper upgraded to a Boomer. Branches from Boombrid and Velveter. This idea was by funnyusername.
- Added Infernoceptioner, branching from Machceptioner, Snipeceptioner and Inferno.
- Added Immoceptioner, an Immolator Inceptioner. Branches from Infernoceptioner, Blastceptioner and Immolator.
- Added Guardhouse, a modified Machbrid that spawns sunchips instead of drones. Branches from Machbrid and Underseer. This idea was by Polygon.
- Added Hellraiser, a modified Reheater that spawns sunchips instead of drones. Branches from Reheater and Guardhouse.
- Added Outrider, a fusion of Oversniper and Assassin. Branches from Oversniper and Hybrid Assassin.
- Added Spark, a smaller Inferno. Branches from Inferno.
- Minor branch fixes
# UPDATE 5/17/2022 - still trying to clear beta help
- Added Adrenaliner, a Streamliner that can fire more bullets at the cost of its own health. Branches from Streamliner. This idea was by AJPlayz7.
- Added Reinforcer, a Conqueror with autoturrets on all of its projectiles. Branches from Conqueror, Engineer, Deceptioner and Plateau.
- Added Insurrectionist, a Conqueror with the caliber of both of its guns increased. Branches from Conqueror, Constructor and Annihilator.
- Added Wrecker, an Annihilator Shatter. Branches from both of its components. This idea was by AJPlayz7.
- Added Mechanist, a Constructor Engineer. Branches from both of its components.
# UPDATE 5/16/2022 - i thought more would happen today ngl
- Minor branch fixes
# UPDATE 5/15/2022 - DAY 15 GIVE IT UP FOR DAY 15
- Added Auto-Motor, branching from Auto-Director, Autoceptioner and Motor.
- Readded Doomsayer
- Minor balance changes
# UPDATE 5/14/2022 - a few unexpected guests
- Added Flank Pounder, branching from Flank Guard and Pounder.
- Added Saturn, a fusion of Venus and Sidewinder. Branches from both of its components.
- Added Pluto, a small Venus. Branches from Venus.
- Added Nanoswarm, a Swarming Foghorn. Branches from Swarming Trapper and Foghorn.
- Added Debriefer, a fusion of Minimach and Machceptioner. Branches from both of its components, as well as Interrogator.
- Added Peacekeeper, a Hybrid Debriefer. Branches from Outlaw and Debriefer.
- Added Avenue, a fusion of Promenade and Escort. Branches from both of its components, as well as Pelleter-3.
- Added Turretmaster, an Automaton with Overdrive drones. Branches from Automaton.
- Added Auto-Drive, branching from Auto-Seer and Overdrive.
- Added Auto-Spawndrive, branching from Auto-Spawner and Spawndrive.
- Slightly nerfed Machine Gun and Machine Gun-based tanks.
- Slightly nerfed Swarmer-2, Swarmer-3 and Copius bees.
- Buffed Carbine branch.
- Minor branch fixes
- Temporarily removed Doomsayer
# UPDATE 5/13/2022 - forgot to add this yesterday whoops
- Added Autobrid, a Auto-Basebrid. Branches from Basebrid, and Auto-Basic.
- Added Autokick, a auto basic sidekick. Branches from Basekick, and Auto-Basebrid.
- Added Conscience, a Auto-Ceptioner sidekick. Branches from Automaton and Autokick.
- Added Cycloid, a Revolutionist Sidekick. Branches from Autokick. This idea was by Polygon.
- Added Enlistant, a Straightshot Sidekick. Branches from Dredger. This idea was by Polygon.
- Added Scorcer, A Magebrid Sidekick. Branches from Magebrid.
- Added Striker, a Scouter Minigun. Branches from both of its components.
- Added Textilator, a Velveter with 3 turrets and 3 spawners, in addition to a trap turret on top. Branches from Auto-4, Banshee and Velveter. This idea was by AJPlayz7.
- Added Scrapcloth, a Velveter that is beyond description. Branches from Velveter. This idea was by Polygon.
- Added Longsword, a longer Chasseur with Assassin viewrange. Branches from Chasseur and Assassin.
- Added Raider, a fusion of Sharpshot and Combatant. Branches from both of its components. This idea was by Legends.
- Added Harbinger, a fusion of Banshee and Overlord. Branches from both of its components and Auto-5.
- Added Doomsayer, a fusion of Banshee and Promenade. Branches from both of its components.
- Redesigned Silencer.
- Renamed Groundskeeper to Landscaper.
- Removed Hexaceptioner for performance reasons.
# UPDATE 5/12/2022 - nothing to see here
- Added Pummeler, a Combatant with two more guns. Branches from Combatant and Alkaline.
- Added Deceptioner, a Destroyer Inceptioner. Branches from Destroyer and Poundceptioner.
- Added Giga Swarmer, an Annihilator Swarmer. Branches from Mega Swarmer and Annihilator.
- Added Auto-Ship, branching from Auto-Cruiser, Auto-Seer and Battleship.
- Added Auto-Flank Cruiser, branching from Auto-Cruiser, Lookout and Flank Cruiser.
- Fixed a bug that caused an invincible map-wide explosion when things with no speed touched each other.
- Added Blossom, a boss utilizing drones, bullet sprays and blocks. This idea was by ERA.
- Renamed Wrecker to Cudgel.
- Renamed Warfarer to Warzone.
- Minor branch fixes.
# UPDATE 5/11/2022 - burnout speedrun (insert dream speedrun music here)
- Fixed crashers and sentries spawning 1 at a time in the nest.
- Added Jellyfish Sentries, powerful sentries that leave bullet trails behind them and periodically do quick jumps toward targets.
- Added Water Runner, a sentry that shoots a ring of bullets and doesn't work properly. I'll fix it later.
- Added Sentinels, A stationary Sentry that uses an assassin turret to overwhelm the target.
- Added Swarmer, a Pounder variant of Mega Swarmer. Branches from Pounder.
- Added Swarmer-2, branching from Swarmer.
- Added Swarmer-3, branching from Swarmer-2 or Mega-3.
- Added Flocker, a Swarmer Bird. Branches from Crow and Swarmer.
- Added Entomologist, a Copius Bird. Branches from Copius, Flocker and Sprouter.
- Added Viewfinder, a Ranger Rifle. Branches from Sniper Rifle and Ranger.
- Buffed and redesigned Sniper Rifle.
# UPDATE 5/10/2022 - according to all known laws of aviation, this balancing act is a lie.
- Added Beegun, a Submachine that shoots bees instead of bullets. Branches from Cruiser and Submachine.
- Added Waspgun, an upgraded Beegun that gains two more barrels. Branches from Beegun.
- Added Outlaw, a Hybrid Minimach. Branches from Minimach, Private and Machbrid.
- Added Abrasivist, a fusion of General and Corporal. Branches from both of its components and Weatherer.
- Added Raven (not the removed one), a Shootist Bird. Branches from Shootist, Owl and Cardinal.
- Added Hawkmoth, a Mega Swarmer Bird. Branches from Eagle and Mega Swarmer.- Nerfed the damage of Basic-based Minishots, and Minimachs.
- Nerfed Spreadshot's damage.
- Nerfed Twinling's damage
- Buffed Contaminator, its bullets now have two Boomer barrels instead of just one.
# UPDATE 5/9/2022 - changelogs broke yesterday very cool
- Added Dissolver, an Auto-Alkaline. Branches from Auto-Gunner and Alkaline.
- Added Flank Frigate, branching from Flank Cruiser and Frigate.
- Added Worldweb, a Foghorn Computer. Branches from Fogbrid and Program. This idea was by Polygon.
- Added Adblocker, a Mechatrapper Computer. Branches from Mechabrid and Program. This idea was by Polygon.
- Added CHESS, an Arsenal Computer. Branches from Warfare and Program. This idea was by Polygon.
- Added Datastacker, a Destroyer Computer. Branches from Hybrid and Compounder. This idea was by Polygon.
- Added Shotbrid, branching from Shotgun and Poundbrid.
- Added Debugger, a Shotgun Computer. Branches from Shotbrid and Compounder.
- Redesigned Skimmer in preparation for higher-caliber Launcher upgrades.
- Minor balance and optimization changes.
# UPDATE 5/8/2022 - here comes the boom
- Added Orbitalist, a Revolutionist with an extra turret on the ring. Branches from Auto-3 and Revolutionist. This idea was by 359.
- Added Concentricist, an Orbitalist with two extra turrets on the ring. Branches from Auto-5 and Orbitalist. This idea was by 359.
- Added Prograde, an Orbitalist with swarm turrets instead of gun turrets. Branches from Orbitalist. This idea was by patronum213.
- Added Retrograde, an Orbitalist with trap turrets instead of gun turrets. Branches from Orbitalist. This idea was by patronum213.
- Added Revelation, a Revolutionist with an extra ring consisting of two Auto-4 turrets. Branches from Orbitalist. This idea was by Legends.
- Added Roundtrip, a Bird Orbitalist. Branches from both Migrationist and Orbitalist. This idea was by 359.
- Added Caster, a Director but it's drones explode into 3 traps. Branches from Director. This idea was by Spencer.
- Added Overcast, an Overseer Caster. Branches from both of its components. This idea was by Spencer.
- Added Drivecaster, a Caster that explodes into Arsenal traps. Branches from Caster or Motor. This idea was by Spencer.
- Added Outcast, a Caster that explodes into package bomb traps. Branches from Caster. This idea was by Legends.
- Added Castbrid, a Basebrid that spawns Caster drones. Branches from Basebrid. This idea was by Spencer.
- Added Broadcaster, a Computer that spawns one massive Caster drone. Branches from Computer or Castbrid.
- Added Doubletrouble, a Double Twin that can temporarily split into 2 halves on shift. Branches from Double Twin. This idea was by 359.
- Added Xolotl, an Axolotl with the same ability as Doubletrouble. Branches from Axolotl and Doubletroule. This idea was by 359.
- Added Triplethreat, a Triple Twin with the same ability as Doubletrouble. Branches from Triple Twin and Doubletrouble. This idea was by 359.
- Added Breakwark, a Bulwark with the same ability as Doubletrouble. Branches from Bulwark and Doubletrouble. This idea was by 359.
- Added Transpiercer, an Assassin that has flying bullets. Branches from Assassin. This idea was by AJPlayz7.
- Added Exo, an Annihilator Pelleter. Branches from Annihilator and Supra. This idea was by 359.
- Added Thorns, a Spike that can temporarily phase through rocks on shift. Branches from Spike. This idea was by Polygon.
- Added Apex, a Predator with another gun. Branches from Predator. This idea was by 359.
- Added Fortifier, a two-layered Fortress with 4 trap launchers and 4 swarmers. Branches from Fortress. This idea was by Legends.
- Added Surroundsound, a Boomer counterpart to Stereophone. Branches from Revolver. This idea was by 359.
- Added Alkaline, a Gunner with two additional cannons. Branches from Gunner. This idea was by AJPlayz7.
- Added BC90, a unique tank with a set amount of bullets that can rapidly fire them back out when they die. This idea was by Droid.
- Added Scoutceptioner, branching from Snipeceptioner and Scouter.
- Added Battery, an Alkaline Bird. Branches from Alkaline and Energizer.
- Added Hewn Pelletbrid, branching from Pelletbrid and Hewn Pelleter.
- Added Spreadbrid, branching from Private, Poundbrid and Spreadling.
- Added Spreadguard, branching from Twin Guard, Mesa and Spreadling.
- Renamed Hybrid Pelleter to Pelletbrid.
- Minor branch fixes and optimizations.
# UPDATE 5/7/2022 - obliterating beta
- Added a second page of Velveter upgrades, accessible by pressing shift while playing Velveter.
- Added Titanic, a Velveter whose gun fires Inceptioner bullets. Branches from Velveter or Twinceptionbrid.
- Added Supervisor, a Manager Overseer. Branches from both of its components.
- Added Needleye, a Velveter that can go invisible when staying still. Branches from Velveter or Supervisor.
- Added Silkweaver, a Velveter with Navyist drones. Branches from Velveter and Armsracer.
- Added Drawloom, a Velveter whose rear trapper is a Mechatrapper. Branches from Mechabrid and Velveter. This idea was by AJPlayz7.
- Added Stormcloud, a Foghorn but the trap guns are replaced with auto guns. Branches from Foghorn. This idea was by Polygon.
- Added Stormfront, a Cloudfront but the trap guns are replaced with auto guns. Branches from Cloudfront or Stormcloud. This idea was by Polygon.
- Added Thunderhead, a Fogbank but the boomerang guns are replaced with auto guns. Branches from Stormcloud or Fogbank.
- Added Surveiller, a Ranger Stalker. Branches from both of its components.
- Added AMRAAM, a Sidewinder with auto-turrets on its missiles. Branches from Sidewinder.
- Added Bateleur, a Demoist Eagle. Branches from both of its components.
- Removed Centennial, as it's been a couple days.
- Minor optimization changes.
# UPDATE 5/6/2022 - chipping off beta
- Added ACBIA, a tank that can choose between firing a slow, invincible bullet, or a sniper form. Branches from Annihilator. This idea was by Droid and AJPlayz7.
# UPDATE 5/5/2022 - beta is literally full help
- Added Poundlet, a Pounder Triplet. Branches from Triplet, Cannonry and Heavy Twin (temporarily).
# UPDATE 5/4/2022 - 🎉
- Temporarily added Centennial, a seasonal tank that branches from Annihilator.
- Added Builder-2, branching from Builder.
- Added Screecher, an Obliterator Bird. Branches from Obliterator, Owl and Crow.
- Added Seagull, a Blaster Bird. Branches from Blaster, Possum and Crow.
- Added Cannonry, a Straightshot Artillery. Branches from both of its components.
- Added Cannonade, a Combatant Mortar. Branches from both of its components and Mortar.
- Added Neptune, a Straightshot Venus. Branches from Cannonry, Venus and Sharpshot.
- Renamed Engineer-2 to Schematicist.
# UPDATE 5/3/2022 - want to go bird watching?
- Added Cardinal, a Minishot Bird. Branches from Minishot and Bird.
- Added Auto-Cardinal, branching from Cardinal, Auto-Minishot and Auto-Bird.
- Added Auto-Crow, branching from Crow, Scratcher and Auto-Bird.
- Added Auto-Seeder, branching from Birdseeder, Auto-Pelleter and Auto-Bird.
- Added Albatross, a Lancer Bird. Branches from Lancer and Bird.
- Added Pelican, a Chasseur Bird. Branches from Chasseur, Owl and Albatross.
- Added Crane, a Flail Bird. Branches from Flail and Bird.
- Added Scrambler, a Shatter Bird. Branches from Shatter and Eagle.
- Added Merlin, an Advent Bird. Branches from Advent and Falcon.
- Added Kestrel, a Ranger Bird. Branches from Ranger and Falcon.
- Added Toucanet, a Shortstop Bird. Branches from Shortstop, Sprouter and Toucan.
- Added Sprouter, a Macro Bird. Branches from Macro, Birdseeder and Crow.
- Added Germinator, a Supra Bird. Branches from Supra, Sprouter and Eagle.
- Added Magpie, a Streamliner Bird. Branches from Streamliner and Jackdaw.
# UPDATE 5/2/2022 - the Literally Just Scouter™ Update
- Added Scouter, a Sniper variant of Stalker. Branches from Sniper.
# UPDATE 5/1/2022 - new month new content
- Added Trimaran, a Catamaran with an additional spawner and the ability to control its swarms. Branches from Catamaran and Carrier.
- Added Combatant, a fusion of Harasser and Straightshot. Branches from both of its components and Gunner.
- Added Combatbrid, branching from Combatant, Gunbrid and Dredger.
- Added Assaulter, a Harasser with another pair of Minishot barrels. Branches from Harasser.
- Finished and officially released Packers, crashers that spawn in groups of 8. This idea was by Polygon.
- Added Viper crashers that rapidly pursue targets.
- Reworked crasher spawning to make all types equally common
- Made AIs not target invisible tanks when actually invisible
- Dropped Manager to Lv30
- Renamed Propeller to Paramotor
- Minor branch fixes
# UPDATE 4/30/2022 - tired of naming these someone else do it
- Added Warship, a fusion of Frigate and Battleship. Branches from both of its components.
- Added Enforcer, a Paladin with swarming turrets. Branches from Paladin and Fortress.
- Added Stormwarning, a Foghorn with Machine guns on its traps. Branches from Foghorn. This idea was by Polygon.
- Added Seaspray, a Foghorn with Sprayer guns on its traps. Branches from Stormwarning. This idea was by Polygon.
- Added Galeforce, a Foghorn with Miniguns on its traps. Branches from Stormwarning. This idea was by Polygon.
- Added Firewhirl, a Foghorn with Inferno guns on its traps. Branches from Stormwarning.
- Added Highwind, a Foghorn with Blaster guns on its traps. Branches from Stormwarning and Blowhorn.
# UPDATE 4/29/2022 - You would think something with flight in it's name would fly
- Flight Unit flies now.
- Added Harrier, a Submachine Bird. Branches from Submachine and Birdseeder.
- Added Crewman, a Hybrid Submachine. Branches from Submachine and Hybrid Pelleter.
- Added Pelleter-2, branching from Pelleter and Auto-2.
- Added Pelleter-3, branching from Pelleter-2 and Auto-3.
- Added Submachine-2, branching from Pelleter-2 and Submachine.
- Added Submachine-3, branching from Pelleter-3 and Submachine-2.
- Added Particulator, a Pelleter Sidekick. Branches from Basekick and Hybrid Pelleter.
- Added Sidearm, a Submachine Sidekick. Branches from Particulator or Crewman.
# UPDATE 4/28/2022 - more stuff coming later i swear
- Added Ordnance, a Hunter variant of Subjugator. Branches from both of its components. This idea was originally from Arras.
- Added Munitioner, an Ordnance but its side cannons are smaller Hunters. Branches from Ordnance.
- Added Militant, a Hybrid Ordnance. Branches from Ordnance, Poacher or Duelist.
- Added Resonator, a Pounder Boomer. Branches from Boomer. This idea was by AJPlayz7.
- Added Restitutioner, a Destroyer Boomer. Branches from Resonator.
- Added Revolver, an Arsenal Boomer. Branches from both of its components. This idea was by AJPlayz7.
- Renamed Airflow to Tradewind.
- Fixed Rogue Palisade healing and health.
- Slightly buffed Rogue Palisade's minion speed.
- Fixed Infinitum healing.
- Fixed Strike Unit healing.
# UPDATE 4/27/2022 - the Beta Clearing™ update
- Added Flairon, a Boomer that leaves a bullet trail behind its boomerangs. Upgrades from Boomer. This idea was by Polygon.
- Added Fragment, a combination of Supra and Shatter. Branches from both of its components.
- Added Fogbank, a combination of Foghorn and Boomer. Branches from both of its components.
- Added Carbine, a Minigun Assassin. Branches from both of its components.
- Added Arquebus, a Streamliner Assassin. Branches from Streamliner and Carbine.
- Added Silencer, a Stalker Carbine. Branches from both of its components.
- Added Dreadnought, a Destroyer Cruiser. Branches from Supra and Frigate.
- Added Supercarrier, a Frigate Carrier. Branches from both of its components.
- Added Watercraft, a Frigate Catamaran. Branches from both of its components.
- Nerfed drone count for all "true" Overseer branches from 8 to 6.
- Readded Assassin-2 and Assassin-3.
# UPDATE 4/26/2022 - I'm not mad just disappointed
- Removed Liquidator branch
# UPDATE 4/26/2022 - Nowhere to run
- Buffed Rejuvenator
- Fixed boss healing
- Added Boombrid, branching from Trapbrid and Boomer.
- Added Auto-Boomer, branching from Auto-Trapper and Boomer.
- Added Infection, a combination of Swarming Trapper and Trapbrid. Branches from both of its components. This idea was by Polygon.
- Added Mechabrid, branching from Mechatrapper and Trapbrid. This idea was by Polygon.
- Added Program, a Trapper Computer. Branches from Computer and Trapbrid. This idea was by Polygon.
- Renamed Arsenalbrid to Warfare as suggested by Polygon.
- Minor branch fixes
# UPDATE 4/25/2022 - enough about polygon let's talk about me
- Added Liquidator, a tank that shoots bullets that shoot out smaller bullets while shrinking. Branches from Obliterator.
- Added Saturator, a Liquidator with a bullet that shoots traps. Branches from Liquidator.
- Added Hydrator, a Assassin Liquidator. Branches from Liquidator.
- Added Hydropump, a Launcher Liquidator. Branches from Liquidator.
- Added Infurnace, a Inferno Liquidator, that grows instead of shrinks. Branches from Liquidator or Immolator.
- Added Purifier, a Liquidator with a pelleter auto turret. Branches from Liquidator.
- Buffed Liquidator's stats, along with the branches.
- (Liquidator branch by LegendsNeverDie)
- Added Rampart, a Fortress with 3 extra uncontrollable swarm spawners. Branches from Fortress. This idea was by LegendsNeverDie.
- Added Technomancer, a fusion of Computer and Magebrid. Branches from both of its components. This idea was by Polygon.
- Added Blockbrid, branching from Trapbrid, Builder and Poundbrid.
- Minor branch fixes
# UPDATE 4/23/2022 - shoutouts to polygon
- Added Foghorn, a Trapper with small guns on its traps. Branches from Trapper. This idea was originally from Woomy.
- Added Fogbrid, branching from Foghorn and Trapbrid. This idea was by Polygon.
- Added Blowhorn, a Foghorn with Pounder stats added to its guns. Branches from Foghorn. This idea was by Polygon.
- Added Bellower, a Foghorn with Destroyer stats added to its guns. Branches from Bellower. This idea was by Polygon.
- Added Cloudfront, a fusion of Foghorn and Arsenal. Branches from both of its components. This idea was by Polygon.
- Added Fogmachine, a fusion of Foghorn and Mechatrapper. Branches from both of its components. This idea was by Polygon.
- Added Arsenalbrid, branching from Arsenal and Trapbrid.
- Added Armament, a fusion of Auto-Arsenal and Arsenalbrid. Branches from both of its components and Automaton.
- Added Functionist, an Auto-Hybrid-Trap Guard Inceptioner. Branches from Automaton.
- Added Mauler, a Hybrid Predator. Branches from Predator and Poacher.
- Added Contempt, a Scourn variant of Launcher-2. Branches from both of its components.
- Added Macrobrid, a Macro variant of Hybrid Pelleter. Branches from both of its components and Poundbrid.
- Added Magebrid, a Trap Guard Basebrid. Branches from both of its components.
- Added Smokebomb, a fusion of Foghorn and Package Bomb. Branches from Foghorn.
- Added Spawndrive, a fusion of Spawner and Motor. Branches from both of its components.
- Added Frigate, a Pounder Cruiser. Branches from Cruiser and Macro.
- Added Immolator, a Pounder Inferno. Branches from Blaster, Obliterator and Inferno.
- Added Incinerator, a Destroyer Inferno. Branches from Immolator.
- Added Keylogger, a Navyist Computer. Branches from Computer. This idea was by Polygon.
- Added Spellchecker, a Server Keylogger. Branches from both of its components.
- Added Aircooler, a Flightcontroller Keylogger. Branches from both of its components.
- Added Autocorrect, a Harddrive Keylogger. Branches from both of its components.
- Added Pseudorandom, a Server that spawns two random drones from any other Computer. Branches from Server.
- Added Envoy, an Emissary with Sprayer barrels instead of Machines. Branches from Emissary. This idea was by AJPlayz7.
- Added Shortstop, a fusion of Macro and Shotgun. Branches from both of its components.
- Added Leopardprint, a Velveter with a rotating Hurricane for a front gun. Branches from Velveter.
# UPDATE 4/22/2022 - first person to send me a screencap of this update title gets a tank token (already claimed)
- Added X-Bow, a rapid fire tank with separate high damage and high range modes. Branches from Streamliner. This idea was by Violin.
- Added Propeller, a combination of Turbulence and Motor. Branches from both of its components.
- Added Turbofan, a combination of Airflow and Overdrive. Branches from both of its components and Propeller.
- Added Plaguer, a Bent Trapper variant of Infester. Branches from both of its components and Carrier.
- Added Auto-Pelleter. Branches from Pelleter and Auto-Basic.
- Added Auto-Cruiser because it was just sitting in code. Branches from Auto-Pelleter and Cruiser.
- Added Auto-Hybrid Pelleter for future use. Branches from Auto-Pelleter and Hybrid Pelleter.
- Renamed Airstorm to Airflow.
- Nerfed Motor branch turrets.
# UPDATE 4/21/2022 - accepting name ideas
- Added Taskmanager, a Computer that spawns a large minion instead of a large drone. Branches from Computer and Basekick.
- Added Supertasker, a Server Taskmanager. Branches from both of its components.
- Added Hypervisor, a Taskmanager whose minion is a Computer. Branches from Taskmanager. This idea was by 359.
- Minor balance changes
# UPDATE 4/20/2022 - the Bird™ update
- Finished optimizing the Bird branch.
- Made Bird branch thrusters use altfire and weapons use mainfire.
- Added Toucan, a Shotgun Bird. Branches from Shotgun and Crow.
- Added Juno, a Launcher Bird. Branches from Launcher and Crow.
- Added Skylark, a Sidewinder Bird. Branches from Sidewinder and Juno.
- Falcon Heavy no longer branches from Crow, instead branching from Juno.
- Made small tanks actually appear small in the upgrade menu.
- Readded Ruffler and Crester.
# UPDATE 4/19/2022 - reaping the optimization
- Added Snipebrid, a Sniper Basebrid. Branches from both of its components.
- Added Oversniper, a Snipebrid with controllable drones and a higher drone cap. Branches from Overseer and Snipebrid.
- Added Spotter, a Sniper Sidekick. Branches from Basekick and Snipebrid.
- Added Attritioner, a fusion of Masher and Caprock. Branches from both of its components.
- Added Capstone, an Annihilator Caprock. Branches from both of its components.
- Added Faultline, a Shatter Caprock. Branches from both of its components.
- Temporarily removed Ruffler and Crester.
- Minor balance changes
# UPDATE 4/18/2022 - the Optimization™ update
- Major optimization updates
# UPDATE 4/17/2022 - apparently im the only one that can make changelogs
- Added Hatchling, a Nestling that swaps its front gun for a spawner that spawns 3 Nestling minions. Branches from Nestling and Spawner.
- Added Reheater, a Hybrid Inferno. Branches from Inferno.
- Added Rekindler, a Sidekick Inferno. Branches from Reheater. This idea was by Polygon.
- Added Wildfire, a Skimmer Bonfire. Branches from both of its components. This idea was by LegendsNeverDie.
- Added Supra, a Destroyer Macro. Branches from both of its components.
# UPDATE 4/16/2022 - back in business
- Added Inferno, a rapid-fire tank that shoots growing flares. Branches from Machine Gun and Sniper.
- Added Bonfire, an Inferno whose flares are propelled by small bullets. Branches from Inferno or Launcher. This idea was by AJPlayz7.
- Added Flaregun, a Launcher whose missiles are propelled by flares. Branches from Inferno or Launcher. This idea was by AJPlayz7.
- Added Reverberator, a Barricade variant of Boomer. Branches from Barricade. This idea was by AJPlayz7.
# UPDATE 4/15/2022 - doin to-do stuff
- Added Groundskeeper, a Builder Bird. Branches from Builder, Crow and Logger.
- Added Cutter, a Boomer Bird. Branches from Boomer and Logger.
- Added Chipper, a Mechatrapper Bird. Branches from Mechatrapper, Possum and Logger.
# UPDATE 4/14/2022 - to battlestations
- Added Entrencher, a Navyist whose drones are propelled by Mechatrappers. Branches from Navyist. This idea was by Spencer.
- Added Warfarer, an Overseer Entrencher. Branches from Entrencher or Armsracer.
- Adjusted Navyist branch mechanics so drone thrusters only fire when being directed or pursuing a target.
# UPDATE 4/13/2022 - unlucky day
- Added Megabyte, a Computer with a larger drone. Branches from Computer. This tank was originally from Oxyrex.
- Added Gigabyte, a Computer with an even larger drone. Branches from Megabyte. This tank was originally from Oxyrex.
- Added Emulator, a Megabyte that is not what it seems. Branches from Megabyte and Annihilator.
- Added Trimmer, an Arsenal Bird. Branches from Logger and Arsenal.
# UPDATE 4/12/2022 - We do a little mountainic trolling
- Added mountains. That's it.
- ADDED MOUNT. EVEREST.
# UPDATE 4/11/2022 - glitch killed my account for like 15 minutes pain
- Added Flank Blaster, branching from Flank Machine and Blaster.
- Hourglass now upgrades from Flank Blaster instead of Blaster.
- Fixed a minor inconsistency with Bent Double and Bent Triple.
# UPDATE 4/10/2022 - Looks like another tank has crawled its way out of purgatory
- Buffed the Blaster branch's penetration and bullet health.
- Readded Blastceptioner, a Blaster version of Machineceptioner. Branches from both of its components.
- Minor balance changes
# UPDATE 4/9/2022 - apparently if i dont name one of these i explode
- Added Copius, a Macro that shoots Swarmer bullets. Branches from Macro.
- Added AT, a Macro that shoots Launcher bullets. Branches from Macro or Launcher.
- Added Carpetbomber, a Bomber that leaves behind Package Bombs instead of traps. Branches from Bomber.
- Added Lightning, a Bomber with Twin guns in front. Branches from Bomber.
- Added Spirit, a Bomber with two additional thrusters but no front gun. Branches from Bomber and Booster. This idea was by 359.
# UPDATE 4/8/2022 - we have come to a truce
- Added Bridwark, a Bulwark with a Hybrid spawner at the back. Upgrades from Bulwark.
- Added Stereophone, an Engineer with blocks that create bullet rings when enemies are nearby. Branches from Engineer.
- Added Mechatrapper, a Machine Trapper. Branches from both of its components.
- Added Outrigger, a Catamaran with two more swarm guns. Branches from Outrigger.
- Removed Accutrapper. Congrats C4, your record has been immortalized.
- Adjusted Wakeboard, giving it an additional rear spawner but nerfing its front gun and overall damage output.
- Minor balance changes and bugfixes
# UPDATE 4/7/2022 - help
- Removed Bridwark (twice)
- Added Flightcontroller, a Turbine Computer. Branches from Computer.
- Added Decompressor, a Computer whose drone leaves behind an explosive upon death. Branches from Computer.
- Added Decompiler, a combination of Server and Decompressor. Branches from both of its components.
- Added Zipbomb, a Decompressor that explodes into an additional 6 smaller bombs. Branches from Decompressor.
- Added Spreadlaunch, a combination of Launcher and Spreadling. Branches from both of its components.
- Added Launchpad, a Spreadlaunch whose missiles are propelled by smaller Spreadlings. Branches from Spreadlaunch and Skimmer.
- Added Auto-Chasseur, branching from Auto-Lancer and Chasseur.
- Minor branch fixes
# UPDATE 4/6/2022 - so what happens if i just decide not to name one of these
- Added Caprock, a Destroyer variant of Mesa. Branches from both of its components.
- Added Weatherer, a Poundbrid with an extra trapper on the back. Branches from Mesa and Poundbrid.
- Added Erosioner, a Hybrid with an extra trapper on the back. Branches from Weatherer, Hybrid or Caprock.
- Added Scarecrow, a combination of Miniguard and Cropduster. Branches from both of its components.
- Removed Bridwark because it somehow unremoved itself at some point
- Removed Bridwark AGAIN because it somehow came back since the first time i removed it today
- Various balance changes
- Minor optimization updates
# UPDATE 4/5/2022 - combo breaker
- Added Hotliner, a combination of Hotshot and Streamliner. Branches from both of its components. This idea was originally from Woomy.
- Added Countdown, a combination of Hotshot and Launcher. Branches from Hotshot and Scourn.
- Added Sailcloth, a Turbine Velveter. Branches from Velveter.
- Added Catamaran, a Hewn Twin whose outer guns have been replaced by swarms. Branches from Hewn Twin and Cruiser.
- Removed Navy Seal, The abomination that should have never been added.
# UPDATE 4/??/2022 - how do we keep losing track of these
- Added Strike Unit, a boss with two-shot kill Targeteer turrets and swarms. This idea was by Legends.
- Added Flight Unit, a boss with Slipstream drones and Submachines. This idea was by Legends.
# UPDATE 4/3/2022 - why is making updates easier than naming them
- Added Mini Flight Unit, an Auto-4 with 4 swarm turrets extending from the body. Branches from Auto-4.
- Added Airstorm, a Turbine Overseer. Branches from Turbulence and Overseer. This idea was by Legends.
- Added ATC, a Turbine Overlord. Branches from Airstorm and Overlord.
- Added Plutoid, a Comet whose autoguns are replaced with autoswarms. Branches from Comet.
- Added Harasser, a Minishot with two additional spreadguns. Branches from Minishot. This idea was originally from Woomy.
- Added Kukri, a Harasser Single. Branches from Harasser and Machete.
- Added Katar, a Straightshot Single. Branches from Straightshot and Machete.
- Added Talon, a combination of Vulture and Machete. Branches from both of its components.
- Added Single-2, branching from Auto-2 or Single.
- Added Flankceptioner, a combination of Flank Guard and Inceptioner. Branches from both of its components. This idea was by AJPlayz7.
- Added Snipeceptioner, a combination of Sniper and Inceptioner. Branches from both of its components. This idea was by AJPlayz7.
# UPDATE 4/2/2022 - back to business again
- Added Turbulence, a Director with Turbine (rock-piercing) properties. Branches from Director. This idea was by Legends.
- Added Jetstream, a combination of Slipstream and Armsrace. Branches from both of its components.
- Added Benwark, a Bulwark with a third central trap cannon on the back. Branches from Bulwark or Bent Trapper. This idea was by AJPlayz7.
- Added Understitch, an Underseer variant of Velveter. Branches from Velveter. This idea was by AJPlayz7?
- Added Crester, a Twinceptioner Bird. Branches from Twinceptioner, Ruffler and Doduo.
- Added Specialist, a unique tank that switches between a modified Assassin and a modified Overseer. Branches from Advent and Overtrapper. This idea was by patronum213.
- Renamed Gambler to Subordinate
- Removed Overguard for being too similar to Velveter and generally not having a place in the game
- Various balance changes
- Minor optimization updates
# UPDATE 4/1/2022 - :)
# UPDATE 3/31/2022 - hopefully no more three part updates
- Added Armsracer, an Overseer Navyist. Branches from both of its components.
- Added Auto-Hexa, branching from Hexa Tank.
- Added Lootboxer, a Constructor Unboxer whose blocks explode into more projectiles. Branches from both of its components.
- Added Dread-Ship, a small Octo Tank whose front and rear guns are replaced with bee launchers that also has an Assassin turret. Branches from Octo Tank and Auto-Hexa. This idea was by C4.
- Modified all Computer branch drones to have high danger value, making bots target them instead of the main tank.
- Made AIs target bosses
- Rebalanced bees and hives
# UPDATE 3/30/2022 (part 3) - the last one for today probably
- Added Harddrive, a Computer with a turreted drone. Branches from Computer.
- Added Solidstate, a combination of Server and Harddrive. Branches from both of its components.
- Added Microprocessor, an extremely small Computer. Branches from Computer. This idea was by Polygon.
# UPDATE 3/30/2022 (part 2) - the airforce is currently launching an airstrike on your house
- Added Navyist, a Director with a machine thruster on the back. Branches from Director.
- Added Navy Seal, a Motor with a machine thruster on the back. Branches from Navyist or Motor.
- Added Slipstream, a Navyist with nerfed stats, but the drones can go through obstacles. Branches from Navyist.
- Rebalanced sub-turrets (ie: Overdrive, and Arsenal)
# UPDATE 3/30/2022 - the spirit of baja blaster
- Added Auto-Director, branching from both of its components.
- Added Auto-Lord, branching from Auto-Seer and Overlord.
- Added Clubbrid, a completely normal Hybrid variant of Club. Branches from Club.
- Added Jupiter, a Destroyer variant of Venus. Branches from Venus and Demoist.
- Added DMR, an Auto-Rifle. Branches from Rifle.
- Added Caprock, a Destroyer variant of Mesa. Branches from both of its components.
- Added Solenopsis, a Shotgun variant of Sinarachna. Branches from both of its components.
- Added Fabricator, a Weaver with 2 additional central barrels. Branches from Weaver. This idea was by Spencer.
- Added Pelletlord, an Overpelleter with extra spawners and drones. Branches from Overpelleter or Overlord.
- Added Traplord, an Overtrapper with extra spawners and drones. Branches from Overtrapper or Overlord.
- Added Overguard, a Pellet Guard with Overpelleter spawners. Branches from Overpelleter, Overtrapper and Pellet Guard.
- Added Overgunner, a Gunner variant of Overtrapper. Branches from Gunbrid and Overpelleter.
- Added Server, a Computer with an additional drone. Branches from Computer. This idea was by Polygon.
- Added Mainframe, a Server with an additional drone. Branches from Server. This idea was by Polygon.
- Rebalanced drones with particular emphasis on Velveter drones.
- Slightly redesigned Computer branch to be more in line with the original concept.
- Renamed Fabricator (the fighter with extra side guns) to Bentricator in accordance with the original concept.
- A handful of minor branch fixes
# UPDATE 3/29/2022 - put it in reverse earl
- Added Canary, a Bird with more thrusters. Branches from Bird.
- Peacock no longer branches from Bird and instead branches from Canary.
- Added Jayhawk, a Sniper Twin Guard. Branches from Bushwhacker and Twin Guard.
- Added Snipewark, A Bulwark with twin snipers on the front. Branches from Jayhawk or Bulwark.
- Added Quintuplet, a Triplet with two more forward guns. Branches from Triplet and Penta Shot.
- Added Apparition, a Stalker that can move and fire while invisible by clicking Shift. This idea was by patronum213.
- He's here to avenge them.
# UPDATE 3/28/2022 - there's a new sheriff in town
- Added Gunslinger, a Hybrid Auto-Minimach. Branches from Auto-Minimach.
- Added Bombardier, a Hybrid Sheller. Branches from Sheller or General.
- Added Interrogator, a Minishot Inceptioner. Branches from Minishot or Inceptioner. This idea was by Legends.
- Added Subjugator, a Minishot Subduer. Branches from Subduer or Minishot. This idea was by Legends.
- Added Flank Cruiser, a Cruiser mounted backwards onto a Basic. Branches from Cruiser.
- Added Hawk, a Crow with more boosters. Branches from Crow. This idea was by Spencer.
- Added Piguer, a Ruffler with a swarm drone turret. Branches from Ruffler or Auto-Bird. This idea was by AJPlayz7.
- Fixed explosions not dealing damage.
- Did a little bit of trolling.
# UPDATE 3/27/2022 - trying to balance
- Added Sealclubber, a Club with Bird thrusters. Branches from Club.
- Added Stockcheck, an Auto-Auto-5. Branches from Auto-5 and Backcheck.
- Added Checksum, an Auto-Auto-4 with an Auto-4 turret on top instead of a normal turret. Branches from Auto-4 and Backcheck.
- Rebalanced Twin, Pounder and Cruiser branches. This is still a work in progress but their current state should be much more balanced than they were before.
- Temporarily removed Assassin-2, Assassin-3 and Arrival for rebalancing.
# UPDATE 3/26/2022 - i must keep updating or the bomb in this room will go off
- Moved Club down to Lv45, now branching from Chasseur. This idea was by AJPlayz7.
- Released Wrecker from TESTBED, a Club with a larger rock. Branches from Club. This idea was by AJPlayz7.
# UPDATE 3/25/2022 - the beta clearing continues
- Added Computer, a Basebrid with a single large drone rather than 3 normal ones. Branches from Basebrid. This idea was by Polygon.
- Added Compounder, a fusion of Computer and Poundbrid. Branches from both of its components. This idea was by Polygon.
- Added Seismometer, a Compounder with a smaller drone that leaves long-lasting bullets behind as a trail. This idea was by C4.
# UPDATE 3/24/2022 - my personal projects
- Added Ichneumonidae, a Sinarachna with reduced homing range that fires Swarming Sentries rather than swarms. Branches from Sinarachna. This idea was by 359.
- Added Propwash, an Annihilator with lower bullet speed, but its bullets have minor stat buffs and can fly through rocks. This idea was by 359.
- Added Quetzalcoatl, a slightly modified fusion of Spreadbow and Jaguar. Upgrades from both of its components.
- Various branch fixes
# UPDATE 3/23/2022 - GET OUT OF BETA
- Added Gunwark, a Bulwark whose Twin guns are replaced with a Gunner. Branches from Bulwark and Gunner Trapper. This idea was by AJPlayz7.
- Added Escort, a Caravan with Pelleters instead of Basics. Branches from Caravan. This idea was by AJPlayz7.
- Added Expedition, a Caravan with an additional gun and swarm spawner. Branches from Caravan.
- Added Promenade, a Caravan crossed with an Auto-3. Upgrades from both of its components.
- Added Crylonite, a Velveter that has 5 hybrid drones and 2 trappers on its sides. Branches from Velveter.
- Added Armscye, a Velveter with two additional swarm guns. Branches from Velveter.
- Added Broadcloth, a Velveter whose drones have have Pounder stats added onto them. Branches from Velveter.
- Added Seamstress, a Velveter with a Gunner turret in front. Branches from Gunbrid, Gunner Trapper and Velveter.
- Added Stacksheet, a Velveter arranged like a Magician with all of its weaponry mounted to the front. Branches from Velveter.
- Added Auto-Pellet Guard, branching from Pellet Guard.
- Added Multilayer, a unique Velveter that swaps between an Overseer with a Pellet Guard turret and a Pellet Guard with an Overseer turret. Branches from Velveter, Auto-Seer or Auto-Pellet Guard.
- Added Ometotl, a tank that can swap between an Axolotl and a Jaguar. Branches from either of its forms. This idea was by Ruwen.
- Added Mexitl, a Jaguar with a spinning flank guard on top. Branches from Auto-Seer or Jaguar. This idea was by Ruwen.
- Added Orbiter, an Engineer that fires blocks with Revolutionist rings. Branches from Engineer. This idea was by AJPlayz7.
- Added Kevin, a Kevin that Kevin. Branches from Sniper and Pounder. This Kevin was by Spencer.
- Nerfed bot body damage.
# UPDATE 3/22/2022 - ive been saving this name for like half a year now i finally get to use it
- Added Axl-Atl, a combination of Spreadbow and Axolotl. Branches from both of its components.
# UPDATE 3/21/2022 - a somewhat velvety day
- Added Doublefold, a Velveter with two more spawners. Branches from Velveter, Overlord, Overtrapper and Overpelleter.
- Added Tunnelfinish, a Velveter with a Foghorn trapper. Branches from Velveter.
- Added Deluxure, a Velveter with two trappers stacked on the back. Branches from Velveter.
- Added Brilliantine, a Velveter with Battleship spawners rather than drone spawners. Branches from Velveter or Battleship.
- Added Workwear, a Velveter with a Builder on the back rather than a trapper. Branches from Velveter.
- Added Twinling, a Spreadling with twin pounder barrels. Branches from Spreadling, Hewn Twin and Heavy Twin.
- Added Spreadbow, a Spreadling with a swarm spawner replacing its pounder and an additional one on the back. Branches from Cruiser and Spreadling.
- Added Atlatl, a Spreadbow with two additional swarm spawners arranged like Subduer cannons within the existing spawners. Branches from Spreadbow.
- Various balance changes, mostly pertaining to Spreadling and Battleship branch.
# UPDATE 3/20/2022 - couple of birds + more
- Added Doduo, a Twin Bird. Branches from Twin and Bird.
- Added Dodrio, a Triple Shot Bird. Branches from Triple Shot and Bird.
- Added Hyperwinder, a Sidewinder with twice the propulsion barrels. Branches from Sidewinder.
- Added Viper, a Sidewinder whose missiles have 3 bee spawners. Branches from Sidewinder.
- Added Sidewinder-2, branching from Sidewinder and Launcher-2.
- A handful of minor fixes
# UPDATE 3/19/2022 - back to business
- Added Hybrado, a Velveter with another Auto-4 gun on the back replacing its trapper. Branches from Velveter. This idea was by AJPlayz7.
- Added Caltropper, a Sprayer whose inner barrel fires traps instead. Branches from Sprayer. This idea was by boshki0987.
- Added Irrigator, a Hybrid Streamliner. Branches from Streamliner or Cropduster.
- Added Scourn, a Machine Launcher. Branches from Blaster and Launcher.
- Added Stork, a Sprayer Bird. Branches from Sprayer and Possum. This idea was by Xyv Wdtcfgzsezgk.
- Added Argentavis, an Annihilator Bird. Branches from Annihilator and Eagle.
- Added Twin Guard, a Twin with a Trap Guard turret. Branches from Twin and Trap Guard.
- Added Mesa, a Pounder with a Trap Guard turret. Branches from Pounder and Trap Guard.
- Added Plateau, a Pounder with an Arsenal turret. Branches from Mesa.
- Added Sheller, a Blaster Minishot. Branches from Blaster, Artillery and Minimach.
- Added Ruffler, an Inceptioner Bird. Branches from both of its components.
- Removed Shamrock from branching.
# UPDATE 3/??/2022 - uhhhh
- Added Industrialist, a Factory with two more minions. This idea was by Earth-Kun.
- I don't actually know when Spencer made this
- This is just here so it being added is at least on the record
# UPDATE 3/17/2022 - quality over quantity
- Added Twin-2, branches from Auto-2 and Twin.
# UPDATE 3/16/2022 - i found ajs todo list
- Added Shamrock (Temporarily). Happy Early St. Patrick's Day! Branches off Pounder. This idea was by 359.
- Added Energizer, a Gunner Bird. Branches from Doxxer or Gunner.
- Added Bent Triple, a Triple Shot variant of Triple Twin. Branches from Triple Twin or Bent Double.
- Added Bowtie, a Weaver variant of Bent Double. Branches from Weaver or Bent Double.
- Added Autowark, an Auto-Bulwark. Branches from Auto-Double and Bulwark. This idea was by AJPlayz7.
- Added Auto-Swarmsman, branching from Auto-Artillery and Swarmsman.
- Added Sniper-2, branching from Sniper and Auto-2.
- Added Assassin-2, branching from Assassin and Sniper-2.
- Added Assassin-3, branching from Assassin-2 and Sniper-3.
- Added Minimach, a Machine Gun Minishot. Branches from its components.
- Added Auto-Minimach, branching from Minimach and Auto-Minishot.
- Added Swarming Trapper, a Trapper with an additional swarm gun on the front. Branches from Trapper.
- Added Vexation, a Swarming Arsenal. Branches from Swarming Trapper and Arsenal.
- Added Infester, a Swarming Twin Trapper. Branches from Twin Trapper and Swarming Trapper.
- Added Overrunner, a Hybrid Infester. Branches from Infester.
- Added Advent, an Assassin with an additional swarm gun on the front. Branches from Assassin.
- Added Eminence, a Ranger variant of Advent. Branches from Advent and Ranger.
- Added Arrival, an Advent-2. Branches off of Advent and Assassin-2.
- Added Possum, a mix of Bird and Machine Gun. Branches from both of its components. This idea was by Rodrigo.
- Added Angerer, a Tri-Angle with a Machine gun on the front. Branches from Tri-Angle and Flank Machine.
- Added Enrager, a Booster variant of Angerer. Branches from Angerer and Booster.
- Added Peacock, a Bird that's a little faster. Branches from Bird.
- Added Hourglass, a Blaster with another Blaster at the back and two Auto-4 turrets on the sides. Branches from Blaster and Auto-4. This idea was by AJPlayz7.
- Added Auto-6, an Auto-4 with 2 more turrets. Branches from Auto-5 or Auto-4.
- Added Trapliner, a Streamliner Barricade. Branches from Barricade or Streamliner.
- Added Barriguard while fully aware of how stupid it is. Branches from Miniguard or Barricade.
- Added Accutrapper specifically to bridge the gap between Trapper and Barricade. Branches from Sniper and Trapper.
- Added Dumper, a fusion of Surfer and Battleship. Branches from both of its components.
- Added Wakeboard, a Surfer with its swarm guns facing forward. Branches from Surfer.
- Added Fabricator, a Fighter with additional side barrels. Branches from Fighter and Bent Double. This idea was by Xyv Wdtcfgzsezgk.
- Added Highwayman, a Fighter with autocannons for side barrels. Branches from Fighter. This idea was by Earth-kun.
- Added Gunner Trapper, an actual Gunner Trap Guard. Branches from Gunner and Pellet Guard.
- Various balance changes (mostly surfer screw you surfer)
- Fixed Bots not being able to gain score
# UPDATE 3/15/2022 - cant stop wont stop
- Added Woven Trapper, a Weaver with Trapper barrels instead. Branches off Weaver and Bent Trapper. This idea was by Spencer.
- Added Twin Arsenal, self explanatory. Branches from Twin Trapper, Arsenal or Twinceptioner. This idea was by Spencer.
- Added Bent Arsenal, self explanatory. Branches from Bent Trapper or Twin Arsenal. This idea was by Spencer.
- Added Pulsar, a Twin with a central flare cannon. Branches from Triplet or Comet. This idea was by AJPlayz7.
- Added Motor, essentially a Directordrive. Branches from Director.
- Added Caravan, a Flank Guard with swarm spawners in the empty spaces. Upgrades from Flank Guard.
- Added Lookout, an Auto-Caravan. Upgrades from Caravan.
- Added Stakeout, an Auto-Fortress. Upgrades from Lookout or Fortress.
- Added Acrodactyla, a Sinarachna with two Flank Guard spinners on its projectiles. Upgrades from Sinarachna.
- Added Swarmsman, an Artillery with swarms replacing its Minishot guns. Upgrades from Artillery or Cruiser.
- Added Armsman, a Mortar with swarms replacing its Minishot guns. Upgrades from Swarmsman or Mortar.
- Added Mars, a Venus with swarms replacing its minishot guns. Upgrades from Swarmsman or Venus.
- Added Doublecheck, an Auto-Auto-2. Branches from Auto-Basic and Auto-2.
- Added Auto-Ranger, self explanatory. Branches from Auto-Assassin or Ranger. This idea was by Earth-kun.
- Added Migrationist, a Bird with a Revolutionist ring. Branches from Auto-Bird or Revolutionist.
- Added Demaru, an Auto-Hewn Twin. Branches from Auto-Twin and Hewn Twin.
- Added Chirisu, a Hybrid-Demaru. Branches from Demaru.
- Added Dedenne, an Auto-Hewn Double. Branches from Auto-Double and Demaru. This idea was by AJPlayz7.
- Added Industrialist, a Factory with two additional minions. Branches from Factory. This idea was by Earth-kun.
- Added Despondent, a Subduer hybrid. Branches from Basebrid and Subduer. This idea was by Earth-kun.
- Added Straightshot, a Minishot with its side barrels straightened out. Upgrades from Minishot.
- Added Sureshot, essentially Auto-Straightshot. Branches from Straightshot or Auto-Minishot.
- Added Dredger, essentially a Straightshot-brid. Branches from Private or Straightshot.
- Added Basekick, a Basic Sidekick. Branches from Basebrid. This idea was by Polygon.
- Added Gambler, a Subduer Sidekick. Branches from Despondent.
- Added Slotmachine, a Sprayer Sidekick. Branches from Gambler.
# UPDATE 3/14/2022 - happy pi day
- Added 359, an overenthusiastic and underqualified trial dev.
- Renamed Overgunner to Overpelleter and Gunner Trapper to Pellet Guard in preparation for true gunner versions.
- Added Woven Hybrid, a Weaver with hybrid drones. Branches off Weaver or Bent Hybrid. This idea was by 359.
- Added Tribrid, a Triplet with hybrid drones. Branches off Bent Hybrid or Triplet. This idea was originally from Woomy.
- Added Siren, a Twin Trapper with a spinning flank turret. Branches off Twin Trapper. This idea was by AJPlayz7.
- Added Twin Sniper, branching from Twin and Sniper.
- Added Obliterator, a combination of Sniper and Pounder. Branches from both of its components.
- Added Launcher-2, branching from Launcher.
- Added Launcher-3, branching from Launcher-2 and Mega-3.
- Added Auto-Artillery, branching from Artillery, Auto-Minishot and Scratcher.
- Added Demolitioner, a Hybrid with Minishot guns. Branches from Demoist, General and Hybrid.
- Added Jaguar, an Overseer with a rear mounted Spreadling. Branches off of Overseer and Spreadling. This idea was by Ruwen.
- Added Kernelthread, a Velveter but with its rear trapper replaced with a Pellet Guard spawner. Branches off of Velveter.
- Unremoved Predaguard, a trap guard Predator. Branches off Huntguard and Predator.
- Various balance changes and bug fixes
- LOTS of branch fixes
# UPDATE 3/3/2022 - Bosses Arise
- Added Weaver, a Triple Shot with uzi outer barrels. Branches off Triple Shot. This idea was by Spencer.
- Added Crafter, a Penta Shot with uzi outer barrels. Branches off Weaver or Penta Shot. This idea was by Spencer.
- Added Viridescence, Green Thing. Branches off Destroyer. This idea was by 359.
- Added Submachine, Pelleter with an extra barrel. Branches off Pelleter. This idea was by AJPlayz7.
- Added Basebrid, Hybrid with a basic barrel instead. Branches off Basic. This idea was originally from Woomy.
- Added Bent Trapper, a Triple Shot trapper. Branches from Triple Shot and Twin Trapper.
- Made Summoner spawnable.
- Made Defender spawnable.
- Made The Destroyer spawnable. (This idea was by AJPlayz7 & calimariclam, originally from Terraria)
- Made Elite Gunner spawnable.
- Made Crimson Comet spawnable. (This idea was by LegendsNeverDie)
- Made Rejuvenator spawnable. (This idea was by LegendsNeverDie)
- Added Supreme Decimator and made it spawnable. (This idea was by Droid)
- Various branch fixes and bug fixes
- Various balance changes
# UPDATE 2/26/2022 - It's raining tanks in February
- Added Asteroid, A Comet with 2 autonomous side turrets. Branches off Comet. This idea was by AJPlayz7.
- Added Planetoid, A Double-Twin Comet. Branches off Hewn Double and Comet. This idea was by AJPlayz7.
- Added Patchworker, A Velveter that has an Arsenal launcher instead of a normal trap launcher. Branches off Velveter. This idea was by 359?
- Added Bedspread, A Velveter with Spreadguns. Branches off Velveter. This idea was by 359?
- Added Twinception, Self-explanatory. Branches off Auto-Twin. This idea was by TC.
- Added Roulette, A Hunter Sidekick. Branches off Poacher. This idea was by AJPlayz7.
- Added Gauntlet, A Gunner Sidekick. Branches off Gunbrid. This idea was by AJPlayz7.
- Added Gunbrid, Self-explanatory. Branches off Gunner and Hybrid Pelleter. This idea was by AJPlayz7.
- Added Micromancer, A Mini Necromancer. Branches off Necromancer. This idea was by 359.
- Added Thimble, A Velveter that spawns a rock with limited lifetime instead of a trap. Branches off Velveter. This idea was by 359.
- Various balance changes and bug fixes
- Various branch fixes
# UPDATE 2/24/2022 - It's a velvety day
- Added Velvetdrive, Self explanatory. Branches off Velveter and Overdrive. This idea was by 359?
- Added Selvage, A Velveter with another Auto-4 turret on top. Branches off Velveter and Autoseer. This idea was by 359?
- Added Interfacer, A Velveter that spawns minions instead of drones. Branches off Velveter. This idea was by 359?
- Added Pullover, This one is interesting, you'll just have to see it. Branches off Velveter. This idea was by 359?
- Added Threadspinner, A Velveter with thrusters. Branches off Velveter. This idea was by 359?
- Added Microfiber, A mini Velveter. Branches off Velveter. This idea was by 359?
- Added Entangler, A Velveter with a hive turret on top. Branches off Velveter. This idea was by 359?
- Various balance changes and bug fixes
- Various branch fixes
# UPDATE 10/23/2021 - guilty as charged (2)
- Added Unboxer, A builder that splits into either 2 traps, 3 bullets or 3 swarms. Branches off Builder. This idea was by boshki0987.
- Added Hexagoner, A Twister with Hexa Tank barrels. Branches off Twister. This idea was by boshki0987.
- Added Shatter, An Omnivore without the cruiser. Branches off Destroyer. This idea was by AJPlayz7.
- Added Fracture, A Shatter but instead of emitting bullets, it sets off 3-4 explosions within it's lifespan. Branches off Shatter. This idea was by Kimotina. (iirc)
- Added Detcord, A Velveter but with an ability that sets off a shockwave of bullets. Branches off Velveter. This idea was by 359. (iirc)
- Added 4 new bosses. Entity Null, Retributionist, Rejuvinator, and Crimson Comet. All of these were by LegendsNeverDie.
# UPDATE 10/21/2021 - guilty as charged
- The last tank i added was over 8 months ago, not including kaztrino adding redist, so i decided to get a couple tanks out myself.
- Removed Double Whammy due to lag issues and replaced it with Club, a rock on a stick basically. Your record shall not be forgotten wk18.
- Added Revolutionist, A basic with a ring that has 2 turrets. Branches off Auto-Tank. This idea was by AJPlayz7.
- Added Beekeeper, a Flail but it's tip has bee spawners. Branches off Flail. This idea was by AJPlayz7.
- Buffed Warper.
- Added Candy Corn Minigun to minigun's upgades.
- Fixed a bug where tanks like Club and Too Many Shields could move their own team's base protector.
# UPDATE 10/14/2021 - Name Colors V2!
- Everyone thank skuTsu for improving the name color code!
# UPDATE 9/20/2021 - BIG MAN summoning (first kaz update)
- Added Redistributor, branches from Annihilator.
# UPDATE 9/18/2021 - Still inactive.
- It may seem like im doing nothing, but im slowly adding beta tanks behind the scenes.
- We have a new trial developer, Kaztrino!
# UPDATE 7/12/2021 - im not dead, just inactive
- Made all upgrade boxes the same color.
- Added working Tooltips.
# UPDATE 2/20/2021 - heylo
- Fixed a bug where Switcheroo would not switch tanks. Finally.
- Added Passive mode for Beta Tester and up. (Press P) - Thanks to 3love for making the code!
# UPDATE 2/4/2021 - I added so many tanks the changelogs broke (2)
- Added Auto-Tank, Self-Explanatory. Branches off Basic. This idea was by AJPlayz7.
- Added Inceptioner, A Basic-drive. Branches off Basic. This idea was by AJPlayz7 (and probably others), original tank from Woomy.
- Added Twinceptioner, A Twin Inceptioner. Branches off Inceptioner and Twin. This idea was by AJPlayz7.
- Added Machceptioner, A Machine Gun Inceptioner. Branches off Inceptioner and Machine Gun. This idea was by AJPlayz7, original tank from Woomy.
- Added Auto-Ceptioner, Self-Explanatory. Branches off Inceptioner and Auto-Basic. This idea was by AJPlayz7.
- Added Bridceptioner, Self-Explanatory. Branches off Inceptioner. This idea was by AJPlayz7.
- Added Automaton, A Hybrid Auto-Ceptioner. Branches off Auto-Ceptioner and Bridceptioner. This idea was by AJPlayz7.
- Added Algorithm, A Minigun Inceptioner. Branches off Machceptioner and Minigun. This idea was by AJPlayz7.
- Added Omnivore, A Destroyer that shoots bullets, that radiate bullets, and also has a cruiser on the back. Branches off Hybrid. This idea was by AJPlayz7.
- Added Auto-Flail, Self Explanatory. Branches off Flail and Auto-Lancer. This idea was by AJPlayz7.
- Added Auto-Lancer, Self Explanatory. Branches off Lancer and Auto-Tank. This idea was by AJPlayz7.
- Added Maneuverer, A Smasher with very high acceleration, but lower top speed. Branches off Smasher. This idea was by boshki0987.
- Added Contaminator, A Twister that has a boomer barrel and more reload. Branches off Twister. This idea was by AJPlayz7.
- Added Arsenal, A Trap-drive. Branches off Trapper and Inceptioner. This idea was by AJPlayz7.
- Added Auto-Arsenal, Self Explanatory. Branches off Arsenal and Auto-Trapper. This idea was by AJPlayz7.
- Added Auto-Trapper, Self-Explanatory. Branches off Trapper and Auto-Tank. This idea was by C4.
- Added Comet, A Hewn Twin, but you can control where the "barrels" aim by moving your cursor further/closer to your tank. Branches off Hewn Twin. This idea was by AJPlayz7.
- Added Private, A Minishot-Brid. Branches off Minishot. This idea was by AJPlayz7, original tank from Woomy.
- Added General, A Artillery-Brid. Branches off Private and Artillery. This idea was by AJPlayz7, original tank from Woomy.
- Added Vulture, A Bird with a Single front cannon. Branches off Single and Bird. This idea was by AJPlayz7.
- Added Chopper, An Auto-Machine Gunner. Branches off Auto-Gunner and Machine Gunner. This idea was by AJPlayz7.
- Added Column, A Flank Machine Gunner. Branches off Machine Gunner. This idea was by AJPlayz7.
- Added Mini Palisade, An Auto-3 + Tri-Trapper. Branches off Auto-3 and Tri-Trapper. This idea was by AJPlayz7.
- Added Demoist, A Destroyer with Artillery sidecannons. Branches off Destroyer and Artillery. This idea was by AJPlayz7.
- Added Sniper-3, Self-Explanatory. Branches off Auto-3. This idea was by AJPlayz7.
- Added Mach-3, Self-Explanatory. Branches off Auto-3. This idea was by AJPlayz7.
- Added Twin-3, Self-Explanatory. Branches off Auto-3. This idea was by AJPlayz7.
- Added Single-3, Self-Explanatory. Branches off Auto-3. This idea was by AJPlayz7.
- Added Engineer-2, Self-Explanatory. Branches off Engineer. This idea was by AJPlayz7.
- Added Skimmer-2, Self-Explanatory. Branches off Skimmer. This idea was by AJPlayz7.
- Added Twister-2, Self-Explanatory. Branches off Twister. This idea was by AJPlayz7.
# UPDATE 2/4/2021 - I added so many tanks the changelogs broke
- Added Auto-Minishot, Self-Explanatory. Branches off Minishot and Auto-Tank. This idea was by AJPlayz7.
- Added Machete, A Single Minishot. Branches off Single and Minishot. This idea was by AJPlayz7.
- Added Falcon Heavy, A Twister with Bird thrusters. Branches off Twister. This idea was by caden77.
- Added Flank Machine, Self-Explanatory. Branches off Flank Guard and Machine Gun. This idea was by AJPlayz7.
- Added Emissary, A Flank Machine with swarm barrels in between. Branches off Flank Machine. This idea was by caden77.
- Added Sinarachna, A Destroyer version of Oxyrrhexis. Branches off Destroyer. This idea was by AJPlayz7.
- Added Oxyrrhexis, An Annihilator that shoots homing guardians. Branches off Annihilator and Sinarachna. This idea was by Evancraft Gc, original tank from Woomy.
- Added Annibrid, Self-Explanatory. Branches off Hybrid and Annihilator. This idea was by AJPlayz7.
- Added Autopocalypse, An Auto-Annihilator. Branches off Masher and Annihilator. This idea was by AJPlayz7, original tank from Woomy.
- Added Masher, An Auto-Destroyer. Branches off Destroyer and Scratcher. This idea was by AJPlayz7, original tank from Woomy.
- Added Scratcher, An Auto-Pounder. Branches off Pounder and Auto-Tank. This idea was by AJPlayz7, original tank from Woomy.
- Added Detriment, An Auto-Hybrid. Branches off Masher and Hybrid. This idea was by AJPlayz7, original tank from Woomy.
- Added Poundbrid, Self-Explanatory. Branches off Pounder. This idea was by AJPlayz7.
- Balancing Changes
# UPDATE 2/3/2021
- Balancing Changes
- Added ANW-1, A new nailgun boss. This idea was by caden77.
- Added ANW-2, A new nailgun boss. This idea was by caden77.
- Added Nailship, A new boss. This idea was by AJPlayz7 and caden77.
- Fixed Falcon not branching off of Owl.
- Fixed A bug where bots would run away from you while still on high health.
- Made the map bigger.
- Fixed a bug where the game would crash when certain bosses spawned.
- Added some command prefixes for the discord bot.
# UPDATE 1/16/2021
- Renamed Swarm Master to Commander.
- Added tons more Beta Tanks.
- Minor Balance Changes.
- Added a makeAuto3 function.
- Added a makeAuto2 function.
- Removed Raven
# UPDATE 1/6/2021
- Added Triblade, A Flank Lancer. Branches off Lancer. This idea was by Evancraft Gc.
- Added Swarm Master, A Master with swarm barrels inbetween its other barrels. Branches off Master. This idea was by AJPlayz7.
- Added Amalgam, A Bomber but the front barrel is replaced by a Minigun. Branches off Bomber and Minigun. This idea was by AJPlayz7.
- Added Octane, A Nailgun with Bird thrusters. Branches off Nailgun. This idea was by caden77.
- Added Castle, A Fortress but the cruiser drones are stronger. Branches off Fortress. This idea was by AJPlayz7.
- Added Hewn Twin, Self Explanatory. Branches off Twin. This idea was by AJPlayz7.
- Added Incognito, An Assassin that isn't targeted by AI's and can also go invisible. This idea was by 9275 and AJPlayz7. original tank from Woomy.
- Added Warmonger, A Tank that shoots octo tanks. Branches off Twister. This idea was by caden77 and AJPlayz7.
- Added Launcher, A Pounder but it shoots bullets with a thruster on them. Branches off Pounder. This idea was by AJPlayz7.
- Added Snowball Launcher, A Pounder but snowball. yes. Branches off Pounder. This idea was by AJPlayz7.
- Added Warper, A Single that can jump a good distance about every 5 seconds by right clicking. Branches off Single. This idea was by Evancraft Gc and AJPlayz7.
- Added Auto-2, Self Explanatory. Branches off Basic. This idea was by AJPlayz7.
- Added Subduer, A Mini Hunter. Branches off Basic. This idea was by AJPlayz7.
- Made bosses spawn a bit more frequently.
- Fixed a couple boss's AI's not working.
- Added NK-1, A new nailgun based boss. This idea was by caden77 and AJPlayz7.
- Balance Changes
- Bug Fixes
# UPDATE 1/2/2021
- Fixed a bug where Buckshot had an insane amount of health.
- Nerfed Twin.
# UPDATE 1/1/2021 - HAPPY NEW YEAR!
- WR Submissions are now open!
- Lancer now branches from Basic.
- Added Chasseur, A longer Lancer. Branches off Lancer. This idea was by Evancraft Gc, original tank from Woomy.
- Flail now branches from Chasseur.
# UPDATE 12/05/2020
- Added Macro, A Pounder Pelleter. Branches off Pounder and Pelleter. This idea was by AJPlayz7.
- Added Punt Gun, A Minigun Pelleter. Branches off Minigun and Pelleter. This idea was by AJPlayz7, original tank from Woomy.
- Added Hewn Punt Gun, A Hewn Punt Gun. Branches off Punt Gun. This idea was by AJPlayz7, original tank from Woomy.
- Added Overlooker, An Auto Overlord. Branches off Overlord. This idea was by AJPlayz7, original tank from Woomy.
- Added Chevron, A Hotshot-brid. Branches off Hotshot and Crop Duster. This idea was by AJPlayz7.
- Added Spreadling, A Weaker Spreadshot. Branches off Twin. This idea was by AJPlayz7.
- Added Axolotl, A Twin with a Spreadling on the back. Branches off Spreadling and Twin. This idea was by AJPlayz7.
- Added Gradient, A Spreadling with the front gun replaced by a split pounder cruiser. Branches off Spreadling. This idea was by AJPlayz7.
- Added Vindicator, A Pounder Rifle. Branches off Rifle. This idea was by AJPlayz7.
- Added Poltergeist, A Hybrid Huntguard. Branches off Huntguard and Poacher. This idea was by AJPlayz7.
- Added Shootist, A Sniper Minishot. Branches off Minishot and Sniper. This idea was by AJPlayz7. original tank from Woomy.
- Added Sharp Shot, A Shootist but the side barrels are facing forwards and not angled. Branches off Shootist. This idea was by AJPlayz7. origial tank from Woomy.
- Added Barge, A Sharp Shot Hybrid. Branches off Sharp Shot. This idea was by AJPlayz7, original tank from Woomy.
- Added Accustrike, An Auto Sharp Shot. Branches off Sharp Shot. This idea was by AJPlayz7.
- Added Battalion, A Hotshot with artillery secondary barrels. Branches off Hotshot. This idea was by AJPlayz7.
- Added Venus, An Artillery with a Sniper Pounder barrel. Branches off Artillery. This idea was by AJPlayz7.
- Added Boiler, An Auto Poacher. Branches off Poacher. This idea was by AJPlayz7.
- Added Ostrich, An Auto Huntguard. Branches off Huntguard. This idea was by AJPlayz7.
- Added Sentries Category to Testbed and Senior Tester.
- EK-1 now spawns after killing an Egg Sanctuary.
- Balancing Changes
- Bug Fixes/Reworks
- Nerfed Bosses
# UPDATE 11/30/2020
- Balancing Changes
- More Beta Tanks
# UPDATE 11/29/2020
- Balacing Changes
- Lag Reduction (as of probably a week ago lol)
- Added Many new Beta Tanks.
- Working on balancing a Sidekick function.
# NOTICE 11/24/2020
- No, im not being super inactive, im just balancing things and adding beta tanks to be tested. i don't want this server to fall into the same unbalanced death trap the other two have been.
# UPDATE 11/18/2020
- Added Moon Kitten as a Trial developer.
- Many clientside bug fixes.
- r a i n b o w c o l o r
- Working on Colored Barrels.
- Added more Beta Tanks.
- Added a Discord Widget.
- Added more Upgrade rows.
- Other small things.
# UPDATE 11/2/2020 - HALLOWEEN (apologies for being late :/)
- Fixed Bots not respawning, and their score not being the correct value.
- Tons of balancing.
- Gave eggs a pumpkin skin.
- Gave Egg Sanctuary A Carved Pumpkin skin.
- Other Tweaks and Bug Fixes.
- Congrats to boshki0987 for winning the second Titan event on saturday!
- Added Hypercannon and High Reload Hypercannon, Basically snipers with AC damage. Branches off Testbed Overdone. This idea was by AJPlayz7.
- Added Overdone category to testbed.
- Added Removed category to testbed.
- Added Senior Tester.
- Added some tanks to Misc.
- Added Pelleter, t i n y b u l l e t. Branches off Basic. This idea was by AJPlayz7.
- Added Hewn Pelleter, m o r e. Branches off Pelleter. This idea was by AJPlayz7.
- Added CAT, a Heavy Twin with a flail in the middle of the barrels. Branches off Heavy Twin and Flail. This idea was by AJPlayz7, original tank from Woomy.
- Added Buster, A buffed Trapper that explodes into bullets after a short period of time. Branches off Builder. This idea was by PS3_33.
- Added Crow, A Bird but the front barrel is a Pounder. Branches off Bird and Pounder. This idea was by AJPlayz7.
- Added Jackdaw, A Bird but the front barrel is a Minigun. Branches off Bird and Minigun. This idea was by AJPlayz7.
- Added Huntguard, A Hunter with a Trapper on the back. Brances off Hunter and Bushwhacker. This idea was by AJPlayz7.
- Added Miniguard, A Minigun with a Trapper on the back. Branches off Minigun and Bushwhacker. This idea was by AJPlayz7.
- Added Auto-Miniguard, Self Explanatory. Branches off Miniguard. This idea was by AJPlayz7.
- Added Broccoli, A Miniguard but it has a Builder on the back instead. Branches off Miniguard and Builder. This idea was by AJPlayz7.
- Added Streamguard, A Miniguard but the front barrels are replaced with a Streamliner. Branches off Miniguard and Streamliner. This idea was by AJPlayz7.
- Added Muskguard, A Musket with a trapper on the back. Branches off Musket and Rifleguard. This idea was by AJPlayz7.
- Added Blaster, A Pounder Machine Gun. Branches off Pounder and Machine Gun. This idea was by AJPlayz7.
- Added Hotshot, A Pounder Minigun. Branches off Pounder and Minigun. This idea was by AJPlayz7.
- Added Boulder, A Hotshot with a Trapper on the back. Branches off Hotshot and Miniguard. This idea was by AJPlayz7.
- Added Backcheck, An Auto-Auto-3. Branches off Auto-3. This idea was by AJPlayz7, original tank from Woomy.
- Added Buckshot, A Sniper Shotgun. Branches off Shotgun. This idea was by AJPlayz7, original tank from Woomy.
- Added Sniper Rifle, An Assassin Rifle. Branches off Rifle and Assassin. This idea was by AJPlayz7, original tank from Woomy.
- WOW that took a long time.
# UPDATE 10/24/2020
- Added bruh lol:
  A Cruiser that exeeds the power level of even Arena Closers.
  Branches off Testbed Overdone.
  This idea was by boshki0987.
- Added some new beta tanks for the next update.
- Had the first Titan event. (pssst, join the discord to get notifed when we have events and updates!)
- Added Titans Category to testbed.
- Added Misc Category to testbed.
- Tweaked some of AJPlayz's Arras Bot's commands.
- Other tweaks and bug fixes.
# UPDATE 10/22/2020
- Readded AJPlayz's Arras Bot to the discord! Its still being worked on though.
# UPDATE 10/15/2020
- Added Rifle Guard, A Rifle with a Trapper on the back. Branches off Rifle and Bushwhacker. This idea was by AJPlayz7.
- Added Twin Trapper, Self Explanatory. Branches off Trapper and Twin. This idea was by AJPlayz7.
- Added Heavy Twin, a Twin Pounder. Branches off Pounder and Twin. This idea was by AJPlayz7.
- Added Double Whammy, A Flank Flail. Branches off Flail. This idea was by AJPlayz7, original tank from Woomy.
- Added Assault Rifle, A Machine Rifle. Branches off Rifle. This idea was by AJPlayz7, original tank from Woomy.
- Added Trapbrid, a Hybrid Trapper. Branches off Trapper. This idea was by AJPlayz7.
# UPDATE 10/15/2020
- Fixed bot HP being way too high.
- Fixed Beta Pentagon spawning being too frequent.
# UPDATE 10/14/2020
- Added Teleport key for Beta Testers. (Thanks to TechCourse, my new developer!)
- Added Egg Sanctuary.
- Added some new beta tanks.
# UPDATE 10/13/2020
- Made more bosses spawn.
- Added Lancer
- Added Flails
- More work on bots.
# UPDATE ??/??/2020
- Added bots. (Still working on them)
- Added some tanks li
- bosses.
- Countless bug fixes.
