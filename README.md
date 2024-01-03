# Final Project: Dicoding React Basic
Repository for the final project learning path "Learn Creating Web Application with React"<br>
This is a <b>Personal Note Taking App</b> project<br>

## Features:
### Key:
- Display note list
- Add note
- Delete note

### Opt:
- Search
- Note title character limit (with indicator)
- Archive

## Potential Improvement
- Save notes in localstore
- Save notes in database (needs back-end)
- Add `tag` attribute to note
- Pinned notes

## Note
Model:
```typescript
interface Note {
  id: number | string,
  title: string,
  body: string,
  archived: boolean, 
  createdAt: string, // possible using Date instead
}
```
