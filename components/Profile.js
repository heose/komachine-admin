import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  margin: 8px 0;
  flex: 0 0 130px;
  border-left: 1px solid darkgray;
`;

const Profile = () => {
  return (
    <Div>
      UserName
    </Div>
  )
};

export default Profile;