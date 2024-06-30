// import { useState } from "react";
// import styles from "./index.module.css";
// import { Tab } from "../../types";

// interface TabBarProps {
//   tabs: Tab[];
// }

// const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

//   const handleTabClick = (tabId: string) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <div className={styles.tabBar}>
//       {tabs.map((tab) => (
//         <div
//           key={tab.id}
//           className={`${styles.tab} ${
//             activeTab === tab.id ? styles.active : ""
//           }`}
//           onClick={() => handleTabClick(tab.id)}
//         >
//           {tab.label}
//         </div>
//       ))}
//       <div className={styles.content}>
//         {tabs.find((tab) => tab.id === activeTab)?.component}
//       </div>
//     </div>
//   );
// };

// export default TabBar;

// TabBar.tsx
import React, { useState } from "react";
import { Tab } from "../../types";
import styles from "./index.module.css";

interface TabBarProps {
  tabs: Tab[];
}

const TabBar: React.FC<TabBarProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.tabBarContainer}>
      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default TabBar;
