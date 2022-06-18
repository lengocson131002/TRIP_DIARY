import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./tab";
import styles from "../settingProfile.module.css";
class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className={styles.flexAccount}>
        <aside className={styles.menuAside}>
          <div className={styles.bcg} />
          <ul>
            {children.map((child) => {
              const { label, Icon } = child.props;
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                  Icon={Icon}
                />
              );
            })}
          </ul>
        </aside>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    );
  }
}

export default Tabs;
