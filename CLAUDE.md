# Torpedo Run — Browser Game

## About this project
A top-down 2D naval survival game that runs in the browser.
I'm learning game development, so **explain new game-dev concepts briefly** when you introduce them
(game loop, physics bodies, delta time, object pooling, etc.).

Long-term plan: grow this into **Fleet Defender** (wave-based naval shooter with upgrades).
Keep the code structured so that's easy later. Don't build Fleet Defender features until I ask.

## Tech stack
- Phaser 3 (latest 3.x), Arcade Physics only
- Vite as dev server and bundler
- Plain JavaScript (ES modules); no TypeScript for now
- No other libraries unless I approve them

## Commands
- `npm install` — install dependencies
- `npm run dev` — start the dev server (http://localhost:5173)
- `npm run build` — production build into `dist/`

## Game design

### Core loop
The player steers a small boat on an endless ocean, dodging torpedoes and mines.
Survive as long as possible. Score = seconds survived + bonus pickups.

### Controls
- **W / S**: forward / reverse thrust (boat has momentum, so it drifts and doesn't stop instantly)
- **A / D**: rotate left / right
- **Space**: short speed boost (3-second cooldown)
- **P / Esc**: pause

### Entities
| Entity | Behavior |
|---|---|
| Player boat | 3 HP. Brief invincibility (1s, flashing) after a hit |
| Torpedo | Spawns at a screen edge and travels in a straight line toward the player's position at spawn time |
| Homing torpedo | Unlocks after 60s. Slowly turns toward the player and expires after 6s |
| Mine | Spawns randomly and stays still. Explodes on contact; despawns after 10s |
| Repair kit | Rare pickup that restores 1 HP |
| Gold coin | Pickup worth +50 score |

### Difficulty
- Spawn rate and torpedo speed increase every 15 seconds
- Keep all tuning numbers in `src/config.js` so I can tweak balance easily

### Screens / scenes
1. **BootScene**: loads assets
2. **MenuScene**: title, "Press Enter to start", high score
3. **GameScene**: gameplay with HUD (HP, score, boost cooldown)
4. **GameOverScene**: final score, high score, "Press Enter to retry"

High score is saved in `localStorage`.

### Visual style
- Phase 1: simple shapes only (triangles, circles, rectangles) drawn with Phaser Graphics.
  Dark blue ocean (#0b2545), white boat, red torpedoes, orange mines
- Phase 2 (later): swap to sprites from kenney.nl and add particles and screen shake
- Resolution 960x540, scale to fit the window (Phaser `Scale.FIT`)

## Project structure
```
src/
  main.js          # Phaser game config + scene list
  config.js        # all tuning constants (speeds, spawn rates, HP...)
  scenes/
    BootScene.js
    MenuScene.js
    GameScene.js
    GameOverScene.js
  entities/
    Player.js
    Torpedo.js
    Mine.js
    Pickup.js
  systems/
    Spawner.js     # spawning + difficulty ramp
public/
  assets/          # images and sounds (phase 2)
```

## Coding rules
- One class per file. Entities extend Phaser classes where it makes sense
- Use Phaser Groups with object pooling for torpedoes and mines (don't create and destroy every frame)
- Movement uses delta time so speed is frame-rate independent
- No magic numbers in game code; put them in `config.js`
- Keep functions short and readable, with brief comments for anything non-obvious
- Never break a working feature. Test after each change

## How we work
- Build **one small feature at a time**, then stop so I can test it in the browser
- After each working feature, commit with a clear message (e.g. `feat: player boat movement with momentum`), then push to GitHub
- If a request is unclear or would require a big refactor, ask me first
- When fixing a bug, explain what caused it in 1–2 sentences

## Roadmap
- [x] 1. Scaffold Phaser + Vite, empty GameScene with ocean background
- [x] 2. Player boat movement (thrust, rotation, momentum, screen bounds)
- [ ] 3. Straight torpedoes spawning from edges
- [ ] 4. Collision, HP, invincibility flash
- [ ] 5. Score timer + HUD
- [ ] 6. Game over + retry + high score
- [ ] 7. Menu scene
- [ ] 8. Mines + difficulty ramp
- [ ] 9. Boost ability
- [ ] 10. Homing torpedoes + pickups
- [ ] 11. Pause
- [ ] 12. Polish: sprites, sounds, particles, screen shake
- [ ] 13. Deploy to GitHub Pages / itch.io
