import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './charactersReducer'
import characterDetailReducer from './characterDetailReducer'

export const store = configureStore({
  reducer: {
    characters : charactersReducer,
    characterDetails : characterDetailReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch