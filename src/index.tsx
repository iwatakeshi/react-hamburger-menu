import React, { HTMLAttributes, CSSProperties } from "react";

type OnBurgerMenuClickEvent =
  | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
  | undefined;

interface BurgerMenuProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  open?: boolean;
  strokeWidth?: number;
  rotate?: number;
  animationDuration?: number;
  color?: string;
  borderRadius?: number;
  onClick?: OnBurgerMenuClickEvent;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = props => {
  const width = `${props.width ?? 36}px`,
    height = `${props.height ?? 30}px`,
    halfHeight = `${(props.height ?? 30) / 2}px`,
    open = props.open ?? false,
    strokeWidth = props.strokeWidth ?? 2,
    halfStrokeWidth = `-${strokeWidth / 2}px`,
    animationDuration = props.animationDuration ?? 0.4;

  const transform3d = (open: boolean, position: string, rotate: number) =>
    `translate3d(0,${open ? halfHeight : position},0) rotate(${
      open ? `${rotate}deg` : 0
    })`;

  const styles = {
    container: {
      width,
      height,
      position: "relative",
      transform: `rotate(${props.rotate ?? 0}deg)`
    } as CSSProperties,
    lineBase: {
      display: "block",
      height: `${strokeWidth}px`,
      width: "100%",
      background: props.color ?? "#000",
      transitionTimingFunction: "ease",
      transitionDuration: `${animationDuration}s`,
      borderRadius: `${props.borderRadius ?? 0}px`,
      transformOrigin: "center",
      position: "absolute"
    } as CSSProperties,
    firstLine: {
      transform: transform3d(open, 0, 45),
      marginTop: halfStrokeWidth
    } as CSSProperties,
    secondLine: {
      transitionTimingFunction: "ease-out",
      transitionDuration: `${animationDuration / 4}s`,
      opacity: open ? 0 : 1,
      top: halfHeight,
      marginTop: halfStrokeWidth
    } as CSSProperties,
    thirdLine: {
      transform: transform3d(open, height, -45),
      marginTop: halfStrokeWidth
    } as CSSProperties
  };
  const { lineBase, firstLine, secondLine, thirdLine } = styles;
  return (
    <div style={styles.container} onClick={props.onClick}>
      <span style={{ ...lineBase, ...firstLine }}></span>
      <span style={{ ...lineBase, ...secondLine }}></span>
      <span style={{ ...lineBase, ...thirdLine }}></span>
    </div>
  );
};
