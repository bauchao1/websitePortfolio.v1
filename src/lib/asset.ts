/** Turns a path inside /public (e.g. "resume.pdf") into a URL that works on every host. */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
