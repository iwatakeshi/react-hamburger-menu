import React, { HTMLAttributes } from "react";
declare type OnBurgerMenuClickEvent = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
interface BurgerMenuProps extends HTMLAttributes<HTMLDivElement> {
    width?: number;
    height?: number;
    open?: boolean;
    strokeWidth?: number;
    rotation?: number;
    animationDuration?: number;
    color?: string;
    borderRadius?: number;
    onClick?: OnBurgerMenuClickEvent;
}
export declare const BurgerMenu: React.FC<BurgerMenuProps>;
export {};
