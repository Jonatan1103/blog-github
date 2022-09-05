import styled from "styled-components";

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background-color:${(props) => props.theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0,0,0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  flex-direction: column;
`