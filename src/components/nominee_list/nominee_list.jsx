import React, { useState, useEffect, memo } from 'react';
import styles from './nominee_list.module.css';

const NomineeList = memo(
  ({ nominees, onDeleteClick }) => {
    const [numNominees, setNumNominees] = useState(0);
  
    const getNumNominees = () => {
      if (nominees) {
        setNumNominees(nominees.length);
      }
    }
  
    useEffect(() => {
      getNumNominees();
    }, [nominees]);
  
    return (
      <>
        <table className={styles.nominees}>
          <colgroup>
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>Nomination</th>
            </tr>
          </thead>
          <tbody>
            {/* Nomination list */}
            {
              nominees &&
              nominees.map(nominee => <nomineeItem key={nominee.imdbID} 
                                                  nominee={nominee}
                                                  onDeleteClick={onDeleteClick}
              />)
            }
          </tbody>
        </table>
        {/* Nomination comment */}
        {
          numNominees === 0 &&
          <span className={[styles.comment, styles.hr].join(' ')}>Please choose nominees up to 5!</span>
        }
        {
          numNominees >= 5 &&
          <span className={styles.comment}>Thank you for choosing all 5 nominees!</span>
        }
      </>
    )
  }
);

export default NomineeList;