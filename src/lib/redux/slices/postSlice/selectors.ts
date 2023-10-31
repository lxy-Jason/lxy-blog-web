import type { ReduxState } from '@/lib/redux';

export const selectPost = (state: ReduxState) => state.post.value;
