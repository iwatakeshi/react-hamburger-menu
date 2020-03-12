import React, { HTMLAttributes } from "react";

type OnBurgerMenuClickEvent =
  | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
  | undefined;

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

const transform3d = (
  open: boolean,
  position: number,
  halfHeight: number,
  rotation: number
) => {
  return `translate3d(0,${open ? halfHeight : position},0) rotate(${
    open ? `${rotation}deg` : "0"
  })`;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  open = false,
  width = 36,
  height = 30,
  style,
  strokeWidth = 2,
  animationDuration = 0.4,
  color = "#333",
  rotation = 0,
  borderRadius = 0,
  ...props
}) => {
  const halfHeight = height / 2;
  const halfStrokeWidth = -strokeWidth / 2;

  const styles = {
    container: {
      width,
      height,
      position: "relative",
      transform: `rotate(${rotation}deg)`
    } as React.CSSProperties | undefined,
    lineBase: {
      display: "block",
      height: `${strokeWidth}px`,
      width: "100%",
      background: color,
      transitionTimingFunction: "ease",
      transitionDuration: `${animationDuration}s`,
      borderRadius: `${borderRadius}px`,
      transformOrigin: "center",
      position: "absolute"
    } as React.CSSProperties | undefined,
    firstLine: {
      transform: transform3d(open, halfHeight, 0, 45),
      marginTop: halfStrokeWidth
    } as React.CSSProperties | undefined,
    secondLine: {
      transitionTimingFunction: "ease-out",
      transitionDuration: `${animationDuration / 4}s`,
      opacity: open ? "0" : "1",
      top: halfHeight,
      marginTop: halfStrokeWidth
    },
    thirdLine: {
      transform: transform3d(open, halfHeight, height, -45),
      marginTop: halfStrokeWidth
    } as React.CSSProperties | undefined
  };

  return (
    <div style={styles.container} onClick={props.onClick}>
      <span style={{ ...styles.lineBase, ...styles.firstLine }}></span>
      <span style={{ ...styles.lineBase, ...styles.secondLine }}></span>
      <span style={{ ...styles.lineBase, ...styles.thirdLine }}></span>
    </div>
  );
};
