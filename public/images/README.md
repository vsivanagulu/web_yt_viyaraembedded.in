# Images Directory

This directory is intended to store static image assets for the VIYARAEMBEDDED application.

Currently, the application primarily uses external image sources (Unsplash, Placehold.co, etc.) or specific hosted images defined in `constants.tsx`.

If you choose to host images locally:
1. Place your image files (e.g., `.png`, `.jpg`, `.webp`) in this folder.
2. Import them in your component files or reference them via the public path if configured in your build system.

Example usage in code if importing:
```tsx
import myImage from '../../images/my-image.png';
```
