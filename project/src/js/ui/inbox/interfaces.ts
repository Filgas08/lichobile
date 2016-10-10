export interface PagedThreads {
  currentPage: number
  currentPageResults: Array<Thread>
  maxPerPage: number
  nbPages: number
  nbResults: number
  nextPage: number
  previousPage: number
}

export interface Thread {
  id: string
  author: string
  name: string
  isUnread: boolean
  updatedAt: number
}

export interface Post {
  sender: User
  receiver: User
  createdAt: number
  text: string
}

export interface User {
  online: boolean
  username: string
}

export interface ComposeAttrs {
  id: string;
}

export interface ThreadAttrs {
  id: string;
  thread: Array<Thread>;
  deleteThread: boolean;
}

export interface InputTag {
  value: string;
}

export interface SendErrorResponse {
  username: Array<string>;
  subject: Array<string>;
  text: Array<string>;
}
