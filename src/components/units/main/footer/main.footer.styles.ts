import styled, { CSSObject } from "@emotion/styled";
import { BiUser } from "react-icons/bi";

const activeColor = "#6658ca";
const inactiveColor = "#979797";

interface IWrapperProps {
  isOpen?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh-80px;
  border-left: 1px solid #e2e2e2;

  @media (max-width: 767px) {
    width: 200px;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    z-index: 20;
  }
`;

export const ChatFooterTitle = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const Title = styled.div<{ selected: boolean }>`
  cursor: pointer;
  user-select: none;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  color: ${({ selected }) => (selected ? activeColor : inactiveColor)};
`;

export const ChatTitle = styled(Title)`
  margin-right: 30px;

  @media (max-width: 767px) {
    margin-left: 35px;
    margin-right: 20px;
  }
`;

export const FollowerTitle = styled(Title)``;

export const FollowList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #979797;
  cursor: pointer;
  padding: 10px 0;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #fff;
  padding: 2px;
  border-radius: 50px;
  cursor: pointer;
  border-bottom: 1px solid #979797;
`;

export const UserIcon = styled(BiUser)`
  width: 100%;
  height: 100%;
  color: #d2d2d2;
`;
