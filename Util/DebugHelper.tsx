/*
Author: Peter Ho
Description: This class only prints console if NODE_ENV is develop
 */

export const DebugHelper = (message : string) => {
    if (process.env.NODE_ENV == "develop") {
        console.log(message);
    }
}