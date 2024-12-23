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
      className={"border border-primary px-4 py-2 rounded hover:bg-secondary hover:text-accent " + (props.fancy ? "button-3d" : "")}
      data-no-underline
    >
      {props.content}
    </a></h3>
  )
};

export default HollowButton;