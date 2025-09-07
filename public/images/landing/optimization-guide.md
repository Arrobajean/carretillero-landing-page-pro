# Hero Images Optimization Guide

## Current Issues

The hero background images are extremely large and need optimization:

- `carretillero-landing-hero.jpg`: **14.6 MB** (6720x4480px)
- `carretillero-landing-hero2.jpg`: **5.9 MB**
- `carretillero-landing-hero3.jpg`: **20 MB** (extremely large!)
- `carretillero-cta.jpg`: **2.6 MB** (7258x4844px)

## Recommended Optimizations

### 1. Resize Images

- Target resolution: **1920x1080px** (Full HD)
- For retina displays: **3840x2160px** (4K) as fallback

### 2. Format Conversion

- **Primary**: WebP format (60-80% smaller than JPEG)
- **Fallback**: Optimized JPEG (quality 80-85%)

### 3. Compression Settings

- WebP: Quality 80-85%
- JPEG: Quality 80-85%
- Remove EXIF data
- Progressive JPEG for better loading

### 4. File Size Targets

- WebP: 200-500KB per image
- JPEG fallback: 300-800KB per image

## Manual Optimization Steps

### Using Online Tools:

1. **TinyPNG/TinyJPG**: https://tinypng.com/
2. **Squoosh**: https://squoosh.app/
3. **ImageOptim**: https://imageoptim.com/

### Using Command Line (if available):

```bash
# WebP conversion
cwebp -q 80 input.jpg -o output.webp

# JPEG optimization
jpegoptim --max=80 --strip-all input.jpg
```

## Implementation

After optimization, update the `useHeroImages.ts` hook to use the optimized images with proper fallbacks.
