import type { FeaturedPlace } from "./types";

export const PAGE_MODE = {
  DATING: 'dating',
  GENERIC: 'generic',
}

export const FEATURED_PLACES : FeaturedPlace[] = [
  { name: "Bangalore", route: "bangalore", tagline: "The Garden City, Where Innovation Blossoms." },
  {name: "Delhi", route: "delhi", tagline: "A Historical Tapestry of Modern Lifestyles."},
  {name: "Mumbai", route: "mumbai", tagline: "The City of Dreams, Where Every Dreamer Thrives"},
];

export const FEATURED_PLACE_ROUTE_TO_OBJ = FEATURED_PLACES.reduce((acc : {[city: string]: FeaturedPlace}, curr: FeaturedPlace) => {
  acc[curr.route] = curr;
  return acc;
}, {});