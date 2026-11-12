// All tuning constants live here so balance can be tweaked in one place.

export const GAME = {
  WIDTH: 960,
  HEIGHT: 540,
};

export const COLORS = {
  OCEAN: 0x0b2545,
  WAVE: 0x13315c, // slightly lighter blue for the wave texture lines
  BOAT: 0xffffff,
};

export const OCEAN = {
  WAVE_SPACING: 48, // pixels between wave rows
  WAVE_LENGTH: 16,  // length of each little wave dash
  WAVE_ALPHA: 0.6,
};

// Texture keys. Phase 1 generates these from shapes; phase 2 can load
// sprite images under the same keys and nothing else needs to change.
export const TEXTURES = {
  BOAT: 'boat',
};

export const PLAYER = {
  WIDTH: 28,            // boat length (pixels), nose points right at angle 0
  HEIGHT: 16,           // boat beam (width)
  THRUST: 260,          // forward acceleration, pixels/second²
  REVERSE_THRUST: 120,  // reverse acceleration, pixels/second²
  MAX_SPEED: 220,       // top speed, pixels/second
  DAMPING: 0.35,        // fraction of speed kept after 1s of coasting (lower = stops faster)
  TURN_SPEED: 180,      // rotation speed, degrees/second
  BOUNCE: 0.3,          // how much speed is kept when bumping the screen edge
};
