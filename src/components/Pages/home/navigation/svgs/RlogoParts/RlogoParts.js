import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
export const BorderCircle = (props) => {
  const { toggle } = props;
  const [length, setLength] = useState(null);

  const rLogoAnime = useSpring({
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length,
  });

  return (
    <>
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#A78BFA"
        strokeWidth="6"
        d="M345.836 611.219c-55.102 0-106.988-21.446-145.922-60.461-39.016-38.938-60.465-90.82-60.465-145.922 0-55.102 21.45-106.988 60.465-145.922 38.934-39.016 90.82-60.465 145.922-60.465 55.101 0 106.984 21.45 145.922 60.465 39.015 39.016 60.46 90.82 60.46 145.922 0 55.101-21.445 106.984-60.46 145.922-38.938 39.015-90.82 60.46-145.922 60.46zm0-400.395c-51.805 0-100.555 20.207-137.18 56.832s-56.832 85.375-56.832 137.18c0 51.8 20.207 100.55 56.832 137.176 36.625 36.625 85.375 56.836 137.18 56.836 51.8 0 100.55-20.211 137.176-56.836 36.625-36.625 56.836-85.375 56.836-137.176 0-51.805-20.211-100.555-56.836-137.18s-85.375-56.832-137.176-56.832zm0 0"
      />
    </>
  );
};

export const PinkText = (props) => {
  const { toggle } = props;
  const [length, setLength] = useState(null);

  const rLogoAnime = useSpring({
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length,
  });

  return (
    <>
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#f0f"
        strokeWidth="6"
        d="M50.031-9.203L4.921-29.11v-6.516l45.11-22.5v10.875L18.97-32.828 50.03-20.094zm0 0"
        transform="translate(197.57 440.442)"
      />
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#f0f"
        strokeWidth="6"
        d="M78.125-59.523c0-8.188-6.695-14.883-14.879-14.883H3.72V0h14.883v-29.762h8.742L54.875-2.23C56.363-.742 58.223 0 60.27 0h17.855v-14.883H63.246L48.363-29.762h14.883c8.184 0 14.879-6.695 14.879-14.883zm-14.879 0v14.878H18.602v-14.878zm0 0"
        transform="translate(265.462 440.442)"
      />
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#f0f"
        strokeWidth="6"
        d="M19.719 0L49.48-74.406H33.484L3.72 0zm0 0"
        transform="translate(361.999 440.442)"
      />
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#f0f"
        strokeWidth="6"
        d="M4.922-20.094l31.062-12.734L4.922-47.25v-10.875l45.11 22.5v6.516L4.921-9.203zm0 0"
        transform="translate(429.89 440.442)"
      />
    </>
  );
};

export const BlueText = (props) => {
  const { toggle } = props;
  const [length, setLength] = useState(null);

  const rLogoAnime = useSpring({
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length,
  });

  return (
    <>
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#0ff"
        strokeWidth="6"
        d="M50.031-9.203L4.921-29.11v-6.516l45.11-22.5v10.875L18.97-32.828 50.03-20.094zm0 0"
        transform="translate(208.899 443.058)"
      />
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#0ff"
        strokeWidth="6"
        d="M78.125-59.523c0-8.188-6.695-14.883-14.879-14.883H3.72V0h14.883v-29.762h8.742L54.875-2.23C56.363-.742 58.223 0 60.27 0h17.855v-14.883H63.246L48.363-29.762h14.883c8.184 0 14.879-6.695 14.879-14.883zm-14.879 0v14.878H18.602v-14.878zm0 0"
        transform="translate(276.791 443.058)"
      />
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#0ff"
        strokeWidth="6"
        d="M19.719 0L49.48-74.406H33.484L3.72 0zm0 0"
        transform="translate(373.327 443.058)"
      />
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        stroke="#0ff"
        strokeWidth="6"
        d="M4.922-20.094l31.062-12.734L4.922-47.25v-10.875l45.11 22.5v6.516L4.921-9.203zm0 0"
        transform="translate(441.22 443.058)"
      />
    </>
  );
};

export const BlackText = (props) => {
  const { toggle } = props;
  const [length, setLength] = useState(null);

  const rLogoAnime = useSpring({
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length,
  });

  return (
    <>
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        d="M50.031-9.203L4.921-29.11v-6.516l45.11-22.5v10.875L18.97-32.828 50.03-20.094zm0 0"
        transform="translate(203.235 441.75)"
      />{" "}
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        d="M78.125-59.523c0-8.188-6.695-14.883-14.879-14.883H3.72V0h14.883v-29.762h8.742L54.875-2.23C56.363-.742 58.223 0 60.27 0h17.855v-14.883H63.246L48.363-29.762h14.883c8.184 0 14.879-6.695 14.879-14.883zm-14.879 0v14.878H18.602v-14.878zm0 0"
        transform="translate(271.127 441.75)"
      />{" "}
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        d="M19.719 0L49.48-74.406H33.484L3.72 0zm0 0"
        transform="translate(367.663 441.75)"
      />
      <animated.path
        style={rLogoAnime}
        ref={(ref) => {
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
        d="M4.922-20.094l31.062-12.734L4.922-47.25v-10.875l45.11 22.5v6.516L4.921-9.203zm0 0"
        transform="translate(435.555 441.75)"
      />
    </>
  );
};
