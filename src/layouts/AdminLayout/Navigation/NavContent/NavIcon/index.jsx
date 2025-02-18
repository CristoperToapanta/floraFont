import React, { useEffect } from 'react';
import feather from 'feather-icons';

// ==============================|| NAV ICON ||============================== //

const NavIcon = ({ items }) => {
  let navIcons = null;

  if (items.icon) {
    // Asegúrate de que el icono se use correctamente, usando data-feather
    navIcons = (
        <span className="pcoded-micon">
        {/* Usamos data-feather para que Feather los cargue correctamente */}
          <i data-feather={items.icon.replace('feather icon-', '')}></i>
      </span>
    );
  }

  // Usamos useEffect para reemplazar los iconos con feather.replace
  useEffect(() => {
    feather.replace(); // Reemplaza los iconos cuando el componente se monta
  }, [items.icon]);

  return <React.Fragment>{navIcons}</React.Fragment>;
};

export default NavIcon;
