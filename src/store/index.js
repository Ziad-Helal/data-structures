import { configureStore } from "@reduxjs/toolkit";
import { generalSlice } from "./general_slice/general_slice";
import { stackSlice } from "./stack_slice/stack_slice";
import { queueSlice } from "./queue_slice/queue_slice";

export const store = configureStore({
    reducer: {
        general: generalSlice.reducer,
        stack: stackSlice.reducer,
        queue: queueSlice.reducer,
    },
});

import { generalActions } from "./general_slice/general_slice";
import { stackActions } from "./stack_slice/stack_slice";
import { queueActions } from "./queue_slice/queue_slice";

export { generalActions, stackActions, queueActions };
