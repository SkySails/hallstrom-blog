export function formatTitleURLFriendly(title: string): string {
  if (!title) {
    return "untitled";
  }
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const capitalizeSentance = (w: string): string =>
  w.replace(/\b\w/g, (l) => l.toUpperCase());

// Contains each separate part of the URL formatted as a title (Uppercase, no dashes)
export function formatURLTitleFriendly(url: string, root = "/docs/"): string[] {
  if (!url) {
    return ["Untitled"];
  }

  if (url.includes(root)) {
    url = url.split(root)[1];
  }

  return url
    .split("/")
    .filter((s) => s)
    .map((title) => capitalizeSentance(title.replace(/-/g, " ")));
}
