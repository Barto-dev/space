import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useRocketsQuery } from '@app/graphql/rockets.generated';
import Button from '@components/Button/Button';
import Spinner from '@components/Spinner/Spinner';

import styles from './Users.module.css';

const Rockets = () => {
  const navigate = useNavigate();
  const { data: rocketsData, loading: rocketsLoading } = useRocketsQuery({
    variables: {
      limit: 20,
    },
  });

  const onDetailsHandler = (id: string) => {
    navigate(`/rocket/${id}`);
  };

  if (rocketsLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <Spinner size="3x" />
      </div>
    );
  }

  if (!rocketsData?.rockets) {
    return (
      <div className="wrapper">
        <div className={styles.row}>
          No data
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className={styles.row}>
        <div className={styles.table}>
          {rocketsData.rockets.map((item) => (
            <div key={item!.id!} className={styles.rocket}>
              <span>{item!.name}</span>
              <span>{item!.company}</span>
              <span className={styles.country}>{item!.country}</span>
              <a href={item!.wikipedia!}>wiki</a>
              <div className={styles.buttonWrapper}>
                <Button
                  onClick={() => onDetailsHandler(item!.id!)}
                  className={styles.detailsButton}
                >
                  Details
                </Button>
                <Button variant="alert">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rockets;
