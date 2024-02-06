# Final Project: Dicoding React Basic

Repository for the final project learning path "Learn Creating Web Application with React"<br>
This is a <b>Personal Note Taking App</b> project<br>

## Tech Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (Typescript + SWC)
- [Tailwindcss](https://tailwindcss.com/) (with postcss and autoprefixer)

## Features:

### Key:

- [x] Display note list
- [x] Add note
- [x] Delete note

### Opt:

- [x] Search
- [x] Note title character limit (with indicator)
- [x] Archive

## Potential Improvement

- [ ] Save notes in localstorage
- [ ] Save notes in database (needs back-end)
- [ ] Add `tag` attribute to note
- [ ] Pinned notes

## Note

Model (current):

```typescript
interface Note {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: Date;
}
```
