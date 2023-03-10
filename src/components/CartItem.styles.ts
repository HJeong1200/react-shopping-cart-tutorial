import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 220px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
