import React, { useState } from 'react'
import AddFluid from './addFluid';

const Fluid = () => {
    const [addFluid, setAddFluid] = useState(false);
    const handleCloseAddFluid = () => {
      setAddFluid(false);
    };
    return (
      <div>
        <div className="header-container my-4">
          <h6>Fluid Signs</h6>
          <div className="custom-btn" onClick={() => setAddFluid(true)}>
            Add Fluid Signs
          </div>
        </div>
        <div className="box-style"></div>
        {addFluid && <AddFluid handleCloseAddFluid={handleCloseAddFluid} />}
      </div>
    );
}

export default Fluid