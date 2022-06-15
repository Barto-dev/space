import React from 'react';

import { useParams } from 'react-router-dom';

import { useRocketQuery } from '@app/graphql/rockets.generated';
import Spinner from '@components/Spinner/Spinner';

import styles from './Rocket.module.css';

const Rocket = () => {
  const { rocketId } = useParams();

  const { data: rocketData, loading: rocketLoading } = useRocketQuery({
    variables: {
      id: rocketId!,
    },
  });

  if (rocketLoading) {
    return <Spinner size="3x" />;
  }

  return (
    <div className="wrapper">
      <div className={styles.row}>
        <span>Name: {rocketData?.rocket?.name}</span>
      </div>
    </div>
  );
};

export default Rocket;
