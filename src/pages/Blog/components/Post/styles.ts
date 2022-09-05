import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["base-post"]};
  border: 2px solid ${(props) => props.theme.colors["base-post"]};
  padding: 2rem;
  transition: .3s;

  &:hover {
    border-color: ${(props) => props.theme.colors["base-label"]};
  }
`