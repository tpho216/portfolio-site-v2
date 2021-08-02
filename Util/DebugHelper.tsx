/*
Author: Peter Ho
Description: This class only prints console if NODE_ENV is develop
 */

export const DebugHelper = (message : string) => {
    if (process.env.DEBUGGING == 'true') {
        console.log(message);
    }
}