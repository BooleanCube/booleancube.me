import React from "react";

interface HollowButtonProps {
  hrefValue: string,
  content: string,
  fancy: boolean,
}

const HollowButton: React.FC<HollowButtonProps> = (props: HollowButtonProps) => {
  return (
    <h3><a
      href={props.hrefValue}
      className={"button " + (props.fancy ? "button-3d" : "")}
      style={{ userSelect: "none" }}
      data-no-underline
    >
      {props.content}
    </a></h3>
  )
};

export default HollowButton;