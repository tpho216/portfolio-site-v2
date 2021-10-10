/*
Author: Peter Ho
Description: This class only prints console if NODE_ENV is develop
 */

export const DebugHelper = (message : any) => {
    if (process.env.DEBUGGING == 'true') {
        console.log(message as string);
    }
}