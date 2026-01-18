interface Post {
  slug: string;
  title: string;
  date: string;
  pinned: boolean;
}

export const posts: Post[] = [
  {
    slug: "uwreflection",
    title: "thoughts on uw cs",
    date: "sep 2025",
    pinned: false,
  },
];
