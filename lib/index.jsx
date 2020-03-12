"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const transform3d = (open, position, halfHeight, rotation) => {
    return `translate3d(0,${open ? halfHeight : position},0) rotate(${open ? `${rotation}deg` : "0"})`;
};
exports.BurgerMenu = (_a) => {
    var { open = false, width = 36, height = 30, style, strokeWidth = 2, animationDuration = 0.4, color = "#333", rotation = 0, borderRadius = 0 } = _a, props = __rest(_a, ["open", "width", "height", "style", "strokeWidth", "animationDuration", "color", "rotation", "borderRadius"]);
    const halfHeight = height / 2;
    const halfStrokeWidth = -strokeWidth / 2;
    const styles = {
        container: {
            width,
            height,
            position: "relative",
            transform: `rotate(${rotation}deg)`
        },
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
        },
        firstLine: {
            transform: transform3d(open, halfHeight, 0, 45),
            marginTop: halfStrokeWidth
        },
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
        }
    };
    return (<div style={styles.container} onClick={props.onClick}>
      <span style={Object.assign(Object.assign({}, styles.lineBase), styles.firstLine)}></span>
      <span style={Object.assign(Object.assign({}, styles.lineBase), styles.secondLine)}></span>
      <span style={Object.assign(Object.assign({}, styles.lineBase), styles.thirdLine)}></span>
    </div>);
};
//# sourceMappingURL=index.jsx.map