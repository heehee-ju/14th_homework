'use client';

// import BoardList from "@/components/board/boards-list/list";
import BannerList from './banner';
import Navigation from './navigation';

interface ILayout {
  children: React.ReactNode;
}

export default function Layout(props: ILayout) {
  return (
    <>
      <Navigation />
      <BannerList />
      {props.children}
    </>
  );
}
