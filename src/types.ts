export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl: string;
  author: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  date: string;
  duration: string;
  showNotes: string;
}

export interface UserStory {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  location: string;
}