import cs from 'classnames';
// eslint-disable-next-line import/no-cycle
import { tabs } from '../../App';

export const Tabs = ({ activeTabId, setActiveTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cs({ 'is-active': activeTabId === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId).content}
      </div>
    </div>
  );
};
