import React from "react";
import { useLocation } from "react-router-dom";
import MoreOptionComponent from "../components/quick-view/more-option.component";
import QuickViewComponent from "../components/quick-view/quick-view.component";

const QuickViewPageComponent = ({ urlName }) => {
  const { state } = useLocation();

  return (
    <div className="quick-view-page">
      <QuickViewComponent data={state.data} />

      <MoreOptionComponent url={urlName.package} datas={state.datas} />
    </div>
  );
};

export default QuickViewPageComponent;
