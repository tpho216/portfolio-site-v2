import React from "react";

export interface CustomRoute {
    path: string | string[];
    component: React.ComponentType;
    key: string;
}