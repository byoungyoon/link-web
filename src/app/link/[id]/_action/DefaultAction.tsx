"use client";

import { Fragment, useEffect, useState } from "react";

type Props = {
  id: string;
};

export default function DefaultAction({ id }: Props) {
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    window.location.href = `com.link.share.app://link/${id}`;

    const timer = setTimeout(() => {
      setIsCheck(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  if (!isCheck) return <Fragment />;

  return (
    <div>
      <p>앱이 설치되어 있지 않나요?</p>
      <a href="">앱 스토어에서 열기</a>
    </div>
  );
}
