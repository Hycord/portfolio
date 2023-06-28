import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const letters = "abcdefabcde"
export function stringToHex(s: string) {
  var hash = 0,
    i,
    chr
  if (s.length === 0)
    return (
      // "#" +
      hash
        .toString()
        .substring(1, 7)
        .split("")
        .map((c, i) => c + letters[i])
        .join("")
    )
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return (
    "#" +
    hash
      .toString()
      .substring(1, 7)
      .split("")
      .map((c) => letters[parseInt(c)])
      .join("")
  )
}
