import React from 'react';
import { List, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { Hook } from '../../services';
import { groupBy } from '../../helpers';
import { CreateBtn, Loading } from '../../components/UI';

const accountConfs = [
  {
    to: '/connect/facebook-messenger',
    title: 'Facebook Page for Messenger Chatbot',
    entity: 'facebook_page',
    description: 'To use the Virtual Lab chatbot, Connect your Facebook account and grant Virtual Lab permission to manage messages for the Page for which you are the administrator. Virtual Lab will have permission to send and receieve messages on the behalf of the Page.',
    getName: c => c.details.name,
    buttonText: 'Connect',
    // TODO: add "actions" with name/route for each action
  },
  {
    to: '/connect/reloadly',
    title: 'Reloadly',
    entity: 'reloadly',
    description: 'To enable top-ups in Virtual Lab chatbot using Reloadly, provide your Reloadly API keys.',
    getName: c => c.details.id,
    buttonText: 'Connect',
  },
  {
    to: '/connect/secrets',
    title: 'Generic Secrets',
    entity: 'secrets',
    description: 'Add generic secrets for additional plugins here.',
    getName: c => c.key,
    buttonText: 'Add Secret',
  },
  {
    to: '/connect/api-keys',
    title: 'Fly API Keys',
    entity: 'api_token',
    description: 'API Keys for connecting Fly to other applications',
    getName: c => c.details.name,
    buttonText: 'Create',
  },
];

const Accounts = () => {
  const accounts = Hook.useMountFetch({ path: '/credentials' }, null)[0];

  if (accounts === null) {
    return <Loading> (loading accounts) </Loading>;
  }

  const a = groupBy(accounts, a => a.entity);
  const confs = accountConfs.map((acc) => {
    const r = a.get(acc.entity);
    if (!r) return acc;

    return { ...acc, connected: r };
  });

  return (
    <>
      <div className="accounts" style={{ width: 800, margin: '2em auto' }}>
        <h1 style={{}}> Connected Accounts </h1>
        <List
          itemLayout="vertical"
          dataSource={confs}
          renderItem={item => (
            <>
              <List.Item
                extra={(
                  <CreateBtn key={1} to={item.to}>
                    {item.buttonText.toUpperCase()}
                  </CreateBtn>
                )
                }
              >
                <List.Item.Meta
                  title={item.title}
                  description={item.description}

                />

                {item.connected && (<p style={{ fontWeight: 700, margin: '0' }}> Connected: </p>)}
                {item.connected && item.connected.map((d, key) => (
                  <p key={key} style={{ margin: '0' }}>
                    {' '}
                    <span>{item.getName(d)}</span>
                    {' '}
                    <Link style={{ marginLeft: '0.5em' }} to={`${item.to}?key=${d.key}`}> (update) </Link>
                  </p>
                ))}

              </List.Item>
              <Divider />
            </>
          )}
        />
      </div>
    </>
  );
};

Accounts.propTypes = {};

export default Accounts;
