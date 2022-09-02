import { ComponentProps } from "react";
import { LinkContainer } from "./styles";

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
}

export function Link({ text, ...props }: LinkProps) {
  return (
    <LinkContainer {...props}>
      {text}
    </LinkContainer>
  )
}