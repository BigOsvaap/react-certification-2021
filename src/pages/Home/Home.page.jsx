import React from 'react';

import { useLocation } from 'react-router';
import Navbar from '../../components/Navbar';
import SideMenu from '../../components/SideMenu/SideMenu.component';
import CardVideoDisplayer from '../../components/CardVideo/CardVideo.component';
import useVideo from '../../utils/hooks/useVideo';

function HomePage({ theme, setTheme }) {
  const searchQuery = new URLSearchParams(useLocation().search).get('q');

  const { videos } = useVideo({ searchQuery });

  return (
    <>
      <Navbar />
      <SideMenu theme={theme} setTheme={setTheme} />
      <CardVideoDisplayer videos={videos} />
    </>
  );
}

export default HomePage;
