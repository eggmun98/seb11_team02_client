import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryFetchLoginUser } from "../../hooks/queries/fetchLoginUser";
import LoginUI from "../../items/modal/login/login.index";
import TooltipUI from "../../items/tooltip/01/tooltip01.index";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);
  const { data } = useQueryFetchLoginUser();

  const onClickOpen = (open: string) => (): void => {
    if (open === "login") {
      setIsOpen((prev) => !prev);
    } else {
      setIsTooltip((prev) => !prev);
    }
  };

  return (
    <>
      {isOpen && <LoginUI setIsOpen={setIsOpen} />}
      <S.Wrapper>
        <div>
          <S.Logo src="/images/layout/logo.svg" />
          <S.MenuBox>
            <Link href="/main">
              <div className={router.pathname === "/main" ? "selected" : ""}>
                <S.MapIcon />
                <a>지도</a>
              </div>
            </Link>
            <Link href="/chat">
              <div className={router.pathname === "/chat" ? "selected" : ""}>
                <S.MessageIcon />
                <a>채팅</a>
              </div>
            </Link>
          </S.MenuBox>
          {data?.fetchLoginUser ? (
            <S.UserBox style={{ position: "relative" }}>
              {isTooltip && <TooltipUI></TooltipUI>}
              <S.UserIcon onClick={onClickOpen("")} />
            </S.UserBox>
          ) : (
            <S.LoginButton onClick={onClickOpen("login")}>로그인</S.LoginButton>
          )}
        </div>
      </S.Wrapper>
    </>
  );
}
