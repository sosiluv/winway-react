
import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import TradingSystemsPage from '../pages/trading-systems/page';
import WinEdgePage from '../pages/trading-systems/win-edge/page';
import StealthWinPage from '../pages/trading-systems/stealth-win/page';
import FXWinPage from '../pages/trading-systems/fx-win/page';
import WinwayGDTSPage from '../pages/trading-systems/winway-gdts/page';
import WinwayKDTSPage from '../pages/trading-systems/winway-kdts/page';
import WinwayGETSPage from '../pages/trading-systems/winway-gets/page';
import WinwayFITSPage from '../pages/trading-systems/winway-fits/page';
import WinwayCFDPage from '../pages/trading-systems/winway-cfd-equity/page';
import WinwayGOLDPage from '../pages/trading-systems/winway-gold/page';

import FrameworksPage from '../pages/platforms/page';
import TPMonitorPage from '../pages/platforms/tp-monitor/page';
import IDEPage from '../pages/platforms/ide/page';
import PCClientPage from '../pages/platforms/pc-client/page';

import SolutionsPage from '../pages/solutions/page';
import OMSPage from '../pages/solutions/OMS/page';
import PropTradingPlatformPage from '../pages/solutions/ForteAlgo/page';
import MarketDataProcessingPage from '../pages/solutions/ArmisWin/page';
import WinFIXPage from '../pages/solutions/WinFIX/page';
import WinFeedEnginePage from '../pages/solutions/WinFeedEngine/page';
import PRIMAPage from '../pages/solutions/PRIMA/page';
import TrustWinPage from '../pages/solutions/TrustWin/page';
import ChammaePage from '../pages/solutions/Chammae/page';
import TrustMessengerEnterprisePage from '../pages/solutions/TrustMessengerEnterprise/page';

import ServicesPage from '../pages/services/page';
import FXDMAHubPage from '../pages/services/fx-dma-hub/page';
import KRXReferencePage from '../pages/services/krx-reference/page';
import KFundInfoPage from '../pages/services/k-fund-info/page';


import ProjectsPage from '../pages/projects/page';
import WinwayPage from '../pages/winway/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/trading-systems',
    element: <TradingSystemsPage />,
  },
    {
    path: '/trading-systems/win-edge',
    element: <WinEdgePage />,
  },
    {
    path: '/trading-systems/stealth-win',
    element: <StealthWinPage />,
  },
    {
    path: '/trading-systems/fx-win',
    element: <FXWinPage />,
  },
   {
    path: '/trading-systems/winway-gdts',
    element: <WinwayGDTSPage />,
  },
     {
    path: '/trading-systems/winway-kdts',
    element: <WinwayKDTSPage />,
  },
    {
    path: '/trading-systems/winway-gets',
    element: <WinwayGETSPage />,
  },
     {
    path: '/trading-systems/winway-fits',
    element: <WinwayFITSPage />,
  },
    {
    path: '/trading-systems/winway-cfd-equity',
    element: <WinwayCFDPage />,
  },
     {
    path: '/trading-systems/winway-gold',
    element: <WinwayGOLDPage />,
  },
  {
    path: '/frameworks',
    element: <FrameworksPage />,
  },
  {
    path: '/frameworks/tp-monitor',
    element: <TPMonitorPage />,
  },
  {
    path: '/frameworks/ide',
    element: <IDEPage />,
  },
  {
    path: '/frameworks/pc-client',
    element: <PCClientPage />,
  },
 {
  path: '/solutions',
  element: <SolutionsPage />,
},
{
  path: '/solutions/prop-trading-platform',
  element: <PropTradingPlatformPage />,
},
{
  path: '/solutions/oms',
  element: <OMSPage />,
},
{
  path: '/solutions/market-data-processing',
  element: <MarketDataProcessingPage />,
},
{
  path: '/solutions/winfix',
  element: <WinFIXPage />,
},
{
  path: '/solutions/winfeedengine',
  element: <WinFeedEnginePage />,
},
{
  path: '/solutions/prima',
  element: <PRIMAPage />,
},
  {
    path: '/solutions/trustwin',
    element: <TrustWinPage />,
  },
{
  path: '/solutions/chammae',
  element: <ChammaePage />,
},
{
  path:'/solutions/trustmessenger-enterprise',
  element: <TrustMessengerEnterprisePage />,
},
 {
    path: '/services',
    element: <ServicesPage />,
  },
{
  path:'/services/fx-dma-hub',
  element: <FXDMAHubPage />,
},
{
  path: '/services/krx-reference',
  element: <KRXReferencePage />,
},
{
  path:'/services/k-fund-info',
  element: <KFundInfoPage />,
},
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/winway',
    element: <WinwayPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
