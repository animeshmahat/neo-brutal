// Utility function to merge multiple class names conditionally
// Filters out any falsy values (false, null, undefined) and joins the rest with a space
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
