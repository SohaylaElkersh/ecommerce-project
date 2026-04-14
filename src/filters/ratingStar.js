export default function star(rating, maxRating = 5) {
  const filledStar = "★";
  const emptyStar = "☆";

  if (rating < 0) rating = 0;
  if (rating > maxRating) rating = maxRating;

  const filled = filledStar.repeat(Math.round(rating));
  const empty = emptyStar.repeat(maxRating - Math.round(rating));

  return filled + empty;
}