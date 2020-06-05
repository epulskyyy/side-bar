import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  IconSideBar,
  IcoDashboard,
  IcoArrowLeft,
  IcoInfoMutasi,
  IcoInfoSaldo,
  IcoDashboardActive,
  IcoInfoSaldoActive,
  IcoLogout,
  IcoArrowDropdown,
} from '../../../components/assets/icon';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/modules/auth/actions';
const SideMenu = (props) => {
  const {
    location: { pathname },
  } = props;
  const [page] = pathname.slice(1).split('/');
  const [linkActive, setLinkActive] = useState('');
  const changeActive = (status) => {
    setLinkActive(status);
  };
  const [showMenu, setshowMenu] = useState(false);
  const menuShow = showMenu ? 'side active' : 'side';
  let sideLink = 'side-link';
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch(logout());
    await backLogout();
  };
  const backLogout = (page) =>
    new Promise(() => {
      return <Redirect to="/" />;
    });
  return (
    <div className={menuShow}>
      <div className=" side-bar">
        <div className="side-bar_header">
          <div className="side-bar_header_content">
            <Link to="/#">
              <span className="ico-header">
                <IcoArrowLeft />
              </span>
              <span className="header-title">Kembali ke BRIAPI</span>
            </Link>
            <div
              className="ico-show-menu"
              onClick={() => setshowMenu(!showMenu)}
            >
              <IcoArrowDropdown variant="#002b5d" />
            </div>
          </div>
        </div>
        <div className="side-bar_content">
          <ul className="side-links">
            <li>
              <Link
                to="/#"
                className={page === '' ? sideLink + ' active' : sideLink}
              >
                <span className="icon-link">
                  <IcoDashboardActive />
                  <IcoDashboard />
                </span>
                <span className="content-title">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                onClick={() => changeActive('FTI')}
                className={
                  linkActive === 'FTI' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IconSideBar />
                </span>
                <span className="content-title">Fund Transfer internal</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                onClick={() => changeActive('FTE')}
                className={
                  linkActive === 'FTE' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IconSideBar />
                </span>
                <span className="content-title">Fund Transfer Eksternal</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                onClick={() => changeActive('DD')}
                className={
                  linkActive === 'DD' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IconSideBar />
                </span>
                <span className="content-title">Direct Debit</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                onClick={() => changeActive('briva')}
                className={
                  linkActive === 'briva' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IconSideBar />
                </span>
                <span className="content-title">BRIVA</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                onClick={() => changeActive('TUB')}
                className={
                  linkActive === 'TUB' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IconSideBar />
                </span>
                <span className="content-title">Top Up BRIZZI</span>
              </Link>
            </li>
            <li>
              <Link
                to="/infosaldo/invoice"
                className={
                  page === 'infosaldo' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IcoInfoSaldoActive />
                  <IcoInfoSaldo />
                </span>
                <span className="content-title">Info Saldo</span>
              </Link>
            </li>
            <li>
              <Link
                to="/infomutasi"
                onClick={() => changeActive('infomutasi')}
                className={
                  page === 'infomutasi' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IcoInfoMutasi />
                </span>
                <span className="content-title">Info Mutasi</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                onClick={() => changeActive('ILK')}
                className={
                  linkActive === 'ILK' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IconSideBar />
                </span>
                <span className="content-title">Info Lokasi Kantor</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                onClick={() => changeActive('infoValas')}
                className={
                  linkActive === 'infoValas' ? sideLink + ' active' : sideLink
                }
              >
                <span className="icon-link">
                  <IconSideBar />
                </span>
                <span className="content-title">Info Valas</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="side-bar_footer">
          <div className="side-bar_footer_content">
            <Link to="/#" onClick={handleSubmit}>
              <div className="footer-logo-user">KS</div>
              <div className="footer-title">
                <label>Logout</label>
              </div>
              <span className="space" />
              <div className="ico-logout">
                <IcoLogout />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
