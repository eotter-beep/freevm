import { getGPUTier } from 'detect-gpu';

(async () => {
  const gpuTier = await getGPUTier({
    // URL of benchmarks (optional)
    benchmarksURL: 'https://unpkg.com/detect-gpu@9.0.2/dist/benchmarks',

    // Whether to fail if no hardware GPU
    failIfMajorPerformanceCaveat: false,

    // Framerate tiers
    mobileTiers: [0, 15, 30, 60],
    desktopTiers: [0, 15, 30, 60],

    // Optional overrides
    override: {
      isMobile: false,
      screenSize: { width: 1920, height: 1080 }
    }
  });

  console.log('GPU Tier:', gpuTier);
})();
