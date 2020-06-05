import React from 'react';
import './IconSideBar.scss';
export default function IconSideBar() {
  return (
    <div data-test="icoSB" className="icon-side-bar">
      <div className="icon-side-bar_1">
        <div className="icon-side-bar_1_box-1" />
        <div className="icon-side-bar_1_box-2" />
      </div>
      <div className="space" />
      <div className="icon-side-bar_2">
        <div className="icon-side-bar_2_box-1" />
        <div className="icon-side-bar_2_box-2" />
      </div>
    </div>
  );
}
