# Small Demo to illustrate bug in React-Data-Grid
- Can update columnWidth by entering index numbeer and desired with
- After column resize, react data grid will not update columns width, even when new state is passed as props

#Screenshot/Video


https://user-images.githubusercontent.com/66423127/146938352-63ccb0db-3cbc-4635-90df-b625c674fc5c.mp4


[youtube video](https://www.youtube.com/watch?v=_D7sBbjxhV4)

# Replication Bug
- Resize the column with the mouse button. 
- Open Modal, enter index of target column and width

# Expected Behavior
- Columns width should resize after manual input


## Install and lauch
```
  npm install
  
  npm start
```
